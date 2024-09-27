import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SolutionHeader = () => {
  const { subCategory } = useParams(); // Destructure subCategory from useParams
  const [headerData, setHeaderData] = useState([]);

  const fetchHeader = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/get-header-by-headerCategoryandSubCategory/Solutions/${subCategory}`
      );
      setHeaderData(response.data.data);
    } catch (error) {
      console.log("Error fetching header data:", error);
    }
  };

  useEffect(() => {
    if (subCategory) {
      fetchHeader();
    }
  }, [subCategory]); // Add subCategory as a dependency

  return (
    <div className="w-[100vw] h-[100vh]">
      {headerData.map((header, i) => (
        <div className="w-full h-[100vh]" key={i}>
          <div
            className="w-[100vw] h-full relative"
            style={{
              backgroundImage: `url(${header.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-[100%] h-[100%] absolute top-0 left-0 bg-black opacity-[0.6] flex flex-col lg:justify-center lg:items-start box-border px-3 gap-[50px] justify-evenly items:center">
              <div className="h-fit flex flex-col gap-[40px] justify-center w-[100%]">
                <h2
                  className="lg:text-3xl font-semibold text-white w-[90%] text-xl xl:text-3xl 2xl:text-6xl lg:ms-[110px] ms-[0px]"
                  style={{ fontFamily: "Montserrat" }}
                >
                  {header.title}
                </h2>
                <p
                  className="lg:text-xl 2xl:text-2xl text-[16px] text-white text-left lg:ms-[110px] ms-0 lg:w-[60%] w-[90%] mx-auto lg:mx-0"
                  style={{ fontFamily: "Poppins" }}
                  dangerouslySetInnerHTML={{ __html: header.subTitle }}
                />
              </div>
              <button className="relative overflow-hidden text-white border border-current w-[fit-content] lg:px-3 py-1 lg:ms-[110px] group border-b-2 lg:text-xl px-4 ms-0 text-base">
                <span className="absolute inset-0 bg-gradient-to-r from-[#7CE0FF] via-[#A598FF] to-[#C462FF] transition-width duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                <span className="relative z-10">
                  Connect With Our Experts
                  <span className="font-bold">&rarr;</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SolutionHeader;
