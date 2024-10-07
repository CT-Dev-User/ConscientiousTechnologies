import React from 'react';

const FunctionalModule = () => {
    const FunctionalModuleArr = [
        {
            title: "HR administrative tasks",
            desc: (
                <ul>
                    <li className='list-disc ms-5'>Employee database.</li>
                    <li className='list-disc ms-5'>Employee profiles.</li>
                    <li className='list-disc ms-5'>Employment life cycle transactions.</li>
                    <li className='list-disc ms-5'>Employee benefits.</li>
                    <li className='list-disc ms-5'>Reporting and analytics.
                    </li>
                </ul>
            )

        },
        {
            title: "HR service management",
            desc: (
                <ul>
                    <li className='list-disc ms-5'> Corporate policies and procedures.</li>
                    <li className='list-disc ms-5'>Employee handbook.</li>
                    <li className='list-disc ms-5'>Organizational chart.</li>
                    <li className='list-disc ms-5'>Employee knowledge base.</li>
                    <li className='list-disc ms-5'>Employee self-service portal.
                    </li>
                    <li className='list-disc ms-5'>Virtual assistants and chatbots for employees.
                    </li>
                </ul>
            )

        },
        {
            title: "Production management",
            desc: (
                <ul>
                    <li className='list-disc ms-5'>Onboarding.</li>
                    <li className='list-disc ms-5'>Performance management.</li>
                    <li className='list-disc ms-5'>Competency management.</li>
                    <li className='list-disc ms-5'>Career and succession planning.</li>
                    <li className='list-disc ms-5'>Internal job transfer.
                    </li>
                    <li className='list-disc ms-5'>Learning and development.
                    </li>
                </ul>
            )

        },
        {
            title: "Labor management",
            desc: (
                <ul>
                    <li className='list-disc ms-5'>Absence management.</li>
                    <li className='list-disc ms-5'>Worktime tracking.</li>
                    <li className='list-disc ms-5'>Time and attendance evaluation.</li>
                    <li className='list-disc ms-5'>Employee scheduling.</li>
                    <li className='list-disc ms-5'>Tasks and activities tracking.
                    </li>
                </ul>
            )

        }

    ];

    return (

        <div className='w-full mt-16 mb-8'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-20'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Main HR Software Functional Modules We Develop </h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>HR administrative tasks</p>
            </div>
            <div className='lg:w-[85%] mx-auto  w-[95%]'>
                <div className='lg:w-[95%] w-full flex flex-wrap gap-7 mt-12'>
                    
                    {FunctionalModuleArr.map((item, index) => (
                        <div key={index} className='md:w-[48%] lg:border lg:border-gray-300 p-3 h-auto py-5'>
                            <h1 className='text-lg text-bold'>{item.title}</h1>
                            <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default FunctionalModule;
