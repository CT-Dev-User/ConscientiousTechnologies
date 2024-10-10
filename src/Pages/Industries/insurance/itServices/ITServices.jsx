import React from 'react'

const ITServices = () => {
    const serviceDomain = [{ title: "Advanced technology consulting", points: ["Insurance data aggregation and processing.", "Claim-related decision-making.", "Insurance fraud detection.", "Risk management.", "Advanced operational analytics.", "Demand forecasting and spend planning."] }, { title: "Insurance product consulting", points: ["A clear insurance product concept.", "A unique selling proposition for your product.", "Digital customer journey maps and a usability testing report.", "A comprehensive UI kit.", "An interactive prototype of your insurance software."] }, { title: "Insurance IT solution development", points: ["Suggesting optimal insurance solution features, architecture, and tech stack.", "Implementation project cost & time estimates, ROI calculation."] }, { title: "Insurance digital transformation", points: ["Designing an individual digital transformation strategy and plan.", "PoC development to assess the viability of innovative insurance software.", "Modernization of existing insurance software and IT infrastructure."] }, { title: "Outsourcing of specific IT functions", points: ["Outsourced QA.", "Cybersecurity services.", "Outsourced IT support.", "Managed IT infrastructure services.", "Outsourced help desk."] }, { title: "IT staff augmentation", points: ["Developers (Java, .NET, Python, PHP, C++, and more).", "Testers (manual and automated testing).", "DevOps engineers.", "Data analysts.", "Cybersecurity experts."] }]
    return (

        <div className="w-full py-16">
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>
                    IT Solutions for Insurance We Develop
                </h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>
                    IT solutions CT creates help insurance companies improve overall business efficiency and introduce excellent customer experience. We can design and implement one or several of these targeted insurance solutions, as well as build a full-featured insurance business automation system:
                </p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-5 w-[95%]'>
                {serviceDomain.map((item, index) => (
                    <div key={index} className='lg:w-[31%] md:w-[45%] w-full lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <div className='text-sm mt-3 font-medium'>
                            {item.points.map((point, idx) => (
                                // Split each point by comma and map over the split parts
                                <ul>
                                    {point.split(',').map((splitPoint, subIdx) => (
                                        <li key={subIdx} className='mb-2 list-disc ms-5'>{splitPoint.trim()}</li>
                                    ))}
                                </ul>

                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ITServices