import React from 'react'

const ExtendedFeature = () => {
    const ExtendedFeatureArr = [{
        title: "Project portfolio monitoring", desc: (
            <ul>
                <li className='list-disc ms-5'>Preventative fleet maintenance. </li>
                <li className='list-disc ms-5'>Maintenance scheduling and alerting.</li>
                <li className='list-disc ms-5'>Out-of-order alerts.
                </li>
                <li className='list-disc ms-5'>Maintenance completion reports.
                </li>
                <li className='list-disc ms-5'>Vehicles’ parts inventory management (e.g., purchase order creation, tracking). management
                </li>
            </ul>
        )
    }, {
        title: "Program management", desc: (
            <ul>
                <li className='list-disc ms-5'>Real-time tracking of vehicles.

                </li>
                <li className='list-disc ms-5'>Fleet availability dashboards.
                </li>
                <li className='list-disc ms-5'>Drivers’ behavior monitoring (e.g., driving speed, unnecessary stops).</li>
                <li className='list-disc ms-5'>Fuel consumption tracking.
                </li>
            </ul>
        )
    }, {
        title: "Human resource management", desc: (
            <ul>
                <li className='list-disc ms-5'>Route calculation and optimization.
                </li>
                <li className='list-disc ms-5'>Delivery scheduling and task list generation (for drivers and employees).</li>
                <li className='list-disc ms-5'>Automated vehicle assignment.
                </li>
                <li className='list-disc ms-5'>Vehicle service history tracking.</li>
            </ul>
        )
    }, {
        title: "Financial resource management", desc: (
            <ul>
                <li className='list-disc ms-5'>Automated detection of a vehicle collision.
                </li>
                <li className='list-disc ms-5'>Automatic accident notifications to fleet managers.
                </li>
                <li className='list-disc ms-5'>Accident details reports.</li>
                <li className='list-disc ms-5'> Towing service management.</li>
            </ul>
        )
    }
        , {
        title: "Project portfolio analytics", desc: (
            <ul>
                <li className='list-disc ms-5'>Optimal route planning and dynamic route adjustment (in case of accidents, roadblocks, etc.).
                </li>
                <li className='list-disc ms-5'>Route schedules optimization (e.g., based on distance, priorities, and deadlines).</li>
            </ul>
        )
    }
        , {
        title: "Reporting", desc: (
            <ul>
                <li className='list-disc ms-5'>Fuel management optimization.
                </li>
                <li className='list-disc ms-5'>Vehicle maintenance and expenses budgeting.</li>
                <li className='list-disc ms-5'>Vehicle insurance and warranty expiration notifications</li>
            </ul>
        )
    }

    ]
    return (  
        <div className='w-full mt-16 mb-8'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Extended features for portfolio management</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>Software we build is well-suited to managing a variety of vehicles, including:</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
                {ExtendedFeatureArr.map((item, index) => (
                    <div key={index} className='lg:w-[30%] md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
     
    )
}

export default ExtendedFeature
