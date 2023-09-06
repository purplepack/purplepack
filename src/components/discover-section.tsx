'use client';
import React from 'react';
import { Container } from './layout/container';
import { MENU, MENU_NEW } from '@/lib/data';
import MenuCard from './menu-card';
import { addToCart } from '@/lib/utils';
import { Button } from './ui/button';
import Link from 'next/link';

export default function DiscoverSection() {
	// const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

	// const handleAddToCart = (item: CartItem): void => {
	// 	addToCart(item);
	// 	setCartItems([...cartItems, item]);
	// };
	return (
		<div className='px-5 py-20 flex flex-col gap-5 items-center'>
			<h1 className='text-3xl md:mb-5 font-bold'>
				DISCOVER OUR RANGE
			</h1>
			<div className='flex gap-5 md:mb-5 flex-nowrap justify-center w-full'>
				{MENU_NEW.map((item, k) => (
					<MenuCard
						key={k}
						name={item.name}
						image={item.image}
						hoverImage={item.hoverImage}
						description={item.description}
						href={`/kitchen/${item.slug}`}
						price={item.price}
						// onClick={() =>
						// 	handleAddToCart({
						// 		id: k,
						// 		name: item.name,
						// 	})
						// }
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
