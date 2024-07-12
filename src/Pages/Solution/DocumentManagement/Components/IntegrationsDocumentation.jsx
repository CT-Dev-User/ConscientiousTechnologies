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
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Recommended Integrations for Documentation Automation Software </h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Challenges Fleet Management Software by ScienceSoft Solves </p>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%] md:gap-y-[40px]'>
                {integrationsDocumentationArr.map((item, index) => (
                    <div key={index} className='w-[45%] h-[220px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>+{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default IntegrationsDocumentation
