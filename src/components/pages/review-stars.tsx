import React from 'react';
import { StarIcon } from 'lucide-react';

interface RatingProps {
	rating: number;
}

const ReviewStars: React.FC<RatingProps> = ({ rating }) => {
	const filledStars = Array.from({ length: rating }, (_, index) => (
		<StarIcon
			key={index}
			className='w-5 h-5 fill-primary text-primary'
		/>
	));

	const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
		<StarIcon
			key={index}
			className='w-5 h-5 stroke-muted-foreground'
		/>
	));

	return (
		<div className='flex items-center gap-0.5 ml-auto'>
			{filledStars}
			{emptyStars}
		</div>
	);
};

export default ReviewStars;
