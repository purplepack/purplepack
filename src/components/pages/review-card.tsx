import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { getInitials, timeAgo } from '@/lib/utils';
import ReviewStars from './review-stars';

export default function ReviewCard({
	review,
}: {
	review: {
		image?: string;
		name: string;
		time: string;
		rating: number;
		comment: string;
	};
}) {
	return (
		<div className='gap-4 w-full max-w-md flex flex-col items-center text-center justify-start pt-10 aspect-square shadow-md rounded-full border border-muted bg-white/90'>
			<div className='flex flex-col items-center justify-center'>
				<Avatar className='w-20 h-20 border'>
					<AvatarImage
						alt={review.name}
						src={review.image}
					/>
					<AvatarFallback className='text-3xl font-bold'>
						{getInitials(review.name).toUpperCase()}
					</AvatarFallback>
				</Avatar>
				<div className='grid gap-1'>
					<h3 className='font-semibold'>{review.name}</h3>
					<time className='text-sm text-gray-500 dark:text-gray-400'>
						{timeAgo(review.time)}
					</time>
					<ReviewStars rating={review.rating} />
				</div>
			</div>
			<div className='text-sm text-gray-500 dark:text-gray-400 shadow-lg px-10 bg-white border py-2 rounded-2xl leading-normal line-clamp-5'>
				<p>{review.comment}</p>
			</div>
		</div>
	);
}
