import React from 'react'

const FunctionalityModule = () => {
    const FunctionalityModuleArr = [{
        title: "Asset tracking and monitoring", desc: (
            <ul>
                <li className='list-disc ms-5'>Up to 50% reduced asset downtime</li>
                <li className='list-disc ms-5'>Up to 24% asset productivity increase
                </li>
                <li className='list-disc ms-5'>due to optimized asset usage, minimized asset loss and rationalized asset expenditure.
                </li>

            </ul>
        )
    }, {
        title: "Asset maintenance management", desc: (
            <ul>
                <li className='list-disc ms-5'>Up to 25% reduced maintenance costs
                </li>
                <li className='list-disc ms-5'>Up to 70% fewer asset breakdowns
                </li>
                <li className='list-disc ms-5'>Up to 12% fewer scheduled repairs</li>
                <li className='list-disc ms-5'>due to optimized asset maintenance and real-time monitoring of asset operation.
                </li>
            </ul>
        )
    }, {
        title: "Asset planning and optimization", desc: (
            <ul>
                <li className='list-disc ms-5'>Up to 21% OEE increase.
                </li>
                <li className='list-disc ms-5'>Up to 5% reduced capital investment</li>
                <li className='list-disc ms-5'>due to optimized asset utilization scenarios and asset investment planning.</li>
            </ul>
        )
    }
    ]
    return (   
        <div className='w-full mt-16 mb-8'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-20'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Go-to Functionality Modules and Integrations for EAM Solutions </h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>Our financial software consulting services are customized to our clients’ needs and may cover:</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-12 w-[95%]'>
                {FunctionalityModuleArr.map((item, index) => (
                    <div key={index} className='lg:w-[30%]  md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default FunctionalityModule
