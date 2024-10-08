export async function deleteReminder(id: string, accessToken: string):Promise<boolean> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APIKEY}/reminders/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    })

    if(!response.ok){
        return false;
    }

    const message = await response.json();  
    return message;  
}