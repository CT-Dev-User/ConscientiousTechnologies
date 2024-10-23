import React, { useEffect, useState } from "react";
import "./industriesWeServe.css"; // Assuming you have additional styles in this file
import axios from "axios";
import { useNavigate } from "react-router-dom";

const IndustriesWeServe = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [homeIndustriesData, setHomeIndustriesData] = useState([]);
  const navigate = useNavigate();

  const getHomeIndustriesData = async () => {
    try {
      const response = await axios.get(
        "https://conscientious-technologies-backend.vercel.app/get-latest-industry-data"
      );
      if (response.status === 200) {
        setHomeIndustriesData(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHomeIndustriesData();
  }, []);

  const firstTwelveData = homeIndustriesData.slice(0, 12);

  return (
    <div
      className="w-screen h-auto bg-white lg:pt-24 box-border text-black pb-14 pt-14"
      id="industries"
    >
      <div className="w-[95%] lg:w-[85%] mx-auto">
        <h1 className="lg:text-3xl font-bold text-2xl">Industries We Serve</h1>
        <p className="lg:w-[95%] text-base mt-2 md:mt-1 w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut
          nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum
          eget. Integer amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="lg:flex text-white w-[90%] gap-4 flex-wrap mx-auto justify-center mt-4 hidden">
        {firstTwelveData.map((item, index) => (
          <div
            className="w-[22.5%] lg:h-72 2xl:h-96 bg-black relative main-div overflow-hidden"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            key={index}
          >
            <div
              className="bg-image bg-center bg-cover w-full h-full"
              style={{
                backgroundImage: `url(${item.cardImage})`,
                transform: hoveredIndex === index ? "scale(1.5)" : "scale(1)",
                transition: "transform 1.5s ease-in-out",
              }}
            ></div>
            <div className="w-full border-t-2 border-white absolute bottom-0 text-center flex items-center justify-center font-medium cursor-pointer title-div text-base lg:text-base 2xl:text-xl py-2">
              {item.cardTitle}
            </div>
            <div className="desc-div ">
              <p
                className="text-xs 2xl:text-sm text-center py-7 w-4/5 mx-auto "
               
              >{item.cardDescription}</p>
              <div className="flex justify-center">
                <button
                  className="relative overflow-hidden border border-white hover:border-[#33B7D4] px-4 py-2 w-fit text-xs group mt-5 mx-auto"
                  style={{ position: "relative" }}
                  onClick={() => {
                    navigate(`/industries/${item.industryName}`);
                  }}
                >
                  <span className="absolute inset-0 bg-[#33B7D4] transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                  <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">
                    Learn More <span className="font-bold">&rarr;</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:hidden flex text-white flex-wrap mx-auto justify-center mt-4 w-full gap-5">
        {firstTwelveData.map((item, index) => (
          <div
            className="bg-black relative w-[45%] h-32"
            style={{
              backgroundImage: `url(${item.cardImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            key={index}
          >
            <div className="w-full border-t-2 border-white absolute bottom-0 text-center flex items-center justify-center font-medium cursor-pointer title-div text-sm">
              {item.cardTitle}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesWeServe;
