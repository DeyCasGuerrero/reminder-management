"use client";
import { postReport } from "@/business/user/postReport";
import { StarComponent } from "@/features/ui";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "sonner";

export default function SendReport() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [rating, setRating] = useState(0);
    const { data: session, status } = useSession();

    const alertToast = () =>{
        toast.error("Debe dar calificar con las estrellas", {
            position: "top-right",
            style: {
                background: "#ff0000",
                color: "#000000"

            }
        });
    }

    const toastest = (promise: boolean) => {
        if (promise) {
            toast.success("El recordatorio ha sido editado", {
                position: "top-right",
                style: {
                    background: "#00ff00",
                    color: "#000000"

                }
            });
        }
        else {
            toast.error("Error al enviar el reporte", {
                position: "top-right",
                style: {
                    background: "#ff0000",
                    color: "#000000"

                }
            });
        }
    }

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(session?.accessToken === undefined) return;
        if(rating<=0) return alertToast();
        if(!content || !title) return;
        const report = {
            title,
            content,    
            star: rating,
        }
        const promise = await postReport( report, session?.accessToken);
        toastest(promise);
    };
    
    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl font-bold mb-6">Send a Report</h1>
            
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                {/* Título del reporte */}
                <div className="mb-4">
                    <label htmlFor="title" className="block text-lg font-semibold mb-2">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border text-black border-gray-300 rounded-md"
                        placeholder="Enter the report title"
                        required
                    />
                </div>

                {/* Contenido del reporte */}
                <div className="mb-4">
                    <label htmlFor="content" className="block text-lg font-semibold mb-2">Content</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full p-2 border text-black border-gray-300 rounded-md"
                        rows={5}
                        placeholder="Enter the report content"
                        required
                    />
                </div>

                {/* Estrellas de calificación */}
                <div className="mb-4 flex flex-col items-center gap-2">
                    <label className="block text-lg font-semibold mb-2 text-black">Rating</label>
                    <p className="text-text-85 text-lg">¿Cuál es tu calificación de nuestro servicio?</p>
                    <StarComponent setRating={setRating} rating={rating}/>
                </div>

                {/* Botón de envío */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 px-6 rounded-full hover:bg-gradient-to-l"
                    >
                        Submit Report
                    </button>
                </div>
            </form>
        </div>
    );
}