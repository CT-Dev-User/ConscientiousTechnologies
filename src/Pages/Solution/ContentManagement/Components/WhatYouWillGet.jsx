import React from 'react'

const WhatYouWillGet = () => {
    const whatYouWillGet = [{ title: "high-performing CMS architecture", desc: "We use multi-layered structure and microservices in developing CMS solutions. We also adhere to such architectural design principles as separation of concerns (SoC) and high concurrency.", bgColor: "FF6868" },
    {
        title: "Optimized CMS development costs", desc: "We apply proven third-party components and public APIs, which helps us reduce development costs. We also regularly monitor and optimize the use of cloud services.",
        bgColor: "1777BC"
    },
    { title: "Fast CMS delivery", desc: "The first working version of a CMS solution is ready within 2–3 months due to the established Agile and DevOps practices of our CMS developers.", bgColor: "E751FF" }]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[20px] bg-[black] text-white'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>What You Will Get from ScienceSoft </h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Our custom ERP development services are closely bound to our clients' needs and can be related to:</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%]'>
                {whatYouWillGet.map((item, index) => (
                    <div key={index} className='w-[350px] h-[200px] border border-gray-300 p-3 text-[white] pt-6 md:w-full md:border-none md:h-auto md:py-3' style={{ backgroundColor: `#${item.bgColor}` }}>
                        <h1 className='text-[18px] w-[90%]'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-normal mx-auto w-[95%]'>{item.desc}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default WhatYouWillGet
