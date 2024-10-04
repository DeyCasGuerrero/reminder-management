import { create } from 'zustand';


interface tagsStore {
    tags: string[];  // Array de recordatorios
    addTags: (tags: string) => void;  // Función para agregar un recordatorio
    removeTags: (tags: string) => void;  // Función para eliminar un recordatorio
    selectPriority: string; // Almacenar la prioridad seleccionada
    setPriority: (priority: string) => void; // Función para establecer la prioridad
}

export const useReminderStore = create<tagsStore>((set) => ({
    tags: [],  // Estado inicial, un array vacío
    selectPriority: '', // Estado inicial de la prioridad

    // Función para añadir un recordatorio al array
    addTags: (tag) =>
        set((state) => ({
            tags: [...state.tags, tag],
        })),

    // Función para eliminar un recordatorio del array
    removeTags: (tag) =>
        set((state) => ({
            tags: state.tags.filter((r) => r !== tag),
        })),
    // Función para establecer la prioridad
    setPriority: (priority) =>
        set(() => ({
            selectPriority: priority,
        })),
}));