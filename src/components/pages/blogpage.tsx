import React from 'react'
import BlogCard from './blogcard';

export default function BlogPage ({ posts }: {posts: BlogPost[]} ) {
     return (
       <div className="py-10 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-10 ">
         {posts.map((post) => (
           <BlogCard key={post.id} post={post} />
         ))}
       </div>
     );
};
