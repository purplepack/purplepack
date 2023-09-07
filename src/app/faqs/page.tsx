import { FaqAccordion } from '@/components/faq-accordion';
import { Container } from '@/components/layout/container';
import Image from 'next/image';
import React from 'react';

export default function Faqs() {
	return (
		<div className=''>
			<div className='w-full aspect-video md:aspect-[3/1] overflow-hidden relative'>
				<Image
					src='/image17.JPG'
					alt=''
					height={400}
					width={1200}
					className='h-full w-full object-cover object-center'
				/>
				<div className='absolute h-full w-full bg-black/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white grid place-items-center text-lg font-bold md:text-3xl'>
					FREQUENTLY ASKED QUESTIONS
				</div>
			</div>
			<Container>
				<div className='px-5 py-20'>
					<FaqAccordion />
				</div>
			</Container>
		</div>
	);
}
