import Link from "next/link";
import { routes } from "@/lib/routes";
import { AiFillHome, AiFillBook,AiFillSignal, AiFillAlert, AiFillSetting ,AiOutlineUser  } from "react-icons/ai";
export default function SideBard() {
    return (
        <div className="flex flex-col w-1/4 bg-gray-950 px-4 text-white py-3 gap-2  h-full ">
            <div className="flex items-center flex-col flex-grow h-full gap-2">
                <div>
                    <div className="logo">
                        <h2>CodingLab</h2>
                    </div>
                </div>

                <nav className="flex flex-col items  gap-3 w-full px-2">
                    <hr className="border w-full mx-auto" />
                    
                    <div className="flex flex-col items-center py-3 gap-4">
                        <AiFillHome size={20}/>
                        <AiFillBook size={20} />
                        <AiFillSignal size={20}/>
                    </div>

                    <hr className="border w-full mx-auto" />
                    
                    <div className="flex flex-col items-center py-3 gap-4 ">
                       <AiFillAlert  size={20}/>
                    </div>

                    <hr className="border w-full mx-auto" />

                    <div className="flex flex-col items-center py-3 gap-4">
                       <AiOutlineUser size={20}/>
                       <AiFillSetting size={20}/>
                    </div>

                </nav>
            </div>

            <div>
                <div className=" flex items-center  justify-center">
                    <div className="w-12 h-12 rounded-full border border-white">
                        <img src="/profile.jpg" alt="profile" className="w-full h-full rounded-full" />
                    </div>
                </div>
            </div>

        </div>
    )
}