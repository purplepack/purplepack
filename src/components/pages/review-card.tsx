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
		<div className='flex-shrink-0 gap-4 w-[260px] md:w-[40%] lg:w-[25%] xl:w-[22%] shadow-md p-2 rounded-2xl m-2 border border-muted hover: scale-105'>
			<Avatar className='w-10 h-10 border'>
				<AvatarImage
					alt={review.name}
					src={review.image}
				/>
				<AvatarFallback>
					{getInitials(review.name).toUpperCase()}
				</AvatarFallback>
			</Avatar>
			<div className='grid gap-4'>
				<div className='flex gap-4 items-start'>
					<div className='grid gap-0.5 text-sm'>
						<h3 className='font-semibold'>{review.name}</h3>
						<time className='text-sm text-gray-500 dark:text-gray-400'>
							{timeAgo(review.time)}
						</time>
					</div>
					<ReviewStars rating={review.rating} />
				</div>
				<div className='text-sm leading-loose text-gray-500 dark:text-gray-400 line-clamp-4'>
					<p>{review.comment}</p>
				</div>
			</div>
		</div>
	);
}
