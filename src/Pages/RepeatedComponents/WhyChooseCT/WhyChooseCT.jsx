import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

const WhyChooseCTSlider = ({ category, subCategory }) => {
  const sliderRef = useRef(null);
  const [sliderData, setSliderData] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false, // Disable autoplay
    speed: 2500,
    autoplaySpeed: 0,
    arrows: false,
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
        `http://localhost:8080/get-choose-ct-slider-data-byCategorySubCategory/${category}/${subCategory}`
      );
      setSliderData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSliderData();
  }, []);

  return (
    <div className="w-screen h-auto">
      {sliderData.map((slider, i) => {
        return (
          <div key={i} className="w-screen h-auto lg:mt-24 mb-14 mt-7">
            <div className="lg:w-[85%] mx-auto w-full p-2 lg:p-0">
              <h1 className="lg:text-3xl font-bold mt-10 mb-5 text-2xl">
                {slider.heading}
              </h1>
              <p>{slider.subtitle}</p>
            </div>

            <div className="lg:w-[85%] mx-auto w-[90%]">
              <h1 className="lg:text-3xl font-bold mt-10 mb-5 text-2xl">
                {slider.logoHeading}
              </h1>
            </div>

            <div className="flex items-center justify-between lg:mx-[110px] mx-5">
              <button
                onClick={handlePrevSlide}
                className="btn-prev text-5xl font-normal hidden lg:block"
              >
                ‹
              </button>

              <div className="lg:w-3/4 text-[white] w-[85%]">
                <Slider ref={sliderRef} {...settings}>
                  {slider.logos.map((items, i) => (
                    <div key={i}>
                      <div className="lg:w-[200px] lg:h-[100px] flex items-center w-[170px] h-[70px] ml-2">
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

              <button
                onClick={handleNextSlide}
                className="btn-next text-5xl font-normal hidden lg:block"
              >
                ›
              </button>
            </div>

            <div className="paretndiv lg:w-[85%] mx-auto mt-14 w-[90%]">
              {slider.points.map((point, i) => {
                return (
                  <div className="flex gap-2 flex-wrap" key={i}>
                    <div className="w-[18px] h-[18px] bg-violet-300"></div>
                    <p className="text-base">{point.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WhyChooseCTSlider;
