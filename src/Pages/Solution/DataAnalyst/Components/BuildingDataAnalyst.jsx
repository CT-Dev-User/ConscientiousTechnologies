import React from 'react'

const BuildingDataAnalyst = () => {
    const BuildingDataAnalystArr = [{
        title: "Manufacturing analytics", desc: (
            <ul>
                <li className='list-disc ms-5'>Overall equipment effectiveness analysis and optimization.</li>
                <li className='list-disc ms-5'>Manufacturing process quality optimization.</li>
                <li className='list-disc ms-5'>Equipment maintenance scheduling.</li>
                <li className='list-disc ms-5'>Power consumption forecasting and optimization.</li>
                <li className='list-disc ms-5'>Production loss root cause analysis.</li>

            </ul>
        )
    }, {
        title: "Healthcare analytics", desc: (
            <ul>
                <li className='list-disc ms-5'>Patient health condition monitoring, condition-based alerting.</li>
                <li className='list-disc ms-5'>Patient treatment optimization.</li>
                <li className='list-disc ms-5'>Assessment of patient risks and personalized care plan recommendations.</li>
                <li className='list-disc ms-5'>Proactive care</li>
            </ul>
        )
    }, {
        title: "Retail analytics", desc: (
            <ul>
                <li className='list-disc ms-5'>Retail business performance analysis, monitoring sales and profitability.</li>
                <li className='list-disc ms-5'>Demand analysis and forecasting.</li>
                <li className='list-disc ms-5'>Multi-echelon inventory optimization.</li>
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
        title: "Banking analytics", desc: (
            <ul>
                <li className='list-disc ms-5'>Continuous monitoring of bank stability indicators.</li>
                <li className='list-disc ms-5'>Institution performance forecasts.</li>
                <li className='list-disc ms-5'>360-degree view of customers.</li>
                <li className='list-disc ms-5'>Identifying cross-selling and upselling opportunities.</li>
                <li className='list-disc ms-5'>Insights into customer service management.</li>
            </ul>
        )
    },
    {
        title: "Investment analytics", desc: (
            <ul>
                <li className='list-disc ms-5'>Portfolio performance analytics with asset-specific benchmarking.</li>
                <li className='list-disc ms-5'>Factor exposure, performance attribution, and risk attribution analysis.</li>
                <li className='list-disc ms-5'>Continuous monitoring of market, credit, and liquidity risks.</li>

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
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:pt-[50px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-2'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Building Data Analytics Solutions for Different Domains</h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>A data analytics company, ScienceSoft helps businesses from 30+ industries integrate, aggregate, and analyze various data types from multiple data sources to address their most ambitious needs at department and enterprise levels.</p>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%] md:gap-y-[40px]'>
                {BuildingDataAnalystArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-full h-[200px] border border-gray-300 p-3 md:border-none md:h-auto '>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default BuildingDataAnalyst
