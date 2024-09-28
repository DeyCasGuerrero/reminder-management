"use client";
import { ReminderInterface } from "@/business/interfaces/Reminder";
import { Badge, Tag } from "@chakra-ui/react";
import { CiStar, CiCalendar, CiClock1 } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { format } from 'date-fns';
import { useEffect, useState } from "react";
import { patchReminders } from "@/business/reminders/patchReminders";
import { useSession } from "next-auth/react";
export default function CardsReminders({ reminder }: { reminder: ReminderInterface }) {
    const {data:session, status}=useSession();

    const [reminderState, setReminderState] = useState(reminder); // Mantenemos todo el reminder en el estado

    const changeFavorite = () => {
        setReminderState((prevReminder) => ({
            ...prevReminder,
            favorite: !prevReminder.favorite, // Solo actualiza el campo 'favorite'
        }));
    };

    useEffect(() => {
        const sendUpdate = async () => {
            if (!reminderState._id) return;
            if(!session?.accessToken) return;

            const remindersUpdate = await patchReminders(reminderState._id, session.accessToken ,reminderState); // Enviar todo el reminder
            console.log("Reminder actualizado:", remindersUpdate);
        };

        sendUpdate();
    }, [reminderState.favorite]);

    const getCategoryColor = (category: string) => {
        const colors: { [key: string]: string } = {
            "Escuela": "bg-blue-500",
            "Música": "bg-purple-500",
            "Personal": "bg-pink-500",
            "default": "bg-gray-500"
        }
        return colors[category] || colors.default
    }

    const getGradient = (index: number) => {
        const gradients = [
            "from-pink-400 to-purple-500",
            "from-blue-400 to-indigo-500",
            "from-green-400 to-teal-500",
            "from-yellow-400 to-orange-500"
        ]
        return gradients[index % gradients.length]
    }

    function formatDate(dateString: string): string {
        const date = new Date(dateString);
        return date.toLocaleString(); // Devuelve la fecha en formato legible según la configuración regional
    }


    return (
        <div key={reminder._id} className={`transform transition duration-300 flex-none h-96  hover:shadow-xl overflow-hidden `}>
            <div className={`h-2 ${getCategoryColor("Escuela")}`} />
            <div className={`py-4 px-4 bg-gradient-to-br text-white h-full`}>
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold">{reminder.title}</h2>
                    <button
                        className="text-yellow-300 hover:text-yellow-500"
                        onClick={changeFavorite}
                    >
                        <CiStar className={`h-6 w-6`} />
                    </button>
                </div>
                <div className="mt-2 truncate " dangerouslySetInnerHTML={{ __html: reminder.content }} />


                <div className={`text-lg mt-2 uppercase py-1 px-2 rounded-lg text-center w-20 truncate ${reminder.priority === 'media'
                    ? 'bg-yellow-400 text-slate-50'
                    : reminder.priority === 'alta'
                        ? 'bg-red-500 text-slate-50'
                        : reminder.priority === 'baja' ?
                            'bg-blue-500 text-slate-50' : ''
                    }`}>
                    {reminder.priority}
                </div>



                <div className="mt-2">
                    <div className="flex gap-2 items-center mb-2">
                        <CiCalendar size={25} />
                        <span>{formatDate(reminder.updatedAt ? reminder.updatedAt : '')}</span>
                    </div>
                    <div className="flex gap-2 items-center mb-4">
                        <CiClock1 size={25} />
                        <span className="">{formatDate(reminder.createdAt ? reminder.createdAt : '')}</span>
                    </div>

                    {reminder.tags && reminder.tags.length === 0 ? (
                        <button className="text-lg bg-purple-700 py-1 px-2 font-bold rounded-lg">
                            Añadir etiqueta
                        </button>
                    ) : (
                        <>
                            {reminder.tags?.map((tag, index) => (
                                <Tag key={index} className="text-white">
                                    {tag}
                                </Tag>
                            ))}
                        </>
                    )}

                    <div className="flex justify-between items-center mt-6">
                        <button

                            // onClick={() => toggleComplete(reminder.id)}
                            className="bg-white/20 hover:bg-white/30 text-white"
                        >
                            {/* <CheckCircleIcon className={`mr-2 h-4 w-4 ${reminder.isCompleted ? 'text-green-500' : 'text-white'}`} />
                        {reminder.isCompleted ? 'Completado' : 'Marcar como completado'} */}
                        </button>
                        <button
                            // variant="ghost"
                            // size="icon"
                            className="text-white hover:text-red-500"
                        >
                            <MdDeleteOutline className="h-5 w-5" />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}