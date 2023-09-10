import { Container } from '@/components/layout/container';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import React from 'react';
import { client } from '../../../../sanity/lib/client';
import { urlForImage } from '../../../../sanity/lib/image';

async function getData(slug: string) {
	const query = `*[_type == 'post' && slug.current == "${slug}"][0]`;
	const data = await client.fetch(query);
	return data;
}

export default async function IndividualPost({
	params,
}: {
	params: { slug: string };
}) {
	const post = (await getData(params.slug)) as PostI;
	if (!post) {
		return <div>Blog post not found.</div>;
	}
	return (
		<Container>
			<div className='py-40'>
				<h1 className='text-3xl font-semibold '>{post.title}</h1>
				<p className='text-gray-500 text-sm mb-2'>
					{post.createdAt} by {post.author._type}
				</p>
				<Image
					width={350}
					height={400}
					src={urlForImage(post.mainImage.asset).url()}
					alt={post.title}
					className='rounded-lg mb-4'
				/>
				<div className='text-gray-700'>
					<PortableText value={post.body} />
				</div>
			</div>
		</Container>
	);
}
