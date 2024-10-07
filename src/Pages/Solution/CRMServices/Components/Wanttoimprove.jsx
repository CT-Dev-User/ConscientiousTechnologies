import React from 'react'

const Wanttoimprove = () => {
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



 <div className='w-full mt-16 mb-8'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Meeting All Your CRM Needs</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>CRM services cover all stages of a CRM life cycle, from implementing a new solution to supporting and evolving an existing system. We work with companies at any stage of CRM adoption.</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
                {meetingAllArr.map((item, index) => (
                    <div key={index} className='lg:w-[30%]  md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div> 
    )
}

export default Wanttoimprove
