'use client';
import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { truncateParagraph } from '@/lib/utils';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '../ui/tooltip';

export default function MealCard({ meal }: { meal: FoodI }) {
	const [hovered, setHovered] = React.useState<boolean>(false);
	return (
		<Card className='shrink-0 overflow-hidden hover:border-primary hover:shadow-xl transition-all duration-500'>
			<Link
				href={`/kitchen/${meal.slug}`}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<div className='w-full aspect-square'>
								<Image
									width={500}
									height={350}
									src={
										hovered
											? meal.hoverImage
											: meal.image
									}
									alt={meal.name}
									className='rounded-t-xl h-full w-full object-cover'
								/>
							</div>
						</TooltipTrigger>
						<TooltipContent className='border'>
							<p>{meal.description}</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</Link>
			<div className='grid text-center w-full items-center gap-3'>
				<div className='font-bold py-2 text-lg'>{meal.name}</div>
				<div className='text-xs mb-3 line-clamp-1 px-3'>
					{meal.description}
				</div>
			</div>
			<div className='grid'>
				<Button asChild>
					<Link href={`/kitchen/${meal.slug}`}>View</Link>
				</Button>
			</div>
		</Card>
	);
}
