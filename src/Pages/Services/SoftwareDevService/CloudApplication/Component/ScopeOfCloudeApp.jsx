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

        <div className="w-full py-16">
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>The Scope of ScienceSoft’s Cloud Application Services</h1>
                <p className='lg:w-11/12 mt-2 w-full text-sm 2xl:text-base'>We can provide any single service or a mix of services from the list.</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
                {ourSoftDevOption.map((item, index) => (
                    <div key={index} className='lg:w-[30%] md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScopeOfCloudeApp;
