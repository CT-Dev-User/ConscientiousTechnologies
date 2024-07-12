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
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Advanced CRM Capabilities We Implement </h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Based on ScienceSoft's ample expertise in project management software implementation, we've defined a set of factors, which if covered, help maximize ROI of a custom project management system.</p>
            </div>

            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%]'>
                {advancedCRMArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-[90%] h-[200px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default AdvancedCRM
