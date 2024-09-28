import React from 'react';

const ERPDevService = () => {
    const ourSoftDevOption = [
        {
            title: "ERP consulting",
            desc:
                "We design the optimal feature set, architecture,UX and UI of ERP software with your unique needs in mind. Our consultants introduce the best-fitting tech stack for ERP implementation and provide expert advice on security and compliance. You also receive a detailed ERP project plan for risk-free implementation."
        },
        {
            title: "ERP development",
            desc: "We cover all stages of ERP development, from design to deployment in production. Our ERP talents integrate the new software with your existing corporate systems and run the necessary quality assurance procedures. You also benefit from user training in a preferred format and get after-launch support."
        },
        {
            title: "ERP evolution",
            desc: "We revamp your legacy ERP software's architecture, codebase, and tech stack and upgrade it with the required features. Our service can comprise cloud migration and data migration to the new modules. You get a modern solution promptly and with minimal disruption to your business operations."
        }
    ];

    return (
        <div className="w-full lg:py-14 py-5">
            <div className='lg:w-[85%] mx-auto w-[90%]'>
                <h1 className='lg:text-3xl font-bold text-2xl text-[blue]'>ScienceSoft’s ERP Development Service Scope </h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>Our custom ERP development services are closely bound to our clients' needs and can be related to:</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
                {ourSoftDevOption.map((item, index) => (
                    <div key={index} className='lg:w-[30%] lg:border border-gray-300 p-3 h-auto w-full'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ERPDevService;
