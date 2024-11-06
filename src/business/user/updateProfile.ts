import { ProfileInterface } from "../interfaces/userInterface";

export async function updateProfile(profile: Partial<ProfileInterface>, token: string):Promise<boolean> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APIKEY}/user/profile`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(profile),
    })

    if (!res.ok) {
        console.error('falid to send report');
        return false;
    }
    return true;
}