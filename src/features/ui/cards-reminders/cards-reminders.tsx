"use client";
import { ReminderInterface } from "@/business/interfaces/Reminder";
import { Button, Input, Tag, Textarea } from "@chakra-ui/react";
import { CiStar, CiCalendar, CiClock1 } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { FaStar, FaEdit, FaCheck } from "react-icons/fa";
import { useReminders } from "@/store/favorite.store";
import SelectComponent from "../select-component/select-component";
import { useReminderStore } from "@/store/reminder.store";
import { patchReminders } from "@/business/reminders/patchReminders";
import { deleteReminder } from "@/business/reminders/deleteReminder";
import { toast } from "sonner";
import { useModals } from "@/store/modals.store";


const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
        "Escuela": "bg-blue-500",
        "Música": "bg-purple-500",
        "Development": "bg-pink-500",
        "University": "bg-yellow-500",
        "default": "bg-gray-500"
    };
    return colors[category] || colors.default;
};


const getGradient = (category: string) => {
    const gradients: { [key: string]: string } = {
        "Escuela": "from-blue-400 to-indigo-500",
        "Música": "from-purple-400 to-pink-500",
        "Development": "from-pink-400 to-red-500",
        "University": "from-yellow-400 to-orange-500",
        "default": "from-gray-400 to-gray-500"
    };

    return gradients[category] || gradients.default;
};

export default function CardsReminders({ reminder }: { reminder: ReminderInterface }) {
    const { data: session, status } = useSession();
    const { selectPriority, tags, addTags, removeTags, setPriority } = useReminderStore(); // Obtener estado y funciones del store
    const [isAccept, setIsAccept] = useState<boolean>(false);
    const {  setIsOpen,isDeleteModalOpen } = useModals();
    const [reminderData, setReminderData] = useState<Partial<ReminderInterface>>({
        title: '',
        content: '',
        priority: '', // Inicialización correcta
        tags: [],
        favorite: false,
        completed: false,
    });
    const {
        toggleFavorite,
        favorites,
        isEdited,
        setIsEdited,
        toogleTags,
    } = useReminders();

    const firstTag = reminder.tags && reminder.tags.length > 0 ? reminder.tags[0] : "default";

    function formatDate(dateString: string): string {
        const date = new Date(dateString);
        return date.toLocaleString(); // Devuelve la fecha en formato legible según la configuración regional
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setReminderData((prevReminders) => ({
            ...prevReminders,
            [name]: value,
        }));
    }

    const toastest = (promise:boolean) => {
        if(promise){
            toast.success("El recordatorio ha sido editado",{
                position: "top-right",
                style:{
                    background:"#00ff00",
                    color:"#000000"
                    
                }
            });
        }     
        else{
            toast.error("Error al editar el recordatorio",{
                position: "top-right",
                style:{
                    background:"#ff0000",
                    color:"#000000"
                    
                }
            });
        }
    }

    // console.log("favorites", favorites)

    const clickDelete = async () => {

        setIsOpen(true);

        if (!session?.accessToken) return;

        console.log(isDeleteModalOpen);

        if(isDeleteModalOpen){

            const deletePromise = deleteReminder(reminder._id, session?.accessToken); // Aquí pasas la promesa
    
            console.log(deletePromise);
        }


    }

    const handleSave = async () => {
        const newReminderData: Partial<ReminderInterface> = {
            ...(reminderData.title ? { title: reminderData.title } : {}),
            ...(reminderData.content ? { content: reminderData.content } : {}),
            ...(selectPriority ? { priority: selectPriority } : {}),
            ...(tags.length > 0 ? { tags: tags } : {}),
            ...(reminderData.favorite !== false ? { favorite: reminderData.favorite } : {}),
            ...(reminderData.completed !== false ? { completed: reminderData.completed } : {}),
            ...(favorites[reminder._id] !== undefined ? { favorite: favorites[reminder._id] } : {}),
        }

        console.log(newReminderData);
        if (!reminder._id || !session?.accessToken) return;

        const promise = await patchReminders(reminder._id, session?.accessToken, newReminderData);
        toastest(promise);

        setPriority('');
        tags.map((tags) => removeTags(tags));
        
    }



    return (
        <div key={reminder._id} className={`transform transition duration-300  flex-none w-full  hover:shadow-xl lg:min-w-96`}>
            <div className={`h-2 ${getCategoryColor(firstTag)}`} />
            <div className={`py-4 px-4 bg-gradient-to-br text-white h-full ${getGradient(firstTag)}`}>
                <div className="flex justify-between items-center mb-4">
                    {!isEdited[reminder._id ? reminder._id : ''] ? (
                        <h2 className="text-2xl font-bold">{reminder.title}</h2>

                    ) : (
                        <div className="w-full">
                            <label htmlFor="">
                                Titulo
                            </label>
                            <Input name="title" value={reminderData.title} onChange={handleChange}></Input>
                        </div>
                    )}

                    {reminder.favorite === true || favorites[reminder._id ?? ''] === true ? (

                        <button
                            className="text-yellow-300 hover:text-yellow-500"
                            onClick={() => toggleFavorite(reminder._id ?? '')}
                        >
                            <FaStar className={`h-6 w-6`} />
                        </button>

                    ) : (

                        <button
                            className="text-yellow-300 hover:text-yellow-500"
                            onClick={() => toggleFavorite(reminder._id ?? '')}
                        >
                            <CiStar className={`h-6 w-6`} />
                        </button>
                    )}

                </div>

                {!isEdited[reminder._id ? reminder._id : ''] ? (
                    <div className="mt-2 truncate " dangerouslySetInnerHTML={{ __html: reminder.content }} />
                ) : (
                    <div>
                        <label htmlFor="">
                            Contenido
                        </label>
                        <Textarea name="content" value={reminderData.content} onChange={handleChange}></Textarea>
                    </div>
                )}

                <div className="mt-4 flex flex-col w-full gap-4">
                    {!isEdited[reminder._id ? reminder._id : ''] ? (
                        <div className={`text-lg mt-2 uppercase py-1 px-2 rounded-lg text-center w-20 truncate ${reminder.priority === 'media'
                            ? 'bg-yellow-400 text-slate-50'
                            : reminder.priority === 'alta'
                                ? 'bg-red-500 text-slate-50'
                                : reminder.priority === 'baja' ?
                                    'bg-blue-500 text-slate-50' : ''
                            }`}>
                            {reminder.priority}
                        </div>

                    ) : (
                        <SelectComponent
                            name="priority"
                            ismultiple={false}
                            isvalue={reminderData.priority || ""}
                            options={["Baja", "Media", "Alta"]}
                            style={{
                                color: "ButtonText"
                            }}
                            id={`${reminder._id}`}
                            onChange={handleChange}
                        />
                    )}
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
                        <>
                            {!isEdited[reminder._id ? reminder._id : ''] ? (
                                <span onClick={() => toogleTags(reminder._id ? reminder._id : '')} className="text-lg bg-purple-700 py-1 px-2 font-bold rounded-lg">
                                    No tiene tags
                                </span>
                            ) : (
                                <SelectComponent name="tags" id={`${reminder._id}`} onChange={handleChange} ismultiple={true} options={["Development", "University", "Music"]} />
                            )}
                        </>

                    ) : (
                        <>
                            {isEdited[reminder._id ? reminder._id : ''] ? (
                                <>
                                    <SelectComponent name="tags" id={`${reminder._id}`} onChange={handleChange} ismultiple={true} options={["Development", "University", "Music"]} />
                                    {/* {reminder.tags?.map((tag, index) => (
                                        <Tag key={index} className="text-white">
                                            {tag}
                                        </Tag>
                                    ))} */}
                                </>
                            ) : (
                                <div className="flex flex-wrap gap-2">
                                    {reminder.tags?.map((tag, index) => (
                                        <Tag key={index} className="text-white">
                                            {tag}
                                        </Tag>
                                    ))}
                                </div>
                            )}


                        </>
                    )}

                    <div className="flex justify-between items-center mt-6">
                        {isEdited[reminder._id ? reminder._id : ''] ? (
                            <div className="flex items-center gap-4 w-full">
                                <Button
                                    onClick={() => setIsEdited(reminder._id ? reminder._id : '')} // Pasamos el ID específico
                                    colorScheme="red"
                                >
                                    Cancelar
                                </Button>

                                <Button colorScheme="green" onClick={handleSave}>
                                    Aceptar
                                </Button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setIsEdited(reminder._id ? reminder._id : '')} // Pasamos el ID específico
                                >
                                    <FaEdit className={`h-5 w-5 mr-2`} />
                                </button>

                                <button
                                    className="bg-white p-2 rounded-full flex items-center justify-center"
                                    onClick={() => setIsEdited(reminder._id ? reminder._id : '')} // Pasamos el ID específico
                                >
                                    <FaCheck color="green" className={`h-5 w-5`} />
                                </button>

                            </div>
                        )}

                        <button
                            onClick={clickDelete}
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