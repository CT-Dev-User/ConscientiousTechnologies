import React from 'react';

const BuildingDataAnalytics = () => {
    const buildingDataAnalyticsData = [
        {
            title: "Manufacturing analytics",
            desc:
                <ul>
                    <li className='list-disc ms-5'>Overall equipment effectiveness analysis and optimization.</li>
                    <li className='list-disc ms-5'>Manufacturing process quality optimization.</li>
                    <li className='list-disc ms-5'>Equipment maintenance scheduling.</li>
                    <li className='list-disc ms-5'>Power consumption forecasting and optimization.</li>
                    <li className='list-disc ms-5'>Production loss root cause analysis.</li>
                </ul>

        },
        {
            title: "Healthcare analytics",
            desc: <ul>
                <li className='list-disc ms-5'>Patient health condition monitoring, condition-based alerting.</li>
                <li className='list-disc ms-5'>Patient treatment optimization.</li>
                <li className='list-disc ms-5'>Assessment of patient risks and personalized care plan recommendations.</li>
                <li className='list-disc ms-5'>Proactive care</li>
            </ul>
        },
        {
            title: "Retail analytics",
            desc: <ul>
                <li className='list-disc ms-5'>Retail business performance analysis, monitoring sales and profitability.</li>
                <li className='list-disc ms-5'>Demand analysis and forecasting.</li>
                <li className='list-disc ms-5'>Multi-echelon inventory optimization.</li>
            </ul>
        },

        {
            title: "Transportation and logistics",
            desc: <ul>
                <li className='list-disc ms-5'>Operational capacity planning and optimization based on the analysis of incoming shipments, customer delivery schedules, vehicles availability, and personnel shift schedules.</li>
                <li className='list-disc ms-5'>Predictive analytics for vehicle maintenance (failure prediction, recommendation of maintenance actions, etc.).</li>
            </ul>
        },
        {
            title: "Banking analytics",
            desc: <ul>
                <li>Continuous monitoring of bank stability indicators.</li>
                <li>Institution performance forecasts.</li>
                <li>360-degree view of customers.</li>
                <li>Identifying cross-selling and upselling opportunities.</li>
                <li>Insights into customer service management.</li>
            </ul>
        },
        {
            title: "Investment analytics",
            desc: <ul>
                <li>Portfolio performance analytics with asset-specific benchmarking.</li>
                <li>Factor exposure, performance attribution, and risk attribution analysis.</li>
                <li>Continuous monitoring of market, credit, and liquidity risks.</li>
            </ul>
        },
        {
            title: "Insurance analytics",
            desc: <ul>
                <li>AI-powered insurance recommendations tailored for certain customer segments.</li>
                <li>Finance analytics with underwriting profitability monitoring and product-specific scenario modeling.</li>
                <li>Monitoring insurance-related risks with stress testing.</li>
            </ul>
        },
        {
            title: "Real estate analytics",
            desc:
                <ul>
                    <li>Providing insights into market trends and analyzing property values to support informed investment decisions.</li>
                    <li>Comprehensive portfolio management with expenses tracking and cash-flow forecasts.</li>
                </ul>
        },
        {
            title: "Education analytics",
            desc: <ul>
                <li>Analyzing students' and parents' feedback on the quality of teaching and the learning environment to improve the service.</li>
                <li>Students' performance analytics with alerts on potential intervention.</li>
            </ul>
        },
        // {
        //     title: "Support",
        //     desc: <ul>
        //         <li>We advance your web-based software to keep it efficient, competitive on the market, and compliant with all your evolving business needs.</li>
        //     </ul>
        // }
    ];

    return (
        <div className='w-full mt-16 mb-8'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
                <h1 className='2xl:text-3xl font-bold text-2xl lg:text-black text-primary'>Building Data Analytics Solutions for Different Domains</h1>
                <p className='lg:w-11/12 mt-2 w-full text-sm 2xl:text-base'>A data analytics company, ScienceSoft helps businesses from 30+ industries integrate, aggregate, and analyze various data types from multiple data sources to address their most ambitious needs at department and enterprise levels.</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
                {buildingDataAnalyticsData.map((item, index) => (
                    <div key={index} className='lg:w-[30%] md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg 2xl:text-xl text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BuildingDataAnalytics;
