import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';

const RelatedBlog = () => {
  const [relatedBlog, setRelatedBlog] = useState([])
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,

        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,

        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },

    ]
  };

  const fetchAllBlogData = async () => {
    const response = await axios.get("http://localhost:8080/get-blogs-data")
    if (response.status === 200) {
      setRelatedBlog(response.data.getData)
    }
  }

  useEffect(() => {
    fetchAllBlogData()
  }, [])



  const extractFirst10Words = (text, num) => {
    const words = text.split(/\s+/); // Split the text into words using whitespace as delimiter
    const first20Words = words.slice(0, num); // Get the first 20 words
    return first20Words.join(' '); // Join them back into a single string
  };

  return (
    <div className='w-screen h-auto py-16'>
      <div className='lg:w-[85%] mx-auto w-[95%]'>
        <h2 className='lg:text-3xl font-bold text-2xl text-[blue] lg:text-black'>Related Blog</h2>
        <div className='w-[100%] h-[100%] mx-auto md:hidden'>
          <Slider {...settings}>
            {relatedBlog.map((items, i) => {
              return (
                <div className='w-[250px] h-[120px] flex gap-[20px] items-center mt-3' key={i}>
                  <div className='w-[90%] h-[100%] flex justify-between border border-[#EAEAEA] rounded'>
                    <img src={items.homeImg} alt={items.title} className='w-[48%] h-[100%] rounded-l' />
                    <div className='w-[48%] px-[5px] pt-[10px] border-box flex flex-col h-[100%] justify-between font-semibold'>
                      <h6 className='text-[16px]'>{extractFirst10Words(items.heading, 5)}</h6>
                      <h2 className='text-[25px] text-end'>&rarr;</h2>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
        <div className='md:flex flex-wrap gap-[20px] w-[100%] h-[50vh] overflow-y-auto hidden'>
          {relatedBlog.map((items, i) => {
            return (
              <div className='w-[100%] h-[180px] flex mt-[20px] bg-[#BED2FF]' key={`blog${i}`}>
                <img src={items.homeImg} alt={items.title} className='w-[48%] h-[100%]' />
                <div className='w-[48%] px-[5px] pt-[10px] border-box flex flex-col h-[100%] justify-between'>
                  <h6 className='text-[16px] font-bold'>{extractFirst10Words(items.heading, 5)}</h6>
                  <h2 className='text-[32px] font-bold text-end'>&rarr;</h2>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default RelatedBlog