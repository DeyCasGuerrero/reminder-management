export interface ReminderInterface{
    title: string;
    content: string;
    tags?: string[];
    priority?: string; // baja, media, alta
    completed?: boolean = false;
}