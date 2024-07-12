import React from 'react'

const SuccessFactors = () => {
    const successFactorsArr = [{
        title: "Strong PM analytics", desc: (
            <ul>
                <li className='list-disc ms-5'>Near-real-time analysis of project effectiveness.</li>
                <li className='list-disc ms-5'>Accurate forecasting of project resources’ capacity and business value the proposed projects may bring.</li>
            </ul>
        )
    }, {
        title: "Ample functionality for project team", desc: (
            <ul>
                <li className='list-disc ms-5'>Register their project-related activities and time spent on them. </li>
                <li className='list-disc ms-5'>Check their progress against project KPIs.
                </li>
                <li className='list-disc ms-5'>Access the project map visualizing dependencies and accountability within the project.</li>
            </ul>
        )
    }, {
        title: "PM software security ensured", desc: (
            <ul>
                <li className='list-disc ms-5'>At the requirements gathering stage (e.g., drawing up a risk profile, etc.).
                </li>
                <li className='list-disc ms-5'>During the solution’s development (e.g., adherence to secure coding practices, etc.).</li>
                <li className='list-disc ms-5'>During the software evolution (e.g., regular vulnerability assessments and penetration testing).
                </li>
            </ul>
        )
    }
    ]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Success Factors of PM Software</h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Based on ScienceSoft's ample expertise in project management software implementation, we've defined a set of factors, which if covered, help maximize ROI of a custom project management system.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%]'>
                {successFactorsArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-[90%] h-[200px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto '>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default SuccessFactors
