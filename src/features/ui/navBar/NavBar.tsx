import Image from "next/image";

export default function NavBar(){
    return(
        <nav className="flex items-center justify-between w-full p-4 h-14 ">
            <div className="">
                <h1 className="text-white text-3xl tracking-wide">
                    ReminderWaifu
                </h1>
            </div>
            <div className="w-32 h-full flex items-center gap-2">
                <p className="text-lg">Roxy</p>
                <Image width={100} height={100} src={'/public/profile.jpg'} alt="profile" className="rounded-full h-10 w-10 bg-red-500">
                </Image>
            </div>
        </nav>
    )
}