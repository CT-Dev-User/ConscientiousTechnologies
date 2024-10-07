import React from 'react'

const SuccessFactor = () => {
    const SuccessFactorArr = [{
        title: "Sustainable performance", desc:
            "Lack of need for regular attendance is the key point of kiosks, that's why kiosk software should be sustainable and fail-proof, requiring minimum administrators’ involvement. At ScienceSoft, we design controller software to conduct basic self-checks and run automated troubleshooting that eliminates uncovered errors. We also develop a backup system that immediately notifies a maintenance team "
        , bgColor: "FF6868"
    },
    {
        title: "Functional growth and scalability", desc: "In its kiosk solutions, ScienceSoft enables agile and continuous functionality expansion for kiosk software to help businesses iteratively adapt to customers’ changing needs and provide relevant service. We also consider it important to allow for ease and convenience of upgrades during kiosk software architecture design, since it will speed up roll-out of new features in the future.",
        bgColor: "1777BC"
    },
    { title: "Regulatory compliance", desc: "Depending on the kiosk’s functional specifics and the region it is located in, ScienceSoft makes sure that the kiosk software fully complies with respective necessary regulations, for example, ADA, HIPAA, GDPR, and PCI.", bgColor: "E751FF" }]
    return (

        <div className="w-screen h-auto box-border lg:py-16 py-7 bg-black text-white lg:text-black lg:bg-white">
        <div className="lg:w-[85%] mx-auto w-full px-3 lg:px-0">
          <h1 className="lg:text-3xl font-bold text-2xl md:text-[blue]">
          Success Factors of Kiosk Software 
          </h1>
          <p className="lg:w-[95%] mt-2 w-full text-base">
          To make sure that a kiosk solution will help you achieve your business goals and get reasonable ROI, ScienceSoft recommends to pay special attention to the following aspects:
          </p>
        </div>
        <div className="lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]">
          {SuccessFactorArr.map((item, index) => (
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

export default SuccessFactor
