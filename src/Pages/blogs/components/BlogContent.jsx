import React, { useRef, useEffect, useState } from 'react';

const BlogContent = ({ blogData = [] }) => {
  const blogRefs = useRef([]);
  const tocRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeLink, setActiveLink] = useState(null);

  const scrollToBlog = (index) => {
    blogRefs.current[index].scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = () => {
    const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;

    if (totalScrollHeight > 0) {
      const progress = (scrollPosition / totalScrollHeight) * 100;
      setScrollProgress(progress);
    }

    // Determine active link
    const visibleBlogs = blogRefs.current.findIndex(ref => {
      const rect = ref.getBoundingClientRect();
      return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
    });

    if (visibleBlogs !== -1) {
      setActiveLink(`${visibleBlogs}`);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex w-[85vw] mx-auto py-[30px] main-div relative h-auto md:w-[95vw]">
      <div className="w-4/5 pr-5 md:w-full">
        {blogData.map((blog, index) => (
          <div key={blog._id} ref={el => blogRefs.current[index] = el} className="mb-5">
            <h2 className="text-2xl font-bold mb-2 md:text-[18px]" id={`blogs${index}`}>{blog.blogTitle}</h2>
            <div dangerouslySetInnerHTML={{ __html: blog.blogDesc }} className="text-gray-700" />
          </div>
        ))}
      </div>
      <div className="w-1/5 pl-5 relative  md:hidden" ref={tocRef} style={{ top: '10px', right: '10px' }}>
        <div className="relative sticky top-[40px]">
          <h1 className="font-bold mb-4 ml-[10px]">Table of Contents</h1>
          <div className="absolute top-0 left-0 h-full w-1 bg-gray-200">
            <div className="bg-blue-500 w-full rounded" style={{ height: `${scrollProgress}%` }} />
          </div>
          <div className='ml-[10px]'>
            {blogData.map((blog, index) => (
              <div key={blog._id} className={`mb-2 ${activeLink === `${index}` ? 'bg-[#BED2FF] p-1 rounded' : ''}`}>
                <a href={`#blogs${index}`} onClick={(e) => {
                  e.preventDefault();
                  scrollToBlog(index);
                }} className={`text-blue-500 hover:underline ${activeLink === `${index}` ? 'h-auto' : ''}`}>
                  {blog.blogTitle}
                </a>
              </div>
            ))}
          </div>     
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
