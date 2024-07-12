import React from 'react'

const DevelopmentAreas = () => {
    const SoftwareDesignData = [{ title: "Web apps of any scale", points: ["-------"] }, { title: "Native and cross-platform apps", points: ["-------"] }, { title: "Progressive Web Apps", points: ["-------"] }, { title: "Custom API", points: ["-------"] }, { title: "Legacy app migration", points: ["-------"] }, { title: "-------", points: ["-------"] }]
    return (
        <div className='w-[85vw] md:w-[90vw] mx-[110px] md:mx-[20px] pt-[60px] md:pt-[30px] pb-[30px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px]'>Development Areas We Use JavaScript in </h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>We cover the implementation of all core functionality modules of operations management software.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    SoftwareDesignData.map((item, index) => {
                        return (
                            <div className='w-[32.5%] md:w-[48.5%] h-[180px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[15px] px-[15px] box-border' key={index}>
                                <h2 className='text-xl font-bold pl-[10px]'>{item.title}</h2>
                                <ul className='list-disc text-[12px] pl-[20px]'>
                                    {
                                        item.points.map((point, i) => {
                                            return (
                                                <li key={i}>{point}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DevelopmentAreas