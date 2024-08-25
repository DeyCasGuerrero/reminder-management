"use client";
import { AiFillAlert, AiFillFileAdd } from "react-icons/ai";
import { useRouter } from "next/navigation";

function EmptyReminders() {
    const router = useRouter();
    const handleAddReminder = () => {
        router.push("/add-reminders");
    }    

    return (
        <div className="bg-white flex flex-col lg:w-[50rem] gap-2 bg-opacity-20 backdrop-blur-lg rounded-2xl p-6 text-center">
            <div className="mb-4">
                <AiFillAlert className="h-12 w-12 md:h-16 md:w-16 mx-auto text-yellow-300" />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">No hay recordatorios activos.</h2>
            <p className="text-base md:text-lg text-white mb-4">Añade tus recordatorios ahora mismo!</p>
            <button onClick={handleAddReminder} className="bg-gradient-to-r flex items-center justify-center gap-2  from-pink-500 to-yellow-500 text-white font-semibold py-2 px-4 rounded-full hover:from-pink-600 hover:to-yellow-600 transition-all duration-300">
                <AiFillFileAdd className="h-5 w-5 mr-2" />
                Añadir recordatorio
            </button>
        </div>
    )
}

export default EmptyReminders;