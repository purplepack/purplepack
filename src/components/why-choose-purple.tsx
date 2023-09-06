import React from 'react';
import { Container } from './layout/container';
import { WHY_CHOOSE_US } from '@/lib/data';
import { Card, CardDescription, CardHeader } from './ui/card';
import { StarFilledIcon } from '@radix-ui/react-icons';

export default function Why() {
	return (
		<div className='py-20'>
			<Container>
				<div className='flex flex-col gap-5 items-center justify-center  px-3 sm:px-5'>
					<h1 className='text-3xl text-center'>
						Why Choose Purple Pack
					</h1>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5'>
						{WHY_CHOOSE_US.map((why, k) => (
							<Card
								key={k}
								className='bg-primary/20 hover:scale-105 transition-all'
							>
								<div className='p-3 flex flex-col justify-center items-center'>
									<StarFilledIcon className='h-6 md:h-12 w-6 md:w-12 text-primary' />
									<div className='font-bold'>
										{why.title}
									</div>
								</div>
								<CardDescription className='p-3 text-center'>
									{why.description}
								</CardDescription>
							</Card>
						))}
					</div>
				</div>
			</Container>
		</div>
	);
}
