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

        <div className="w-full py-16">
        <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
            <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>Business Support Systems (BSS)</h1>
            <p className='lg:w-11/12 mt-2 w-full text-base'>Witnessing the ever-growing transformation of the telecom industry, our clients are able to run their businesses in step with the change and create completely new business models thanks to:</p>

        </div>
        <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-5 w-[95%]'>
            {bussinessSupportSystemArr.map((item, index) => (
                <div key={index} className='lg:w-[31%] md:w-[45%] w-full lg:border lg:border-gray-300 p-3 h-auto py-3'>
                    <h1 className='text-lg text-bold'>{item.title}</h1>
                    <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                </div>
            ))}
        </div>
    </div>

    )
}

export default BussinessSupportSystem
