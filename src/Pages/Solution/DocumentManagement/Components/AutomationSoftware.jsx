import React from 'react'

const AutomationSoftware = () => {
    const automationSoftwareArr = [{
        title: "Template creation and management", desc: (
            <ul>


                <li className='list-disc ms-5'>  A template editor for creating intelligent templates consisting of dynamic fields and interview forms with complex branching logic.
                </li>
                <li className='list-disc ms-5'>Converting an org’s electronic documents (e.g., contracts, invoices) stored in DMS or other repositories into intelligent templates.</li>
                <li className='list-disc ms-5'>Template approval workflow.
                </li>
            </ul>
        )
    }, {
        title: "Document generation and management", desc: (
            <ul>
                <li className='list-disc ms-5'>Document creation using interview form answers or due to automated data extraction from integrated data sources (e.g., enterprise systems, databases) into intelligent document templates.
                </li>
                <li className='list-disc ms-5'>Batch document generation (e.g., contracts, invoices, letters, applications, claims).
                </li>
                <li className='list-disc ms-5'>Document assembly workflow.</li>
            </ul>
        )
    }, {
        title: "Document output and distribution", desc: (
            <ul>
                <li className='list-disc ms-5'>Multiple output formats (.pdf, .docx, .pptx, .html).
                </li>
                <li className='list-disc ms-5'>Document output in different languages.</li>
                <li className='list-disc ms-5'>Mobile access to documents and mobile signature capture.</li>
                <li className='list-disc ms-5'>Offline access to documents.</li>
            </ul>
        )
    }, {
        title: "Document security and compliance", desc: (
            <ul>
                <li className='list-disc ms-5'>Data encryption.
                </li>
                <li className='list-disc ms-5'>Role-based access control.</li>
                <li className='list-disc ms-5'>Multifactor authentication.</li>
                <li className='list-disc ms-5'>Document versioning and audit trail.</li>
                <li className='list-disc ms-5'>Document archiving and retention/deletion policies.</li>
                <li className='list-disc ms-5'>Document backup and recovery.</li>
                <li className='list-disc ms-5'>Document compliance management (e.g., HIPAA, GDPR, GLBA, SOX).</li>
            </ul>
        )
    }
    ]
    return (

        <div className='w-full my-16'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Documentation Automation Software: Key Functionality </h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>Based on ScienceSoft's experience in similar projects, our consultants have outlined the core features of documentation automation software.</p>
            </div>

            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
                {automationSoftwareArr.map((item, index) => (
                    <div key={index} className='md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>


    )
}

export default AutomationSoftware
