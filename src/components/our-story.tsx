import React from 'react';
import { Container } from './layout/container';

export default function OurStory() {
	return (
		<Container>
			<div className='px-5 pb-20 flex flex-col gap-5 items-center'>
				<h1 className='text-3xl font-bold'>OUR STORY </h1>
				<p className='text-xl max-w-2xl text-center'>
					This ready meal line was created because we want to
					provide irresistible African food that offers customers
					a quick and authentic local experience! Purple pack
					foods highlights indigenous flavours and ingredients
					through its unique African dishes.
				</p>
			</div>
		</Container>
	);
}
