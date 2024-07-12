import React from 'react'

const BusinessProcess = () => {
    const softwareAdv = [{ title: "Dynamics 365 Sales", points: ["An app for sales pipeline automation, full-cycle lead management, and AI-powered sales assistance."] }, { title: "Dynamics 365 Customer Insights", points: ["An app for omnichannel marketing implementation, customer journey mapping and automation, and marketing personalization."] }, { title: "Dynamics 365 Customer Service", points: ["An app for all-round case management, an omnichannel service desk, and self-service environment for customers."] }, { title: "Dynamics 365 Customer Voice", points: ["An app to create customer experience surveys and omnichannel feedback collection."] }, { title: "Dynamics 365 Commerce", points: ["An app to build omnichannel shopping experiences and engage customers on any channel they prefer."] }, { title: "Dynamics 365 Supply Chain Management", points: ["An app to monitor and control all processes within a supply chain to make it more transparent, predictable and agile."] }, { title: "Dynamics 365 Intelligent Order Management", points: ["An app to support different order fulfillment scenarios and ensure uninterrupted order delivery flow."] }, { title: "Dynamics 365 Finance", points: ["An app to manage financial transactions and perform financial reporting and analytics."] }, { title: "Dynamics 365 Project Operations", points: ["An app to manage all project activities, from prospecting and time tracking to project financials."] }, { title: "Dynamics 365 Human Resources", points: ["An app to handle all human resource processes and build data-driven employee experience."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px] md:w-[90vw] md:mx-[20px] md:pb-[30px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[20px]'>With Dynamics 365, We Can Transform Any Business Process</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. ScienceSoft helps telcos ensure that their networks run like clockwork.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[49%] h-[240px] md:w-[100%] md:h-auto md:pb-[10px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] md:pt-[10px] px-[20px] md:px-[5px] box-border' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px] md:pl-[5px] md:text-[18px]'>{item.title}</h2>
                                <ul className='list-disc text-[14px] pl-[30px] md:pl-[20px] font-normal'>
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

export default BusinessProcess