import { Container } from '../layout/container';
import { Button } from '../ui/button';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import ReviewCard from './review-card';

const reviews = [
	{
		image: '/food/egusi-soup.JPG',
		name: 'Sandra',
		time: '2023-10-05T10:45:22.123Z',
		rating: 4,
		comment: `The Nigerian Egusi Soup was absolutely delicious! Its a rich and flavorful dish. Definitely recommend it.`,
	},
	{
		image: '',
		name: 'Anonymous',
		time: '2023-11-04T18:30:55.456Z',
		rating: 5,
		comment: `The Ofada Rice and Ayamase Sauce was a delight! Wonderful, tasty and satisfying meal. Will order again!`,
	},
	{
		image: '/food/jollof-rice.JPG',
		name: 'Chuks',
		time: '2023-12-10T12:10:10.567Z',
		rating: 5,
		comment: `The Nigerian Jollof and Chicken was outstanding! It's a must-try for jollof rice lovers!`,
	},
	{
		image: '',
		name: 'mop***@ gmail.com',
		time: '2023-12-03T20:15:37.789Z',
		rating: 3,
		comment: `The Ayamase Sauce was good, but I expected a bit more spice. Nevertheless, the assorted proteins was enjoyable.`,
	},
	{
		image: '/food/egusi-soup.JPG',
		name: 'Aisha Ahmed',
		time: '2023-12-18T12:10:10.567Z',
		rating: 4,
		comment: `I enjoyed every bit of it alongside the pounded yam I ate. All I had to do was heat it.`,
	},
	{
		image: '/food/ofada-rice.png',
		name: 'Musa Danladi',
		time: '2023-12-25T12:10:10.567Z',
		rating: 4,
		comment: `The Ofada Rice and Ayamase Sauce was a pleasant surprise! Will order again soon!`,
	},
	{
		image: '/food/olori-ofada.JPG',
		name: 'Sophia Lee',
		time: '2024-01-02T19:45:30.567Z',
		rating: 5,
		comment: `All I can say is 👍 👍 👍. It was a standout dish. Highly recommended! It was 🔥 🔥 🔥`,
	},
];
export default function Reviews() {
	return (
		<div className='pt-20 px-5'>
			<Container>
				<div className='flex justify-center items-center mb-10'>
					<h2 className='text-3xl font-bold text-center'>
						What Our Customers Have To Say
					</h2>
				</div>
			</Container>
			<ScrollArea className=' max-w-6xl mx-auto pb-5'>
				<div className='flex gap-5 p-3 w-full'>
					{reviews.map((a, b) => (
						<ReviewCard
							key={b}
							review={a}
						/>
					))}
				</div>
				<ScrollBar
					orientation='horizontal'
					className='hidden'
				/>
			</ScrollArea>
		</div>
	);
}
