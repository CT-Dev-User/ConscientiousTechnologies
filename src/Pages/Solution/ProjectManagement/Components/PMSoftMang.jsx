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
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Project Management Software Implementation</h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>With 34 years in custom software development, ScienceSoft is ready to advise on and develop a PM solution tailored to your industry and business specifics.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%]'>
                {pmSoftMangArr.map((item, index) => (
                    <div key={index} className='w-[45%] md:w-[90%] h-[200px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto '>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default PMSoftMang
