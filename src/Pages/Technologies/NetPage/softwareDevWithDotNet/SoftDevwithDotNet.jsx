import React from 'react'

const SoftDevwithDotNet = () => {
    const softDevWithNet = [{ title: "Diverse types of software and software components", points: ["Web, mobile, and desktop apps", "Embedded systems", "Databases", "APIs", "Libraries"] }, { title: "Diverse underlying technologies", points: ["IoT", "Big data", "AI and ML", "Blockchain"] }, { title: "Diverse purposes", points: ["Custom enterprise software for employees, vendors, partners, and clients", "SaaS/XaaS", "Software products"] }, { title: "Diverse business functions", points: ["Business & project management", "Sourcing & stock management", "Asset management", "Sales, marketing & customer service", "Corporate finance management"] }]
    return (
        <div className='w-[85vw] mx-[110px] pt-[60px] pb-[30px] md:w-[90vw] md:mx-[20px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[#3970F0] md:text-[24px]'>Software We Develop with .NET</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. ScienceSoft helps telcos ensure that their networks run like clockwork.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    softDevWithNet.map((item, index) => {
                        return (
                            <div className='w-[49%] md:w-[100%] h-[180px] md:h-auto border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border md:pb-[20px]' key={index}>
                                <h2 className='text-xl font-bold pl-[10px]'>{item.title}</h2>
                                <ul className='list-disc text-[14px] pl-[30px]'>
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

export default SoftDevwithDotNet