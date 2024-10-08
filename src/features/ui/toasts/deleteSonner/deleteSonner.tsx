import { toast } from 'sonner';
export default function DeleteSonner() {
    return(
        <button onClick={() => toast('This is a sonner toast')}>Render my toast</button>
    )
}