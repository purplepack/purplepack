import Image from 'next/image';
import React from 'react';

export default function AboutCard({
	image,
	title,
	description,
	bgcolor,
}: AboutCardI) {
	return (
		<div className='flex flex-col odd:lg:flex-row-reverse even:lg:flex-row h-full'>
			<div className='lg:w-5/12 w-full aspect-square'>
				<Image
					className='w-full h-full object-center object-cover'
					width={1000}
					height={1000}
					alt=''
					src={image}
				/>
			</div>
			<div
				className={`flex flex-col ${bgcolor} text-white items-center justify-center w-full lg:w-7/12 p-10 xl:p-20 gap-10 xl:gap-20`}
			>
				<h1 className='text-3xl lg:text-5xl font-bold'>{title}</h1>
				<p className=''>{description}</p>
			</div>
		</div>
	);
}
