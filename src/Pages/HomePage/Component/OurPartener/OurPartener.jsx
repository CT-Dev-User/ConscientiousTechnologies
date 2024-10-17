import React, { useState } from 'react'
import axios from 'axios'
import Slider from 'react-slick'
import { useEffect } from 'react'
const OurPartener = () => {
  const [OurPartenerData, setOurPartenerData] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: "linear",
    arrows:false,
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
          slidesToShow: 3,
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

  const fetchOurPartenerData = async () => {
    try {
      const response = await axios.get("https://conscientious-technologies-backend.vercel.app/get-partener-data");
      setOurPartenerData(response.data.getdata);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOurPartenerData();
  }, []);


  return (
    <div className='w-screen lg:h-32 h-28 flex p-0 box-border'>
      <div className='bg-[white] lg:w-2/5 w-1/2 flex justify-center items-center'> 
        <p className='lg:text-end lg:w-[90%] font-semibold text-xs lg:text-xl lg:ms-[110px] text-right mr-5'>
          Trusted By Startup & Fortune 500 Companies
        </p> 
      </div>
      <div className='lg:w-3/5 bg-[#474747] text-[white] w-1/2 h-full'>
        <Slider {...settings}>
          {OurPartenerData.map((items, i) => {
            return (
              <div className='w-7 lg:h-20 flex justify-center items-center h-[70px]' key={i}>
                <div className='bg-[black] w-[90%] lg:h-full h-4/5 flex justify-center items-center mt-5'>
                  <img src={items.logo} alt={items.title} />
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default OurPartener
