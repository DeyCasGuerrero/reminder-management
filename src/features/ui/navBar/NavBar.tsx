import Image from "next/image";

export default function NavBar(){
    return(
        <nav className="flex items-center bg-black justify-between w-full overflow-hidden py-1 h-20 ">
            <div className="">
                <h1 className="text-white text-3xl px-3 py-2 tracking-wide">
                    Reminders
                </h1>
            </div>
            <div className="w-32 h-full flex items-center gap-2">
                <p className="text-lg">Roxy</p>
                <Image width={100} height={100} src={'/profile.jpg'} alt="profile" className="rounded-full h-14 w-14 ">
                </Image>
            </div>
        </nav>
    )
}