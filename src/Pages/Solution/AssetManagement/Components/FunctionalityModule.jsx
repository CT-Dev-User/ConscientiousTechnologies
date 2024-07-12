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
        <div className='w-[100vw] h-[auto] box-border py-[60px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Go-to Functionality Modules and Integrations for EAM Solutions </h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Our financial software consulting services are customized to our clients’ needs and may cover:</p>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%] md:gap-y-[40px]'>
                {FunctionalityModuleArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-[90%] h-[200px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default FunctionalityModule
