import BlogPage from "@/components/pages/blogpage";
import { blogPosts } from "@/lib/data";
import React from "react";

export default function Blog() {
  return (
   <div className="pt-32">
     <div className="p-6">
      <h1 className="text-3xl font-semibold text-center text-black">PurplePack Blog</h1>
      <BlogPage posts={blogPosts} />
    </div>
   </div>
  );
};

