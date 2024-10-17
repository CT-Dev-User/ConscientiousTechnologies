import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useParams } from "react-router-dom";

const WhyChooseCTSlider = () => {
  const { subCategory } = useParams();
  const sliderRef = useRef(null);
  const [sliderData, setSliderData] = useState([]);

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute top-1/2 right-[-60px] transform -translate-y-1/2 cursor-pointer z-0 hidden md:block"
        onClick={onClick}
      >
        <div className="p-1 box-border w-fit rounded-[50%] flex justify-center items-center">
          <FaAngleRight className="text-black text-[2rem]  hover:text-[#0466C1] " />
        </div>
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="absolute top-1/2 left-[-60px] transform -translate-y-1/2 cursor-pointer z-0 hidden md:block"
        onClick={onClick}
      >
        <div className="p-1 box-border w-fit rounded-[50%] flex justify-center items-center">
          <FaAngleLeft className="text-black text-[2rem]  hover:text-[#0466C1] " />
        </div>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false, // Disable autoplay
    speed: 2500,
    autoplaySpeed: 0,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
        },
      },
    ],
  };

  const handlePrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const fetchSliderData = async () => {
    try {
      const response = await axios.get(
        `https://conscientious-technologies-backend.vercel.app/get-choose-ct-slider-data-byCategorySubCategory/Solutions/${subCategory}`
      );
      setSliderData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const data = [{}, {}, {}, {}];

  useEffect(() => {
    if (subCategory) {
      fetchSliderData();
    }
  }, [subCategory]); // Add subCategory as a dependency

  return (
    <div className="w-100 h-auto py-8">
      {sliderData.map((slider, i) => {
        return (
          <div key={i} className="w-screen h-auto py-4 lg:py-8">
            <div className="lg:w-[85%] mx-auto h-auto w-[95%]">
              <div className="mx-auto w-full lg:p-0 p-2">
                <h1 className="font-bold mt-10 mb-5 lg:text-3xl text-xl 2xl:text-[2.2rem]">
                  {slider.heading}
                </h1>
                <p className="lg:text-base text-sm">
                  {slider.subtitle}
                </p>
              </div>

              <div className="w-full">
                <h1 className=" font-bold mt-10 mb-5 lg:text-3xl text-xl 2xl:text-[2.2rem]">
                  {slider.logoHeading}
                </h1>
              </div>

              <div className="w-full flex items-center justify-between mx-5 lg:mx-0">
                <div className="w-[95%] mt-10 text-white mx-auto ">
                  <Slider ref={sliderRef} {...settings} className="w-[85%]">
                    {slider.logos.map((items, i) => (
                      <div key={i}>
                        <div className="lg:w-80 lg:h-32 flex items-center w-[90%] h-40 ">
                          <div className="bg-[#D9D9D9] w-[70%] lg:h-full h-4/5 flex justify-center items-center text-black">
                            <img
                              src={items.logo}
                              alt="fghjk"
                              className="w-full h-full"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>

              <div className="paretndiv mx-auto mt-14">
                {slider.points.map((point, i) => {
                  return (
                    <div className="flex gap-3" key={i}>
                      <div className="lg:w-4 lg:h-4 h-3 w-3 mt-2  bg-violet-300"></div>
                      <p className="lg:text-base text-sm mt-1">
                        {point.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WhyChooseCTSlider;
