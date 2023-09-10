import { Container } from '@/components/layout/container';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import React from 'react';
import { client } from '../../../../sanity/lib/client';
import { urlForImage } from '../../../../sanity/lib/image';

async function getData(slug: string) {
	const query = `*[_type == 'post' && slug.current == "${slug}"][0]{
    title,
    _createdAt,
    author->,
    mainImage,
    body,
    slug,
  }`;
	const data = await client.fetch(query);
	return data;
}
const PortableTextImage = ({
	value,
}: {
	value: { asset: {}; alt: string };
}) => {
	return (
		<div className='grid shadow-lg rounded-2xl overflow-hidden my-5 border'>
			<Image
				src={urlForImage(value.asset).url()}
				alt={value.alt || ' '}
				loading='lazy'
				width={900}
				height={300}
				className='mx-auto w-full aspect-[2/1] object-cover object-center'
			/>
			<div className='h-10 w-full bg-primary/70 grid place-items-center'>
				{value.alt}
			</div>
		</div>
	);
};

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
		<div className='mx-auto max-w-3xl'>
			<div className='py-40 w-full'>
				<h1 className='text-3xl font-semibold '>{post.title}</h1>
				<p className='text-gray-500 text-sm mb-2'>
					{new Date(post._createdAt).toDateString()} by{' '}
					{post.author.name}
				</p>
				<div className='w-full aspect-video rounded-2xl overflow-hidden mb-10'>
					<Image
						width={350}
						height={400}
						src={urlForImage(post.mainImage.asset).url()}
						alt={post.title}
						className='w-full h-full object-cover object-center '
					/>
				</div>
				<div className='text-foreground flex flex-col gap-5'>
					<PortableText
						value={post.body}
						components={{
							types: {
								image: PortableTextImage,
							},
						}}
					/>
				</div>
			</div>
		</div>
	);
}
