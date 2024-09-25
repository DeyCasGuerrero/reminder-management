import { ReminderInterface } from "../interfaces/Reminder";

export async function postReminder(reminder:ReminderInterface, token:string){
    const res = await fetch('http://localhost:3001/reminders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(reminder),
    })

    if(!res.ok){
        console.log('NO SE PUDO WASAAAA')
    }
}