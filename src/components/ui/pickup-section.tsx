import { Container } from '@/components/layout/container';
import { Separator } from '@/components/ui/separator';
import { ChatBubbleIcon } from '@radix-ui/react-icons';
import { ShoppingBasket } from 'lucide-react';

export default function PickupSection() {
	return (
		<Container>
			<div className='flex h-36 items-center justify-around my-10 text-sm'>
				<div className='flex gap-3'>
					<div className='h-20 w-20 bg-primary rounded-full text-white flex items-center justify-center'>
						<ShoppingBasket className='w-10 h-10' />
					</div>
					<div className=''>
						<div className='font-bold text-xl mb-3'>
							Local Pickup
						</div>
						<div className=''>Check Out Locations</div>
					</div>
				</div>
				<Separator
					orientation='vertical'
					className='bg-primary hidden lg:flex'
				/>
				<div className='flex gap-3'>
					<div className='h-20 w-20 bg-primary rounded-full text-white flex items-center justify-center'>
						<ChatBubbleIcon className='w-10 h-10' />
					</div>
					<div className=''>
						<div className='font-bold text-xl mb-3'>
							Local Pickup
						</div>
						<div className=''>Check Out Locations</div>
					</div>
				</div>
			</div>
		</Container>
	);
}
