import React from 'react'

const FieldofExpertise = () => {
    const FieldofExpertiseArr = [{
        title: "Payment software development", desc: (
            <ul>
                <li className='list-disc ms-5'>We promptly develop your payment solution, integrate it with the required systems, and perform comprehensive quality assurance. We can also provide after-launch software support. You get a secure solution with capabilities tailored to your business and end-user needs.</li>
            </ul>
        )
    }, {
        title: "Payment software evolution", desc: (
            <ul>
                <li className='list-disc ms-5'>We can help rearchitect your payment system, migrate it to the cloud, or modernize the legacy tech stack and codebase. Our developers can also add new features to the existing software to help you get a working solution faster and at a lower cost.</li>
            </ul>
        )
    }, {
        title: "Consulting on payment software development", desc: (
            <ul>
                <li className='list-disc ms-5'>We introduce an optimal feature set, architecture, UX/UI design, and tech stack for your payment solution and advise on cost optimization opportunities. You also get recommendations on security and compliance and a project roadmap for risk-free implementation.</li>
            </ul>
        )
    }, {
        title: "Payment product consulting", desc: (
            <ul>
                <li className='list-disc ms-5'>We analyze the competition, define the fitting market niche and target audience for your payment product, and form a unique selling proposition. You receive a clear concept of your payment software and an interactive prototype to quickly test the product’s technical feasibility and usability.</li>
            </ul>
        )
    }
    ]
    return (

        <div className='w-[100vw] h-[auto] box-border py-[80px] md:pt-[40px] pb-[20px]'>
        <div className='w-[85%] mx-auto md:w-full md:px-3'>
            <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Our Field of Expertise</h1>
            <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>ScienceSoft provides full-cycle consulting and development services to deliver effective and secure payment solutions.</p>

        </div>
        <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px]'>
            {FieldofExpertiseArr.map((item, index) => (
                <div key={index} className='w-[350px] md:w-[90%] h-[200px] border border-gray-300 p-3 md:w-full md:border-none md:p-0 md:h-auto md:py-3'>
                    <h1 className='text-[18px] font-bold'>{item.title}</h1>
                    <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                </div>
            ))}
        </div>

    </div>

    )
}

export default FieldofExpertise
