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

        <div className='w-full mt-16 mb-8'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Success Factors of PM Software</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>Based on ScienceSoft's ample expertise in project management software implementation, we've defined a set of factors, which if covered, help maximize ROI of a custom project management system.</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
                {successFactorsArr.map((item, index) => (
                    <div key={index} className='lg:w-[30%] md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SuccessFactors
