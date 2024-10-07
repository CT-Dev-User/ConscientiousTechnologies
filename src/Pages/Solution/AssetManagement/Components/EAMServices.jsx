import React from 'react'

const EAMServices = () => {
    const FunctionalityModuleArr = [{
        title: "EAM advisory", desc: (
            <ul>
                <li className='list-disc ms-5'>Analysis of EAM and implementation drivers.</li>
                <li className='list-disc ms-5'>Assessment of the current EAM processes supported by technology (the automation level of the asset-related processes, features in and out of use, integrations, etc.).
                </li>
                <li className='list-disc ms-5'>EAM solution conceptualization and design.</li>
                <li className='list-disc ms-5'>Selection of a suitable EAM platform, optimal plan/edition selection with the list of needed modules and features, customization and integrations specification (if required).</li>
                <li className='list-disc ms-5'>EAM solution conceptualization and design.</li>

            </ul>
        )
    }, {
        title: "EAM advisory + implementation and support", desc: (
            <ul>
                <li className='list-disc ms-5'>EAM needs analysis and solution conceptualization.
                </li>
                <li className='list-disc ms-5'>EAM software architecture design (for custom solutions).
                </li>
                <li className='list-disc ms-5'>PoC implementation (optional).</li>
                <li className='list-disc ms-5'>EAM software development/customization. </li>
                <li className='list-disc ms-5'>Integration of the EAM solution/solution components into the existing IT ecosystem.</li>
            </ul>
        )
    }
    ]
    return (

        <div className='w-full mt-16 mb-16'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-20'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>EAM Services We Offer</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>Challenges Fleet Management Software by ScienceSoft Solves </p>
            </div>
            <div className='lg:w-[85%] w-[95%] mx-auto'>
                <div className=' flex flex-wrap justify-between gap-7 mt-12 w-[93%]'>
                    {FunctionalityModuleArr.map((item, index) => (
                        <div key={index} className='md:w-[48%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                            <h1 className='text-lg text-bold'>{item.title}</h1>
                            <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>


    )
}

export default EAMServices
