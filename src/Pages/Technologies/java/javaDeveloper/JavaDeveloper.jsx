import React from 'react'

const JavaDeveloper = () => {
    const javaDevSerData = [{ title: "Future-proof Java app architecture", points: ["Our Java developers build cloud-native (microservices) and cloud-only (serverless) Java apps."] }, { title: "Fast and stable Java app delivery", points: ["Our Java developers ensure major releases every 2-6 weeks and minor updates up to several times a day by employing mature Agile and DevOps practices."] }, { title: "Cooperation flexibility", points: ["Team augmentation with Java developers and architects (from 0.5 FTE to 150+ FTE).", "Self-managed Java teams.","End-to-end Java project delivery."] }, { title: "Project management office (PMO)", points: ["Our PMs are experienced in large complex projects with distributed teams and multiple vendors involved."] }, { title: "Communication flexibility", points: ["We discuss optimal ways of communicating project information (communication means, types of project documentation, level of reported detail, frequency of updates, timing, etc.) to each stakeholder."] }, { title: "Transparent service", points: ["Achievement of set KPIs – business outcomes, quality of delivered software, code quality, development process efficiency, project time and costs (actual costs vs. budget, budget to completion vs. budget remaining, etc.), team's productivity, and customer/user satisfaction rate."] }]
    return (
        <div className='w-[85vw] mx-[110px] pt-[60px] pb-[30px] md:w-[90vw] md:mx-[20px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px]'>What Makes Conscientious Technologies a Favourite Java App Developer</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>We cover the implementation of all core functionality modules of operations management software.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    javaDevSerData.map((item, index) => {
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

export default JavaDeveloper