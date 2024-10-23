import React, { useEffect, useState } from "react";
import "./caseStudies.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CaseStudies = () => {
  const [CaseStudiesData, setCaseStudies] = useState([]);
  const navigate = useNavigate()

  const getCaseStudiesDataFunc = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/get-case-studies-by-cateory/Home"
      );
      console.log(response.data)
      setCaseStudies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCaseStudiesDataFunc();
  }, []);
  return (
    <div className="w-screen h-auto bg-black box-border text-[white] py-14">
      <div className="lg:w-[85%] mx-auto w-[90%]">
        <h1 className="lg:text-3xl font-bold text-2xl">Case Studies</h1>
        <p className="lg:w-[85%] mt-2 w-full text-base font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut
          nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum
          eget. Integer amet, consectetur adipiscing elit.{" "}
        </p>
      </div>
      <div className="flex text-white w-[85%] gap-9 flex-wrap mx-auto justify-center mt-7 h-[30rem] lg:h-auto overflow-y-auto ">
        {CaseStudiesData.map((items, i) => {
          return (
            <div
              style={{
                backgroundImage: `url(${items.cardDatacardImage})`,
                backgroundSize: "cover",
                backgroundPosition: "cover",
              }}
              className="lg:w-[31%] lg:h-96 bg-[black] relative case-studies-main-div w-full h-[45%]"
              key={i}
            >
              <div className="case-studies-child-div flex flex-col justify-between">
                <div className="flex flex-col justify-around gap-5">
                  <h1 className="font-semibold lg:text-xl text-base">
                    {items.cardDatatitle}
                  </h1>
                  <div className="flex flex-col gap-2">
                    <p
                      className="text-sm font-normal"
                      dangerouslySetInnerHTML={{
                        __html: items.cardDatasubTitle
                      }}
                    ></p>
                    <h4>Core tech :- {items.cardDatacoreTech}</h4>
                  </div>
                </div>
                <button
                  className="relative overflow-hidden border border-white px-4 py-2 w-fit text-xs group"
                  style={{ position: "relative" }}
                  onClick={() => {
                    navigate("/case-study/" + items._id + "/")
                  }}
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
    </div>
  );
};

export default CaseStudies;
