import BlogPage from '@/components/pages/blogpage';
import React from 'react';
import { client } from '../../../sanity/lib/client';
import { Container } from '@/components/layout/container';

async function getData() {
	const query = `*[_type == 'post']`;
	const data = await client.fetch(query);
	return data;
}

export default async function Blog() {
	const data = (await getData()) as PostI[];
	return (
		<Container>
			<div className='pt-32'>
				<div className='p-6'>
					<h1 className='text-3xl font-semibold text-center text-black'>
						PurplePack Blog
					</h1>
					<BlogPage posts={data} />
				</div>
			</div>
		</Container>
	);
}
