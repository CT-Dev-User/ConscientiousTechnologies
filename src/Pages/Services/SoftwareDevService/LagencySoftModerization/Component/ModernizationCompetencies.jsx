import React from 'react';

const ModernizationCompetencies = () => {
    const ourSoftDevOption = [
        {
            title: "Application modernization consult",
            desc:(
                <ul>
                    <li className='list-disc ms-5'>For a new cloud app implementation, we can elicit business needs, describe and prioritize functional and technical require</li>
                </ul>
            )
        },
        {
            title: "Legacy app migration to cloud",
            desc:(
                <ul>
                    <li className='list-disc ms-5'>Whether you need a simple mobile app or a complex enterprise system, we have the skills and expertise to deliver the perfect</li>
                </ul>
            )
        },
        {
            title: "Application reengineering",
            desc:(
                <ul>
                    <li className='list-disc ms-5'>We move apps of any complexity from on-premises infrastructures to cloud-based ones — quickly, safely, and with minimal disruptions to business processes. Before the</li>
                </ul>
            )
        },

        {
            title: "Application re-architecting",
            desc:(
                <ul>
                    <li className='list-disc ms-5'>For a new cloud app implementation, we can elicit business needs, describe and prioritize functional and technical require</li>
                </ul>
            )
        },
        {
            title: "Data modernization",
            desc: (
                <ul>
                    <li className='list-disc ms-5'>Whether you need a simple mobile app or a complex enterprise system, we have the skills and expertise to deliver the perfect</li>
                </ul>
            )
        },
        {
            title: "Regulatory compliance",
            desc: (
                <ul>
                    <li className='list-disc ms-5'>We move apps of any complexity from on-premises infrastructures to cloud-based ones — quickly, safely, and with minimal disruptions to business processes. Before the</li>
                </ul>
            )
        }
    ];

    return (
        <div className="w-full mt-[100px] mb-[60px]">
            <div className='w-[85%] mx-auto md:w-5/6'>
                <h1 className='text-3xl font-bold md:text-base text-blue'>Our Application Modernization Competencies </h1>
                <p className='w-11/12 text-sm mt-2 md:w-full md:text-xs'>We can provide any single service or a mix of services from the list.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8'>
                {ourSoftDevOption.map((item, index) => (
                    <div key={index} className='w-[350px] h-[220px] border border-gray-300 p-3 shadow-md'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ModernizationCompetencies;
