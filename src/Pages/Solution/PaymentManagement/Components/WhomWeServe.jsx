import React from 'react'

const WhomWeServe = () => {
    const WhomWeServeArr = [{
        title: "Banks", desc: (
            <ul>
                <li className='list-disc ms-5'>-------</li>

            </ul>
        )
    }, {
        title: "Non-Bank payment services", desc: (
            <ul>
                <li className='list-disc ms-5'>Real-time tracking of vehicles.</li>
                <li className='list-disc ms-5'>Fleet availability dashboards.</li>
                <li className='list-disc ms-5'>Drivers’ behavior monitoring (e.g., driving speed, unnecessary stops).</li>
                <li className='list-disc ms-5'>Fuel consumption tracking.</li>
            </ul>
        )
    }, {
        title: "Card providers", desc: (
            <ul>
                <li className='list-disc ms-5'>Route calculation and optimization.</li>
                <li className='list-disc ms-5'>Delivery scheduling and task list generation (for drivers and employees).</li>
                <li className='list-disc ms-5'>Automated vehicle assignment.</li>
                <li className='list-disc ms-5'>Vehicle service history tracking.</li>
            </ul>
        )
    },
    {
        title: "Enterprises looking to digitalize", desc: (
            <ul>
                <li className='list-disc ms-5'>Automated detection of a vehicle collision.</li>
                <li className='list-disc ms-5'>Automatic accident notifications to fleet managers.</li>
                <li className='list-disc ms-5'>Accident details reports.</li>
                <li className='list-disc ms-5'>Towing service management.</li>
            </ul>
        )
    },
    {
        title: "Paytech startups", desc: (
            <ul>
                <li className='list-disc ms-5'>Optimal route planning and dynamic route adjustment (in case of accidents, roadblocks, etc.).</li>
                <li className='list-disc ms-5'>Route schedules optimization (e.g., based on distance, priorities, and deadlines).</li>
            </ul>
        )
    },
    {
        title: "Payment software companies", desc: (
            <ul>
                <li className='list-disc ms-5'>Fuel management optimization.</li>
                <li className='list-disc ms-5'>Vehicle maintenance and expenses budgeting.</li>
                <li className='list-disc ms-5'>Vehicle insurance and warranty expiration notifications</li>

            </ul>
        )
    }
    ]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[20px] md:pt-[50px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Whom We Serve</h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Our financial software consulting services are customized to our clients’ needs and may cover:</p>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%] md:gap-y-[40px]'>
                {WhomWeServeArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-[90%] h-[200px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default WhomWeServe
