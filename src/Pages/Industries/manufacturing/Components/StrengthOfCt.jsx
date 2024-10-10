import React from 'react';

const StrengthOfCt = () => {
    const strengthOfCTData = [
        { srNo: '01', title: "Full-cycle services", desc: "We offer comprehensive manufacturing IT services, from design and development to ongoing evolution and support of your software.", srColor: '#FF8585' },
        { srNo: '02', title: "Estimation accuracy", desc: "Due to ample industry experience of our project managers, we can accurately estimate project costs and delivery time", srColor: '#76AA06' },
        { srNo: '03', title: "Quality-first approach", desc: "We adhere to our established quality management practices to deliver services of consistently high and predictable quality and minimize project risks.", srColor: '#FFC635' },
        { srNo: '04', title: "Focus on security.", desc: "We rely on comprehensive security policies and processes, advanced cybersecurity techs, and our skilled professionals to guarantee safety of our customers’ data.", srColor: '#A772FF' },
        { srNo: '05', title: "Cost-efficiency", desc: "We use proven open-source components like frameworks and libraries and public APIs to reduce implementation costs and increase the ROI of your solution.", srColor: '#F34A91' },
        { srNo: '06', title: "Minimized risks.", desc: " We adhere to the iterative development model that allows seeing first results early and get next versions of a solution delivered every 2-4 weeks.", srColor: '#51ACFF' }
    ];

    return (

        <div
      id="how-we-work"
      className="w-screen h-[auto] bg-[white] box-border pt-12 pb-8"
    >
      <div className="lg:w-[85%] mx-auto w-[90%]">
        <h1 className="lg:text-3xl font-bold text-2xl text-[blue] lg:text-black">
        Strengths of ScienceSoft's Offering for Manufacturing Companies 
        </h1>
        <p className="lg:w-[80%] mt-2 w-full text-base">
        According to PwC, AI realizes substantial value via increasing productivity through automation, improving decision-making, and enhancing customer experience. Solutions that ScienceSoft delivers embrace the latest AI developments to innovate and improve operational workflows, maximize user value, and enable innovative business models:
        </p>
      </div>
      <div className="hidden lg:flex text-[white] w-[90%] gap-0 mx-auto justify-center flex-wrap mt-7">
        {strengthOfCTData.map((data, i) => (
          <div
            key={i}
            className={`w-[30%] h-60 text-[black] border-[#737373] flex flex-col justify-around py-2 px-6 ${
              i === 0 || i === 1 || i === 3 || i === 4 ? "border-r" : ""
            } ${i === 0 || i == 1 || i == 2 ? "border-b" : ""}`}
          >
            <h1
              className="font-bold text-4xl self-end mr-5 2xl:text-6xl"
              style={{ color: data.srColor }}
            >
              {data.srNo}
            </h1>
            <div>
              <h3 className="font-semibold text-lg 2xl:text-2xl">
                {data.title}
              </h3>
              <p className="text-sm mt-2 2xl:text-lg lg:text-base">
                {data.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:hidden flex text-[white] w-[90%] mx-auto justify-center flex-wrap mt-7">
        {strengthOfCTData.map((data, i) => (
          <div
            key={i}
            className={`w-[49%] h-60 text-[black] border-[#737373] border-dashed flex flex-col justify-around px-2 ${
              i === 0 || i === 2 || i === 4 ? "border-r" : ""
            } ${i === 0 || i == 1 || i == 2 || i == 3 ? "border-b" : ""}`}
          >
            <h1
              className="font-bold self-end mr-2 text-xl"
              style={{ color: data.srColor }}
            >
              {data.srNo}
            </h1>
            <div>
              <h3 className="text-base font-bold">{data.title}</h3>
              <p className="text-sm">{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default StrengthOfCt;
