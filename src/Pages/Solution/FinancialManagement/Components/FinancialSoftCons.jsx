import React from 'react'

const FinancialSoftCons = () => {
    const CollabSenario = [{ title: "Risk - free implementation", desc: "We carefully analyze the economic feasibility of custom financial software development and advanced financial technology implementation for your case. Our experts provide a detailed cost estimate to help you confidently decide on further engagement and accurately plan expenses. ", bgColor: "FF6868" },
    {
        title: "Result-oriented service ", desc: "Our IT support activities and service quality are reflected in regular reports with clear metrics for strict compliance with service level objectives.",
        bgColor: "1777BC"
    },
    { title: "Guaranteed security", desc: "We design software powered with multi-layer data encryption, role-based access control, intelligent fraud detection, and other robust security mechanisms to ensure full safety of financial data and effective response to al types of cyber threats.", bgColor: "E751FF" }]
    return (

        <div className="w-screen h-auto box-border lg:py-10 py-7 bg-black text-white lg:text-black lg:bg-white">
        <div className="lg:w-[85%] mx-auto w-full px-3 lg:px-0">
          <h1 className="lg:text-3xl font-bold text-2xl lg:text-black text-[blue]">
          Benefits of Financial Software Consulting by CT
          </h1>
          <p className="lg:w-[95%] mt-2 w-full text-base">
          Our custom ERP development services are closely bound to our clients' needs and can be related to:
          </p>
        </div>
        <div className="lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]">
          {CollabSenario.map((item, index) => (
            <div
              key={index}
              className="lg:w-[30%] md:w-[45%] h-auto border border-gray-300 p-4 text-white w-full"
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

     
    )
}

export default FinancialSoftCons
