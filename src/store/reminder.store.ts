
import { ReminderInterface } from "@/business/interfaces/Reminder";
import { create } from "zustand";

interface ReminderStore {
    reminders: ReminderInterface[];
    addReminder: (reminder: ReminderInterface) => void;
    removeReminder: (id: string) => void;
    toggleReminderCompletion: (id: string) => void;
    fetchReminders: () => void;
}

// export const useBlogSture = create<ReminderInterface>((set)=>({

// }));