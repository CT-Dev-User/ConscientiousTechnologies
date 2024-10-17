import React, { useEffect, useState } from 'react'

const BlogTags = ({ blogTags }) => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const blogTag = blogTags.split(', ');
    setBlog(blogTag);
  }, [blogTags]);
  return (
    <div className='w-screen h-auto'>
      <div className='lg:w-[85%] mx-auto w-[95%]'>
        <h2 className='lg:text-3xl font-bold text-2xl text-[blue] lg:text-black'>Some Related Tags</h2>
        <div className='flex flex-wrap gap-5 py-[10px]'>
          {blog.map((tag, i) => (
            <p className='bg-[#EAEAEA] px-2 py-1 rounded font-medium font-poppins text-[#5B5B5B]  lg:text-base text-sm' key={i}>{tag}</p>
          ))}
        </div>

      </div>
    </div>
  )
}

export default BlogTags