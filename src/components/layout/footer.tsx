import React from 'react';
import { Container } from './container';
import { Separator } from '../ui/separator';
import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { FOOTER_LINKS, PROFILE } from '@/lib/data';
import Image from 'next/image';

export default function Footer() {
	return (
		<div className='bg-primary text-white'>
			<div className='bg-black/60'>
				<Container>
					<div className='font-bold flex gap-5 flex-col md:flex-row p-3 items-center justify-between md:justify-around mt-10 text-sm'>
						<div className='w-32 flex flex-col items-center'>
							<div className=''>Email us</div>
							<Link href='mailto:purplepack03@gmail.com'>
								purplepack03@gmail.com
							</Link>
						</div>
						<Separator className='bg-white h-0.5 w-20 md:h-10 md:w-0.5 lg:flex' />
						<div className='w-32 flex flex-col items-center'>
							<div className=''>Whatsapp</div>
							<Link
								href={`https://wa.me/${PROFILE.phone}`}
							>
								{`+${PROFILE.phone}`}
							</Link>
						</div>
					</div>
				</Container>
			</div>
			<Separator className='bg-white h-0.5 lg:flex' />
			<Container>
				<Link
					href='/'
					className='px-3 md:px-5 pt-3 shrink-0 grow-0 flex flex-col items-center md:items-start justify-center md:justify-start gap-2'
				>
					<Image
						src={'/logo.png'}
						height={80}
						width={80}
						alt={`${PROFILE.name} Logo`}
						className='w-20 h-20 object-contain'
					/>
				</Link>
				<div className='grid gap-5 grid-cols-10 p-3 md:p-5'>
					<div className='col-span-10 md:col-span-4'>
						<div className='flex whitespace-nowrap uppercase text-xl'>
							{PROFILE.name}
						</div>
						<div className='flex flex-col items-center md:items-start justify-start font-bold'>
							<div className='font-normal pb-3 text-center md:text-start'>
								{`All you need to do is to pop your frozen
								ready meal In the microwave and it's
								ready to eat in no time!`}
							</div>
							<div className='flex items-center justify-center gap-3'>
								<Link href='https://www.instagram.com/purplepackfoods/'>
									<Instagram />
								</Link>
								<Link href='https://web.facebook.com/purplepackfoodie'>
									<Facebook />
								</Link>
								<Link href='https://twitter.com/purplepackfoods'>
									<Twitter />
								</Link>
							</div>
							<p className='font-normal  text-sm mt-2'>
								{PROFILE.address}
							</p>
						</div>
					</div>
					{FOOTER_LINKS.map((links, k) => (
						<div
							key={k}
							className='col-span-10 md:col-span-2 text-center'
						>
							<div className='flex flex-col items-center md:items-start justify-center w-full'>
								<div className='font-bold uppercase'>
									{links.heading}
								</div>
								<Separator className='bg-white h-0.5 w-20' />
								<div className='flex flex-col py-2 w-full'>
									{links.links.map((link, i) => (
										<Link
											key={i}
											href={link.href}
											className='uppercase w-full text-center md:text-start'
										>
											{link.title}
										</Link>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</Container>
			<div className='bg-black/60'>
				<Container>
					<div className='p-3 text-center'>
						{`© Copyright 2023 ${PROFILE.name} Ltd. All rights reserved`}
					</div>
				</Container>
			</div>
		</div>
	);
}
