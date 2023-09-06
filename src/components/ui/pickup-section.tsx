import { Container } from '@/components/layout/container';
import { Separator } from '@/components/ui/separator';
import { ChatBubbleIcon } from '@radix-ui/react-icons';
import { ShoppingBasket } from 'lucide-react';
import Link from 'next/link';
import { Button } from './button';

export default function PickupSection() {
	return (
		<Container>
			<div className='flex gap-5 flex-col md:flex-row md:h-36 px-3 md:px-5 items-center justify-between md:justify-around mt-10 text-sm'>
				<div className='flex flex-col md:flex-row justify-center items-center gap-3 text-center'>
					<div className='h-20 w-20 bg-primary rounded-full text-white flex items-center justify-center'>
						<ShoppingBasket className='w-10 h-10' />
					</div>
					<div className=''>
						<div className='font-bold text-xl'>
							Local Pickup
						</div>
						<Button
							asChild
							variant='link'
						>
							<Link
								href='https://wa.me/2348061719533'
								className=''
							>
								Check Out Locations
							</Link>
						</Button>
					</div>
				</div>
				<Separator
					orientation='vertical'
					className='bg-primary hidden lg:flex'
				/>
				<div className='flex flex-col md:flex-row justify-center items-center gap-3 text-center'>
					<div className='h-20 w-20 bg-primary rounded-full text-white flex items-center justify-center'>
						<ChatBubbleIcon className='w-10 h-10' />
					</div>
					<div className=''>
						<div className='font-bold text-xl'>
							Available For You
						</div>
						<Button
							asChild
							variant='link'
						>
							<Link
								href='https://wa.me/2348061719533'
								className=''
							>
								Online support 24/7
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</Container>
	);
}
