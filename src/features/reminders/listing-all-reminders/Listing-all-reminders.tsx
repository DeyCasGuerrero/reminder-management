import { ReminderInterface } from "@/business/interfaces/Reminder";
import CardsReminders from "@/features/ui/cards-reminders/cards-reminders";
import Link from "next/link";
import { AiFillFileAdd } from "react-icons/ai";

interface ListingAllRemindersProps {
    reminders: ReminderInterface[];
}
function ListingAllReminders({ reminders }: ListingAllRemindersProps) {
    return (
        <section className=" h-full w-full flex flex-col gap-4 ">
            <div>
                <Link href={'/add-reminders'} className="bg-gradient-to-r flex items-center justify-center gap-2  from-pink-500 to-yellow-500 text-white font-semibold py-2 px-4  hover:from-pink-600 hover:to-yellow-600 transition-all duration-300">
                    <AiFillFileAdd className="h-5 w-5 mr-2" />
                    Añadir recordatorio
                </Link>
            </div>

            <div className="bg-red-600 p-2 grid grid-cols-2 gap-4">
                {reminders.map((reminder) => (
                    <CardsReminders key={reminder._id} reminder={reminder} />
                ))}
            </div>

        </section>
    )

}

export default ListingAllReminders;