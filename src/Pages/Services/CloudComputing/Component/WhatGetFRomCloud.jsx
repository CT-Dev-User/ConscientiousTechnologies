import React from 'react'

const WhatGetFromCloud = () => {
    const softWareBussinessArr = [{
        title: "Cloud adoption strategy", desc: "to plan, prioritize, and schedule IT infrastructure migration, cloud-native app and cloud data warehouse development."
    }, {
        title: "Feasibility assessment ", desc: "of your cloud initiatives that includes TCO and ROI estimation."
    }
    , {
        title: "Consultations for the C-suite", desc: " to help understand the benefits and challenges of cloud migration or cloud-native development, define the skills and trainings required for the project’s success, choose the right cloud services."
    }
    , {
        title: "Design and development of cloud apps and data warehouses", desc: "Software that allows for fast processing and mining of data captured by physical objects."
    }
    , {
        title: "Legacy infrastructure migration to the cloud", desc: "Software to recognize patterns and classify objects in digital images and videos."
    }
    , {
        title: "Cloud and hybrid infrastructure configuration", desc: "and code reviews."
    }
    ]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[20px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[blue]'>What You Get from Cloud Computing Consulting</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>We work with all the mainstream technologies to expand the scope of functions the software can perform.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 justify-center items-center md:w-[95%]'>
                {softWareBussinessArr.map((item, index) => (
                    <div key={index} className='w-[350px] h-[180px] border border-gray-300 p-3 shadow-sm md:shadow-none md:border-none md:h-auto md:py-3'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default WhatGetFromCloud
