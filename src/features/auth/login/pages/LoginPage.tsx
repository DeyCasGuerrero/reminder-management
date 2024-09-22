"use client"
import { signIn, SignInResponse, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
    const { data: session, status } = useSession();
    const router = useRouter();


    console.log("waaa",{session, status})
    const [user, setUser] = useState({
        login: '',
        password: '',
    });
    

    useEffect(() => {
        if(status === 'authenticated'){
            router.push('/')
        }
    }, [status]);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSumit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!user.password) {
            alert('Username or password missing');
            return;
        }

        try {
            const result: SignInResponse | undefined = await signIn('credentials', {
                redirect: false,
                login: user.login,
                password: user.password,
            });

            if (!result) {
                throw new Error('No result received');
            }

        } catch (error) {
            console.error('Error during login:', error);
        }
    }

    return (
        <div className="w-80 rounded-lg shadow  p-6 bg-white  ">
            <div className="flex flex-col justify-center items-center space-y-2">
                <h2 className="text-2xl font-medium text-slate-700">Login</h2>
                <p className="text-slate-500">Enter details below.</p>
            </div>
            <form className="w-full mt-4 space-y-3" onSubmit={handleSumit}>
                <div>
                    <input
                        className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
                        placeholder="Correo o username"
                        id="login"
                        name="login"
                        onChange={handleInputChange}
                        value={user.login}
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