import React from 'react'

const PaymentSolution = () => {
    const paymentSolutionArr = [{
        title: "Payment processing software", desc: "Functionality for automating customer order management, planning data-driven marketing campaigns, communicating with the customers and getting visibility into the sales dynamics."
    }, {
        title: "Payment applications", desc: "Inventory planning, optimization, and control, management of warehouse operations, vendor management, sourcing and procurement automation."
    }, {
        title: "Money transfer application", desc: "Planning, control, and optimization of service-related workflows. Service level agreement management. Conducting polls and e-voting to gather service improvement ideas."
    },
    {
        title: "Payment getway", desc: "Project planning and monitoring, tasks assignment and tracking, team collaboration tools (instant messaging, shared file space, etc.)."
    },
    {
        title: "Payment orchestration software", desc: "Centralized storage of multiple document types, easy document navigation and sharing, document templates."
    },
    {
        title: "Payment automation software", desc: "Centralized knowledge repository with a powerful search engine, automated knowledge classification, knowledge sharing and collaboration tools."
    },
    {
        title: "Payment fraud detection systems", desc: "Chatbots help users navigate ERP, while virtual assistants can automate basic tasks, e.g., update customer info, send alerts on low inventory levels, capture data on order shipment."
    },
    {
        title: "Payment analytics software", desc: "Centralized storage of multiple document types, easy document navigation and sharing, document templates."
    },
    {
        title: "Blockchain payment networks", desc: "Centralized knowledge repository with a powerful search engine, automated knowledge classification, knowledge sharing and collaboration tools."
    }
    ]
    return (
        <div className='w-full mt-16 mb-8'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Payment Solutions ScienceSoft Delivers </h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>From simple mobile apps to large-scale multi-party networks — we create all kinds of payment solutions and securely integrate them into robust payment processing chains.</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
                {paymentSolutionArr.map((item, index) => (
                    <div key={index} className='lg:w-[30%] md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default PaymentSolution
