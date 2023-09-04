import Image from 'next/image';
import { Container } from './container';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '../ui/sheet';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

export const Navbar = () => {
	return (
		<div className='w-full bg-primary text-primary-foreground'>
			<div className='bg-black/50 px-3 py-2'>
				<Container>
					<div className='grid place-items-center'>
						Get 20% off your first order. Subscribe
					</div>
				</Container>
			</div>
			<div className='px-3 py-2'>
				<Container>
					<div className='flex justify-between items-center'>
						<div className='h-12 w-12'>
							<Image
								src={'/logo.png'}
								height={48}
								width={48}
								alt='Purple Pack Logo'
								className='w-full h-full object-contain'
							/>
						</div>
						<Sheet>
							<SheetTrigger asChild>
								<Button
									variant='ghost'
									size='icon'
								>
									<HamburgerMenuIcon className='h-5 w-5' />
								</Button>
							</SheetTrigger>
							<SheetContent>
								<SheetHeader>
									<SheetTitle>
										Edit profile
									</SheetTitle>
									<SheetDescription>
										Make changes to your profile
										here. Click save when you're
										done.
									</SheetDescription>
								</SheetHeader>
								<div className='grid gap-4 py-4'>
									<div className='grid grid-cols-4 items-center gap-4'>
										<Label
											htmlFor='name'
											className='text-right'
										>
											Name
										</Label>
										<Input
											id='name'
											value='Pedro Duarte'
											className='col-span-3'
										/>
									</div>
									<div className='grid grid-cols-4 items-center gap-4'>
										<Label
											htmlFor='username'
											className='text-right'
										>
											Username
										</Label>
										<Input
											id='username'
											value='@peduarte'
											className='col-span-3'
										/>
									</div>
								</div>
								<SheetFooter>
									<SheetClose asChild>
										<Button type='submit'>
											Save changes
										</Button>
									</SheetClose>
								</SheetFooter>
							</SheetContent>
						</Sheet>
					</div>
				</Container>
			</div>
		</div>
	);
};
