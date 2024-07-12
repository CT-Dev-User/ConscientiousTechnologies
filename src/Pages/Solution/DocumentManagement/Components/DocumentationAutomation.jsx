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
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Documentation Automation Success Factors</h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Based on ScienceSoft's ample experience in software development, we've defined the key factors, which if covered, help maximize ROI of documentation automation software.</p>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%] md:gap-y-[40px]'>
                {DocumentationAutomationArr.map((item, index) => (
                    <div key={index} className='w-[45%] h-[220px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default DocumentationAutomation
