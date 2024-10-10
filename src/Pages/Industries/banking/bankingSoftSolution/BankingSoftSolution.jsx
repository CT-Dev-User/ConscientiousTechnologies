import React from 'react'

const BankingSoftSolution = () => {
    const customerExperience = [{ title: "Internet banking", points: ["Our software development pricing models.", "Cost estimation factors and models.", "Cost optimization best practices.", "Analyzing the project’s economic feasibility."] }, { title: "Mobile Banking", points: ["Agile scoping and scope creep management.", "Risk mitigation steps we take throughout the SDLC.", "Our change management process.", "Sample software documents we deliver."] }, { title: "Cutomer portal", points: ["Collaboration roles, models, and toolkit.", "Our knowledge management activities, techniques, and tools."] }, { title: "Banking CRM", points: ["KPIs to measure cooperation success and software quality.", "Process and software reports we provide."] }, { title: "Loyalty program managemnet", points: ["Data and assets we secure.", "Security management procedures during the cooperation."] }, { title: "Banking data analytics", points: ["BFSI standards and regulations we help adhere to.", "Our compliance-centered development process."] }, { title: "Lending software", points: [""] }, { title: "Payment software", points: [""] }, { title: "Document management system", points: [""] }]
    return (


        <div className="w-full py-16">
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>
                    Banking Software Solutions We Implement
                </h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>
                    ScienceSoft provides a complete set of custom and platform-based solutions designed to meet your needs.
                </p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-5 w-[95%]'>
                {customerExperience.map((item, index) => (
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

export default BankingSoftSolution