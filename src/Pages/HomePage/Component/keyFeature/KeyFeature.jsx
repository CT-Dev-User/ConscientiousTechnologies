import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import leftArr from '../assets/keyFeature/leftArr.png';
import rightArr from '../assets/keyFeature/rightArr.png';
import "./keyfeature.css"
import axios from 'axios';
const KeyFeature = () => {
  const sliderRef = useRef(null);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const [KeyFeatureData, setKeyFeatureData] = useState([]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
        if (autoplayPaused) {
            slider.slickPause();
        } else {
            slider.slickPlay();
        }
    }
}, [autoplayPaused]);


const handleMouseEnter = () => {
  setAutoplayPaused(true);
};

const handleMouseLeave = () => {
  setAutoplayPaused(false);
};

  const fetchKeyFeatureData = async () => {
    try {
      const response = await axios.get("https://conscientious-technologies-backend.vercel.app/get-key-feature-data");
      setKeyFeatureData(response.data.getdata);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchKeyFeatureData();
  }, []);



  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: 'ease-in-out',
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className='w-screen h-auto lg:pt-14 pt-6 pb-16 lg:pb-0 relative box-border'>
      <div className='lg:h-[38rem] h-auto'>
        <Slider {...settings} ref={sliderRef}>
          {KeyFeatureData && KeyFeatureData.map((item, i) => {
            return (
              <div key={i}>
                <div className='flex w-screen lg:h-auto flex-col lg:flex-row h-4/5'>
                  <div className='w-2/5 lg:h-[38rem] lg:block hidden' style={{ backgroundImage: `url(${item.keyFeatureImag})`, backgroundSize: 'cover', backgroundPosition: 'center' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  </div>
                  <div className='lg:w-3/5 lg:h-full w-full h-[70%]'>
                    <div className='lg:w-[90%] w-full mx-auto h-[15%] flex mt-2 lg:mt-0 box-border pt-2'>
                      <div className='lg:w-full w-[90%] mx-auto'>
                        <h2 className='font-bold lg:text-3xl text-xl text-[#3970F0] 2xl:text-[2.5rem]'>Our Key Features</h2>
                        <p className='lg:text-base w-full mt-1 text-sm mx-auto py-4 lg:mx-0'>Services That We Deliver Makes Us Dignified As One of The Top Software Development Companies.</p>
                      </div>
                    </div>
                    <h2 className='font-semibold lg:text-2xl lg:ms-12 ms-5 text-lg mt-2 py-3'> {item.keyFeatureTitle} </h2>
                    <div className='lg:hidden w-11/12 h-[46%] mx-auto' style={{ backgroundImage: `url(${item.keyFeatureImag})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                    </div>
                    <div className='w-[90%] h-auto lg:grid grid-cols-3 mx-auto flex flex-col lg:gap-8 gap-5 lg:ms-10 ms-5 mt-5'>
                      <div className='col-start-1 col-span-2 flex flex-1 w-full h-fit'>
                        <h1 className='text-[#FF7E20] lg:text-3xl text-base font-semibold'> 01 </h1>
                        <div>
                          <h3 className='font-semibold lg:text-xl ml-4 text-base'>{item.point_one_Title}</h3>
                          <p className='lg:w-3/4 ml-4 w-[96%] text-xs lg:text-sm'>{item.point_one_Desc}</p>
                        </div>
                      </div>
                      <div className='col-start-2 col-span-2 flex flex-1 w-full h-fit'>
                        <h1 className='text-[#FF7E20] lg:text-3xl font-semibold text-base'> 02 </h1>
                        <div>
                          <h3 className='font-semibold lg:text-xl ml-4 text-base'>{item.point_two_Title}</h3>
                          <p className='lg:w-3/4 ml-4 w-[96%] text-xs lg:text-sm'>{item.point_two_Desc}</p>
                        </div>
                      </div>
                      <div className='col-start-1 col-span-2 flex flex-1 w-full h-fit'>
                        <h1 className='text-[#FF7E20] lg:text-3xl font-semibold text-base'> 03 </h1>
                        <div>
                          <h3 className='font-semibold lg:text-xl ml-4 text-base'>{item.point_three_Title}</h3>
                          <p className='w-3/4 ml-4 md:w-[96%] text-xs lg:text-sm'>{item.point_three_Desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
        <div className='lg:flex gap-5 absolute top-20 right-[30px] hidden'>
          <img
            src={rightArr}
            alt=""
            className={`w-[35px] h-[35px] hover-effect cursor-pointer scale-y-110 shadow-sm shadow-slate-900 active:bg-slate-800 bg-[white] text-[black]`}
            onClick={goToPrevSlide}
          />
          <img
            src={leftArr}
            alt=""
            className={`w-[35px] h-[35px] hover-effect cursor-pointer scale-y-110 shadow-sm shadow-slate-900 active:bg-slate-800`}
            onClick={goToNextSlide}
          />
        </div>
        <div className='lg:hidden w-full flex gap-5 text-black bg-white justify-end pe-5 box-border'>
          <button className="w-20 h-[45px] shadow-sm shadow-[grey] p-1" onClick={goToPrevSlide}>&#9666; {" "}<span>PREV</span></button>
          <button className="w-20 h-[45px] shadow-sm shadow-[grey] p-1" onClick={goToNextSlide}><span>NEXT</span>{" "}&#9656;</button>
        </div>
      </div>
    </div>

  )
}

export default KeyFeature;
