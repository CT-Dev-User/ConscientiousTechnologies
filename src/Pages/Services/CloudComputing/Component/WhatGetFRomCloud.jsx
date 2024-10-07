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
        <div className="w-full py-16">
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>What You Get from Cloud Computing Consulting</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>We work with all the mainstream technologies to expand the scope of functions the software can perform.</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
                {softWareBussinessArr.map((item, index) => (
                    <div key={index} className='lg:w-[30%] md:w-[45%] w-full lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhatGetFromCloud
