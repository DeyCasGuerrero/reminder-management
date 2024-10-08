import { create } from "zustand";

interface ModalsState {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    isDeleteModalOpen: boolean
    setDeleteModalOpen: (isDeleteModalOpen: boolean) => void; 
}

export const useModals = create<ModalsState>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen: boolean) => set({ isOpen }),
    isDeleteModalOpen: false,
    setDeleteModalOpen: (deleteModal: boolean) => set({ isDeleteModalOpen:deleteModal }),
}));