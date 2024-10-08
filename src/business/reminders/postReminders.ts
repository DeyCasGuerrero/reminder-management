import { ReminderInterface } from "../interfaces/Reminder";

export async function postReminder(reminder:Partial<ReminderInterface>, token:string):Promise<boolean>{
    
    const res = await fetch( `${process.env.NEXT_PUBLIC_APIKEY}/reminders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(reminder),
    })

    if(!res.ok){
        console.log('NO SE PUDO WASAAAA')
        return false;
    }
    return true;
}