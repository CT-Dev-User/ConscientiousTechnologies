import React from 'react'

const BlogTags = ({ blogTags }) => {
  return (
    <div className='w-[100vw] h-auto'>
      <div className='w-[85%] mx-auto md:w-[95%]'>
        <h2 className='text-[#3970F0] font-bold text-[26px] md:text-[18px]'>Some Related Tags</h2>
        <div className='flex flex-wrap gap-[20px] py-[10px]'>
          {blogTags.map((tag, i) => (
            <p className='bg-[#EAEAEA] px-[10px]' key={i}>{tag.tags}</p>
          ))}
        </div>

      </div>
    </div>
  )
}

export default BlogTags