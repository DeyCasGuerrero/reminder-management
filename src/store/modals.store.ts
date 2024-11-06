import { create } from "zustand";

interface ModalsState {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    isDeleteModalOpen: boolean
    setDeleteModalOpen: (isDeleteModalOpen: boolean) => void; 

    isOpenSuggestion:boolean;
    setIsOpenSuggestion:(isOpenSuggestion:boolean)=>void;

    reminderId: string | null;  // Estado para almacenar la ID del reminder
    setReminderId: (id: string | null) => void;
}

export const useModals = create<ModalsState>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen: boolean) => set({ isOpen }),

    isDeleteModalOpen: false,
    setDeleteModalOpen: (isDeleteModalOpen: boolean) => set({ isDeleteModalOpen }),
    
    isOpenSuggestion:false,
    setIsOpenSuggestion:(isOpenSuggestion:boolean)=>set({isOpenSuggestion}),
    reminderId: null,  // Inicializa el estado en null
    setReminderId: (id: string | null) => set({ reminderId: id }),
}));