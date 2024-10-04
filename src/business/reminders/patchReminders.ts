import { ReminderInterface } from "../interfaces/Reminder";

export async function patchReminders(idReminders: string, token:String ,reminders:Partial<ReminderInterface>){


    console.log("patchReminders", {idReminders, token, reminders});
    const response = await fetch(`${process.env.NEXT_PUBLIC_APIKEY}/reminders/${idReminders}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(reminders),
    })

    if(!response.ok){
        console.log("error update")
    }

    const data = response.json();

    return data;
}