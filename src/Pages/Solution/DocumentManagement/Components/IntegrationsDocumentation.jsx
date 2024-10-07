import React from 'react'

const IntegrationsDocumentation = () => {
    const integrationsDocumentationArr = [{
        title: "Data sources", desc: (
            <ul>
                <li className='list-disc ms-5'>(CRM, ERP, DMS, and HR systems, databases, email services, etc.) to enable auto-population of intelligent templates with relevant data. For example, integration with CRM allows automatically populate templates for contracts and sales proposals with customer data (e.g., names, legal addresses).
                </li>
            </ul>
        )
    }, {
        title: "DMS", desc: (
            <ul>

                <li className='list-disc ms-5'>to fully automate a document life cycle from creation to e-signing due to intelligent templates of documentation automation software and workflow capabilities of DMS.
                </li>
            </ul>
        )
    }, {
        title: "BI", desc: (
            <ul>
                <li className='list-disc ms-5'>to build visualized reports on the use of automatically generated documentation (e.g., number of approved/rejected/pending documents, document flow by department) in BI software to evaluate the efficiency of documentation automation software.
                </li>
            </ul>
        )
    }, {
        title: "OCR", desc: (
            <ul>
                <li className='list-disc ms-5'>to convert scanned documents into readable formats like PDF and extract data from them into intelligent templates.
                </li>
            </ul>
        )
    }
    ]
    return (

        <div className='w-full my-16'>
        <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
            <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Recommended Integrations for Documentation Automation Software  </h1>
            <p className='lg:w-11/12 mt-2 w-full text-base'>Challenges Fleet Management Software by ScienceSoft Solves </p>
        </div>

        <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
            {integrationsDocumentationArr.map((item, index) => (
                <div key={index} className='md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                    <h1 className='text-lg text-bold'>{item.title}</h1>
                    <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
    )
}

export default IntegrationsDocumentation
