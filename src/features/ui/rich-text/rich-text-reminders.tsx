"use client";

import dynamic from "next/dynamic";
import ReactQuill from 'react-quill'
import { useState } from "react";
import 'react-quill/dist/quill.snow.css';
import { AiOutlineEdit } from "react-icons/ai";
import { Input } from "@chakra-ui/react";

function RichTextReminders() {

    const [value, setValue] = useState('');

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 p-8">
                <div className="max-w-4xl mx-auto  bg-white rounded-lg shadow-xl overflow-hidden">
                    <header className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-6 text-white">
                        <h1 className="text-3xl font-bold flex items-center">
                            <AiOutlineEdit />
                            Awesome Reminder Editor
                        </h1>
                        <p className="mt-2 text-yellow-100">Jot down your thoughts and never forget a thing!</p>
                    </header>
                    <div className="mt-4 py-2 px-3 flex flex-col gap-3">
                        <Input placeholder='Colocale el titulo' size='lg' color='GrayText'/>
                        <ReactQuill className="text-black" theme="snow" value={value} onChange={setValue} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RichTextReminders;