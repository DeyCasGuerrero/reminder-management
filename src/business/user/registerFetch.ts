import { AuthInterface } from "../interfaces/AuthInterface";

export async function fetchResgister(auth:AuthInterface):Promise<{isRegister:boolean}>{

    console.log("Fetching resgister", auth);
    const res = await fetch(`http://localhost:3001/auth/register`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            
        },
        body:JSON.stringify(auth)
    });

    if(!res.ok){
        return {isRegister:false};
    }

    return {isRegister:true};
}