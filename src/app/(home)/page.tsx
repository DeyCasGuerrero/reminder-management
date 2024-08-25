import Image from "next/image";
import { Headers, SideBar } from "@/features/index";
import { EmptyReminder } from "@/features/main";
export default function Home() {
  return (
    <div className="flex flex-col flex-grow w-full h-screen  bg-gradient-to-br from-purple-400 to-indigo-600">

      <main className="flex w-full h-full  flex-col items-center justify-start ">
        <Headers />
        <div className="flex items-center w-full h-full justify-center">
          <EmptyReminder></EmptyReminder>
        </div>
      </main>
      <SideBar />
    </div>
  );
}
