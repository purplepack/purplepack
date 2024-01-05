import { MENU } from '@/lib/data';
import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export const alt = 'About Acme';
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
	const food = MENU.find((food) => food.slug === params.slug);

	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 48,
					background: 'white',
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{food?.name}
			</div>
		),
		{
			...size,
		}
	);
}
