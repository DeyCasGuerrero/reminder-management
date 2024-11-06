"use client";
import { FaStar } from 'react-icons/fa'

interface StarComponentProps {
    rating: number;
    setRating: React.Dispatch<React.SetStateAction<number>>;
}

export default function StarComponent({ rating, setRating }: StarComponentProps) {


    const handleStarClick = (starIndex: number) => {
        const newRating = starIndex + 1
        setRating(newRating)
    }

    return (
        <div className="flex items-center justify-center space-x-1">
            {[...Array(5)].map((_, index) => (
                <FaStar
                    key={index}
                    className="cursor-pointer text-4xl transition-colors duration-200"
                    style={{ color: index < rating ? '#ffc107' : '#e4e5e9' }}
                    onClick={() => handleStarClick(index)}
                />
            ))}
        </div>
    )
}