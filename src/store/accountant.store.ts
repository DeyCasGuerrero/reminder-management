import { ReminderInterface } from "@/business/interfaces/Reminder";
import { create } from "zustand";

interface accountantStore {
    reminderCount: number; // contador de recordatorios
    setReminders: (reminders: ReminderInterface[]) => void; // función para establecer la lista de recordatorios
}

export const useAccountantStore = create<accountantStore>((set) => ({
    reminderCount: 0, // inicializar el contador en 0
    setReminders: (reminders: ReminderInterface[]) => set({ 
        reminderCount: reminders.length // actualizar el contador según el tamaño del array
    }),
}));
