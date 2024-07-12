import React from 'react'

const ScopeOfCTCloud = () => {
    const scopeOfCloudData = [{ title: "Cloud app consulting", points: ["For a new cloud app implementation, we can elicit business needs, describe and prioritize functional and technical require"] }, { title: "Cloud app development", points: ["Whether you need a simple mobile app or a complex enterprise system, we have the skills and expertise to deliver the perfect"] }, { title: "App migration to the cloud", points: ["We move apps of any complexity from on-premises infrastructures to cloud-based ones — quickly, safely, and with minimal disruptions to business processes. Before the"] }, { title: "Cloud based app integration", points: ["For a new cloud app implementation, we can elicit business needs, describe and prioritize functional and technical require"] }, { title: "SaaS development", points: ["Whether you need a simple mobile app or a complex enterprise system, we have the skills and expertise to deliver the perfect."] }, { title: "Cloud security", points: ["We move apps of any complexity from on-premises infrastructures to cloud-based ones — quickly, safely, and with minimal disruptions to business processes. Before the"] }]
    return (
        <div className='w-[85vw] mx-[110px] pt-[60px] pb-[30px] md:w-[90vw] md:mx-[20px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px]'>The Scope of ScienceSoft’s Cloud Application Services</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>We can provide any single service or a mix of services from the list.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    scopeOfCloudData.map((item, index) => {
                        return (
                            <div className='w-[32.5%] md:w-[100%] md:h-auto md:pb-[20px] h-[180px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[15px] px-[15px] box-border' key={index}>
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

export default ScopeOfCTCloud