import React from 'react';
import BlogCard from './blogcard';
import Image from 'next/image';

export default function BlogPage({ posts }: { posts: PostI[] }) {
	return posts.length > 0 ? (
		<div className='py-10 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-10 '>
			{posts.map((post, i) => (
				<BlogCard
					key={i}
					post={post}
					i={i}
				/>
			))}
		</div>
	) : (
		<div className='grid min-h-[30svh] place-items-center py-10'>
			<div className='flex flex-col w-full gap-4 items-center'>
				<Image
					src={'/empty.png'}
					alt=''
					height={200}
					width={200}
					className=' h-40 w-40'
				/>
				<div className='italic'>No blog available yet!!!</div>
			</div>
		</div>
	);
}
