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
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Documentation Automation Software: Key Functionality </h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Based on ScienceSoft's experience in similar projects, our consultants have outlined the core features of documentation automation software.</p>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%] md:gap-y-[40px]'>
                {automationSoftwareArr.map((item, index) => (
                    <div key={index} className='w-[45%] h-[220px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default AutomationSoftware
