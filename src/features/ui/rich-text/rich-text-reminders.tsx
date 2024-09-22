
"use client";
import dynamic from "next/dynamic";
import { ChangeEvent, useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { Input } from "@chakra-ui/react";
import { AiFillSave } from "react-icons/ai";
import { IoArrowBackOutline } from "react-icons/io5";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import Link from "next/link";



function RichTextReminders() {

    const [value, setValue] = useState({
        title: '',
        content: '',
    })


    const handleOnChanged = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValue(prevValue => ({
            ...prevValue,
            [name]: value,
        }))
    }

    const handleQuillChange = (content: string) => {
        setValue(prevValue => ({
            ...prevValue,
            content: content,
        }));
    };


    const toolbarOptions = [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'align': [] }],
        ['bold', 'italic', 'underline'],
        ['link', 'image'],
        ['clean'] // Botón para eliminar el formato
    ];



    return (
        <>
            <div className="min-h-screen flex flex-col gap-4 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 p-4 sm:p-8">
                <Link href={"/"}>
                    <div className="bg-white w-14 h-14 flex items-center justify-center p-2 rounded-full">
                        <IoArrowBackOutline size={30} color="green" />
                    </div>
                </Link>
                <div className="max-w-4xl mx-auto h-full bg-white rounded-lg shadow-xl overflow-hidden">
                    <header className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-6 text-white">
                        <h1 className="text-3xl font-bold flex items-center gap-4">
                            <AiOutlineEdit />
                            Awesome Reminder Editor
                        </h1>
                        <p className="mt-2 text-yellow-100">Jot down your thoughts and never forget a thing!</p>
                    </header>
                    <div className="mt-4 py-2 px-4  flex flex-col ">
                        <div className="flex flex-col  flex-grow gap-2">
                            <Input
                                value={value.title}
                                onChange={handleOnChanged}
                                name="title"
                                placeholder='Colocale el titulo'
                                size='lg'
                                color='GrayText'
                                className="w-full"
                            />
                            <ReactQuill
                                className="h-96"
                                theme="snow"
                                modules={{ toolbar: toolbarOptions }}
                                value={value.content}
                                onChange={handleQuillChange}
                            // style={{ height: 'auto' }}
                            />
                        </div>

                        <button className="w-full flex items-center justify-center mt-20 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
                            <AiFillSave className="mr-2 h-4 w-4" /> Save Reminder
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default RichTextReminders;