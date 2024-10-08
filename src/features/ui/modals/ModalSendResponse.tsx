"use client";

import { useModals } from "@/store/modals.store";
import { useState } from "react";

export default function ModalSendResponse() {

    const {setDeleteModalOpen, setIsOpen}=useModals();

    const handleConfirm = () => {
        setIsOpen(false);
        setDeleteModalOpen(true);
    }

    return (
        <div className="fixed inset-0 bg-purple-500 bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white rounded-2xl p-6 w-80 shadow-xl transform transition-all hover:scale-105">
                <h2 className="text-2xl font-bold mb-4 text-purple-600">¿Eliminar recordatorio?</h2>
                <p className="text-gray-600 mb-6 font-semibold">¿Estás seguro de que quieres eliminar este recordatorio? </p>
                <div className="flex justify-end space-x-4">
                    <button onClick={()=>setIsOpen(false)} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
                        Cancelar
                    </button>
                    <button onClick={handleConfirm} className="px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50">
                        Eliminar
                    </button>
                </div>
            </div>
        </div>

    )
}