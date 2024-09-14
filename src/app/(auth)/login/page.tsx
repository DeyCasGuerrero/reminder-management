"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function LoginAuth() {


    const router = useRouter();

    const [user, setUser]=useState({
        email: '',
        password: '',
    }); 


    const handleInputChange= (e:React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value}=e.target;
        setUser(prevState =>({
            ...prevState,
            [name]: value
        }))
    }

   

    return (
        <div className="w-80 rounded-lg shadow  p-6 bg-white  ">
            <div className="flex flex-col justify-center items-center space-y-2">
                <h2 className="text-2xl font-medium text-slate-700">Login</h2>
                <p className="text-slate-500">Enter details below.</p>
            </div>
            <form className="w-full mt-4 space-y-3" >
                <div>
                    <input
                        className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                        placeholder="Correo"
                        id="email"
                        name="email"
                        onChange={handleInputChange}
                        value={user.email}
                        type="text"
                    />
                </div>
                <div>
                    <input
                        className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                        placeholder="Password"
                        id="password"
                        name="password"
                        onChange={handleInputChange}
                        value={user.password}
                        type="password"
                    />
                </div>

                <div className="mt-4 flex flex-col items-center gap-4">
                    <button
                        className="w-full justify-center py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2"
                        id="login"
                        name="login"
                        type="submit"
                    >
                        login
                    </button>
                    <p className="flex justify-center space-x-1">
                        <span className="text-slate-700"> Have an account? </span>
                        <Link className="text-blue-500 hover:underline" href="/register">Sign Up</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default LoginAuth;