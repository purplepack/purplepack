import Image from 'next/image';
import React from 'react';

export default function ContactCard({
	icon,
	title,
	description,
}: ContactCardI) {
	return (
		<div className='flex flex-col justify-start items-center w-full p-3 md:p-5 hover:border bg-primary rounded-xl'>
			<div className='w-1/3 rounded-full shrink-0 aspect-square bg-white p-3 mb-5'>
				<Image
					className='h-full w-full object-contain'
					width={100}
					height={100}
					alt=''
					src={icon}
				/>
			</div>
			<div className='w-full flex flex-col justify-center items-center text-center'>
				<h1 className=' font-bold'>{title}</h1>
				<p className='text-sm'>{description}</p>
			</div>
		</div>
	);
}
