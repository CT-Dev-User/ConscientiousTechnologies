import React from 'react'

const DocumentationAutomation = () => {
    const DocumentationAutomationArr = [{
        title: "Easy integration", desc: (
            <ul>
                <li className='list-disc ms-5'>with data sources (e.g., CRM, ERP, HR system, databases, email services) from which business data is extracted into intelligent document templates.
                </li>
            </ul>
        )
    }, {
        title: "No-code document template editor", desc: (
            <ul>

                <li className='list-disc ms-5'>to enable even non-technical users to create intelligent document templates.
                </li>
            </ul>
        )
    }, {
        title: "Mobile and offline access", desc: (
            <ul>
                <li className='list-disc ms-5'>to allow users to generate documents at any time, at any place, using any device and without dependence on the Internet connection.
                </li>
            </ul>
        )
    }, {
        title: "Strong security features", desc: (
            <ul>
                <li className='list-disc ms-5'>to comply with governmental and industry-specific regulations like GDPR, SOX, GLBA, HIPAA, and more.
                </li>
            </ul>
        )
    }
    ]
    return (

        <div className='w-full my-16'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Documentation Automation Success Factors</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>Based on ScienceSoft's experience in similar projects, our consultants have outlined the core features of documentation automation software.</p>
            </div>

            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
                {DocumentationAutomationArr.map((item, index) => (
                    <div key={index} className='md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default DocumentationAutomation
