import React from 'react'

const CyberSecService = () => {
    const getWithITSupportArr = [{
        title: "Multi-tier resolution pipeline", desc: (
            <ul>
                <li className='list-disc ms-5'>L1. A user support team.</li>
                <li className='list-disc ms-5'>L2. A technical support team.</li>
                <li className='list-disc ms-5'>L3. A team of software engineers.</li>
            </ul>
        )
    }, {
        title: "Customer service and support", desc: (
            <ul>
                <li className='list-disc ms-5'>SOPs for ticket resolution, change and incident management, CI/CD flows.</li>
                <li className='list-disc ms-5'>Network maps.</li>
                <li className='list-disc ms-5'>Configuration management database.</li>
                <li className='list-disc ms-5'>Infrastructure improvement plan.</li>
            </ul>
        )
    }, {
        title: "Self-service training", desc: (
            <ul>
                <li className='list-disc ms-5'>Knowledge base articles.</li>
                <li className='list-disc ms-5'>FAQs.</li>
                <li className='list-disc ms-5'>User manuals.</li>
            </ul>
        )
    }, {
        title: "User satisfaction and improvements", desc: (
            <ul>
                <li className='list-disc ms-5'>UX testing/monitoring.</li>
                <li className='list-disc ms-5'>Surveys and user experience studies with CSAT improvement plans based on their results.</li>
            </ul>
        )
    }, {
        title: "Banking analytics", desc: (
            <ul>
                <li className='list-disc ms-5'>IT environment benchmarking against PCI DSS, HIPAA, etc.</li>
                <li className='list-disc ms-5'>Compliance gap mitigation plans. </li>
            </ul>
        )
    },{
        title: "Investment analytics", desc: (
            <ul>
                <li className='list-disc ms-5'>Service level reports.</li>
                <li className='list-disc ms-5'>Maintenance reports.</li>
                <li className='list-disc ms-5'>Health check reports.</li>
                <li className='list-disc ms-5'>Security assessmen</li>
            </ul>
        )
    }

]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:pt-[20px]'>
            <div className='w-[85%] mx-auto md:w-[95%]'>
                <h1 className='text-[30px] font-bold mt-[40px] mb-[20px] md:text-[blue]'>Cybersecurity Services by ScienceSoft</h1>
                <p className='w-[95%] text-[18px] mt-2 md:w-[100%] md:text-[16px]'>A data analytics company, ScienceSoft helps businesses from 30+ industries integrate, aggregate, and analyze various data types from multiple data sources to address their most ambitious needs at department and enterprise levels.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 justify-center items-center md:w-[95%]'>
                {getWithITSupportArr.map((item, index) => (
                    <div key={index} className='w-[45%] h-[200px] border border-gray-300 p-3 md:w-[350px]'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default CyberSecService
