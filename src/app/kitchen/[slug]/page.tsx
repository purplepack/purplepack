import Product from '@/components/pages/product';
import { MENU } from '@/lib/data';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';

// export async function generateMetadata({
// 	params,
// }: {
// 	params: { slug: string };
// }) {
// 	const food = MENU.find((food) => food.slug === params.slug);
// 	return {
// 		title: food?.name,
// 		description: food?.description,
// 	};
// }

export async function generateMetadata(
	{
		params,
	}: {
		params: { slug: string };
	},
	parent: ResolvingMetadata
): Promise<Metadata> {
	const food = MENU.find((food) => food.slug === params.slug);
	const previousImages = (await parent).openGraph?.images || [];

	// console.log(previousImages, food?.image);

	return {
		title: food?.name,
		description: food?.description,
		openGraph: {
			images: [food?.image as string, ...previousImages],
			// images: [{ url: food?.image as string }, ...previousImages],
		},
		twitter: {
			images: [food?.image as string, ...previousImages],
		},
	};
}

export default function Products({ params }: { params: { slug: string } }) {
	const food = MENU.find((food) => food.slug === params.slug);
	if (!food) return notFound();

	return <Product food={food} />;
}
