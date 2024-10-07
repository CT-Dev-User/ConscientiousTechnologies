import React from 'react'

const AdvancedCRM = () => {
    const advancedCRMArr = [{
        title: "Customer data warehousing", desc: (
            <ul>
                <li className='list-disc ms-5'>If you’re struggling with large volumes of unstructured, high-velocity customer data, we can set up an effective ETL/ELT pipeline to properly organize and store the data centrally.
                </li>
            </ul>
        )
    }, {
        title: "Advanced customer analytics", desc: (
            <ul>
                <li className='list-disc ms-5'>We can go beyond the default CRM capabilities and build an advanced analytics solution that considers numerous customer behavior factors and enables predictive modeling.
                </li>
            </ul>
        )
    }, {
        title: "Personalization machine learning", desc: (
            <ul>
                <li className='list-disc ms-5'>Personalization engines we build continuously self-learn from newly arriving data and customer behavior to deliver relevant suggestions that drive higher engagement and sales.
                </li>
            </ul>
        )
    }
    ]
    return (

        <div className='w-full mt-16 mb-8'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Advanced CRM Capabilities We Implement</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>Based on ScienceSoft's 34 years of experience in software development, we can outline the core functionality of a custom project management system.</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
                {advancedCRMArr.map((item, index) => (
                    <div key={index} className='lg:w-[30%] md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AdvancedCRM
