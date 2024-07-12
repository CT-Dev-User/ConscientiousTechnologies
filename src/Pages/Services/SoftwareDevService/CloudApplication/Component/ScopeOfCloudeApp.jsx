import React from 'react';

const ScopeOfCloudeApp = () => {
    const ourSoftDevOption = [
        {
            title: "Cloud app consulting",
            desc:
                (
                    <ul>
                        <li className='list-disc ms-5'>For a new cloud app implementation, we can elicit business needs, describe and prioritize functional and technical require</li>
                    </ul>
                )
        },
        {
            title: "Cloud app development",
            desc: (
                <ul>
                    <li className='list-disc ms-5'>Whether you need a simple mobile app or a complex enterprise system, we have the skills and expertise to deliver the perfect</li>
                </ul>
            )
        },
        {
            title: "App migration to the cloud",
            desc: (
                <ul>
                    <li className='list-disc ms-5'>We move apps of any complexity from on-premises infrastructures to cloud-based ones — quickly, safely, and with minimal disruptions to business processes. Before the</li>
                </ul>
            )
        },

        {
            title: "Cloud based app integration",
            desc: (
                <ul>
                    <li className='list-disc ms-5'>For a new cloud app implementation, we can elicit business needs, describe and prioritize functional and technical require</li>
                </ul>
            )
        },
        {
            title: "SaaS development",
            desc: (
                <ul>
                    <li className='list-disc ms-5'>Whether you need a simple mobile app or a complex enterprise system, we have the skills and expertise to deliver the perfect</li>
                </ul>
            )
        },
        {
            title: "Cloud security",
            desc: (
                <ul>
                    <li className='list-disc ms-5'>We move apps of any complexity from on-premises infrastructures to cloud-based ones — quickly, safely, and with minimal disruptions to business processes. Before the</li>
                </ul>
            )
        }
    ];

    return (
        <div className="w-full py-[50px] md:py-[10px]">
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[blue]'>The Scope of ScienceSoft’s Cloud Application Services</h1>
                <p className='w-11/12 text-sm mt-2 md:w-full md:text-[16px]'>We can provide any single service or a mix of services from the list.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[95%]'>
                {ourSoftDevOption.map((item, index) => (
                    <div key={index} className='w-[350px] h-[220px] border border-gray-300 p-3 shadow-md md:shadow-none md:border-none md:h-auto md:py-3'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScopeOfCloudeApp;
