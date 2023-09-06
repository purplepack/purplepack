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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Table, TableBody, TableCell, TableRow } from '../ui/table';
import { MealGauge, MealGauge1, NutritionalInformation } from '@/lib/const';
import { Container } from '../layout/container';

export default function Product({ food }: { food: FoodI }) {
	return (
		<Container>
			<div className='pt-32'>
				<div className=' p-6 object-contain'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						<Image
							className='w-full aspect-square rounded-3xl'
							width={700}
							height={700}
							src={food.image}
							alt='Harvest Salad Bowl'
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
								>
									PURCHASE FROM CLOSEST STORE
								</Button>
							</div>
							{/* <Tabs
								defaultValue='regular'
								className='w-[400px] space-y-6 '
							>
								<h1 className='font-semibold text-2xl'>
									Portion Size:
								</h1>
								<TabsList className='grid w-full grid-cols-2 bg-primary/30  '>
									<TabsTrigger
										className='text-primary'
										value='regular'
									>
										Regular
									</TabsTrigger>
									<TabsTrigger
										className='text-primary'
										value='large'
									>
										Large
									</TabsTrigger>
								</TabsList>
								<TabsContent value='regular'>
									<div className='flex items-center text-center object-contain'>
										{MealGauge.map(
											(item, index) => (
												<div
													key={index}
													className='border rounded-xl bg-transparent mx-2 px-4 py-2'
												>
													<p>
														{
															item.quantity
														}{' '}
														{
															item.info
														}
													</p>
												</div>
											)
										)}
									</div>
								</TabsContent>
								<TabsContent value='large'>
									<div className='flex items-center text-center object-contain'>
										{MealGauge1.map(
											(item, index) => (
												<div
													key={index}
													className='border rounded-xl bg-transparent mx-2 px-4 py-2'
												>
													<p>
														{
															item.quantity1
														}{' '}
														{
															item.info1
														}
													</p>
												</div>
											)
										)}
									</div>
								</TabsContent>
							</Tabs> */}

							<Accordion
								type='single'
								collapsible
								className='w-full'
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
				<div className='flex items-center  justify-around text-center h-32 text-foreground px-3 font-bold text-2xl bg-primary/30 rounded-xl'>
					<div className='max-w-[300px]'>{`Our chefs freshly prepare your food`}</div>
					<Separator
						orientation='vertical'
						className='bg-white'
					/>
					<div className='max-w-[300px]'>{`100% satisfaction or your money back`}</div>
					<Separator
						orientation='vertical'
						className='bg-white'
					/>
					<div className='max-w-[300px]'>{`Delivered to your door & ready in 3 minutes`}</div>
				</div>
			</div>
		</Container>
	);
}
