import React from 'react'

const CTSolution = () => {
    const ctSolutionArr = [{
        title: "Scoping", desc: (
            <ul>
                <li className='list-disc ms-5'>Our requirements engineering activities.</li>
                <li className='list-disc ms-5'>Project feasibility assessment.
                </li>
                <li className='list-disc ms-5'>Scope creep control throughout the SDLC.
                </li>

            </ul>
        )
    }, {
        title: "Cost Estimation", desc: (
            <ul>
                <li className='list-disc ms-5'>Factors impacting web development costs.</li>
                <li className='list-disc ms-5'>  Approaches to cost estimation.</li>
                <li className='list-disc ms-5'>   Our cost optimization practices.</li>
            </ul>
        )
    }, {
        title: "Quality Management", desc: (
            <ul>
                <li className='list-disc ms-5'>Development health and software quality KPIs.
                </li>
                <li className='list-disc ms-5'>Quality assurance activities at each SDLC stage.</li>
            </ul>
        )
    },
    {
        title: "Transportation and logistics", desc: (
            <ul>
                <li className='list-disc ms-5'>Operational capacity planning and optimization based on the analysis of incoming shipments, customer delivery schedules, vehicles availability, and personnel shift schedules.</li>
                <li className='list-disc ms-5'>Predictive analytics for vehicle maintenance (failure prediction, recommendation of maintenance actions, etc).</li>
            </ul>
        )
    },
    {
        title: "Collaboration", desc: (
            <ul>
                <li className='list-disc ms-5'>Collaboration flow: from planning to success measurement to ongoing improvement.</li>
                <li className='list-disc ms-5'>Tactical communication forms.</li>
                <li className='list-disc ms-5'>Collaboration toolkit.</li>
            </ul>
        )
    },
    {
        title: "knowledge Management", desc: (
            <ul>
                <li className='list-disc ms-5'>Knowledgea management and sharing process.
                </li>
                <li className='list-disc ms-5'>Knowledge management techniques and tools.
                </li>
                <li className='list-disc ms-5'>Software documents we deliver across various development stages.
                </li>

            </ul>
        )
    },
    {
        title: "Insurance analytics", desc: (
            <ul>

                <li className='list-disc ms-5'>AI-powered insurance recommendations tailored for certain customer segments.</li>
                <li className='list-disc ms-5'>Finance analytics with underwriting profitability monitoring and product-specific scenario modeling.</li>
                <li className='list-disc ms-5'>Monitoring insurance-related risks with stress testing.</li>

            </ul>
        )
    },
    {
        title: "Real estate analytics", desc: (
            <ul>

                <li className='list-disc ms-5'>  Providing insights into market trends and analyzing property values to support informed investment decisions.</li>
                <li className='list-disc ms-5'>Comprehensive portfolio management with expenses tracking and cash-flow forecasts.
                </li>

            </ul>
        )
    },
    {
        title: "Education analytics", desc: (
            <ul>
                <li className='list-disc ms-5'>Analyzing students' and parents' feedback on the quality of teaching and the learning environment to improve the service.</li>
                <li className='list-disc ms-5'>Students' performance analytics with alerts on potential intervention.</li>

            </ul>
        )
    }
    ]
    return (

        <div className='w-full mt-16 mb-14'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>CT’s Solutions – from Automation to Advanced Data Analytic</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>Apart from technical expertise, many other factors influence project success and software quality. ScienceSoft’s teams approach all of them seriously. Here are our project management and software development practices to deliver on goal, quality, schedule, and budget:</p>
            </div>

            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
                {ctSolutionArr.map((item, index) => (
                    <div key={index} className='lg:w-[31%] md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default CTSolution
