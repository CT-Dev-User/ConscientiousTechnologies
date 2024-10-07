import React from 'react'

const SolutionSpecilization = () => {
    const solutionSpecilizationArr = [{
        title: "Financial process automation", desc: (
            <ul>
                <li className='list-disc ms-5'>Improving financial data accuracy.</li>
                <li className='list-disc ms-5'>Eliminating manual efforts across tasks involved in bookkeeping, invoicing, payroll accounting, financial planning and analysis, revenue management, tax management, investment and financial risk management, and more.</li>

            </ul>
        )
    }, {
        title: "Automated accounting software", desc: (
            <ul>
                <li className='list-disc ms-5'>Eliminating accountants’ manual tasks</li>
                <li className='list-disc ms-5'>Increasing accuracy across multi-entity bookkeeping, invoicing, AP and AR, expense management, multi-location inventory accounting, financial data reconciliation, country-specific financial reporting, and more.</li>

            </ul>
        )
    }, {
        title: "Enterprise accounting software", desc: (
            <ul>
                <li className='list-disc ms-5'>Streamlining accounting processes in large organizations with complex operations and accounting needs.</li>
                <li className='list-disc ms-5'>General ledger capabilities, the management of payables, receivables, taxes and payroll, asset and inventory accounting, automated invoicing</li>
            </ul>
        )
    },
    {
        title: "General ledger software", desc: (
            <ul>
                <li className='list-disc ms-5'>Aggregating financial transactions across multiple business entities in real time, structuring and reconciling them.</li>
                <li className='list-disc ms-5'>Accurate recording and reporting of multi-entity financial transactions and faster financial close.</li>

            </ul>
        )
    },
    {
        title: "Accounts receivable automation ", desc: (
            <ul>
                <li className='list-disc ms-5'>Automated customer invoicing and real-time receivables tracking.</li>
                <li className='list-disc ms-5'>Management of collection procedures to cut DSO and past-due receivables and eliminate manual errors across the order-to-cash cycle.</li>
            </ul>
        )
    },
    {
        title: "Automated billing system", desc: (
            <ul>
                <li className='list-disc ms-5'>Automated customer invoicing and real-time receivables tracking.</li>
                <li className='list-disc ms-5'>Management of collection procedures to cut DSO and past-due receivables and eliminate manual errors across the order-to-cash cycle.</li>
            </ul>
        )
    },
    {
        title: "E-invoicing software", desc: (
            <ul>
                <li className='list-disc ms-5'>Automated e-invoice generation, processing, exchange, and tracking.</li>
                <li className='list-disc ms-5'>Compliance with global, region- and industry-specific regulations, such as ZATCA regulations for Saudi Arabia, Directive 2014/55/EU for the EU, and more.</li>
            </ul>
        )
    },
    {
        title: "Invoice processing automation ", desc: (
            <ul>
                <li className='list-disc ms-5'>End-to-end invoice processing – from invoice data capture and validation to invoice routing for payment and posting to the general ledger.</li>
                <li className='list-disc ms-5'>Reduced cost of invoice processing and storage and shorter invoice-to-pay cycle.</li>
            </ul>
        )
    }
        ,
    {
        title: "Revenue management", desc: (
            <ul>
                <li className='list-disc ms-5'>Real-time revenue tracking, advanced revenue analysis, automated revenue recognition according to the up-to-date accounting standards.</li>
            </ul>
        )
    }
        ,
    {
        title: "Pricing software", desc: (
            <ul>
                <li className='list-disc ms-5'>Automated price calculation and updating across selling channels.</li>
                <li className='list-disc ms-5'>Ensuring price performance visibility, streamlining price segmentation and discount management.</li>
            </ul>
        )
    }
        ,
    {
        title: "Cash management system ", desc: (
            <ul>
                <li className='list-disc ms-5'>Forecasting, tracking, and reporting corporate cash flows (including in various currencies).</li>
                <li className='list-disc ms-5'>Streamlining cash management across multiple, including international, company branches and across complex bank account structures.</li>
            </ul>
        )
    }
        ,
    {
        title: "Cost control", desc: (
            <ul>
                <li className='list-disc ms-5'>Automated cost estimation, budgeting, cost allocation, real-time cost tracking, and variance analysis at the company, department, and project level.</li>
                <li className='list-disc ms-5'>Streamlining cost control and decreasing budget variance.</li>
            </ul>
        )
    }
    ]
    return (
        <div className='w-full mt-16 '>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Financial Management Solutions ScienceSoft Specializes In</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>Our financial software consulting services are customized to our clients’ needs and may cover:</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
                {solutionSpecilizationArr.map((item, index) => (
                    <div key={index} className='lg:w-[30%]  md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>

        </div>

    )
}

export default SolutionSpecilization
