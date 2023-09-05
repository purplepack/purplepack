'use client';
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
import { Button } from '../ui/button';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { NAVBAR_ITEMS, PROFILE } from '@/lib/data';
import { HamburgerMenuIcon, TrashIcon } from '@radix-ui/react-icons';
import React from 'react';
import { getCartItems, removeFromCart } from '@/lib/utils';

export const Navbar = () => {
	// const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

<<<<<<< HEAD
	// React.useEffect(() => {
	// 	const items = getCartItems();
	// 	setCartItems(items);
	// }, []);
=======
	React.useEffect(() => {
		const items = getCartItems();
		setCartItems(items);
	}, []);
>>>>>>> emma

	// const handleRemoveFromCart = (itemId: number): void => {
	// 	removeFromCart(itemId);
	// 	const updatedCart = cartItems.filter((item) => item.id !== itemId);
	// 	setCartItems(updatedCart);
	// };

	return (
		<div className='w-full bg-primary text-primary-foreground fixed z-50'>
			<div className='bg-foreground/80 px-3 py-2'>
				<Container>
					<div className='grid place-items-center'>
						Get 20% off your first order. Subscribe
					</div>
				</Container>
			</div>
			<div className='px-3 py-2'>
				<Container>
					<div className='flex justify-between items-center gap-3'>
						<div className='h-12 md:h-20 shrink-0 grow-0 flex items-center gap-2'>
							<Image
								src={'/logo.png'}
								height={80}
								width={80}
								alt='Purple Pack Logo'
								className='w-full h-full object-contain'
							/>
							<div className=' whitespace-nowrap uppercase'>
								{PROFILE.name}
							</div>
						</div>
						<div className='w-full md:flex justify-end gap-2 hidden '>
							{NAVBAR_ITEMS.map((item, k) => (
								<Button
									key={k}
									asChild
									variant='ghost'
								>
									<Link href={item.href}>
										{item.name}
									</Link>
								</Button>
							))}
							<Button
								asChild
								variant='outline'
								className='bg-background text-primary'
							>
								<Link href='/kitchen'>ORDER NOW</Link>
							</Button>
						</div>
						<div className='flex gap-2'>
							<Sheet>
								<SheetTrigger asChild>
									<Button
										variant='ghost'
										size='icon'
										className='relative shrink-0 grow-0'
									>
										<ShoppingCart className='h-6 w-6 ' />
										{/* {cartItems.length > 0 && (
											<div className='absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-4 w-4 bg-destructive flex items-center justify-center text-md rounded-full'>
												{cartItems.length}
											</div>
										)} */}
									</Button>
								</SheetTrigger>
								<SheetContent>
									<SheetHeader>
										<SheetTitle>CART</SheetTitle>
										<SheetDescription>
											{/* {cartItems.length > 0
												? `You have the following items in your cart:`
												: 'Your cart is empty'} */}
												Your cart is empty
										</SheetDescription>
									</SheetHeader>
									{/* <div className='grid gap-4 py-4'>
										{cartItems.map((item, k) => (
											<div
												className='flex items-center justify-between'
												key={k}
											>
												<div className=''>
													<Label
														htmlFor='name'
														className='text-right'
													>
														{
															item.name
														}
													</Label>
													<Label
														htmlFor='name'
														className='text-right'
													>
														{
															item.name
														}
													</Label>
												</div>
												<Button
													onClick={() =>
														handleRemoveFromCart(
															k
														)
													}
													variant='destructive'
													size='icon'
												>
													<TrashIcon className='h-4 w-4' />
												</Button>
											</div>
										))}
									</div>
									<SheetFooter>
										<SheetClose asChild>
											<Button>
												Make Order
											</Button>
										</SheetClose>
									</SheetFooter> */}
								</SheetContent>
							</Sheet>
							<Sheet>
								<SheetTrigger asChild>
									<Button
										variant='ghost'
										size='icon'
										className='shrink-0 grow-0 md:hidden'
									>
										<HamburgerMenuIcon className='h-6 w-6 ' />
									</Button>
								</SheetTrigger>
								<SheetContent>
									<div className='grid gap-4 py-8'>
										{NAVBAR_ITEMS.map(
											(item, k) => (
												<Button
													key={k}
													asChild
													variant='default'
												>
													<Link
														href={
															item.href
														}
													>
														{
															item.name
														}
													</Link>
												</Button>
											)
										)}
										<Button
											asChild
											variant='outline'
											className='bg-background text-primary'
										>
											<Link href='/kitchen'>
												ORDER NOW
											</Link>
										</Button>
									</div>
								</SheetContent>
							</Sheet>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
};
