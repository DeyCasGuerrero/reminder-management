"use client";
import { useSession } from "next-auth/react";
import { useChat } from "ai/react";
import { useModals } from "@/store/modals.store";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import { ReminderInterface } from "@/business/interfaces/Reminder";

export function SuggestionAi() {
    const { isOpenSuggestion, setIsOpenSuggestion } = useModals();
    const { handleInputChange, handleSubmit, messages, input, setMessages } = useChat({
        api: 'api/chat',
    });

    const [reminder, setReminder] = useState<ReminderInterface | null>(null);

    const { data: session } = useSession();
    const { reminderId } = useModals();

    useEffect(() => {
        if (reminderId) {
            const fetchReminder = async () => {
                const response = await fetch(`${process.env.NEXT_PUBLIC_APIKEY}/reminders/${reminderId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${session?.accessToken}`,
                    },
                });
                const data = await response.json();
                setReminder(data);
            };
            fetchReminder();
        }
    }, [reminderId, session]);

    useEffect(() => {
        if (reminder) {
            const initialMessage = {
                id: reminder?._id,
                role: "user" as "user",
                content: reminder?.content as string,
            };
            setMessages([initialMessage]);


            const sendMessage = async () => {
                await fetch('/api/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ messages: [initialMessage] }),
                });
            };

            sendMessage(); // Enviar el mensaje cuando el contenido esté listo
        }
    }, [reminder, setMessages]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 p-4 backdrop-blur-sm flex overflow-y-auto items-center justify-center">
            <div className="bg-slate-950 md:w-1/2 rounded-2xl p-6 w-80 shadow-xl overflow-y-auto">
                <div className="flex justify-end space-x-4 w-full mb-3">
                    <button className="bg-red-500 rounded-full p-2" onClick={() => setIsOpenSuggestion(false)}>
                        <AiOutlineClose />
                    </button>
                </div>
                <div className="space-y-5 p-2 max-h-96 font-bold overflow-y-auto bg-slate-950 border-2 border-slate-600">
                    {messages.length ? (
                        <>
                            {messages.map((message, index) => (
                                <div key={index} className="text-black">
                                    <div>
                                        {message.role === "user" ? (
                                            <div className="bg-slate-200 p-2 overflow-x-auto">
                                                <div className="flex justify-start items-center gap-2">
                                                    <span className="font-bold text-green-500">You:</span>
                                                </div>
                                                <div>{message.content}</div>
                                            </div>
                                        ) : (
                                            <div className="bg-slate-200 p-2">
                                                <span className="text-red-500 tracking-wider">Assistant:</span>
                                                {/\d\.\s|\*\s/.test(message.content) ? ( 
                                                    <ul className="list-disc list-inside space-y-2 mt-2">
                                                        {message.content.split(/\d\.\s|\*\s/).map((item, idx) => (
                                                            item && <li key={idx}>{item.trim()}</li> 
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p>{message.content}</p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <div className="text-center">
                            <p className="text-white text-xl font-bold">Start chatting</p>
                        </div>
                    )}
                </div>

                <form className="min-md:max-w-xl w-full bg-black p-4" onSubmit={handleSubmit}>
                    <div className="flex justify-between my-4">
                        <label className="justify-between my-2 text-white font-semibold block">Say something</label>
                        <button type="submit" className="bg-green-500 px-4 rounded-xl font-semibold hover:bg-green-800">
                            Send
                        </button>
                    </div>
                    <textarea
                        placeholder="Type your message here"
                        rows={4}
                        onChange={handleInputChange}
                        className="text-black bg-slate-300 w-full font-semibold p-2 rounded-md focus:outline-none"
                        name="prompt"
                        value={input}
                        id="input"
                    ></textarea>
                </form>
            </div>
        </div>
    );
}
