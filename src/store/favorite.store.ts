import { create } from "zustand"

interface RemindersState {
    isEdited: { [id: string]: boolean }; // Guarda el estado de favoritos por ID
    setIsEdited: (id: string) => void;
    favorites: { [key: string]: boolean }; 
    toggleFavorite: (id: string) => void;
    
    addTags:{[id:string]:boolean},
    toogleTags:(id:string)=>void;
    
}

// Crear el estado con el tipo definido
export const useReminders = create<RemindersState>((set) => ({
    favorites: {},
    toggleFavorite: (id: string) => set((state) => {
        const currentFavorites = { ...state.favorites }; // Copiar el estado actual de favorites

        // Si el id ya está en favoritos, lo quitamos; si no, lo añadimos
        if (currentFavorites[id]) {
            delete currentFavorites[id]; // Eliminar el id de favorites
        } else {
            currentFavorites[id] = true; // Agregar el id a favorites
        }

        return { favorites: currentFavorites }; // Devolver el nuevo estado
    }),
    
    isEdited: {}, // Estado inicial vacío
    setIsEdited: (id: string) =>
        set((state) => ({
            isEdited: {
                ...state.isEdited,
                [id]: !state.isEdited[id],
            },
        })),
        
        addTags:{},
        toogleTags(id) {
            set((state)=>({
                addTags:{
                    ...state.addTags,
                    [id]:!state.addTags[id],
                }
            }))
        },
}));