import { ReminderInterface } from "@/business/interfaces/Reminder";
import { Badge, Tag } from "@chakra-ui/react";
import { CiStar, CiCalendar, CiClock1 } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { format } from 'date-fns';
export default function CardsReminders({reminder}:{reminder:ReminderInterface}) {

    const getCategoryColor = (category: string) => {
        const colors: { [key: string]: string } = {
            "Escuela": "bg-blue-500",
            "Música": "bg-purple-500",
            "Personal": "bg-pink-500",
            "default": "bg-gray-500"
        }
        return colors[category] || colors.default
    }

    const getGradient = (index: number) => {
        const gradients = [
            "from-pink-400 to-purple-500",
            "from-blue-400 to-indigo-500",
            "from-green-400 to-teal-500",
            "from-yellow-400 to-orange-500"
        ]
        return gradients[index % gradients.length]
    }

    console.log(reminder)


    function formatDate(dateString: string): string {
        const date = new Date(dateString);
        return date.toLocaleString(); // Devuelve la fecha en formato legible según la configuración regional
    }
      
    

    return (
        <div key={reminder._id} className={`transform transition duration-300  h-full hover:shadow-xl overflow-hidden `}>
            <div className={`h-2 ${getCategoryColor("Escuela")}`} />
            <div className={`p-6 bg-gradient-to-br text-white h-full`}>
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold">{reminder.title}</h2>
                    <button
                        className="text-yellow-300 hover:text-yellow-500"
                    >
                        <CiStar className={`h-6 w-6`} />
                    </button>
                </div>
                <div className="mt-2" dangerouslySetInnerHTML={{ __html: reminder.content }} />
                <div className="flex items-center mb-2">
                    <CiCalendar className="mr-2 h-4 w-4" />
                    <span>{reminder.completed}</span>
                </div>
                <div className="flex items-center mb-4">
                    <CiClock1 className="mr-2 h-4 w-4" />
                    <span className="text-black">{formatDate(reminder.createdAt ? reminder.createdAt:'')}</span>
                </div>
                {/* <Tag className={`${getCategoryColor(reminder.tags)} text-white`}>
                    
                </Tag> */}
                <div className="flex justify-between items-center mt-6">
                    <button

                        // onClick={() => toggleComplete(reminder.id)}
                        className="bg-white/20 hover:bg-white/30 text-white"
                    >
                        {/* <CheckCircleIcon className={`mr-2 h-4 w-4 ${reminder.isCompleted ? 'text-green-500' : 'text-white'}`} />
                        {reminder.isCompleted ? 'Completado' : 'Marcar como completado'} */}
                    </button>
                    <button
                        // variant="ghost"
                        // size="icon"
                        className="text-white hover:text-red-500"
                    >
                        <MdDeleteOutline className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}