import React from 'react'

const LaunchImproveFix = () => {
    const softwareAdv = [{ title: "Dynamics 365 consulting", points: ["We decide how to fine-tune Dynamics 365 apps to maximize their positive effect on your business while avoiding excessive customization. Our Dynamics 365 consultants can join in at any stage of your project."] }, { title: "Dynamics 365 customization", points: ["We find the most efficient ways to support your unique business processes and growing customer base. For these goals, we can enable fast and secure data transfer within the corporate infrastructure, create custom entities, functions, workflows or branded UI."] }, { title: "Dynamics 365 implementation", points: ["VWe fully plan and implement business solutions powered by Dynamics 365 apps. Our service is end-to-end and covers an implementation strategy, data management, security, and integration with business software and tools."] }, { title: "Dynamics 365 integration", points: ["We help you integrate your corporate systems with Dynamics 365, which will enable your employees to access all centralized data they need without switching between applications."] }, { title: "Dynamics 365 migration", points: ["We migrate your business from a legacy system to Dynamics 365 with minimal work disruption. Also, we can transit your Dynamics apps from the on-premises environment to the cloud to increase their security and scalability, as well as minimize maintenance costs and efforts."] }, { title: "Dynamics 365 quality assurance", points: ["We provide a full cycle of manual and automated testing services (functional, usability and performance testing) to minimize the risk of technical issues during complex Dynamics 365 implementation, migration, or integration."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px] md:w-[90vw] md:mx-[20px] md:pb-[30px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[20px]'>Launch, Improve or Fix Your Dynamics 365 Apps with CT</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>ScienceSoft assists in specific development stages as well as provides full-cycle mobile app implementation. Our mobile app development services include:</p>
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

export default LaunchImproveFix