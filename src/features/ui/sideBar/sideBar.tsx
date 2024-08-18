import Link from "next/link";

export default function SideBard(){
    return (
        <div className="flex flex-col gap-2  h-full ">
            <Link href={'/Home'} legacyBehavior>
                <a> Homdasde </a>
            </Link>

            <Link href={'/Home'} legacyBehavior>
                <a> Reminders </a>
            </Link>
            
            <Link href={'/Home'} legacyBehavior>
                <a> Webn </a>
            </Link>
            
            <Link href={'/Home'} legacyBehavior>
                <a> Cuenta </a>
            </Link>
            
            
        </div>
    )
}