import Image from "next/image";
import {NavBar} from "@/features/index";
export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <NavBar/>
      <div>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1>Hello to my Reminder Management</h1>
        </main>
      </div>

    </div>
  );
}
