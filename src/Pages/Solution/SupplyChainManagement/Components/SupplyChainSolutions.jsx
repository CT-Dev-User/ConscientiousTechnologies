import React from 'react'

const SupplyChainSolutions = () => {
    const supplyChainSolutionsArr = [{
        title: "Supply chain planning", desc: (
            <ul>
                <li className='list-disc ms-5'>Demand forecasting.</li>
                <li className='list-disc ms-5'>AI-supported recommendations on supply chain optimization (e.g., how much and when to order).</li>
                <li className='list-disc ms-5'>Supply chain digital twin – a real-time supply chain model to test different supply chain action plans (e.g., safety stock planning).</li>

            </ul>
        )
    }, {
        title: "Supply chain risk management", desc: (
            <ul>
                <li className='list-disc ms-5'>Supply chain control tower, offering real-time, AI-supported visibility into all supply chain operations, including operations of suppliers and external carriers.</li>
                <li className='list-disc ms-5'>Configurable dashboards for a unified view of supply chain processes and related KPIs (fill rate, order cycle time, etc.).</li>
            </ul>
        )
    }, {
        title: "Inventory and warehouse", desc: (
            <ul>
                <li className='list-disc ms-5'>Inventory levels and location tracking (with a barcode, RFID, or computer vision technology).</li>
                <li className='list-disc ms-5'>Optimal safety stock calculation.</li>
                <li className='list-disc ms-5'>Automated replenishment triggers.</li>
            </ul>
        )
    },
    {
        title: "Logistics Management", desc: (
            <ul>
                <li className='list-disc ms-5'>Freight tracking.</li>
                <li className='list-disc ms-5'>Planning and optimization of route schedules.</li>
                <li className='list-disc ms-5'>Vehicle accident case management (accident notifications and reports, repair request issuing and routing, etc.).</li>
            </ul>
        )
    },
    {
        title: "Procurement management", desc: (
            <ul>
                <li className='list-disc ms-5'>Quick template-based creation of purchase requisitions, RFxs, and purchase orders.</li>
                <li className='list-disc ms-5'>Automated approval workflow for purchase requisitions and purchase orders.</li>
            </ul>
        )
    },
    {
        title: "Supplier relationship management", desc: (
            <ul>
                <li className='list-disc ms-5'>Analytics-based supplier pre-qualification (financial viability, technical capabilities, ethical business processes, etc.).</li>
                <li className='list-disc ms-5'>Quick template-based creation of sourcing events (e-tenders, e-auctions).</li>
            </ul>
        )
    },
    {
        title: "Order Management", desc: (
            <ul>
                <li className='list-disc ms-5'>Centralized processing of multichannel, multi-format sales orders.</li>
                <li className='list-disc ms-5'>Analytics-based order routing to an optimal fulfillment location.</li>
            </ul>
        )
    },
    {
        title: "supply chain management", desc: (
            <ul>
                <li className='list-disc ms-5'>Calculating and monitoring all necessary supply chain KPIs: supply chain performance, orders, inventory, employee productivity, supplier risks, spend, and more.</li>
                <li className='list-disc ms-5'>ML-based supply chain diagnostic analytics.</li>
            </ul>
        )
    },
    {
        title: "Management", desc: (
            <ul>
                <li className='list-disc ms-5'>Fuel management optimization.</li>
                <li className='list-disc ms-5'>Vehicle maintenance and expenses budgeting.</li>
                <li className='list-disc ms-5'>Vehicle insurance and warranty expiration notifications.</li>
            </ul>
        )
    },
    ]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[50px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Supply Chain Solutions and SCM Software Features ScienceSoft Delivers </h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>We offer full-cycle development services to plan and implement one or several integrated supply chain software solutions that introduce powerful functionality for the necessary SCM areas:</p>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%]'>
                {supplyChainSolutionsArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-[90%] h-[200px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default SupplyChainSolutions
