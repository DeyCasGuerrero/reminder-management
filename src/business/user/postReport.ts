import { ReportInterface } from "../interfaces/ReportInterface";

export async function postReport(report:ReportInterface, token:string):Promise<boolean> {
 
    const res = await fetch(`${process.env.NEXT_PUBLIC_APIKEY}/reports`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(report),
    })
    
    if (!res.ok) {
        console.error('falid to send report');
        return false;
    }
    
    return true;
}