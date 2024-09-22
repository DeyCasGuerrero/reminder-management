import { routes } from "@/lib/routes";
import Link from "next/link";

function SideBar() {

    return (
        <div className="hidden sm:flex flex-col flex-none min-w-48 w-[15%]  text-white py-3 gap-2  h-full bg-black bg-opacity-20 backdrop-blur-lg">
            <div className="flex items-center flex-col flex-grow h-full gap-2">

                <div className="p-4  w-full text-left">
                    <h2 className="text-2xl font-bold text-white">CodingLab</h2>
                </div>

                <nav className="flex-1 flex flex-col gap-2 p-4 w-full">
                    <div className="w-full h-full flex flex-col gap-2 ">
                        <h3 className="text-white font-semibold">{routes.mainMenu.sectionName}</h3>
                        {routes.mainMenu.routes.map((route, index) => {
                            const IconReact = route.icon;

                            return (
                                <Link key={index} href={route.path}>
                                    <div className="w-full flex items-center group justify-start gap-2  text-white rounded-lg px-1 py-2 hover:bg-white hover:bg-opacity-20">
                                        {IconReact && <IconReact size={20} className="group-hover:text-black" />}
                                        <span className="group-hover:text-black">
                                            {route.name}
                                        </span>
                                    </div>
                                </Link>
                            )
                        })}

                        <h3 className="text-white font-semibold">{routes.general.sectionName}</h3>

                        {routes.general.routes.map((route, index) => {
                            const IconReact = route.icon;

                            return (
                                <Link key={index} href={route.path}>
                                    <div className="w-full flex group items-center rounded-lg gap-2 justify-start px-1 py-2 text-white hover:bg-white hover:bg-opacity-20">
                                        {IconReact && <IconReact size={20} className="group-hover:text-black" />}
                                        <span className="group-hover:text-black">
                                            {route.name}
                                        </span>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>




                    <div className="w-full">
                        <h3 className="text-white font-semibold">{routes.account.sectionName}</h3>
                        {routes.account.routes.map((route, index) => {
                            const IconReact = route.icon;

                            return (

                                <Link key={index} href={route.path}>
                                    <div className="w-full flex group items-center gap-2 rounded-lg px-1 py-2 justify-start text-white hover:bg-white hover:bg-opacity-20">
                                        {IconReact && <IconReact size={20} className="group-hover:text-black" />}
                                        <span className="group-hover:text-black">
                                            {route.name}
                                        </span>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </nav>
            </div>
        </div>

    )

}

export default SideBar;