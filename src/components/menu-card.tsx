'use client';
import Image from 'next/image';
import { Card } from './ui/card';
import React from 'react';
import { Button } from './ui/button';
import { truncateParagraph } from '@/lib/utils';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export default function MenuCard({
	image,
	name,
	hoverImage,
	description,
	href,
	price,
}: {
	image: string;
	name: string;
	hoverImage: string;
	description: string;
	href: string;
	price: number;
}) {
	const [hovered, setHovered] = React.useState<boolean>(false);

	return (
		<div
			className='flex flex-col w-36 md:w-60 gap-1 md:gap-2'
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<Link href={href}>
				<Card className='h-36 md:h-60 w-36 md:w-60 overflow-hidden'>
					<Image
						src={hovered ? hoverImage : image}
						height={240}
						width={240}
						alt=''
						className='w-full h-full object-center'
					/>
				</Card>
			</Link>
			<Link href={href}>
				<div className='w-36 md:w-60 text-center p-2 lg:p-3'>
					<div className='uppercase font-bold text-[12px] md:text-base'>
						{name}
					</div>
					<div className='text-xs'>
						{truncateParagraph(description, 40)}
					</div>
				</div>
			</Link>

			<div className='grid gap-2'>
				<Button
					disabled
					className='flex'
					// onClick={onClick}
				>
					<ShoppingCart className='h-4 w-4 md:hidden' />{' '}
					<span className='hidden md:flex text-xs'>
						Add to Basket (Coming Soon)
					</span>
				</Button>
				{/* <Button variant='ghost'>{formatAmount(price)}</Button> */}
			</div>
		</div>
	);
}
