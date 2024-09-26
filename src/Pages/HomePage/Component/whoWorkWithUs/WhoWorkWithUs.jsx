import React, { useState, useEffect } from "react";
import "./workWithUs.css";
import { useNavigate } from "react-router-dom";

const WhoWorkWithUs = () => {
  const [showPoints, setShowPoints] = useState(false);
  const navigate = useNavigate();

  const whoWorkWithUsData = [
    {
      title: "Start Up",
      desc: "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.",
      image: require("../assets/whoWorkWithUs/startups.png"),
      points: [
        "MVP and SaaS Development for quick market entry at minimal spending",
        "CTO as a Service to align technology with business goals for success.",
        "Data Analytics & DevOps to get insights from data to drive decision-making",
        "Technology Consulting to help startups avoid costly tech mistakes for long-term success.",
      ],
    },
    {
      title: "Enterprises",
      desc: "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.",
      image: require("../assets/whoWorkWithUs/enterprises.png"),
      points: [
        "MVP and SaaS Development for quick market entry at minimal spending",
        "CTO as a Service to align technology with business goals for success.",
        "Data Analytics & DevOps to get insights from data to drive decision-making",
        "Technology Consulting to help startups avoid costly tech mistakes for long-term success.",
      ],
    },
    {
      title: "Agencies",
      desc: "We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.",
      image: require("../assets/whoWorkWithUs/Agencies.png"),
      points: [
        "MVP and SaaS Development for quick market entry at minimal spending",
        "CTO as a Service to align technology with business goals for success.",
        "Data Analytics & DevOps to get insights from data to drive decision-making",
        "Technology Consulting to help startups avoid costly tech mistakes for long-term success.",
      ],
    },
  ];

  useEffect(() => {
    if (showPoints) return; // If points are already shown, do not execute the effect

    const timer = setTimeout(() => {
      setShowPoints(true);
    }, 300); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, [showPoints]);

  return (
    <div className="w-screen h-auto bg-black pb-8 box-border text-white lg:pt-14 pt-12">
      <div className="lg:w-[85%] mx-auto w-[95%] pl-2 lg:pl-0">
        <h1 className="lg:text-4xl font-bold text-3xl">Who We Work With</h1>
        <p className="lg:w-[85%] text-base mt-4 w-[90%] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut
          nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum
          eget. Integer amet, consectetur adipiscing elit.{" "}
        </p>
      </div>
      <div className="lg:flex text-white w-[85%] gap-9 flex-wrap mx-auto mt-8 hidden">
        {whoWorkWithUsData.map((items, i) => (
          <div
            className="parent-div h-[26rem]"
            style={{
              backgroundImage: `url(${items.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            key={i}
          >
            <div className="child-div">
              <h3 className="text-2xl font-medium">{items.title}</h3>
              <p className="text-xs mt-2 font-normal">{items.desc}</p>
            </div>
            <div className="list-div" style={{ animationDelay: `${i * 0.5}s` }}>
              <ul>
                {showPoints &&
                  items.points.map((item, j) => (
                    <li className="list-disc text-xs mt-3 font-normal" key={j}>
                      {item}
                    </li>
                  ))}
              </ul>
              <button
                className="border-none px-4 py-2 w-fit text-xs text-[skyblue] float-right mt-5 absolute bottom-4 right-5"
                onClick={() => {
                  navigate(`/by-client/${items.title}`);
                }}
              >
                Explore More &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:hidden flex text-white w-full gap-9 flex-wrap mx-auto justify-center mt-8">
        {whoWorkWithUsData.map((items, i) => (
          <div
            className="w-[94%] h-96 relative mx-auto"
            style={{
              backgroundImage: `url(${items.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            key={i}
          >
            <div className="absolute bottom-0 left-0 h-3/5 bg-[#1D1D1D] opacity-[0.8] p-4">
              <h3 className="text-lg font-semibold">{items.title}</h3>
              <p className="text-base mt-2 font-normal">{items.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoWorkWithUs;
