'use client';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../ui/accordion';
import { Separator } from '../ui/separator';
import { Table, TableBody, TableCell, TableRow } from '../ui/table';
import { Container } from '../layout/container';
import Link from 'next/link';

export default function Product({ food }: { food: FoodI }) {
	const [hovered, setHovered] = React.useState<boolean>(false);
	return (
		<Container>
			<div className='pt-32'>
				<div className=' p-6 object-contain'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						<Image
							className='w-full aspect-square rounded-3xl'
							width={700}
							height={700}
							src={hovered ? food.hoverImage : food.image}
							alt='Harvest Salad Bowl'
							onMouseEnter={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}
						/>

						<div className='flex flex-col justify-start'>
							<div className='mb-4 space-y-3'>
								<h1 className='font-bold text-2xl'>
									{food.name}
								</h1>
								<p className='font-normal text-sm leading-6'>
									{food.description}
								</p>
							</div>
							<div>
								<Button
									type='button'
									variant='default'
									className='w-full text-white font-semibold h-12 text-lg '
									asChild
								>
									<Link href='/about#store-locator'>
										PURCHASE FROM CLOSEST STORE
									</Link>
								</Button>
							</div>
							<Accordion
								type='single'
								collapsible
								className='w-full'
								defaultValue='item-1'
							>
								<AccordionItem value='item-1'>
									<AccordionTrigger>
										Details
									</AccordionTrigger>
									<AccordionContent>
										{food.description}
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value='item-2'>
									<AccordionTrigger>
										Nutritional Information
									</AccordionTrigger>
									<AccordionContent>
										<Table>
											<TableBody>
												{food.nutrition.map(
													(
														description
													) => (
														<TableRow
															key={
																description.name
															}
														>
															<TableCell className='font-normal'>
																{
																	description.name
																}
															</TableCell>
															<TableCell className='text-right'>
																{
																	description.value
																}
															</TableCell>
														</TableRow>
													)
												)}
											</TableBody>
										</Table>
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value='item-3'>
									<AccordionTrigger>
										Full Ingredients
									</AccordionTrigger>
									<AccordionContent>
										{food.ingredients}
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</div>
					</div>
				</div>
				<div className='flex flex-col md:flex-row items-center  justify-around gap-5 text-center text-foreground px-3 py-8  font-bold text-sm md:text-xl bg-primary/30 rounded-xl'>
					<div className='max-w-[300px]'>{`Our chefs freshly prepare your food`}</div>
					<Separator className='bg-white h-0.5 w-20 md:h-10 md:w-0.5 lg:flex' />
					<div className='max-w-[300px]'>{`100% satisfaction`}</div>
					<Separator className='bg-white h-0.5 w-20 md:h-10 md:w-0.5 lg:flex' />
					<div className='max-w-[300px]'>{`Purchase at your local stores`}</div>
				</div>
			</div>
		</Container>
	);
}
