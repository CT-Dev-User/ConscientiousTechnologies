import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import './blog.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Blog = () => {
  const sliderRef1 = useRef(null)
  const [blogData, setBlogData] = useState([])
  const navigate = useNavigate()
  const fetchBlogsData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/get-blogs-data");
      setBlogData(response.data.getData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogsData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'ease-in-out',
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const goToNextSlide = () => {
    sliderRef1.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef1.current.slickPrev();
  };

  const extractFirst10Words = (text, num) => {
    const words = text.split(/\s+/); // Split the text into words using whitespace as delimiter
    const first20Words = words.slice(0, num); // Get the first 20 words
    return first20Words.join(' '); // Join them back into a single string
  };

  return (
    <div className='w-[100vw] h-[auto] bg-[black] py-[60px] box-border text-[white] border-t-[.1px] border-[#cccc]'>
      <div className='w-[85%] mx-auto md:w-[90%]'>
        <h1 className='text-3xl font-bold'>Blog</h1>
        <p className='w-[70%] md:w-[100%] text-[14px] mt-2'>Revolutionizing Solutions : Unleashing Innovation through Client Success - A Software Development Company's Journey in Crafting Customized Solutions for Maximum Impact."</p>
      </div>
      <div className='flex text-white w-[85%] gap-[35px] flex-wrap mx-auto justify-center mt-[30px] md:hidden'>
        {blogData.map((items, i) => {
          return (
            <div style={{ backgroundImage: `url(${items.homeImg})`, backgroundSize: 'cover', backgroundPosition: 'cover' }} className={`${i > 3 ? 'hidden':'w-[560px] h-[380px] bg-[black] relative blog-main-div'}`} key={i}>
              <div className='blog-child-div flex flex-col justify-between'>
                <div className='flex flex-col justify-around gap-[15px]'>
                  <h1 className='font-semibold text-[18px]'>{extractFirst10Words(items.heading, 5)}...</h1>
                  <p className='text-[15px]'> {extractFirst10Words(items.subHeading, 10)}...</p>
                </div>
                <button
                  className="relative overflow-hidden border border-[white] px-[15px] py-[5px] w-[fit-content] text-[12px] group" onClick={()=>navigate(`/blog/${items._id}`)}>
                  <span className="absolute inset-0 bg-[#33B7D4] transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                  <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">Learn More{" "}<span className="font-bold">&rarr;</span></span>
                </button>
              </div>

            </div>
          )
        })}

      </div>
      <div className='hidden md:block w-[90%] h-[auto] mx-auto mt-[40px]'>
        <Slider {...settings} className='w-[100%]' ref={sliderRef1}>
          {blogData.map((items, i) => {
            return (
              <div className='w-[100%] h-[40vh]' key={i}>
                <div className='w-[100%] h-[100%] relative' style={{ backgroundImage: `url(${items.homeImg})`, backgroundSize: 'cover', backgroundPosition: 'cover' }}>
                  <div className='absolute flex flex-col justify-around bottom-0 h-[60%] bg-[black] box-border p-2 opacity-[0.8]'>
                    <div className='flex flex-col justify-around gap-[15px]'>
                      <h1 className='font-semibold text-[18px]'>{extractFirst10Words(items.heading, 5)}...</h1>
                      <p className='text-[15px]'> {extractFirst10Words(items.subHeading, 10)}...</p>
                    </div>

                    <button
                      className="relative overflow-hidden border border-[white] px-[15px] py-[5px] w-[fit-content] text-[12px] group" onClick={()=>navigate(`/blog/${items._id}`)}>
                      <span className="absolute inset-0 bg-[#33B7D4] transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                      <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">Learn More{" "}<span className="font-bold">&rarr;</span></span>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
      <div className='hidden w-[100%] md:flex gap-[20px] text-white justify-end mt-[50px] pe-[20px] box-border'>
        <button className="w-[80px] h-[45px] shadow-sm shadow-[gray] p-1" onClick={goToPrevSlide}>&#9666; {" "}<span>PREV</span></button>
        <button className="w-[80px] h-[45px] shadow-sm shadow-[gray] p-1" onClick={goToNextSlide}><span>NEXT</span>{" "}&#9656;</button>
      </div>
    </div>
  )
}

export default Blog
