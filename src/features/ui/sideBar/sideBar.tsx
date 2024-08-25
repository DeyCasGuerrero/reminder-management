import Link from "next/link";
import { routes } from "@/lib/routes";
import { AiFillHome, AiFillBook, AiFillSignal, AiFillAlert, AiFillSetting, AiOutlineUser } from "react-icons/ai";
import { IconType } from "react-icons";
export default function SideBard() {

    const icons: { [key: string]: IconType } = {
        AiFillHome: AiFillHome,
        AiFillSignal: AiFillSignal,
        AiFillAlert: AiFillAlert,
        AiFillBook: AiFillBook,
        AiOutlineUser: AiOutlineUser,
        AiFillSetting: AiFillSetting,
    };

      
    return (

        <>
            <div className="hidden flex-col w-1/5 px-4 text-white py-3 gap-2  h-full bg-black bg-opacity-20 backdrop-blur-lg">
                <div className="flex items-center flex-col flex-grow h-full gap-2">
                    <div>
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-white">CodingLab</h2>
                        </div>
                    </div>

                    <nav className="flex-1 flex flex-col gap-2 p-4">
                        {routes.mainMenu.map((route, index) => (
                            <Link key={index} href={route.path}>
                                <button className="w-full justify-start text-white hover:bg-white hover:bg-opacity-20">
                                    <AiFillHome size={30} />
                                </button>
                            </Link>
                        ))}

                        {routes.general.map((route, index) => (
                            <Link key={index} href={route.path}>
                                <button className="w-full justify-start text-white hover:bg-white hover:bg-opacity-20">
                                    <AiFillSignal size={30} />
                                </button>
                            </Link>
                        ))}

                        {routes.general.map((route, index) => (
                            <Link key={index} href={route.path}>
                                <button className="w-full justify-start text-white hover:bg-white hover:bg-opacity-20">
                                    <AiFillAlert size={30} />
                                </button>
                            </Link>
                        ))}
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


            <div className="flex justify-around sm:hidden items-center bg-white bg-opacity-20 backdrop-blur-lg p-2">
                <nav className="w-full flex gap-2 p-4 justify-around">
                    {routes.mainMenu.map((route, index) => {
                        const IconComponent = icons[route.icon];
                        return (
                            <Link key={index} href={route.path}>
                                <button className="flex items-center text-white hover:bg-white hover:bg-opacity-20">
                                    {IconComponent && <IconComponent size={30} />}
                                </button>
                            </Link>
                        );
                    })}

                    {routes.general.map((route, index) => {
                        const IconComponent = icons[route.icon];
                        return (
                            <Link key={index} href={route.path}>
                                <button className="flex items-center text-white hover:bg-white hover:bg-opacity-20">
                                    {IconComponent && <IconComponent size={30} />}
                                </button>
                            </Link>
                        );
                    })}

                    {routes.account.map((route, index) => {
                        const IconComponent = icons[route.icon];
                        return (
                            <Link key={index} href={route.path}>
                                <button className="flex items-center text-white hover:bg-white hover:bg-opacity-20">
                                    {IconComponent && <IconComponent size={30} />}
                                </button>
                            </Link>
                        );
                    })}
                </nav>
            </div>


        </>

    )
}