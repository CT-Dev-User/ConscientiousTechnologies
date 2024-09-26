import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "./serviceWeOffer.css";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ServiceWeOffer = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [homeServiceData, setHomeServiceData] = useState([]);
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    dotsClass: "custom-dots",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
  };

  const handleServiceItemClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  const fetchHomeServiceData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/get-service-data"
      );
      setHomeServiceData(response.data.getData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHomeServiceData();
  }, []);

  return (
    <div
      id="service"
      className="w-screen bg-[black] h-auto md:pt-24 pt-10 md:pb-16 pb-0 text-[white] box-border"
    >
      <div className="w-[90%] lg:w-[85%] mx-auto">
        <h1 className="font-bold text-lg lg:text-3xl 2xl:text-[2.5rem]">Service We Offers</h1>
        <p className="w-full text-xs lg:text-base mt-3 font-normal">
          At CT, we are ready to offer end-to-end development that covers
          everything from business analysis to software delivery and support,
          help modernize your legacy software, or provide expert advisory at any
          stage of SDLC..{" "}
        </p>
      </div>
      <div className="hidden w-[90%] lg:w-[85%] mx-auto lg:flex gap-x-6 gap-y-10 flex-wrap mt-10">
        {homeServiceData.map((item, index) => (
          <div
            key={index}
            className="service-item w-[23%]"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleServiceItemClick(index)}
          >
            <div
              className="text-[white] w-[100%] min-h-96 relative text-sm"
              style={{
                backgroundImage: `url(${item.ServiceHomePageimage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="overlay"></div>
              <div
                className={
                  hoveredIndex === index
                    ? "w-[100%] h-[100%] absolute top-0 overlay show"
                    : "hidden"
                }
              >
                <div className="p-4">
                  {item.points.map((point, index) => (
                    <li key={index} className="mb-2 list-none">
                      <h3 className="text-sm font-semibold underline ">
                        {point.title}
                      </h3>
                      <p
                        className="font-normal text-xs"
                        dangerouslySetInnerHTML={{ __html: point.description }}
                      />{" "}
                      {/* Display description */}
                    </li>
                  ))}
                </div>
              </div>
              <button
                className="text-xs border border-[white] px-5 w-40 h-11 absolute bottom-[-10px] left-[-5px] text-center bg-cyan-500 cursor-pointer"
                style={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  transition: "opacity .4s ease-in-out",
                }}
                onClick={() => {
                  navigate(`/service/${item.title}`);
                }}
              >
                Explore More &rarr;
              </button>
              <button
                className="text-xs border border-[white] px-4 absolute bottom-[-10px] left-[-5px] bg-[#474747] w-52 h-11 text-center"
                style={{
                  opacity: hoveredIndex === index ? 0 : 1,
                  transition: "opacity .4s ease-in-out",
                }}
                onClick={() => {
                  navigate(`/Services/${item.title}`);
                }}
              >
                {item.title}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="lg:hidden flex w-[90%] flex-wrap mt-10 gap-4 mx-auto">
        {homeServiceData.map((item, index) => (
          <div
            className="w-fit-content border border-gray-300 rounded-6 p-1"
            key={index}
            onClick={() => handleServiceItemClick(index)}
          >
            <h3 className="text-xs">{item.title}</h3>
          </div>
        ))}
      </div>

      <div className="lg:hidden w-[90%] h-[auto] mx-auto mt-10">
        <Slider {...settings} className="w-[100%]" ref={sliderRef}>
          {homeServiceData.map((item, index) => (
            <div key={index} className="service-item">
              <div
                className="text-[white] w-[95%] h-[450px] bg-[white] relative text-xs gap-2"
                style={{
                  backgroundImage: `url(${item.ServiceHomePageimage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="overlay1"></div>
                <div className="w-[100%] h-[100%] absolute top-0">
                  <div
                    dangerouslySetInnerHTML={{ __html: item.points }}
                    className="py-1 px-2"
                  />
                </div>
                <button
                  className="border border-[white] px-[20px] absolute bottom-0 bg-[#474747] w-52 h-11 text-center"
                  onClick={() => {
                    navigate(`/Services/${item.title}`);
                  }}
                >
                  {item.title}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ServiceWeOffer;
