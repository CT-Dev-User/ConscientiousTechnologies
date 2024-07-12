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
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[40px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>CT’s Solutions – from Automation to Advanced Data Analytic</h1>
                <p className='mt-2 mx-auto md:text-[16px]'>Apart from technical expertise, many other factors influence project success and software quality. ScienceSoft’s teams approach all of them seriously. Here are our project management and software development practices to deliver on goal, quality, schedule, and budget:.</p>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%] md:py-[50px]'>
                {ctSolutionArr.map((item, index) => (
                    <div key={index} className='w-[350px] h-[200px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default CTSolution
