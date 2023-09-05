import Image from 'next/image';
import React from 'react';
import { Container } from './layout/container';
import { Button } from './ui/button';

export default function HeroSection() {
	return (
		<div className='h-screen w-full'>
			<Image
				src='/hero-image.webp'
				height={600}
				width={900}
				alt='Hero Image'
				className='w-full h-full object-center object-cover'
			/>
			<div className='absolute top-0 left-0 h-screen w-full'>
				<Container>
					<div className='h-screen flex flex-col justify-center px-3 gap-5 w-[400px] lg:w-[600px]'>
						<div className='text-2xl lg:text-3xl'>
							Irresistible, Fresh & Authentic
						</div>
						<div className=' text-5xl lg:text-7xl font-bold'>
							Get Your Daily Dose of African Flavors
						</div>
						<div className=''>
							<div className='text-2xl lg:text-3xl mb-3'>
								Shop Now for Unique African Dishes
							</div>
							<Button className='w-40'>
								Explore Our Menu
							</Button>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
}
