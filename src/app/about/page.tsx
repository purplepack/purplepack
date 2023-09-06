import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import ContactCard from '@/emma/about_su/contact';
import Enquiries from '@/emma/about_su/enquiries';
import AboutCard from '@/emma/about_su/textimage';
import { ABOUT_CARD, CONTACT_CARD, QUESTION_CARD } from '@/lib/const';
import Link from 'next/link';
import React from 'react';

export default function AboutPage() {
	return (
		<>
			<section className=' bg-white'>
				<div className='md:pt-32'>
					<div className=''>
						{ABOUT_CARD.map((card, k) => (
							<AboutCard
								key={k}
								bgcolor={card.bgcolor}
								txtcolor={card.txtcolor}
								image={card.image}
								title={card.title}
								description={card.description}
							/>
						))}
					</div>
				</div>
			</section>
			<Container>
				<div className='w-full mb-5 pt-10'>
					<div className=' flex w-full justify-center text-center text-4xl font-bold p-5'>
						Why choose Purplepack?
					</div>
					<div className='flex flex-col gap-10 justify-center md:flex-row'>
						{QUESTION_CARD.map((question, k) => (
							<ContactCard
								key={k}
								icon={question.image}
								title={question.title}
								description={question.description}
							/>
						))}
					</div>
				</div>
				<div className=' flex justify-center'>
					<Button
						className=' text-white rounded-lg bg-black'
						asChild
					>
						<Link
							href={'/kitchen'}
							className='shrink-0 whitespace-nowrap'
						>
							VISIT KITCHEN
						</Link>
					</Button>
				</div>
			</Container>
			<Container>
				<div className='p-5'>
					<div className='w-full flex  justify-center text-center font-bold text-4xl'>
						Get in touch with our team:
					</div>
					<div className='flex flex-col gap-10 justify-center md:flex-row'>
						{CONTACT_CARD.map((contact, k) => (
							<ContactCard
								key={k}
								icon={contact.icon}
								title={contact.title}
								description={contact.description}
							/>
						))}
					</div>
				</div>
				<div className='flex justify-center'>
					<Button
						className=' text-white rounded-lg bg-black'
						asChild
					>
						<Link
							href={'/faqs'}
							className='shrink-0 whitespace-nowrap'
						>
							FAQS
						</Link>
					</Button>
				</div>
			</Container>
			<section className=' bg-white text-black py-12'>
				<Container>
					<div className=' font-bold flex justify-center text-2xl'>
						General Enquiries
					</div>
					<Enquiries />
				</Container>
			</section>
		</>
	);
}
