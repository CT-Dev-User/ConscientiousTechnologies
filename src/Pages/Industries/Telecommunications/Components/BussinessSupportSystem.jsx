import React from 'react'

const BussinessSupportSystem = () => {
    const bussinessSupportSystemArr = [{
        title: "Charging and billing systems", desc: (
            <ul>
                <li className='list-disc ms-5'>Subscribers to have instant control over their plans as well as benefit from multiple offerings;</li>
                <li className='list-disc ms-5'>Operators to create various pricing models and personalized offers for several customer segments (thanks to CRM integration).</li>
            </ul>
        )
    }, {
        title: "CRM systems", desc: (
            <ul>
                <li className='list-disc ms-5'>Profile-based and personalized;</li>
                <li className='list-disc ms-5'>Secure, powerful and scalable;</li>
                <li className='list-disc ms-5'>Integrated with business systems, data analysis tools and social media;</li>
                <li className='list-disc ms-5'>Optimized for mobile phones and tablets.</li>

            </ul>
        )
    }, {
        title: "Customer self-service portals", desc: (
            <ul>
                <li className='list-disc ms-5'>Customer account management: tracking order history, channel activity, promotion response and others;</li>
                <li className='list-disc ms-5'>Loyalty program management: creating tailored offers, promotions and information on services and products;</li>

            </ul>
        )
    }, {
        title: "All-round data analysis", desc: (
            <ul>
                <li className='list-disc ms-5'> Data warehousing: aggregating data from multiple sources into a single, quick and safe database – we do the design and implementation;</li>
                <li className='list-disc ms-5'>Advanced reporting and visualization: customizable reports to evaluate campaign effectiveness, predict chun.</li>
            </ul>
        )
    }, {
        title: "Corporate portals", desc: (
            <ul>
                <li className='list-disc ms-5'>Developers (Java, .NET, Python, PHP, C++, and more).</li>
                <li className='list-disc ms-5'>TeBusiness workflow automation;</li>
                <li className='list-disc ms-5'>Project and task management;</li>
                <li className='list-disc ms-5'>Corporate knowledge base;</li>
                <li className='list-disc ms-5'>Workforce management;sters (manual and automated testing).</li>

            </ul>
        )
    }, {
        title: "Custom web & mobile application", desc: (
            <ul>
                <li className='list-disc ms-5'>Mobile number portability system;</li>
                <li className='list-disc ms-5'>Sales force automation system.</li>

            </ul>
        )
    }
    ]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:pt-[20px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-2'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Business Support Systems (BSS) </h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Witnessing the ever-growing transformation of the telecom industry, our clients are able to run their businesses in step with the change and create completely new business models thanks to:</p>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%] md:gap-y-[40px]'>
                {bussinessSupportSystemArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-[90%] h-[200px] border border-gray-300 p-3 md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default BussinessSupportSystem
