import React from 'react';

const SuccessDrivenApproach = () => {
    const customerExperience = [
        { title: "Cost estimation", points: ["Our software development pricing models.", "Cost estimation factors and models.", "Cost optimization best practices.", "Analyzing the project’s economic feasibility."] },
        { title: "Development flow", points: ["Agile scoping and scope creep management.", "Risk mitigation steps we take throughout the SDLC.", "Our change management process.", "Sample software documents we deliver."] },
        { title: "Collaboration", points: ["Collaboration roles, models, and toolkit.", "Our knowledge management activities, techniques, and tools."] },
        { title: "Quality control", points: ["KPIs to measure cooperation success and software quality.", "Process and software reports we provide."] },
        { title: "Security management", points: ["Data and assets we secure.", "Security management procedures during the cooperation."] },
        { title: "Regulatory compliance", points: ["BFSI standards and regulations we help adhere to.", "Our compliance-centered development process."] }
    ];

    return (
        <div className="w-full py-16">
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>
                    Our Success-Driven Approach to BFSI Software Development
                </h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>
                    Our teams and dedicated project managers ensure that goals are achieved, costs and time are predictable, and uncertainty is addressed agilely. Below, we share the project management and development practices we employ to succeed in financial services software initiatives:
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
    );
};

export default SuccessDrivenApproach;
