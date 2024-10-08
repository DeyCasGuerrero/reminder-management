"use client";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { usePathname } from "next/navigation";

export default function UnderBard() {

    const currentRouter=usePathname();

    return (
        <div className={`flex justify-around sm:hidden items-center bg-white bg-opacity-20 backdrop-blur-lg p-2 ${currentRouter.startsWith("/add-reminders") ? "hidden" : "flex"}`}>
            <nav className="w-full flex gap-2 p-4 justify-around">
                {routes.mainMenu.routes.map((route, index) => {
                    const IconComponent = route.icon;
                    return (
                        <Link key={index} href={route.path}>
                            <button className="flex items-center text-white hover:bg-white hover:bg-opacity-20">
                                {IconComponent && <IconComponent size={30} />}
                            </button>
                        </Link>
                    );
                })}

                {routes.general.routes.map((route, index) => {
                    const IconComponent = route.icon;
                
                    return (
                        <Link key={index} href={route.path}>
                            <button className="flex items-center text-white hover:bg-white hover:bg-opacity-20">
                                {IconComponent && <IconComponent size={30} />}
                            </button>
                        </Link>
                    );
                })}

                {routes.account.routes.map((route, index) => {
                    const IconComponent = route.icon;
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

    )
}