import React from 'react'

const ChallengesFleet = () => {
    const FunctionalityModuleArr = [{
        title: "For fleet owners", desc: (
            <ul>
                <li className='list-disc ms-5'>Troubled compliance of fleet operations with federal and industry-specific fleet management regulations.</li>
                <li className='list-disc ms-5'>Need for higher operational efficiency due to fluctuating fuel prices and low margin.
                </li>
                <li className='list-disc ms-5'>Difficulty in planning vehicle purchasing and low visibility over fleet operations and maintenance expenses.
                </li>
                <li className='list-disc ms-5'>Financial losses due to frequent accidents and inability to guarantee driver safety
                </li>

            </ul>
        )
    }, {
        title: "For fleet management service providers", desc: (
            <ul>
                <li className='list-disc ms-5'>Expenses on your ready-made product grow together with your customer base.
                </li>
                <li className='list-disc ms-5'>Unmet customer needs due to a problematic implementation of custom functionality in a ready-made product.
                </li>
                <li className='list-disc ms-5'>Low user satisfaction due to a complex interface and issues at the code level.</li>
               
            </ul>
        )
    }
    ]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Challenges Fleet Management Software by ScienceSoft Solves </h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Challenges Fleet Management Software by ScienceSoft Solves </p>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%] md:gap-y-[40px]'>
                {FunctionalityModuleArr.map((item, index) => (
                    <div key={index} className='w-[45%] md:w-[90%] h-[250px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ChallengesFleet
