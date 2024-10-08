"use client"
import { ReminderInterface } from "@/business/interfaces/Reminder";
import { ModalSendResponse } from "@/features/ui";
import CardsReminders from "@/features/ui/cards-reminders/cards-reminders";
import { useModals } from "@/store/modals.store";
import Link from "next/link";
import { AiFillFileAdd } from "react-icons/ai";

interface ListingAllRemindersProps {
    reminders: ReminderInterface[];
}
function ListingAllReminders({ reminders }: ListingAllRemindersProps) {

    const {isOpen, isDeleteModalOpen}=useModals();

    return (
        <section className=" h-full w-full flex flex-col gap-4 overflow-y-auto pb-6 px-2">

            <Link href={'/add-reminders'} className="bg-gradient-to-r max-md:mt-10  flex items-center justify-center gap-2   from-pink-500 to-yellow-500 text-white font-semibold py-2 px-4  hover:from-pink-600 hover:to-yellow-600 transition-all duration-300">
                <AiFillFileAdd className="h-5 w-5 mr-2" />
                Añadir recordatorio
            </Link>

            <div className=" p-2 grid lg:grid-cols-2 gap-4 overflow-y-auto w-full">
                {reminders.map((reminder) => (
                    <CardsReminders key={reminder._id} reminder={reminder} />
                ))}
            </div>
            {isOpen && <ModalSendResponse />}
        </section>
    )

}

export default ListingAllReminders;