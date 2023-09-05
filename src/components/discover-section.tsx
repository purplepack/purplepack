'use client';
import React from 'react';
import { Container } from './layout/container';
import { MENU } from '@/lib/data';
import MenuCard from './menu-card';
import { addToCart } from '@/lib/utils';

export default function DiscoverSection() {
	const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

	const handleAddToCart = (item: CartItem): void => {
		addToCart(item);
		setCartItems([...cartItems, item]);
	};
	return (
		<Container>
			<div className='py-20 flex flex-col gap-5 items-center'>
				<h1 className='text-3xl font-bold'>DISCOVER OUR RANGE</h1>
				<div className='flex gap-5 flex-nowrap overflow-x-scroll w-full'>
					{MENU.map((item, k) => (
						<MenuCard
							key={k}
							name={item.name}
							image={item.image}
							hoverImage={item.hoverImage}
							description={item.description}
							href={`/kitchen/${item.slug}`}
							price={item.price}
							onClick={() =>
								handleAddToCart({
									id: k,
									name: item.name,
								})
							}
						/>
					))}
				</div>
			</div>
		</Container>
	);
}
