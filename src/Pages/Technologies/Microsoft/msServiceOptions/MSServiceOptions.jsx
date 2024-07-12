import React from 'react'

const MSServiceOptions = () => {
    const softwareAdv = [{ title: "Digital transformation", points: ["ScienceSoft helps companies unfold holistic digital transformation and achieve the highest ROI from the initiatives based on Microsoft techs."] }, { title: "Big data solutions and platforms", points: ["ScienceSoft builds and supports organization-wide big data platforms and dedicated big-data-powered applications. We help you choose and integrate the right services for high-volume and high-velocity data from a broad Azure portfolio, implement fast and reliable custom components to enable stream processing and advanced analytics"] }, { title: "Data management & analytics", points: ["Help you collect the right data, clean, integrate and protect it.","Run highly efficient and modern data centers.","Create and deploy BI solutions, incl. reporting, dashboards and visualization."] }, { title: "Cloud-native apps on Azure", points: ["End-to-end development of web and mobile apps using Azure cloud services. We take the full responsibility for turning your ideas/needs into a ready-to-use products/solutions and can proceed with its continuous support and evolution."] }, { title: "Azure cloud migration", points: ["Smooth and effective migration of your applications, data warehouses, desktops, etc. to the Azure cloud. No unplanned disruptions. Continuous cloud consumption optimization."] }, { title: "-------", points: ["We set up APIs to integrate your web app with corporate or third-party systems and services. App integration ensures immediate data synchronization across systems."] }]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[40px] md:pt-[40px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Our Core Microsoft Service Options</h1>
                <p className='text-[14px] font-semibold mt-[20px]'>ScienceSoft assists in specific development stages as well as provides full-cycle mobile app implementation. Our mobile app development services include:</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] '>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[350px] h-[320px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border md:w-full md:border-none md:p-0 md:h-auto md:py-3 ' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px] md:text-[19px] md:pl-0'>{item.title}</h2>
                                <ul className='list-disc text-[14px] pl-[30px] font-medium text-[16px] md:pl-[20px]'>
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

export default MSServiceOptions