import Image from "next/image";
import {NavBar, SideBar} from "@/features/index";
export default function Home() {
  return (
    <div className="flex flex-col w-full px-4 py-3 h-screen">
      <NavBar/>
      <div className="flex  w-full h-full ">
        <div className="h-full">
        <SideBar/>
        </div>
        <main className="flex  w-full min-h-screen flex-col items-center justify-between p-24">
          <h1>Hello to my Reminder Managementdsada</h1>
        </main>
      </div>

    </div>
  );
}
