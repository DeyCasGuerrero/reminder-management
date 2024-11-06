"use client";
import { postReminder } from "@/business/reminders/postReminders";
import { Input, Textarea } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { ChangeEvent, useState } from "react";
import { AiFillSave, AiOutlineEdit } from "react-icons/ai";
import { toast } from "sonner";




export default function CardReminder() {


    const { data: session } = useSession();

    const [value, setValue] = useState({
        title: '',
        content: '',
    })

    const handleOnChanged = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValue(prevValue => ({
            ...prevValue,
            [name]: value,
        }))
    }


    const evaluateData = (): boolean => {
        if (!value.content || !value.title) {
            toast.error("Por favor rellenar los campos", {
                style: {
                    background: "#ff0000",
                    color: "#fff"
                },
                position: "top-right"
            })
            return true;
        }
        return false;
    }

    const evaluateOk = (promesa: boolean) => {
        if (promesa) {
            toast.success("El reminders fue creado", {
                style: {
                    background: "#00ff00",
                    color: "#fff"
                },
                position: "bottom-right",
                duration: 5000
            })
        } else {
            toast.error("Hubo un error al crear el reminder", {
                style: {
                    background: "#ff0000",
                    color: "#fff"
                },
                position: "top-right"
            })
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (evaluateData()) return;

        try {
            if (session?.accessToken) {
                const promesa = await postReminder(value, session?.accessToken);
                evaluateOk(promesa);
            }
        } catch (error) {
            return "There was an error"
        }

    }


    return (
        <div className="max-w-2xl mx-auto h-full w-full rounded-lg overflow-hidden p-4 sm:max-w-3xl lg:max-w-4xl">
            <header className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-4 md:p-6 text-white">
                <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-4">
                    <AiOutlineEdit />
                    Awesome Reminder Editor
                </h1>
                <p className="mt-2 text-yellow-100 text-sm md:text-base">
                    Jot down your thoughts and never forget a thing!
                </p>
            </header>
            <form onSubmit={handleSubmit} className="w-full h-auto">
                <div className="flex flex-col gap-4 px-3 h-full bg-white py-4">
                    <Input
                        value={value.title}
                        onChange={handleOnChanged}
                        name="title"
                        placeholder="Coloca el título"
                        size="lg"
                        color="GrayText"
                        className="w-full"
                    />
                    <Textarea
                        color="GrayText"
                        name="content"
                        value={value.content}
                        onChange={handleOnChanged}
                        className="w-full min-h-[200px] h-[30vh] lg:h-[400px]"
                        placeholder="Write your content here"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full flex items-center justify-center mt-6 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
                >
                    <AiFillSave className="mr-2 h-4 w-4" /> Save Reminder
                </button>
            </form>
        </div>
    )

}