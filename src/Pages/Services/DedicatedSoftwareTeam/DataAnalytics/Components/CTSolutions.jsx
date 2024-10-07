import React from 'react';

const CTSolutions = () => {
    const CTSolutionsData = [
        {
            title: "Scoping",
            desc:
                <ul>
                    <li className='list-disc ms-5'>Our requirements engineering activities.</li>
                    <li className='list-disc ms-5'>Project feasibility assessment.</li>
                    <li className='list-disc ms-5'>Scope creep control throughout the SDLC.</li>                 
                </ul>

        },
        {
            title: "Cost Estimation",
            desc: <ul>
                <li className='list-disc ms-5'>Factors impacting web development costs.</li>
                <li className='list-disc ms-5'>Approaches to cost estimation.</li>
                <li className='list-disc ms-5'>Our cost optimization practices.</li>
            </ul>
        },
        {
            title: "Quality Management",
            desc: <ul>
                <li className='list-disc ms-5'>Development health and software quality KPIs.</li>
                <li className='list-disc ms-5'>Quality assurance activities at each SDLC stage.</li>
            </ul>
        },

        {
            title: "Security management",
            desc: <ul>
                <li className='list-disc ms-5'>The scope of cyber defense.</li>
                <li className='list-disc ms-5'>Security management procedures during the development project.</li>
            </ul>
        },
        {
            title: "Collaboration",
            desc: <ul>
                <li>Collaboration flow: from planning to success measurement to ongoing improvement.</li>
                <li>Tactical communication forms.</li>
                <li>Collaboration toolkit.</li>
            </ul>
        },
        {
            title: "knowledge Management",
            desc: <ul>
                <li>Knowledge management and sharing process.</li>
                <li>Knowledge management techniques and tools.</li>
                <li>Software documents we deliver across various development stages.</li>
            </ul>
        }
       
   
    ];

    return (
        <div className='w-full mt-16 mb-8'>
        <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
            <h1 className='lg:text-3xl font-bold text-xl lg:text-black text-primary'>CT’s Solutions – from Automation to Advanced Data Analytic</h1>
            <p className='lg:w-11/12 mt-2 w-full text-base'>Apart from technical expertise, many other factors influence project success and software quality. ScienceSoft’s teams approach all of them seriously. Here are our project management and software development practices to deliver on goal, quality, schedule, and budget:</p>
        </div>
        <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
            {CTSolutionsData.map((item, index) => (
                <div key={index} className='lg:w-[30%] md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                    <h1 className='text-lg 2xl:text-xl text-bold'>{item.title}</h1>
                    <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
    );
};

export default CTSolutions;
