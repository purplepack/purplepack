import React from 'react';
import { TODAY_SPECIAL } from '@/lib/data';
import MenuCard from './menu-card';
import { Button } from './ui/button';
import Link from 'next/link';

export default function DiscoverSection() {
	return (
		<div className='px-5 py-20 flex flex-col gap-5 items-center overflow-hidden'>
			<h1 className='text-xl sm:text-3xl md:mb-5 font-bold'>
				DISCOVER OUR RANGE
			</h1>
			<div className='flex flex-wrap gap-5 md:mb-5 justify-around md:justify-center w-full'>
				{TODAY_SPECIAL.map((item, k) => (
					<MenuCard
						key={k}
						name={item.name}
						image={item.image}
						hoverImage={item.hoverImage}
						description={item.description}
						href={`/kitchen/${item.slug}`}
						price={item.price}
					/>
				))}
			</div>
			<div className='flex justify-center'>
				<Button asChild>
					<Link href='/kitchen'>View Kitchen</Link>
				</Button>
			</div>
		</div>
	);
}
