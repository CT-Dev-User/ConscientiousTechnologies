import React from 'react'

const YourServiceOption = () => {
    const serviceOptionArr = [{
        title: "Consulting on corporate finance digital transformation", desc: (
            <ul>
                <li className='list-disc ms-5'>Analyse your financial management needs and elicit requirements for the financial management solution.</li>
                <li className='list-disc ms-5'>Suggest the optimal features, architecture, and tech stack for the financial software.</li>
                <li className='list-disc ms-5'>Prepare a plan of integrations (with ERP, CRM, an inventory management system, a BI solution, etc.).</li>

            </ul>
        )
    }, {
        title: "Full-cycle corporate financial software development", desc: (
            <ul>
                <li className='list-disc ms-5'>Conceptualize a financial management solution.</li>
                <li className='list-disc ms-5'>Design the architecture.</li>
                <li className='list-disc ms-5'>Develop financial management software.</li>
                <li className='list-disc ms-5'>Integrate the solution with the required systems.</li>
                <li className='list-disc ms-5'>Run all necessary quality assurance procedures.</li>
                <li className='list-disc ms-5'>Help your employees adopt the solution.</li>

            </ul>
        )
    }


    ]
    return (

        <div className='w-full py-10 pb-16'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Choose Your Service Option</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>Challenges Fleet Management Software by ScienceSoft Solves </p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
                {serviceOptionArr.map((item, index) => (
                    <div key={index} className='md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default YourServiceOption
