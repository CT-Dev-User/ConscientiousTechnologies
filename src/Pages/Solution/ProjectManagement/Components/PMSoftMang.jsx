import React from 'react'

const PMSoftMang = () => {
    const pmSoftMangArr = [{
        title: "Project management software consulting", desc: (
            <ul>
                <li className='list-disc ms-5'>Analyze your industry and business specifics, define the existing PM processes. </li>
                <li className='list-disc ms-5'>Provide a requirements specification for your PM software.</li>
                <li className='list-disc ms-5'>Draw up a scalable and secure architecture for the PM solution.
                </li>
                <li className='list-disc ms-5'>Suggest an integration map to ensure effective workflows between PM and other business solutions (ERP, HCM, payroll system, etc.).
                </li>
            </ul>
        )
    }, {
        title: "Project management software development", desc: (
            <ul>
                <li className='list-disc ms-5'>Develop a requirements specification for your project management software.
                </li>
                <li className='list-disc ms-5'>Create a secure and scalable PM software architecture.
                </li>
                <li className='list-disc ms-5'>Design a convenient and well-structured GUI ensuring the minimal number of usage steps for smooth PM workflows.</li>
            </ul>
        )
    }
    ]
    return (
        <div className='w-full mt-16 mb-8'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Project Management Software Implementation</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>With 34 years in custom software development, ScienceSoft is ready to advise on and develop a PM solution tailored to your industry and business specifics.</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
                {pmSoftMangArr.map((item, index) => (
                    <div key={index} className='md:w-[46%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PMSoftMang
