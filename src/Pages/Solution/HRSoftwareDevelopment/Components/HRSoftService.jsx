import React from 'react';

const HRSoftService = () => {
    const FunctionalModuleArr = [
        {
            title: "HR product consulting",
            desc: (
                <ul>
                    <li className='list-disc ms-5'>HR software market and competition analysis.</li>
                    <li className='list-disc ms-5'>HR solution conceptualization.</li>
                    <li className='list-disc ms-5'>Defining product differentiation and Unique Selling Proposition (USP).</li>
                    <li className='list-disc ms-5'>UX and UI design: UX audit and usability testing, interactive prototyping, creating a visual style guide, and more.</li>
                </ul>
            )

        },
        {
            title: "Developing an HR system from scratch",
            desc: (
                <ul>
                    Integration with the required systems.
                    <li className='list-disc ms-5'>Business needs analysis / Idea productization.
                    </li>
                    <li className='list-disc ms-5'>Architecture design.</li>
                    <li className='list-disc ms-5'>UX and UI design.</li>
                    <li className='list-disc ms-5'>HR software development.</li>
                    <li className='list-disc ms-5'>Integration with the required systems.
                    </li>
                </ul>
            )

        },
        {
            title: "Taking over HR product development",
            desc: (
                <ul>
                    <li className='list-disc ms-5'>Reduced development costs.</li>
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
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>HR Software Development Services We Offer</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>HR administrative tasks</p>
            </div>
            <div className='lg:w-[85%] mx-auto  w-[95%]'>
                <div className='lg:w-[%] flex flex-wrap gap-7 mt-12 w-[95%]'>

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

export default HRSoftService;
