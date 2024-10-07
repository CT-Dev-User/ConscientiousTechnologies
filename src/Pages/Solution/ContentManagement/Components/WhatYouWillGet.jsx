import React from 'react'

const WhatYouWillGet = () => {
    const whatYouWillGet = [{ title: "high-performing CMS architecture", desc: "We use multi-layered structure and microservices in developing CMS solutions. We also adhere to such architectural design principles as separation of concerns (SoC) and high concurrency.", bgColor: "FF6868" },
    {
        title: "Optimized CMS development costs", desc: "We apply proven third-party components and public APIs, which helps us reduce development costs. We also regularly monitor and optimize the use of cloud services.",
        bgColor: "1777BC"
    },
    { title: "Fast CMS delivery", desc: "The first working version of a CMS solution is ready within 2–3 months due to the established Agile and DevOps practices of our CMS developers.", bgColor: "E751FF" }]
    return (
        <div className="w-screen h-auto box-border  my-16 bg-black text-white lg:text-black lg:bg-white">
            <div className="lg:w-[85%] mx-auto w-full px-3 lg:px-0">
                <h1 className="lg:text-3xl font-bold text-2xl lg:text-black text-[blue]">
                    What You Will Get from ScienceSoft          </h1>
                <p className="lg:w-[95%] mt-2 w-full text-base">
                    Our custom ERP development services are closely bound to our clients' needs and can be related to:
                </p>
            </div>
            <div className="lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]">
                {whatYouWillGet.map((item, index) => (
                    <div
                        key={index}
                        className="lg:w-[30%] md:w-[45%] h-auto border border-gray-300 p-4 text-white w-full"
                        style={{ backgroundColor: `#${item.bgColor}` }}
                    >
                        <h1 className="text-lg 2xl:text-xl w-[90%]">{item.title}</h1>
                        <p className="text-sm mt-2 font-normal w-[95%]">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default WhatYouWillGet
