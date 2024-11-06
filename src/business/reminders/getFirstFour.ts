export async function getFirstFour(accessToken: string) {
    const response = await fetch(`${process.env.API_URL}/reminders/getfirstfour`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
        }
    })
    return await response.json();
}