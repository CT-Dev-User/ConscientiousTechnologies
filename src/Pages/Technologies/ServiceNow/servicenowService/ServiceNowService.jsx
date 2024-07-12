import React from 'react'

const ServiceNowService = () => {
    const softwareAdv = [{ title: "ServiceNow consulting", points: ["We can always advise you on the best ways to tackle your challenges, be it uncertainty in mapping your needs to ServiceNow functionality, a process malfunction or difficulties in expanding ServiceNow to more areas across your enterprise. We also provide the technical skills to overcome these challenges and work both in terms of one-time consultations and ongoing improvement projects."] }, { title: "ServiceNow implementation", points: ["IWe can help at any stage of your ServiceNow project. Our ServiceNow implementation services cover platform implementation from scratch, enhancement of your existing platform functionality, integrations (e.g., with IT infrastructure management tools, email services, CRM systems) as well as migration projects (from basic-functionality ticketing tools or legacy ITSM systems)."] }, { title: "ServiceNow customization", points: ["ScienceSoft can render you technical aid in making ServiceNow meet your business requirements. We set up and adjust the platform without code changes and also do various code-based customizations, such as back-end and client logic, code-level integrations, and access configuration."] }, { title: "Custom ServiceNow app development", points: ["Although the existing ServiceNow functionality offering is extremely rich, you can still miss some apps or features. For example, the product you need may be included in the more expensive functionality package and buying it because of one app would be too wasteful. Or you don’t think that using one of your purchased apps is sensible because you are dissatisfied with the concept behind it. A custom ServiceNow application is always a good way out for such occasions."] }, { title: "ServiceNow testing", points: ["To ensure the quality of your ServiceNow solution, our certified team of test engineers can put your system through paces and uncover all there is to fix about it. They thoroughly check ServiceNow functionality, integrations, performance, security, usability and data quality to help you make your solution fully comply with your requirements."] }, { title: "ServiceNow support", points: ["To help you maintain the performance and user convenience of your solution, ScienceSoft’s experts can provide ServiceNow support services. This includes not only basic user support activities but also system parameters monitoring and on-the-fly troubleshooting."] },{title:"ServiceNow managed services", points:["ScienceSoft can become your ServiceNow managed services provider for you to enjoy using ServiceNow without thinking about its performance issues or surfaced defects. We will take over all the worries concerning system administration and performance, security, and ongoing improvements as well as user training and support."]},{title:"-------", points:["Expenses on your ready-made product grow together with your customer base.","Unmet customer needs due to a problematic implementation of custom functionality in a ready-made product.","Low user satisfaction due to a complex interface and issues at the code level."]}]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px] md:w-[90vw] md:mx-[20px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px]'>An Outline of Our A-to-Z ServiceNow Services</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. ScienceSoft helps telcos ensure that their networks run like clockwork.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[49%] md:w-[100%] md:h-auto md:pb-[20px] h-[220px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
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

export default ServiceNowService