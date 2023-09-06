import Image from 'next/image';
import React from 'react';

export default function ContactCard({
	icon,
	title,
	description,
}: ContactCardI) {
	return (
		<div className='flex flex-col justify-center items-center w-full h-full p-5'>
			<div className='w-1/4 aspect-square'>
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
				<p>{description}</p>
			</div>
		</div>
	);
}
