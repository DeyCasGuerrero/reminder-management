"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { countries } from "../utils/countrys";
import Link from "next/link";
import { AuthInterface } from "@/business/interfaces/AuthInterface";
import { fetchResgister } from "@/business/registerFetch";

export default function RegitserPage() {

    const [user, setUser] = useState<AuthInterface>({
        username: '',
        email: '',
        password: '',
        country: '',
        gender: '',

    })

    const [repeatPassword, setRepeatPassword] = useState('');
    const [countrySelected, setCountrySelected] = useState('');
    const router = useRouter();

    const handleCountrySearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCountrySelected(e.target.value);
    };

    const filteredCountries = countries.filter(c => c.toLowerCase().includes(countrySelected.toLowerCase()));

    const onChangeData = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setUser(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userNew = {
            ...user,
            country: countrySelected,
            username: "juanxd"
        }

        if (!countries.includes(userNew.country)) {
            alert('El país seleccionado no está disponible o le faltan letras');
            return;
        }

        if (!(userNew.password === repeatPassword)) {
            alert('contraseñas no coinciden')
            return;
        }



        const result = await fetchResgister(userNew);
        if(result.isRegister){
            router.push('/login');
        }
        console.log(userNew);
    }

    return (
        <div className=" shadow-md h-3/4 lg:h-2/3 p-4 w-full bg-slate-50  rounded-xl">
            <form className=" flex flex-col h-full  justify-between" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">

                    <div className="text-black">
                        <label className="text-base font-medium text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input
                                required
                                placeholder="Ejemplo@gmail.com"
                                type="email"
                                className="text-gray-900 flex h-10 w-full rounded-md border border-gray-300 outline-none bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 "
                                name="email"
                                value={user.email}
                                onChange={onChangeData}
                            />
                        </div>
                    </div>
                    <div className="">
                        <label className="text-base font-medium text-gray-900">Password</label>
                        <div className="mt-2">
                            <input
                                required
                                placeholder="contraseña mínimo de 8 caracteres"
                                type="password"
                                className="text-black flex h-10 w-full rounded-md border outline-none  border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                name="password"
                                value={user.password}
                                onChange={onChangeData}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="text-base font-medium text-gray-900">Repeat Password</label>
                        <div className="mt-2">
                            <input
                                placeholder="Repetir Password"
                                type="password"
                                required
                                className="text-gray-900 flex outline-none  h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                value={repeatPassword}
                                onChange={(e) => setRepeatPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-between gap-4 w-full ">
                        <div className="flex flex-col w-full gap-1">
                            <label className="text-base font-medium text-gray-900" htmlFor="">
                                País
                            </label>
                            <input type="search"
                                placeholder="Escribe tu país"
                                value={countrySelected}
                                required
                                onChange={handleCountrySearchChange}
                                className="border flex-none w-60 outline-none px-2 py-1 bg-transparent  rounded-md text-black"
                            />

                            <div className="text-black ">
                                <select
                                    onChange={(e) => {
                                        const selectedCountry = e.target.value;
                                        setCountrySelected(selectedCountry);
                                    }}
                                    name="country"
                                    
                                    id="country" className="border outline-none bg-transparent rounded w-60 px-1 py-2">
                                    {filteredCountries.length > 0 ? (
                                        filteredCountries.map((country, index) => (
                                            <option key={index} value={country} >
                                                {country}
                                            </option>
                                        ))
                                    ) : (
                                        <option value="">No se encontraron países</option>
                                    )}
                                </select>
                            </div>

                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-base font-medium text-gray-900" htmlFor="">
                                Género
                            </label>

                            <select required name="gender" id="gender" value={user.gender} onChange={onChangeData} className="border bg-transparent outline-none  text-black rounded w-60 px-1 py-2">
                                <option value="">Género</option>
                                <option value="hombre">Hombre</option>
                                <option value="mujer">Mujer</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>

                    </div>

                    <Link href={"/login"} className="text-black underline text-sm w-full text-right">
                        Go to Login
                    </Link>

                </div>
                <div>
                    <button
                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                        type="submit"
                    >
                        Create Account
                    </button>
                </div>
            </form>
        </div>
    )
}