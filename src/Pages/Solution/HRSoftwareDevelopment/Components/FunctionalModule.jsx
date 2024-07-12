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
        <div className="w-[100vw] h-[auto] box-border py-[60px] md:py-[30px]">
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Main HR Software Functional Modules We Develop </h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>HR administrative tasks</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%] '>
                {FunctionalModuleArr.map((item, index) => (
                    <div key={index} className='w-[45%] h-[180px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto'>
                        <h1 className='text-[18px] text-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-3 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FunctionalModule;
