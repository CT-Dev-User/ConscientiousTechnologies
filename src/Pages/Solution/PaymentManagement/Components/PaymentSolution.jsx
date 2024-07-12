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
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Payment Solutions ScienceSoft Delivers </h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>From simple mobile apps to large-scale multi-party networks — we create all kinds of payment solutions and securely integrate them into robust payment processing chains.</p>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%]'>
                {paymentSolutionArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-[90%] h-[200px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default PaymentSolution
