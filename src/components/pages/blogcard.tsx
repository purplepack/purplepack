'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '../../../sanity/lib/image';
import AuthorCard from '../blog/author-card';

export default function BlogCard({ post }: { post: PostI }) {
	return (
		<motion.div
			className='flex flex-col shrink-0 md:flex-row hover:shadow-xl bg-secondary  rounded-2xl shadow-md overflow-hidden'
			initial={{ opacity: 0, rotateY: -180 }}
			animate={{ opacity: 1, rotateY: 0 }}
			transition={{ duration: 0.1 }}
		>
			<div className=''>
				<div className='w-full aspect-video'>
					<Image
						width={350}
						height={400}
						src={urlForImage(post.mainImage.asset).url()}
						alt={post.title}
						className='h-full w-full object-cover object-center'
					/>
				</div>
				<div className='p-4 max-w-md'>
					<h1 className='text-xl font-semibold'>{post.title}</h1>
					<div className='flex items-center  justify-between w-full text-gray-500 text-xs mb-2'>
						<div className=''>
							<div className='grid'>
								{new Date(
									post._createdAt
								).toDateString()}{' '}
							</div>
							<div className='uppercase'>
								{post.author.name}
							</div>
						</div>
						<AuthorCard author={post.author} />
					</div>
					<div className=' line-clamp-2 text-foreground text-xs mb-3'>
						<PortableText value={post.body} />
					</div>
					<Link
						href={`/blog/${post.slug.current}`}
						className='text-primary mt-2 text-xs uppercase'
					>
						Read More
					</Link>
				</div>
			</div>
		</motion.div>
	);
}
