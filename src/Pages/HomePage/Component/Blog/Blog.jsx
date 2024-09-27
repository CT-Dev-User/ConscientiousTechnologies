import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "./blog.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Blog = () => {
  const sliderRef1 = useRef(null);
  const [blogData, setBlogData] = useState([]);
  const navigate = useNavigate();
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
    cssEase: "ease-in-out",
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
    return first20Words.join(" "); // Join them back into a single string
  };

  return (
    <div className="w-screen h-auto bg-black py-14 box-border text-white border-t-[.1px] border-[#cccc]">
      <div className="lg:w-[85%] mx-auto w-[90%]">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="lg:w-[85%] w-full text-base mt-2 font-normal">
          Revolutionizing Solutions : Unleashing Innovation through Client
          Success - A Software Development Company's Journey in Crafting
          Customized Solutions for Maximum Impact."
        </p>
      </div>
      <div className="lg:flex text-white w-[85%] gap-9 flex-wrap mx-auto justify-center mt-7 hidden">
        {blogData.map((items, i) => {
          return (
            <div
              style={{
                backgroundImage: `url(${items.homeImg})`,
                backgroundSize: "cover",
                backgroundPosition: "cover",
              }}
              className={`${
                i > 3
                  ? "hidden"
                  : "w-[35rem] h-96 bg-black relative blog-main-div"
              }`}
              key={i}
            >
              <div className="blog-child-div flex flex-col justify-between">
                <div className="flex flex-col justify-around gap-4">
                  <h1 className="font-semibold text-lg">
                    {extractFirst10Words(items.heading, 5)}...
                  </h1>
                  <p className="text-sm">
                    {" "}
                    {extractFirst10Words(items.subHeading, 10)}...
                  </p>
                </div>
                <button
                  className="relative overflow-hidden border border-[white] px-4 py-2 w-fit text-xs group"
                  onClick={() => navigate(`/blog/${items._id}`)}
                >
                  <span className="absolute inset-0 bg-[#33B7D4] transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                  <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">
                    Learn More <span className="font-bold">&rarr;</span>
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="lg:hidden w-[90%] h-auto mx-auto mt-10">
        <Slider {...settings} className="w-full" ref={sliderRef1}>
          {blogData.map((items, i) => {
            return (
              <div className="w-full h-80" key={i}>
                <div
                  className="w-full h-full relative"
                  style={{
                    backgroundImage: `url(${items.homeImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "cover",
                  }}
                >
                  <div className="w-full absolute flex flex-col justify-around bottom-0 h-3/5 bg-[black] box-border p-2 opacity-[0.8]">
                    <div className="flex flex-col justify-around gap-4">
                      <h1 className="font-semibold text-lg">
                        {extractFirst10Words(items.heading, 5)}...
                      </h1>
                      <p className="text-base">
                        {" "}
                        {extractFirst10Words(items.subHeading, 10)}...
                      </p>
                    </div>

                    <button
                      className="relative overflow-hidden border border-[white] px-4 py-2 w-fit text-xs group"
                      onClick={() => navigate(`/blog/${items._id}`)}
                    >
                      <span className="absolute inset-0 bg-[#33B7D4] transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                      <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">
                        Learn More <span className="font-bold">&rarr;</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="lg:hidden w-full flex gap-5 text-white justify-end mt-12 pe-5 box-border">
        <button
          className="w-20 h-11 shadow-sm shadow-[gray] p-1"
          onClick={goToPrevSlide}
        >
          &#9666; <span>PREV</span>
        </button>
        <button
          className="w-20 h-11 shadow-sm shadow-[gray] p-1"
          onClick={goToNextSlide}
        >
          <span>NEXT</span> &#9656;
        </button>
      </div>
    </div>
  );
};

export default Blog;
