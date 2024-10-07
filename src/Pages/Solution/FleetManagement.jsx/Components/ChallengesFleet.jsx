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

        <div className='w-full mt-16 mb-8'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-20'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Challenges Fleet Management Software by ScienceSoft Solves </h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>Challenges Fleet Management Software by ScienceSoft Solves </p>
            </div>
            <div className='lg:w-[85%] mx-auto  w-[95%]'>
                <div className='lg:w-[90%] flex flex-wrap gap-7 mt-12 w-[95%]'>
                    {FunctionalityModuleArr.map((item, index) => (
                        <div key={index} className='md:w-[48%] lg:border lg:border-gray-300 p-3 h-auto py-5'>
                            <h1 className='text-lg text-bold'>{item.title}</h1>
                            <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ChallengesFleet
