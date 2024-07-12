import React from 'react'

const ServiceOptions = () => {
    const softDevWithNet = [{ title: "Go consulting", points: ["Design an optimal software architecture for Go-based development.", "Choose suitable Go libraries and frameworks.", "Plan software integration with internal and third-party systems.", "Deliver a software prototype.", "For existing Go software: audit software quality and security and provide recommendations on improvement."] }, { title: "Go development", points: ["Short-term (1-6 months) or long-term (> 1 year) team augmentation.","A dedicated self-managed team handling a Go-related part of the project (if more than 4 developers are required).","Full project outsourcing."] }]
    return (
        <div className='w-[85vw] mx-[110px] pt-[60px] pb-[30px] md:w-[90vw] md:mx-[20px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px]'>Our Go Services Options </h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>*--------</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    softDevWithNet.map((item, index) => {
                        return (
                            <div className='w-[49%] h-[220px] md:w-[100%] md:h-auto md:pb-[20px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
                                <h2 className='text-xl font-bold pl-[10px] md:text-[24px]'>{item.title}</h2>
                                <ul className='list-disc font-normal text-[12px] pl-[20px] md:text-[16px]'>
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

export default ServiceOptions