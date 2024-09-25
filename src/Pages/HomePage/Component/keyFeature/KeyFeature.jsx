import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import leftArr from '../assets/keyFeature/leftArr.png';
import rightArr from '../assets/keyFeature/rightArr.png';
import "./keyfeature.css"
import axios from 'axios';
const KeyFeature = () => {
  const sliderRef = useRef(null);
  const [KeyFeatureData, setKeyFeatureData] = useState([]);
  const fetchKeyFeatureData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/get-key-feature-data");
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
    autoplaySpeed: 3000,
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
    <div className='w-[100vw] h-auto pt-[60px] md:pt-[30px] md:pb-[50px] relative box-border'>
      <div className='h-[90vh] md:h-auto'>
        <Slider {...settings} ref={sliderRef}>
          {KeyFeatureData && KeyFeatureData.map((item, i) => {
            return (
              <div key={i}>
                <div className='flex w-[100vw] h-[90vh] md:flex-col md:h-[80vh]'>
                  <div className='w-[40%] h-[100%] md:hidden' style={{ backgroundImage: `url(${item.keyFeatureImag})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                  </div>
                  <div className='w-[60%] h-[100%] md:w-[100vw] md:h-[70%]'>
                    <div className='w-[90%] md:w-[100%] mx-auto h-[15%] flex md:mt-2 box-border pt-[10px] '>
                      <div>
                        <h2 className='font-bold text-3xl md:text-xl md:ms-4 text-[#3970F0] 2xl:text-[2.5rem]'>Our Key Features</h2>
                        <p className='text-[16px] w-[100%] mt-1 md:text-[14px] md:mx-auto py-4'>Services That We Deliver Makes Us Dignified As One of The Top Software Development Companies.</p>
                      </div>
                    </div>
                    <h2 className='font-semibold text-2xl ms-[50px] mt-[20px] md:ms-[20px] md:text-[18px] md:mt-[10px] py-6'> {item.keyFeatureTitle} </h2>
                    <div className='hidden md:block w-[92%] h-[46%] mx-auto' style={{ backgroundImage: `url(${item.keyFeatureImag})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
                    </div>
                    <div className='w-[90%] h-auto grid grid-cols-3 mx-auto md:flex flex-col gap-[30px] md:gap-[20px] md:ms-5 mt-[20px]'>
                      <div className='col-start-1 col-span-2 flex md:flex-1 md:w-[100%] h-fit'>
                        <h1 className='text-[#FF7E20] text-3xl md:text-[16px] font-semibold'> 01 </h1>
                        <div>
                          <h3 className='font-semibold text-xl ml-4 md:text-[16px]'>{item.point_one_Title}</h3>
                          <p className='w-3/4 ml-4 md:w-[96%] md:text-[12px] text-[14px]'>{item.point_one_Desc}</p>
                        </div>
                      </div>
                      <div className='col-start-2 col-span-2 flex md:flex-1 md:w-[100%] h-fit'>
                        <h1 className='text-[#FF7E20] text-3xl font-semibold md:text-[16px]'> 02 </h1>
                        <div>
                          <h3 className='font-semibold text-xl ml-4 md:text-[16px]'>{item.point_two_Title}</h3>
                          <p className='w-3/4 ml-4 md:w-[96%] md:text-[12px] text-[14px]'>{item.point_two_Desc}</p>
                        </div>
                      </div>
                      <div className='col-start-1 col-span-2 flex md:flex-1 md:w-[100%] h-fit'>
                        <h1 className='text-[#FF7E20] text-3xl font-semibold md:text-[16px]'> 03 </h1>
                        <div>
                          <h3 className='font-semibold text-xl ml-4 md:text-[16px]'>{item.point_three_Title}</h3>
                          <p className='w-3/4 ml-4 md:w-[96%] md:text-[12px] text-[14px]'>{item.point_three_Desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
        <div className='flex gap-[20px] md:hidden block absolute top-[80px] right-[30px]'>
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
        <div className='hidden w-[100%] md:flex gap-[20px] text-black bg-white justify-end pe-[20px] box-border'>
          <button className="w-[80px] h-[45px] shadow-sm shadow-[grey] p-1" onClick={goToPrevSlide}>&#9666; {" "}<span>PREV</span></button>
          <button className="w-[80px] h-[45px] shadow-sm shadow-[grey] p-1" onClick={goToNextSlide}><span>NEXT</span>{" "}&#9656;</button>
        </div>
      </div>
    </div>

  )
}

export default KeyFeature;
