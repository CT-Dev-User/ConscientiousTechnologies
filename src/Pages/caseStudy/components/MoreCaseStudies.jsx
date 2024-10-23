import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MoreCaseStudies = () => {

  const moreCaseStudies = [
    {
      title: 'Aga Khan Foundation boosts employee experience',
      date: '02 Feb 2024',
      image: '',
      link: ''
    },
    {
      title: 'Another success story for Company ABC',
      date: '10 Jan 2024',
      image: '',
      link: ''
    },
    {
      title: 'New heights reached with XYZ Solutions',
      date: '15 Dec 2023',
      image: '',
      link: ''
    },
    {
      title: 'Case study of DEF Corp’s transformation',
      date: '20 Nov 2023',
      image: '',
      link: ''
    },
    {
      title: 'Growth story with GHI Group',
      date: '05 Oct 2023',
      image: '',
      link: ''
    }
  ];

  const settings = {
    dots: true, // To show dots navigation
    infinite: true, // Allows infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplyaspeed: 1000,
    responsive: [
      {
        breakpoint: 1024, // For tablet devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600, // For mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className='w-screen py-14'>
      <div className='w-[90%] lg:w-[85%] mx-auto'>
        <h1 className='text-base lg:text-[1.5rem] 2xl:text-4xl font-bold text-[#3970F0]'>More Case Studies</h1>
        <div className='w-full mt-7'>
          <Slider {...settings}>
            {moreCaseStudies.map((item, index) => (
              <div className='w-full'>
                <div key={index} className='lg:w-[95%] mx-auto md:w-[95%] border  w-full flex flex-col h-[400px]'>
                  <div className='bg-slate-600 h-[45%]'>
                    <img src={item.image} alt={item.title} className='w-full h-full object-cover' />
                  </div>
                  <div className='h-[55%]  p-5'>
                    <h2 className='text-lg 2xl:text-2xl w-[85%] font-medium h-[80%]'>{item.title}</h2>
                    <p className='h-[20%]'>{item.date}</p>
                  </div>
                </div>
              </div>

            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MoreCaseStudies;
