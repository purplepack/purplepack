'use client';
import Image from 'next/image';
import { Container } from './container';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import Link from 'next/link';
import { NAVBAR_ITEMS, PROFILE } from '@/lib/data';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import React from 'react';
import { ModeSwitch } from '../mode-switch';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
	const pathname = usePathname();
	return (
		<div
			className={`w-full bg-primary text-primary-foreground ${
				!pathname.startsWith('/create') && 'fixed'
			} z-50`}
		>
			<div className='bg-background/80 px-3 py-2'>
				<Container>
					<div className='text-foreground grid place-items-center text-xs sm:text-base'>
						Ready to eat in no time
					</div>
				</Container>
			</div>
			<div className='px-3 py-2'>
				<Container>
					<div className='flex justify-between items-center gap-3'>
						<Link
							href='/'
							className='h-12 md:h-20 shrink-0 grow-0 flex items-center gap-2'
						>
							<Image
								src={'/logo.png'}
								height={80}
								width={80}
								alt={`${PROFILE.name} Logo`}
								className='w-full h-full object-contain'
							/>
							<div className='hidden md:flex whitespace-nowrap uppercase'>
								{PROFILE.name}
							</div>
						</Link>
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
							{/* <Button
								asChild
								variant='ghost'
							>
								<Link href='/about#store-locator'>
									VISIT STORE
								</Link>
							</Button> */}
						</div>
						<div className='flex gap-2'>
							<ModeSwitch />
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
										<Link
											href='/'
											className='h-20 shrink-0 grow-0 flex items-center gap-2'
										>
											<Image
												src={'/logo.png'}
												height={80}
												width={80}
												alt={`${PROFILE.name} Logo`}
												className='w-full h-full object-contain'
											/>
										</Link>
										<SheetClose
											asChild
											className=''
										>
											<Link href='/'>
												HOME
											</Link>
										</SheetClose>
										{NAVBAR_ITEMS.map(
											(item, k) => (
												<SheetClose
													asChild
													key={k}
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
												</SheetClose>
											)
										)}
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
