'use client'
import { blogPosts } from '@/lib/data';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'

export default function IndividualPost() {
  const router = useRouter();
const { id } = router.query;
  const post: BlogPost | undefined = blogPosts.find((post) => post.id === id);
   if (!post) {
    return <div>Blog post not found.</div>;
  }
  return (
     <div>
      <h1 className="text-3xl font-semibold my-4">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-2">
        {post.date} by {post.author}
      </p>
      <Image width={350} height={400} src={post.image} alt={post.title} className='rounded-lg mb-4'/>
      <div className="text-gray-700">{post.content}</div>
    </div>
  )
}
