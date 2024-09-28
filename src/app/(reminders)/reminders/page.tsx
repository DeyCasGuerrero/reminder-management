import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getAllReminders } from "@/business/reminders/getAllReminders";
import { EmptyReminder } from "@/features/reminders";
import ListingAllReminders from "@/features/reminders/listing-all-reminders/Listing-all-reminders";
import { getServerSession } from "next-auth";

async function Reminders() {

    const session = await getServerSession(authOptions);
    console.log("Reminders", session);

    if (!session?.accessToken || !session.user.id) return;

    const reminders = await getAllReminders(session.accessToken, session.user.id)


    return (
        <main className="h-screen flex justify-center w-full">
            <div className="max-w-screen-xl h-full mt-2 flex flex-col overflow-y-auto ">
                {(!reminders || reminders.length === 0) ? (
                    <div className="h-full w-full flex items-center justify-center">
                        <EmptyReminder></EmptyReminder>
                    </div>
                ) : (
                    <ListingAllReminders reminders={reminders} />
                )}
            </div>
        </main>
    )
}
export default Reminders;