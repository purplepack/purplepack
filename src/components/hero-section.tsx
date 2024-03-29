'use client';
import Image from 'next/image';
import React from 'react';
import { Container } from './layout/container';
import { Button } from './ui/button';
import Link from 'next/link';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from './ui/carousel';
import ReviewCard from './pages/review-card';
import Autoplay from 'embla-carousel-autoplay';

export default function HeroSection() {
	return (
		<div className='h-screen w-full'>
			<Image
				src='/image6-top.JPG'
				height={600}
				width={900}
				alt='Hero Image'
				className='w-full h-full object-cover object-bottom'
			/>
			<div className='absolute top-0 left-0 h-screen w-full bg-gradient-to-b from-black/95 via-black/90 to-black/30'>
				<Container>
					<div className='h-screen grid lg:grid-cols-2 px-5 text-center md:text-left gap-5 text-white'>
						<div className='flex flex-col items-center md:items-start justify-center gap-3 pt-10'>
							<div className='text-2xl lg:text-xl xl:text-3xl'>
								Irresistible, Fresh & Authentic
							</div>
							<div className=' text-3xl md:text-4xl xl:text-7xl font-bold'>
								Get Your Daily Dose of African cuisine
							</div>
							<div className=''>
								<div className='text-lg lg:text-2xl xl:text-3xl mb-3'>
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
							<div className='grid grid-cols-3 gap-3 py-10 lg:hidden'>
								<div className='w-full aspect-square'>
									<Image
										src='/new/jollof.png'
										alt=''
										height={200}
										width={200}
										className='w-full h-full object-contain'
									/>
								</div>
								<div className='w-full aspect-square'>
									<Image
										src='/new/egusi.png'
										alt=''
										height={200}
										width={200}
										className='w-full h-full object-contain'
									/>
								</div>
								<div className='w-full aspect-square'>
									<Image
										src='/new/ayamase.png'
										alt=''
										height={200}
										width={200}
										className='w-full h-full object-contain'
									/>
								</div>
							</div>
						</div>
						<div className='hidden lg:flex flex-col items-center justify-center px-3'>
							<Carousel
								plugins={[
									Autoplay({
										delay: 2000,
									}),
								]}
								className='mb-5'
							>
								<CarouselContent className='flex items-center justify-start h-full'>
									{[
										'/new/jollof.png',
										'/new/egusi.png',
										'/new/ayamase.png',
									].map((a, b) => (
										<CarouselItem
											className='grid place-items-center'
											key={b}
										>
											<div className='w-full aspect-square'>
												<Image
													src={a}
													alt={`purple pack food ${a}`}
													height={1080}
													width={1080}
													className='w-full h-full object-contain'
												/>
											</div>
										</CarouselItem>
									))}
								</CarouselContent>
							</Carousel>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
}
