import Image from 'next/image';
import React from 'react';
import { Container } from './layout/container';
import { Button } from './ui/button';
import Link from 'next/link';

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
					<div className='h-screen flex flex-col justify-center px-5 text-center md:text-left gap-5 max-w-[600px] text-black'>
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
							<Button
								asChild
								className='w-48'
							>
								<Link href='/kitchen'>
									EXPLORE OUR MENU
								</Link>
							</Button>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
}
