import React from 'react';
import MealCard from './mealcard';
import { MENU } from '@/lib/data';

export default function KitchenProduct() {
	return (
		<div className='pt-32 '>
			<div className='p-6'>
				<h1 className='font-bold text-3xl text-center'>
					Our Kitchen
				</h1>
				<div className='py-10 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-10 '>
					{MENU.map((meal, i) => (
						<MealCard
							key={i}
							meal={meal}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
