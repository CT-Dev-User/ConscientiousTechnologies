import React from 'react'

const SuccessDrivenApproach = () => {
    const customerExperience = [{ title: "Cost estimation", points: ["Our software development pricing models.","Cost estimation factors and models.","Cost optimization best practices.","Analyzing the project’s economic feasibility."] }, { title: "Development flow", points: ["Agile scoping and scope creep management.","Risk mitigation steps we take throughout the SDLC.","Our change management process.","Sample software documents we deliver."] }, { title: "Collaboration", points: ["Collaboration roles, models, and toolkit.","Our knowledge management activities, techniques, and tools."] }, { title: "Quality control", points: ["KPIs to measure cooperation success and software quality.","Process and software reports we provide."] }, { title: "Security managment", points: ["Data and assets we secure.","Security management procedures during the cooperation."] }, { title: "Regulatory compliance", points: ["BFSI standards and regulations we help adhere to.","Our compliance-centered development process."] }]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:pt-[20px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-2'>
                <h1 className='font-bold text-3xl md:text-[24px] md:text-[#3970F0] md:ms-0 md:w-full'>Our Success-Driven Approach to BFSI Software Development</h1>
                <p className='text-[14px] font-semibold my-[20px] md:text-[16px] md:ms-0 md:w-full'>Our teams and dedicated project managers ensure that goals are achieved, costs and time are predictable, and uncertainty is addressed agilely. Below, we share the project management and development practices we employ to succeed in financial services software initiatives:</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%] md:gap-y-[40px]'>
                {
                    customerExperience.map((item, index) => {
                        return (
                            <div className='w-[350px] h-[200px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border md:border-none md:h-auto md:w-full' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px]'>{item.title}</h2>
                                <ul className='list-disc text-[14px] pl-[30px] font-normal'>
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

export default SuccessDrivenApproach