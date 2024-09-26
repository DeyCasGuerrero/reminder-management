export interface ReminderInterface{
    _id?: string; 
    title: string;
    content: string;
    tags?: string[];
    priority?: string; // baja, media, alta
    completed?: boolean = false;
    createdAt?:string;
    updatedAt?: string;
}