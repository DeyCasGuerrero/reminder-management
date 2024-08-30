"use client";

import { Avatar } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineBell, AiOutlineCalendar, AiOutlineStar, AiOutlineEdit  } from "react-icons/ai";

function Profile() {

    const [name, setName] = useState('Alex Johnson')
    const [isEditing, setIsEditing] = useState(false)
    const [theme, setTheme] = useState('light')
    return (

        <div className="w-11/12 h-full flex overflow-y-auto flex-col items-center gap-10 mx-auto bg-white/90 backdrop-blur-sm shadow-xl py-5 px-4 rounded-2xl">
            <div>
                <div className="text-2xl md:text-3xl font-bold text-center text-gray-800">
                    ✨ Your Awesome Profile ✨
                </div>
            </div>
            <div>
                <div className="flex  items-center space-y-2  flex-col gap-4">
                    <div className="flex flex-col gap-2 items-center">

                        <Avatar src="/placeholder.svg?height=128&width=128" name={name} size={'xl'} />
                        <h1 className="truncate text-xl font-semibold text-gray-800 text-center">Deyvis Castillo</h1>
                        <div className="flex items-center gap-2 text-text-45 ">
                            <span className="min-w-28 truncate">
                                Ingeniero de sistemas
                            </span>
                            /
                            <span className="min-w-28 truncate">
                                Siempre presente
                            </span>
                        </div>

                        <p className="text-text-25 font-semibold">Locate: Piura, Perú </p>

                        
                    </div>

                    <button className="bg-gradient-to-r flex items-center gap-1 from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105">
                        <AiOutlineEdit size={30}/>
                        
                        editar perfil
                    </button>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-pink-200 to-pink-100 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                        <div className="flex items-center justify-between">
                            {/* <Bell className="h-8 w-8 text-pink-500" /> */}
                            <AiOutlineBell size={50} className="text-pink-500"></AiOutlineBell>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-gray-800">42</p>
                                <p className="text-sm text-gray-600">Active Reminders</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-200 to-purple-100 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                        <div className="flex items-center justify-between">
                            <AiOutlineCalendar size={50} className="text-purple-500" />
                            <div className="text-right">
                                <p className="text-2xl font-bold text-gray-800">128</p>
                                <p className="text-sm text-gray-600">Completed Tasks</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-200 to-yellow-100 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                        <div className="flex items-center justify-between">
                            <AiOutlineStar size={50} className=" text-yellow-500" />
                            <div className="text-right">
                                <p className="text-2xl font-bold text-gray-800">95%</p>
                                <p className="text-sm text-gray-600">On-Time Rate</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex items-center justify-between text-slate-900 font-semibold">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="theme-mode" >Dark Mode</label>
                        <switch
                            id="theme-mode"
                        // checked={theme === 'dark'}
                        // onCheckedChange={toggleTheme}
                        />
                    </div>
                    <button className="bg-gray-50 p-2 rounded-lg">
                        Sync with Calendar
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Profile;