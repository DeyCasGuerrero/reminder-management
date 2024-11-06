"use client"
import { ReminderInterface } from "@/business/interfaces/Reminder";
import { ModalSendResponse } from "@/features/ui";
import CardsReminders from "@/features/ui/cards-reminders/cards-reminders";
import { SuggestionAi } from "@/features/ui/suggestion-ai/SuggestionAi";
import { useAccountantStore } from "@/store/accountant.store";
import { useModals } from "@/store/modals.store";
import Link from "next/link";
import { useEffect } from "react";
import { AiFillFileAdd } from "react-icons/ai";

interface ListingAllRemindersProps {
    reminders: ReminderInterface[];
}
function ListingAllReminders({ reminders }: ListingAllRemindersProps) {
    const {reminderCount, setReminders } = useAccountantStore();
    useEffect(() => {
        setReminders(reminders);
    }, [reminders, setReminders]);

    const {isOpen, isOpenSuggestion}=useModals();

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
            {isOpenSuggestion && <SuggestionAi/>}
        </section>
    )

}

export default ListingAllReminders;