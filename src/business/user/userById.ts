import { UserInterface } from "../interfaces/userInterface";

export async function getUserById( userId: string, token:string){
    const res = await fetch(`${process.env.NEXT_PUBLIC_APIKEY}/user/${userId}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
    if(!res.ok){
        return;
    }
    
    const data:UserInterface = await res.json();
    return data;
}
