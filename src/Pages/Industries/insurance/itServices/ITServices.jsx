import React from 'react'

const ITServices = () => {
    const serviceDomain = [{ title: "Advanced technology consulting", points: ["Insurance data aggregation and processing.","Claim-related decision-making.","Insurance fraud detection.","Risk management.","Advanced operational analytics.","Demand forecasting and spend planning."] }, { title: "Insurance product consulting", points: ["A clear insurance product concept.","A unique selling proposition for your product.","Digital customer journey maps and a usability testing report.","A comprehensive UI kit.","An interactive prototype of your insurance software."] }, { title: "Insurance IT solution development", points: ["Suggesting optimal insurance solution features, architecture, and tech stack.","Implementation project cost & time estimates, ROI calculation."] }, { title: "Insurance digital transformation", points: ["Designing an individual digital transformation strategy and plan.","PoC development to assess the viability of innovative insurance software.","Modernization of existing insurance software and IT infrastructure."] }, { title: "Outsourcing of specific IT functions", points: ["Outsourced QA.","Cybersecurity services.","Outsourced IT support.","Managed IT infrastructure services.","Outsourced help desk."] }, { title: "IT staff augmentation", points: ["Developers (Java, .NET, Python, PHP, C++, and more).","Testers (manual and automated testing).","DevOps engineers.","Data analysts.","Cybersecurity experts."] }]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:pt-[20px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-2'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>IT Services for Insurance Companies</h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Our financial software consulting services are customized to our clients’ needs and may cover:</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%] md:gap-y-[40px]'>
                {
                    serviceDomain.map((item, index) => {
                        return (
                            <div className='w-[45%] md:w-[90%] h-[200px] border border-gray-300 p-3 md:border-none md:h-auto' key={index}>
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

export default ITServices