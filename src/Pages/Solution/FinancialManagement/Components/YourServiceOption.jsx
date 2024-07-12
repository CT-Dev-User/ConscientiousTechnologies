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
        <div className='w-[100vw] h-[auto] box-border pt-[50px] md:py-[30px] pb-[30px] md:pb-[45px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Choose Your Service Option </h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>Challenges Fleet Management Software by ScienceSoft Solves</p>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[95%]'>
                {serviceOptionArr.map((item, index) => (
                    <div key={index} className='w-[45%] md:w-[90%] h-[200px] border border-gray-300 p-3 md:h-auto md:border-none'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default YourServiceOption
