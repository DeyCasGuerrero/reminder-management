
import { getSomeReminders } from "@/business/reminders/getSomeReminders";
import { EmptyReminder } from "@/features/reminders";
import ListingAllReminders from "@/features/reminders/listing-all-reminders/Listing-all-reminders";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { NextRequest } from "next/server";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { ReminderInterface } from "@/business/interfaces/Reminder";

export default async function Home() {

  const session = await getServerSession(authOptions);
  console.log("wasadsada", session);

  let reminders: ReminderInterface[] = [];


  if (session?.accessToken && session.user.id) {
    try {
      reminders = await getSomeReminders(session.accessToken, session.user.id);
    } catch (error) {
      console.error('Error al obtener recordatorios:', error);

    }
  }

  return (
    <div className="w-full h-full  overflow-hidden">
      {reminders.length > 0 ? (
        <ListingAllReminders reminders={reminders} />
      ) : (
        <EmptyReminder />
      )}
    </div>
  );
}
