import { Avatar } from "@chakra-ui/react";
import { IoLocationOutline } from "react-icons/io5";
import { CiLink, CiStar } from "react-icons/ci";
import { PiBellSimpleRinging } from "react-icons/pi";

import Link from "next/link";
function ProfileStructure() {
    return (
        <div className="flex flex-col gap-4 py-3 bg-slate-50 text-text-85 w-full shadow-lg  items-center rounded-lg">
            <div className="flex flex-col">
                <div className=" border-4 border-purple-500 rounded-full w-48 h-48 shadow-lg mb-4">
                    <Avatar src="https://i.pinimg.com/564x/ce/c3/b4/cec3b4ca36f3087b6afa561c1d3d63b8.jpg" name="de" width={'full'} height={'full'} ></Avatar>
                </div>
                <h1 className="text-3xl font-bold text-text-85 text-center">Deyvis Cas</h1>
            </div>
            <div className="flex flex-col items-center w-full p-4">
                <p className="text-xl text-purple-600 mb-4 text-center">Maestro de los Recordatorios</p>

                <div className="">
                    <p className="mb-4">
                        ¡Hola! Soy un entusiasta de la organización y me encanta mantener todo en orden con mis recordatorios coloridos.
                    </p>
                </div>

                <div className="flex flex-col gap-4 items-center justify-center w-full">
                    <div className="flex justify-center gap-4 w-full">
                        <div className="flex items-center w-96 justify-center">
                            <IoLocationOutline size={25}/>
                            <span>Piura, Peru</span>
                        </div>
                        <div className="flex gap-2 w-96 items-center justify-center">
                            <CiLink size={25}/>
                            <Link href="">
                                miwebgenial.com
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center gap-4 w-full ">
                        <div className="flex gap-2 w-96 items-center justify-center">
                            <PiBellSimpleRinging color="purple" size={25} />
                            <p>
                                <span className="font-bold">4 </span>
                                recordatorios
                            </p>
                        </div>
                        <div className="flex gap-2 w-96 items-center justify-center">
                            <CiStar color="yellow" size={25}/>
                            <p>
                                <span className="font-bold">2 </span>
                                destacados
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileStructure;