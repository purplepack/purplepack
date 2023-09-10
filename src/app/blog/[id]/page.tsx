import { Container } from '@/components/layout/container';
import { blogPosts } from '@/lib/data';
import Image from 'next/image';
import React from 'react';

export default function IndividualPost({ params }: { params: { id: string } }) {
	const post: BlogPost | undefined = blogPosts.find(
		(post) => post.id === params.id
	);
	if (!post) {
		return <div>Blog post not found.</div>;
	}
	return (
		<Container>
			<div className='py-40'>
				<h1 className='text-3xl font-semibold '>{post.title}</h1>
				<p className='text-gray-500 text-sm mb-2'>
					{post.date} by {post.author}
				</p>
				<Image
					width={350}
					height={400}
					src={post.image}
					alt={post.title}
					className='rounded-lg mb-4'
				/>
				<div className='text-gray-700'>{post.content}</div>
			</div>
		</Container>
	);
}
