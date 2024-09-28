
import { ReminderInterface } from "@/business/interfaces/Reminder";
import { create } from "zustand";

interface ReminderStore {
    setCount(count:number):void;
}

// export const useBlogSture = create<ReminderInterface>((set)=>({

// }));