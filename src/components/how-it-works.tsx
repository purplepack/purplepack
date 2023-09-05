import React from 'react';
import { Container } from './layout/container';
import { Card } from './ui/card';
import Image from 'next/image';
import { HOW_IT_WORKS } from '@/lib/data';

export default function HowItWorks() {
	return (
		<div className='bg-primary text-primary-foreground py-20'>
			<Container>
				<div className='px-5 flex flex-col gap-5 items-center'>
					<h1 className='text-3xl font-bold'>HOW IT WORKS</h1>
					<div className='grid grid-cols-1 gap-5 md:grid-cols-2 w-full'>
						<Card className='h-96 w-full overflow-hidden'>
							<Image
								src='/image20.JPG'
								height={400}
								width={400}
								alt='How it Works Image'
								className='h-full w-full object-top object-cover'
							/>
						</Card>
						<div className='h-96 w-full'>
							<div className='flex flex-col justify-center h-full gap-5'>
								{HOW_IT_WORKS.map((hiw, k) => (
									<div
										className='flex items-center gap-5'
										key={k}
									>
										<div className='text-4xl font-bold'>
											{hiw.step}
										</div>
										<div className='flex flex-col gap-2'>
											<div className='text-xl font-bold'>
												{hiw.title}
											</div>
											<div className=''>
												{hiw.description}
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}
