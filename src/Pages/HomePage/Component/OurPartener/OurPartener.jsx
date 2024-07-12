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
      const response = await axios.get("http://localhost:8080/get-partener-data");
      setOurPartenerData(response.data.getdata);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOurPartenerData();
  }, []);


  return (
    <div className='w-[100vw] h-[120px] md:h-[100px] flex p-0 box-border'>
      <div className='bg-[white] w-[40%] md:w-[50%] flex justify-center items-center'> 
        <p className='text-end w-[90%] font-semibold md:text-[12px] text-[19px] md:ms-[0px] ms-[110px] md:text-right mr-[20px]'>
          Trusted By Startup & Fortune 500 Companies
        </p> 
      </div>
      <div className='w-[60%] bg-[#474747] text-[white] sm:w-[50%] h-[100%]'>
        <Slider {...settings}>
          {OurPartenerData.map((items, i) => {
            return (
              <div className='w-[25px] h-[80px] flex justify-center items-center md:h-[70px]' key={i}>
                <div className='bg-[black] w-[90%] h-[100%] md:h-[80%] flex justify-center items-center mt-[20px]'>
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
