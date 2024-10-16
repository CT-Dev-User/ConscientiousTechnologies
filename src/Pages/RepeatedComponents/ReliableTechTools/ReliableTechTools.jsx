import React, { useEffect, useState } from "react";
import "./reliableTools.css";
import axios from "axios";
import TechLogosPopup from "./TechLogosPopup";
import aboutUs from "../../../assets/AboutUs/aboutUs.png";

const ReliableTools = ({ category, subCategory }) => {
  const [reliableToolData, setReliableToolsData] = useState([]);
  const [allTechLogos, setAllTechLogos] = useState([]);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [showPopup, setShowPopup] = useState(false);

  const fetchReliableDataByCategory = async () => {
    try {
      if (category === "HomePage") {
        const response = await axios.get(
          "http://localhost:8080/get-reliable-tools-data"
        );
        setReliableToolsData(response.data.data);
      } else {
        const response = await axios.get(
          `http://localhost:8080/get-reliable-tools-data/${category}/${subCategory}`
        );
        setReliableToolsData(response.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchReliableDataByCategory();
  }, []);

  const handleSeeAllClick = (techLogos, event) => {
    const buttonRect = event.target.getBoundingClientRect();
    setAllTechLogos(techLogos);
    setPopupPosition({
      top: buttonRect.bottom + window.scrollY,
      left: buttonRect.left + window.scrollX,
    });
    setShowPopup(!showPopup);
  };

  const handleClose = () => setShowPopup(false);

  return (
    <div className="w-screen h-96  bg-black text-[white] box-border overflow-y-auto pb-5">
      <div className="w-full lg:w-[85%] bg-[#141414] mx-auto text-white flex flex-wrap justify-between flex-col lg:flex-row overflow-x-hidden">
        {reliableToolData.map((items, i) => (
          <div
            key={i}
            className={
              items.subTech.length > 1
                ? "w-full border-b border-[#303030] py-4"
                : "w-full lg:w-1/2 border-b border-[#303030] py-4"
            }
          >
            <h2 className="w-full lg:text-xl font-medium lg:ms-3 ms-4 text-sm">
              {items.technology}
            </h2>
            <div
              className={
                items.subTech.length > 1
                  ? "flex w-full gap-x-24 flex-wrap gap-y-10"
                  : "flex w-full"
              }
            >
              {items.subTech.map((item, i) => (
                <div className="px-5 pt-3" key={i}>
                  <h3 className="text-xs">{item.title}</h3>
                  <div className="flex lg:gap-5 mt-2 gap-2 flex-wrap">
                    {item.techLogos.slice(0, 5).map((logo, i) => (
                      <div key={i} className="lg:w-14 w-12">
                        <img src={logo.logo} alt={item.title} />
                        {/* <img src={aboutUs} className="w-12" alt="" /> */}
                      </div>
                    ))}
                    {item.techLogos.length > 5 && (
                      <div
                        className="lg:w-14 w-12 bg-[#000000] lg:h-14 h-12 border border-white flex items-center justify-center text-[10px] cursor-pointer"
                        onClick={(event) =>
                          handleSeeAllClick(item.techLogos, event)
                        }
                      >
                        See All
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {showPopup && (
        <TechLogosPopup
          logos={allTechLogos}
          onClose={handleClose}
          position={popupPosition}
        />
      )}
    </div>
  );
};

export default ReliableTools;
