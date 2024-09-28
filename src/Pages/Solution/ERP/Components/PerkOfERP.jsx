import React from "react";

const PerkOfERP = () => {
  const CollabSenario = [
    {
      title: "Estimation accuracy",
      desc: "Having vast experience in implementing ERP projects of various complexity, we can precisely estimate project costs and delivery time.",
      bgColor: "FF6868",
    },
    {
      title: "Fast MVP development",
      desc: "Relying on the established Agile and DevOps practices, we typically deliver the first version of a solution within 3–5 months, then introduce new releases every 2–6 weeks.",
      bgColor: "1777BC",
    },
    {
      title: "ERP evolution",
      desc: "Our ERP software development company provides full transparency of the development flow via regular reporting and documented processes.",
      bgColor: "E751FF",
    },
  ];
  return (
    <div className="w-screen h-auto box-border lg:py-20 py-7 bg-black text-white lg:text-black lg:bg-white">
      <div className="lg:w-[85%] mx-auto w-full px-3 lg:px-0">
        <h1 className="lg:text-3xl font-bold text-2xl md:text-[blue]">
          Perks of ScienceSoft's ERP Software Development Services 
        </h1>
        <p className="lg:w-[95%] mt-2 w-full text-base">
          Our custom ERP development services are closely bound to our clients'
          needs and can be related to:
        </p>
      </div>
      <div className="lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]">
        {CollabSenario.map((item, index) => (
          <div
            key={index}
            className="lg:w-[30%] h-auto border border-gray-300 p-4 text-white w-full"
            style={{ backgroundColor: `#${item.bgColor}` }}
          >
            <h1 className="text-lg w-[90%]">{item.title}</h1>
            <p className="text-sm mt-2 font-normal w-[95%]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerkOfERP;
