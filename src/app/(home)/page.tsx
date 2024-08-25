import Image from "next/image";
import {NavBar, SideBar} from "@/features/index";
import { EmptyReminder } from "@/features/main";
export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen">
      <NavBar/>
      <div className="flex  w-full h-full ">
        <SideBar/>
        
        <main className="flex w-full flex-col items-center justify-between p-6">
          <EmptyReminder></EmptyReminder>
        </main>
      </div>

    </div>
  );
}
