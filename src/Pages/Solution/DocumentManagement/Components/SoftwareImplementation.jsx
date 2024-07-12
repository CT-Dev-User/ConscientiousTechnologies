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
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Documentation Automation Software Implementation by ScienceSoft</h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Experienced in developing document management software, ScienceSoft provides consultancy and implements solutions for automated document generation.</p>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%] md:gap-y-[40px]'>
                {SoftwareImplementationArr.map((item, index) => (
                    <div key={index} className='w-[45%] h-[220px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default SoftwareImplementation
