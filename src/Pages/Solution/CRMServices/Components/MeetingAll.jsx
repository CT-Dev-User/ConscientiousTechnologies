import React from 'react'

const MeetingAll = () => {
    const meetingAllArr = [{
        title: "CRM Consulting", desc: (
            <ul>
                <li className='list-disc ms-5'>We analyze your existing CRM needs and processes to find the optimal solution in terms of cost, functionality, and long-term business value.
                </li>
            </ul>
        )
    }, {
        title: "CRM implementation", desc: (
            <ul>
                <li className='list-disc ms-5'>We pick a fitting CRM platform, customize it to your unique requirements, and set up integrations to connect the new solution to your IT ecosystem, including other software platforms.
                </li>
            </ul>
        )
    }, {
        title: "Custom CRM development", desc: (
            <ul>
                <li className='list-disc ms-5'>If you require more than the regular CRM platforms can offer, we can fully develop a custom solution for you and integrate it with your existing corporate systems.
                </li>
            </ul>
        )
    }
    ]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Meeting All Your CRM Needs</h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>CRM services cover all stages of a CRM life cycle, from implementing a new solution to supporting and evolving an existing system. We work with companies at any stage of CRM adoption.</p>
                <h4 className='text-[22px] ms-2 mt-5'>Need to build a new CRM?</h4>
            </div>

            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%]'>
                {meetingAllArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-[90%] h-[200px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default MeetingAll
