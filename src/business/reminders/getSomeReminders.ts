import { getToken } from 'next-auth/jwt';
import { ReminderInterface } from '../interfaces/Reminder';
import { NextRequest } from 'next/server';

export async function getSomeReminders(token:string, id:string): Promise<ReminderInterface[]> {

    if (!token || !id) {
        console.log("Token o ID no disponibles");
        return [];
    }

    try {
        const response = await fetch(`http://localhost:3001/reminders/user/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            console.log("ERROR en la petición");
            return[];
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener los recordatorios:", error);
        return [];
    }
}
