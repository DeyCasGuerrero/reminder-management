// import { getSomeReminders } from "@/business/reminders/getSomeReminders";
import { EmptyReminder } from "@/features/reminders";
import ListingAllReminders from "@/features/reminders/listing-all-reminders/Listing-all-reminders";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { ReminderInterface } from "@/business/interfaces/Reminder";

export default async function Home() {

  const session = await getServerSession(authOptions);


  let reminders: ReminderInterface[] = [];


  if (session?.accessToken && session.user.id) {
    // reminders = await getSomeReminders(session.accessToken, session.user.id);
  }

  return (
    <div className="w-full h-full  overflow-hidden">
      {reminders.length > 0 ? (
        <ListingAllReminders reminders={reminders} />
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          <EmptyReminder />
        </div>
      )}
    </div>
  );
}
