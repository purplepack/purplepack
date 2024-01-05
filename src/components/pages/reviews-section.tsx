import { Container } from '../layout/container';
import { Button } from '../ui/button';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import ReviewCard from './review-card';

const reviews = [
	{
		image: '/food/egusi-soup.JPG',
		name: 'John Doe',
		time: '2023-10-05T10:45:22.123Z',
		rating: 4,
		comment: `The Nigerian Egusi Soup was absolutely delicious! The blend of melon seeds, pumpkin leaves, and assorted proteins created a rich and flavorful dish. Definitely recommend it.`,
	},
	{
		image: '/food/ofada-rice.png',
		name: 'Jane Smith',
		time: '2023-11-04T18:30:55.456Z',
		rating: 5,
		comment: `The Ofada Rice and Ayamase Sauce was a delight! The spicy green Scotch bonnet peppers and assorted proteins made for a tasty and satisfying meal. Will order again!`,
	},
	{
		image: '/food/olori-ofada.JPG',
		name: 'Alex Johnson',
		time: '2023-12-03T20:15:37.789Z',
		rating: 3,
		comment: `The Ayamase Sauce was good, but I expected a bit more spice. Nevertheless, the blend of peppers and assorted proteins was enjoyable.`,
	},
	{
		image: '/food/jollof-rice.JPG',
		name: 'Emily Brown',
		time: '2023-12-10T12:10:10.567Z',
		rating: 5,
		comment: `The Nigerian Jollof and Chicken was outstanding! The flavorful and spicy rice dish paired perfectly with the tender chicken. A must-try for jollof rice lovers!`,
	},
	{
		image: '/food/egusi-soup.JPG',
		name: 'Aisha Ahmed',
		time: '2023-12-18T12:10:10.567Z',
		rating: 4,
		comment: `I enjoyed the Nigerian Egusi Soup! The melon seed puree and pumpkin leaves added a unique touch to the dish. The blend of flavors was delightful.`,
	},
	{
		image: '/food/ofada-rice.png',
		name: 'Chris Wilson',
		time: '2023-12-25T12:10:10.567Z',
		rating: 4,
		comment: `The Ofada Rice and Ayamase Sauce was a pleasant surprise! The spicy peppers and assorted proteins complemented each other well. Will order again soon!`,
	},
	{
		image: '/food/olori-ofada.JPG',
		name: 'Sophia Lee',
		time: '2024-01-02T19:45:30.567Z',
		rating: 5,
		comment: `The Ayamase Sauce exceeded my expectations! The perfect blend of spice and flavor made it a standout dish. Highly recommended!`,
	},
	{
		image: '/food/jollof-rice.JPG',
		name: 'Michael Adams',
		time: '2024-01-04T22:30:15.876Z',
		rating: 4,
		comment: `The Nigerian Jollof and Chicken was a hit at our dinner! The spicy rice paired with the flavorful chicken created a memorable meal. Thumbs up!`,
	},
];
export default function Reviews() {
	return (
		<div className='py-20'>
			<Container>
				<div className='flex justify-center items-center mb-10'>
					<h2 className='text-3xl font-bold'>
						What Our Customers Have To Say
					</h2>
				</div>
			</Container>
			<ScrollArea className=' max-w-6xl mx-auto pb-5'>
				<div className='flex gap-5'>
					{reviews.map((a, b) => (
						<ReviewCard
							key={b}
							review={a}
						/>
					))}
				</div>
				<ScrollBar orientation='horizontal' />
			</ScrollArea>
		</div>
	);
}
