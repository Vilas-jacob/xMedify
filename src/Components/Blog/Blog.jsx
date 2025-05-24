import React from 'react';
import BlogCard from './BlogCard';

function Blog() {
  return (
    <>
    <div className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-sky-400 text-lg font-semibold">Blog & News</h2>
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Read Our Latest News</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-30">
          <div>
            <BlogCard />
          </div>
          <div>
            <BlogCard />
          </div>
          <div>
            <BlogCard />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Blog