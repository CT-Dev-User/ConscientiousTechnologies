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
        <div className='w-[100vw] h-[auto] box-border pt-[40px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue] md:text-[24px]'>IT Help Desk Support Levels We Offer</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>To get the most of outsourced IT support, we offer segmenting the support team into different levels according to the complexity of issues they are expected to handle.</p>
            </div>
            <div className='w-[83%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[90%]'>
                {getWithITSupportArr.map((item, index) => (
                    <div key={index} className='w-[350px] h-[220px] border border-gray-300 p-3 md:border-none'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ITHelpDesk
