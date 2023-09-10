'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { truncateParagraph } from '@/lib/utils';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.div
      className="flex flex-col overflow-hidden shrink-0 md:flex-row"
      initial={{ opacity: 0, rotateY: -180 }}
      animate={{ opacity: 1, rotateY: 0 }} 
      transition={{ duration: 0.10 }} 
      whileHover={{ scale: 1.05 }}
    >
      <div className="bg-white rounded-lg shadow-md">
        <div className='w-full aspect-square'>
          <Image
            width={350}
            height={400}
            src={post.image}
            alt={post.title}
            className="rounded-lg h-full w-full"
          />
        </div>
        <div className="p-4 max-w-md">
          <h1 className="text-xl font-semibold">{post.title}</h1>
          <p className="text-gray-500 text-sm mb-2">
            {post.date} by {post.author}
          </p>
          <p className="text-gray-700">{truncateParagraph(post.content, 100)}</p>
          <Link href={`/blog/${post.id}`} className="text-primary mt-2">
            Read More
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
