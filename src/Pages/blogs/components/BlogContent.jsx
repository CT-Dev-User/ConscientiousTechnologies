import React, { useRef, useEffect, useState } from 'react';

const BlogContent = ({ blogData = [] }) => {
  console.log(blogData)
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
    <div className="flex lg:w-[85vw] mx-auto pt-16 pb-10 main-div relative h-auto w-[95vw]">
      <div className="w-4/5 pr-5 md:w-full">
        {blogData.map((blog, index) => (
          <div key={blog._id} ref={el => blogRefs.current[index] = el} className="mb-5">
            <h2 className="text-xl lg:text-3xl font-bold mb-2 " id={`blogs${index}`}>{blog.Title}</h2>
            <div dangerouslySetInnerHTML={{ __html: blog.Desc }} className="text-gray-700" />
          </div>
        ))}
      </div>
      <div className="w-1/5 pl-5 relative lg:block hidden" ref={tocRef} style={{ top: '10px', right: '10px' }}>
        <div className="sticky top-10">
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
                  {blog.Title}
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
