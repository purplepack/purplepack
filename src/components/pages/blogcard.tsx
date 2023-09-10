'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '../../../sanity/lib/image';

export default function BlogCard({ post }: { post: PostI }) {
	return (
		<motion.div
			className='flex flex-col overflow-hidden shrink-0 md:flex-row shadow hover:shadow-xl'
			initial={{ opacity: 0, rotateY: -180 }}
			animate={{ opacity: 1, rotateY: 0 }}
			transition={{ duration: 0.1 }}
		>
			<div className='bg-white rounded-lg shadow-md'>
				<div className='w-full aspect-video'>
					<Image
						width={350}
						height={400}
						src={urlForImage(post.mainImage.asset).url()}
						alt={post.title}
						className='rounded-lg h-full w-full object-cover object-center'
					/>
				</div>
				<div className='p-4 max-w-md'>
					<h1 className='text-xl font-semibold'>{post.title}</h1>
					<p className='text-gray-500 text-sm mb-2'>
						{post.createdAt} by {post.author._type}
					</p>
					<div className=' line-clamp-2'>
						<PortableText value={post.body} />
					</div>
					<Link
						href={`/blog/${post.slug.current}`}
						className='text-primary mt-2'
					>
						Read More
					</Link>
				</div>
			</div>
		</motion.div>
	);
}
