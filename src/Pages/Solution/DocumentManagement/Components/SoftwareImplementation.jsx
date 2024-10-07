import React from 'react'

const SoftwareImplementation = () => {
    const SoftwareImplementationArr = [{
        title: "TDocumentation automation software consulting", desc: (
            <ul>


                <li className='list-disc ms-5'> Analyzing your company’s document workflows and types of docs to select documents for automation (e.g., invoices, financial statements or reports).
                </li>
                <li className='list-disc ms-5'>Prioritizing features for your document automation solution.</li>
            </ul>
        )
    }, {
        title: "Documentation automation software implementation", desc: (
            <ul>
                <li className='list-disc ms-5'>Drawing up technical requirements for document automation software.
                </li>
                <li className='list-disc ms-5'>Implementation of a platform-based or custom documentation automation solution.
                </li>
                <li className='list-disc ms-5'>Integration with enterprise systems (e.g., CRM, ERP, HRMS), other data sources (e.g., databases), or advanced technology (e.g., AI, ML).</li>
            </ul>
        )
    }
    ]
    return (

        <div className='w-full mt-16 mb-16'>
        <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
            <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Documentation Automation Software Implementation by ScienceSoft</h1>
            <p className='lg:w-11/12 mt-2 w-full text-base'>Experienced in developing document management software, ScienceSoft provides consultancy and implements solutions for automated document generation.</p>
        </div>

        <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
            {SoftwareImplementationArr.map((item, index) => (
                <div key={index} className='md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                    <h1 className='text-lg text-bold'>{item.title}</h1>
                    <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
    )
}

export default SoftwareImplementation
