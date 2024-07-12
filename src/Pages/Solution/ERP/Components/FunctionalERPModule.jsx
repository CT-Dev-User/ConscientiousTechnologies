import React from 'react';

const FunctionalERPModule = () => {
    const ourSoftDevOption = [
        {
            title: "Finance and accounting",
            desc:
                "Financial planning and analysis, accounts payable and accounts receivable tracking, general ledger management, billing automation."
        },
        {
            title: "Human resources",
            desc:"HR policy management and personnel management from recruitment and onboarding to payroll, attendance, learning, and employee request management."
        },
        {
            title: "Production management",
            desc: "Production planning, scheduling and control. It may include sub-modules for product lifecycle management and quality assurance."
        },
        {
            title: "Sales and marketing",
            desc: "Functionality for automating customer order management, planning data-driven marketing campaigns, communicating with the customers and getting visibility into the sales dynamics."
        },
        {
            title: "Supply chain management",
            desc: "Inventory planning, optimization, and control, management of warehouse operations, vendor management, sourcing and procurement automation."
        },
        {
            title: "Service operations management",
            desc: "Planning, control, and optimization of service-related workflows. Service level agreement management. Conducting polls and e-voting to gather service improvement ideas."
        },
        {
            title: "Project management",
            desc: "Project planning and monitoring, tasks assignment and tracking, team collaboration tools (instant messaging, shared file space, etc.)."
        },
        {
            title: "Document management",
            desc: "SCentralized storage of multiple document types, easy document navigation and sharing, document templates."
        },
        {
            title: "Knowledge management",
            desc: "Centralized knowledge repository with a powerful search engine, automated knowledge classification, knowledge sharing and collaboration tools."
        }
    ];

    return (
        <div className="w-full mt-[40px] mb-[60px]">
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] text-[blue]'>Functional ERP Modules ScienceSoft Develops</h1>
                <p className='w-11/12 text-sm mt-2 md:w-full md:text-[16px]'>Depending on your business needs and budget, we can cover the development of the following ERP modules to automate and raise the efficiency of your workflows:</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[95%]'>
                {ourSoftDevOption.map((item, index) => (
                    <div key={index} className='w-[350px] h-[180px] border border-gray-300 p-3 md:border-none md:h-auto md:py-3'>
                        <h1 className='text-[18px] text-bold'>{item.title}</h1>
                        <p className='text-[13.5px] mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FunctionalERPModule;
