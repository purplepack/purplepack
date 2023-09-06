import Product from '@/components/pages/product';
import { MENU } from '@/lib/data';
import React from 'react';

export default function Products({ params }: { params: { slug: string } }) {
	const food: FoodI = MENU.find((food) => food.slug === params.slug)!;
	return <Product food={food} />;
}
