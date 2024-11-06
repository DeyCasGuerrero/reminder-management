import { CardReminder } from "@/features/ui";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";

function CreateReminders() {
    return (
        <div className="w-full h-full">
            <div className="flex flex-wrap">
                <Link href={"/"}>
                    <div className="bg-white w-14 h-14 flex items-center justify-center p-2 rounded-full">
                        <IoArrowBackOutline size={30} color="green" />
                    </div>
                </Link>
            </div>
            <CardReminder></CardReminder>
        </div>
    )

}

export default CreateReminders;