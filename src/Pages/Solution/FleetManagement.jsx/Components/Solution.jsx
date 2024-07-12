import React from 'react'

const Solution = () => {
    const SolutionArr = [{
        title: "Fleet maintenance", desc: (
            <ul>

                <li className='list-disc ms-5'>Preventative fleet maintenance.</li>
                <li className='list-disc ms-5'>Maintenance scheduling and alerting.
                </li>
                <li className='list-disc ms-5'>Out-of-order alerts.
                </li>
                <li className='list-disc ms-5'>Maintenance completion reports.
                </li>
                <li className='list-disc ms-5'>Vehicles’ parts inventory management (e.g., purchase order creation, tracking). management
                </li>

            </ul>
        )
    }
        , {
        title: "Fleet tracking", desc: (
            <ul>
                <li className='list-disc ms-5'>Real-time tracking of vehicles.</li>
                <li className='list-disc ms-5'>Fleet availability dashboards.
                </li>
                <li className='list-disc ms-5'>Drivers’ behavior monitoring (e.g., driving speed, unnecessary stops).</li>
                <li className='list-disc ms-5'>Fuel consumption tracking.
                </li>

            </ul>
        )
    }, {
        title: "Dispatch management", desc: (
            <ul>
                <li className='list-disc ms-5'>Route calculation and optimization.
                </li>
                <li className='list-disc ms-5'>Delivery scheduling and task list generation (for drivers and employees).
                </li>
                <li className='list-disc ms-5'>Automated vehicle assignment.</li>
                <li className='list-disc ms-5'>Vehicle service history tracking.
                </li>

            </ul>
        )
    }
        , {
        title: "Accident detection", desc: (
            <ul>
                <li className='list-disc ms-5'>Automated detection of a vehicle collision.
                </li>
                <li className='list-disc ms-5'>Automatic accident notifications to fleet managers.
                </li>
                <li className='list-disc ms-5'>Accident details reports.</li>
                <li className='list-disc ms-5'>Towing service management.
                </li>

            </ul>
        )
    }, {
        title: "Route optimization and geofencing", desc: (
            <ul>
                <li className='list-disc ms-5'>Optimal route planning and dynamic route adjustment (in case of accidents, roadblocks, etc.).
                </li>
                <li className='list-disc ms-5'>Route schedules optimization (e.g., based on distance, priorities, and deadlines).</li>


            </ul>
        )
    }, {
        title: "Budgeting and expense", desc: (
            <ul>
                <li className='list-disc ms-5'>Fuel management optimization. </li>
                <li className='list-disc ms-5'>Vehicle maintenance and expenses budgeting.</li>
                <li className='list-disc ms-5'>Vehicle insurance and warranty expiration notifications.</li>


            </ul>
        )
    }
    ]
    return (
        <div className='w-[100vw] h-[auto] box-border pt-[150px] md:pt-[50px] pb-[30px] pb-[60px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>Fleet Management Solutions We Deliver </h1>
                <p className='mt-2 w-[98%] mx-auto'>Software we build is well-suited to managing a variety of vehicles, including:</p>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px]'>
                {SolutionArr.map((item, index) => (
                    <div key={index} className='w-[45%] md:w-[90%] h-[250px] border border-gray-300 p-3'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Solution
