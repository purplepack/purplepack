import { Container } from '@/components/layout/container';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { urlForImage } from '../../../sanity/lib/image';
import { client } from '../../../sanity/lib/client';
async function getData() {
	const query = `*[_type == 'post']`;
	const data = await client.fetch(query);
	return data;
}

export default async function BlogPage() {
	const data = (await getData()) as PostI[];
	console.log(data[0].video);
	return (
		<Container>
			<div className='pt-40'>
				<h1 className='text-3xl'>All Post</h1>
				<div className='flex flex-col gap-5'>
					{data.length > 0 &&
						data.map((post) => (
							<Link
								href={`/blog/${post.slug.current}`}
								prefetch
								key={post._id}
								className='flex gap-2'
							>
								<div className='h-40 w-96 rounded-xl overflow-hidden bg-primary'>
									<Image
										className='h-full w-full object-center object-cover'
										src={urlForImage(
											post.mainImage.asset
										).url()}
										height={160}
										width={384}
										alt={post.mainImage.alt}
									/>
								</div>
								<div className=''>
									<div className='text-xl'>
										{post.title}
									</div>
								</div>
							</Link>
						))}
					{data.length === 0 && <p>No post show</p>}
				</div>
			</div>
		</Container>
	);
}
