import React from 'react'

const ITHelpDesk = () => {
    const getWithITSupportArr = [{
        title: "L1 support", desc: (
            <ul>
                <li className='list-disc ms-5'>Our help desk specialists handle basic user issues, such as restoring access when users forget their passwords setting up peripheral devices, granting or removing access to data or services according to the company's policy, etc. If required, they escalate incidents to L2 for further consideration.</li>

            </ul>
        )
    }, {
        title: "L2 support", desc: (
            <ul>
                <li className='list-disc ms-5'>Our L2 engineers resolve complex user-related requests and issues (e.g., user-side applications' configuration and advanced troubleshooting) and handle essential infrastructure tasks and issues like server updates and backup management.</li>

            </ul>
        )
    }, {
        title: "L3 support", desc: (
            <ul>
                <li className='list-disc ms-5'>Our L3 engineers tackle complex infrastructure and app-related issues, including troubleshooting on the code level, server virtualization, database design and configuration, defining backup schedules, retention policies, disaster recovery plans, and more.</li>
            </ul>
        )
    }
    ]
    return (

        <div className='w-full mt-16 mb-8'>
        <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
            <h1 className='2xl:text-3xl font-bold text-2xl lg:text-black text-primary'>IT Help Desk Support Levels We Offer</h1>
            <p className='lg:w-11/12 mt-2 w-full text-sm 2xl:text-base'>To get the most of outsourced IT support, we offer segmenting the support team into different levels according to the complexity of issues they are expected to handle.</p>
        </div>
        <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
            {getWithITSupportArr.map((item, index) => (
                <div key={index} className='lg:w-[30%] md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                    <h1 className='text-lg 2xl:text-xl text-bold'>{item.title}</h1>
                    <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
    )
}

export default ITHelpDesk
