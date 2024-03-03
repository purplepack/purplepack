import React from 'react';
import { Container } from './layout/container';
import { PROFILE } from '@/lib/data';
import { Button } from './ui/button';
import Image from 'next/image';

export default function OurStory() {
	return (
		<div className=' bg-primary text-white'>
			<Container className='py-20 px-5'>
				<div className='grid lg:grid-cols-2 lg:gap-10 gap-10'>
					<div className='w-full aspect-video rounded-xl overflow-clip'>
						<Image
							src={'/image23.JPG'}
							alt={''}
							height={1080}
							width={1080}
							className='w-full h-full object-cover object-center'
						/>
					</div>
					<div className='px-5 flex flex-col gap-5 items-center lg:items-start lg:justify-center text-center lg:text-start'>
						<h1 className='text-3xl font-bold'>OUR STORY </h1>
						<p className='text-xl max-w-2xl'>
							{`This ready meal line was created because we want to
					provide irresistible African food that offers customers
					a quick and authentic local experience! ${PROFILE.name}
					foods highlights indigenous flavours and ingredients
					through its unique African dishes.`}
						</p>
						<Button variant='outline'>Our Kitchen</Button>
					</div>
				</div>
			</Container>
		</div>
	);
}
