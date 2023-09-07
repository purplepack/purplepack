'use client';
import { Button } from '@/components/ui/button';
import { PROFILE } from '@/lib/data';
import React from 'react';

export default function Enquiries() {
	const [formData, setFormData] = React.useState({
		name: '',
		email: '',
		phone: '',
		subject: '',
		body: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const generateWhatsAppLink = () => {
		const { name, email, phone, subject, body } = formData;

		// Build the WhatsApp link
		const whatsappText = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ASubject: ${subject}%0ABody: ${body}`;
		const whatsappLink = `https://wa.me/${PROFILE.phone}/?text=${whatsappText}`;

		// Redirect the user to WhatsApp
		window.location.href = whatsappLink;
	};

	return (
		<div>
			<form className=' flex flex-col justify-center p-10 w-full gap-3'>
				<input
					className=' w-full h-12 outline focus:outline bg-inherit pl-5'
					type='text'
					name='name'
					placeholder='Full name'
					required
					onChange={handleChange}
				/>
				<input
					className=' w-full h-12 outline focus:outline bg-inherit pl-5'
					type='email'
					name='email'
					required
					placeholder='Email'
					onChange={handleChange}
				/>
				<input
					className=' w-full h-12 outline focus:outline bg-inherit pl-5'
					type='tel'
					name='phone'
					required
					placeholder='Phone'
					onChange={handleChange}
				/>
				<input
					className=' w-full h-12 outline focus:outline bg-inherit pl-5'
					type='text'
					name='subject'
					required
					placeholder='Nature of enquiry'
					onChange={handleChange}
				/>
				<input
					className=' w-full h-28 pb-16 outline focus:outline bg-inherit pl-5'
					type='text'
					name='body'
					placeholder='Message'
					onChange={handleChange}
					required
				/>
			</form>
			<div className='grid place-items-center'>
				<Button
					className='w-32'
					onClick={generateWhatsAppLink}
				>
					SUBMIT
				</Button>
			</div>
		</div>
	);
}
