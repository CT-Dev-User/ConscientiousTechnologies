import React from 'react'

const JavaDevService = () => {
    const javaDevSerData = [{ title: "Business analysis and planning", points: ["ScienceSoft’s industry-focused consultants analyze your needs and deliver complete software requirements. Our project managers assess the risks and deliver pragmatic project plans with controllable costs and schedules."] }, { title: "Java app architecture ", points: ["Our architects with 7–20 years of experience design a secure, scalable, resilient, and high-performing architecture for your Java app, compare alternative techs, and define the best-fitting ones."] }, { title: "Java web & mobile development", points: ["Being a professional Java app development company, we deliver complex web and mobile software based on Java, including ERPs, CRMs, EAM, PIM, EHR, ecommerce solutions, and various portals for vendors, customers, and employees."] }, { title: "Java cloud development", points: ["We build cloud-native and serverless apps that efficiently employ cloud features (elasticity, scalability, etc.) and services."] }, { title: "Java-based SaaS application ", points: ["We deliver reliable, secure, and lovable SaaS solutions with sub-second response times: online gaming back ends, video streaming software, VoIP, messaging apps, and many more."] }, { title: "Java application modernization", points: ["We revamp legacy Java apps by auditing their code, updating documentation, modernizing architecture, boosting performance and security, adding mobile/web access, improving UX/UI, and more."] }, { title: "software support and evolution", points: ["We provide L1-L3 support, performance optimization, and security monitoring services for your Java software. We can also handle the continuous evolution of Java apps."] },{title:"Team augmentation", points:["Analyze and plan ad campaigns across multiple media channels such as TV, Internet, radio, printed press and out-of-home commercials. Combine all the media types in one plan to find the optimal advertising strategy tailored to your needs. Enjoy comprehensive visualized reports induced from sophisticated mathematical"]},{title:"-------",points:["Social marketing applications","Social analytics to track user activity and prepare analytical reports","Campaign applications integrated with social networks"]}]
    return (
        <div className='w-[85vw] mx-[110px] pt-[60px] pb-[30px] md:w-[90vw] md:mx-[20px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px] md:text-[#3970F0]'>What Our Java Development Services Cover</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>We cover the implementation of all core functionality modules of operations management software.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    javaDevSerData.map((item, index) => {
                        return (
                            <div className='w-[32.5%] md:w-[100%] md:h-auto md:pb-[20px] h-[180px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[15px] px-[15px] box-border' key={index}>
                                <h2 className='text-xl font-bold pl-[10px] md:text-[24px]'>{item.title}</h2>
                                <ul className='list-disc text-[12px] pl-[20px] md:text-[16px]'>
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

export default JavaDevService