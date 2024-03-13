import Image from 'next/image';
import { Container } from '../layout/container';
import { Button, buttonVariants } from '../ui/button';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import ReviewCard from './review-card';
import { Slider } from '../ui/slider';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const reviews = [
	{
		image: 'https://lh3.googleusercontent.com/a/ACg8ocJsbaR-cZTi_gHJh-t_th4Ka0XFndEMJpRlzWz5z8gs',
		name: 'Diarra Kasse',
		time: '2024-02-18T10:45:22.123Z',
		rating: 5,
		comment: `Best Nigerian food ever!! I had the chicken jollof rice and it's delicious and affordable! Was about time that something like this existed in Sheffield!! 10/10`,
	},
	{
		image: 'https://lh3.googleusercontent.com/a-/ALV-UjWFvFeNTx1hFLli6bjFOHH8qFBkJsGibTosPYQOti8-_ZI',
		name: 'Absa Kasse',
		time: '2024-02-20T10:45:22.123Z',
		rating: 5,
		comment: `The food looks amazing. It has a variety of different foods that you can chose from like jollof rice, egusi soup and so much more. I can’t recommend this place enough`,
	},
	// {
	// 	image: 'https://lh3.googleusercontent.com/a-/ALV-UjU0MksurmZzdlO2EqBi7b6V3okldMZ8BiKhfpPVZ4hxyr0',
	// 	name: 'Abayomi Abibat',
	// 	time: '2024-02-22T10:45:22.123Z',
	// 	rating: 5,
	// 	comment: `The yummiest meal ever! To think a ready meal will be this tasty is an understatement. I love the jollof rice and chicken.`,
	// },
	{
		image: 'https://lh3.googleusercontent.com/a-/ALV-UjU5xbaQOW-3oURZvfuK_BDK3ZY6m8dj0YUP92BaltUItPU',
		name: 'ADEGOROYE Olatunde E.',
		time: '2024-02-24T10:45:22.123Z',
		rating: 5,
		comment: `This is delicious, I enjoyed every bite of the Ayamase sauce and Ofada Rice. Having this ready meal in Sheffield is simply amazing.`,
	},
	{
		image: 'https://lh3.googleusercontent.com/a/ACg8ocLwUjvVOKL_EujBrs2q1fpyDupZZPIYCilN-6bnNH7c',
		name: 'EMMANUEL AGIRIGA',
		time: '2024-02-26T10:45:22.123Z',
		rating: 5,
		comment: `Great taste. Very healthy meal and Huge value for money. I really enjoyed it. Thank you Purple Pack`,
	},
];
export default function Reviews() {
	return (
		<div className='h-screen relative'>
			<Image
				src='/review.jpg'
				alt=''
				height={1080}
				width={1920}
				className='h-full w-full object-cover relative'
			/>
			<div className='h-full absolute bg-black/40 top-0 w-full'>
				<Container className='h-full py-20 px-14 w-full'>
					<div className='flex flex-col justify-center items-center mb-10'>
						<h2 className='text-3xl font-bold text-center text-white'>
							What Our Customers Have To Say
						</h2>
					</div>
					<Carousel className='mb-5'>
						<CarouselContent className='flex items-center justify-start h-full'>
							{reviews.map((a, b) => (
								<CarouselItem
									className='flex items-center justify-center'
									key={b}
								>
									<ReviewCard review={a} />
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className='text-white' />
						<CarouselNext className='text-white' />
					</Carousel>
					<div className='grid place-items-center uppercase'>
						<Link
							href='https://g.co/kgs/MqPQCqv'
							className={cn(buttonVariants({}))}
						>
							Leave a review
						</Link>
					</div>
				</Container>
			</div>
		</div>
	);
}
