import React from 'react'

const ITSolution = () => {
    const ITSolutionArr = [{
        title: "Financial accounting and analysis", desc: (
            <ul>
                <li className='list-disc ms-5'>Automated bookkeeping.</li>
                <li className='list-disc ms-5'>Consolidation and analysis of financial big data to reveal key T&L cost and revenue drivers.</li>
                <li className='list-disc ms-5'>AI-powered analysis and trend-based forecasting of operational and strategic T&L expenses; suggestions on spend optimization.</li>
            </ul>
        )
    }, {
        title: "Spend planning and control", desc: (
            <ul>
                <li className='list-disc ms-5'>Calculation of transportation cost based on the delivery mode, shipment distance, fuel cost, cargo weight and size, number of stops, etc. </li>
                <li className='list-disc ms-5'>Automated allocation of transportation costs to individual orders.</li>
            </ul>
        )
    }
        , {
        title: "Labor management", desc: (
            <ul>
                <li className='list-disc ms-5'> Labor planning (by period, type of activity, region, etc.) based on the analysis of historical data on resource requirements for customer order fulfillment.</li>
                <li className='list-disc ms-5'>Automated task assignment (for drivers, warehouse staff, etc.) based on the employee availability and operational schedules.</li>
            </ul>
        )
    }
        , {
        title: "Customer relationship", desc: (
            <ul>

                <li className='list-disc ms-5'>Centralized storage of customer-related data (general customer information, interaction history and ongoing activities, etc.).</li>
                <li className='list-disc ms-5'>Creation, editing, approval, and centralized storage of customer documents (contracts, invoices, etc.).</li>
            </ul>
        )
    }, {
        title: "Customer order management", desc: (
            <ul>
                <li className='list-disc ms-5'>Automated aggregation of customer orders from a customer portal, third-party ecommerce platforms, etc.</li>
                <li className='list-disc ms-5'>Prioritization of customer orders based on customer value, order date, item category, and more.</li>
            </ul>
        )
    }, {
        title: "Vendor relationship management", desc: (
            <ul>

                <li className='list-disc ms-5'>Managing RFxs, e-auctions, e-tenders.</li>
                <li className='list-disc ms-5'>AI-enabled cost-benefit analysis and carrier bid/rate compliance scoring.</li>
                <li className='list-disc ms-5'>Creation, editing, approval, and centralized storage of carrier contracts and transport orders.</li>
            </ul>
        )
    }
    ]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[80px] md:pt-[40px] pb-[20px]'>
        <div className='w-[85%] mx-auto md:w-full md:px-3'>
            <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>IT Solutions for T&L by CT</h1>
            <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>Software we build is well-suited to managing a variety of vehicles, including:</p>
            <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Need to build a new CRM?</h1>
        </div>
        <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px]'>
            {ITSolutionArr.map((item, index) => (
                <div key={index} className='w-[350px] md:w-[90%] h-[200px] border border-gray-300 p-3 md:w-full md:border-none md:p-0 md:h-auto md:py-3'>
                    <h1 className='text-[18px] font-bold'>{item.title}</h1>
                    <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                </div>
            ))}
        </div>

    </div>

    )
}

export default ITSolution
