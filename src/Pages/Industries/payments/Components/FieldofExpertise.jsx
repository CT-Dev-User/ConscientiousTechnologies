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
        <div className="w-full py-16">
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>
                    Our Field of Expertise
                </h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>
                    ScienceSoft provides full-cycle consulting and development services to deliver effective and secure payment solutions.
                </p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-5 w-[95%]'>
                {FieldofExpertiseArr.map((item, index) => (
                    <div key={index} className='lg:w-[31%] md:w-[45%] w-full lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <div className='text-sm mt-3 font-medium'>
                            <p className='text-base'>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FieldofExpertise
