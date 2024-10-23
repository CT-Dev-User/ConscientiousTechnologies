import React from 'react';

const ProductDevOutSourcing = () => {
    const ScopeEnterprise = [
        {
            title: "Professional product design",
            desc:
                (

                    <ul className='pt-5'>
                        <li className='list-disc ms-5'>   L1 A user support team. </li>
                        <li className='list-disc ms-5'>L2. A technical support team.</li>
                        <li className='list-disc ms-5'>L3. A team of software engineers.</li>
                    </ul>

                )
        },
        {
            title: "Fast time to market",
            desc:
                (

                    <ul className='pt-5'>
                        <li className='list-disc ms-5'>SOPs for ticket resolution, change and incident management, CI/CD flows.</li>
                        <li className='list-disc ms-5'>Network maps.</li>
                        <li className='list-disc ms-5'>Configuration management database.</li>
                        <li className='list-disc ms-5'>Infrastructure improvement plan.</li>

                    </ul>
                )
        },
        {
            title: "Reduced development costs",
            desc:
                (

                    <ul className='pt-5'>
                        <li className='list-disc ms-5'>Knowledge base articles.</li>
                        <li className='list-disc ms-5'>FAQs.</li>
                        <li className='list-disc ms-5'>User manuals.</li>

                    </ul>
                )
        },
        {
            title: "Committed teams",
            desc:
                (

                    <ul className='pt-5'>
                        <li className='list-disc ms-5'>UX testing/monitoring.</li>
                        <li className='list-disc ms-5'>Surveys and user experience studies with CSAT improvement plans based on their results.</li>

                    </ul>
                )
        },
        {
            title: "Transparent self-management",
            desc:
                (

                    <ul className='pt-5'>
                        <li className='list-disc ms-5'>IT environment benchmarking against PCI DSS, HIPAA, etc.</li>
                        <li className='list-disc ms-5'>Compliance gap mitigation plans. </li>

                    </ul>
                )
        },
        {
            title: "Secure cooperation",
            desc:
                (

                    <ul className='pt-5'>
                        <li className='list-disc ms-5'>Service level reports.</li>
                        <li className='list-disc ms-5'>Maintenance reports.</li>
                        <li className='list-disc ms-5'>Health check reports.</li>
                        <li className='list-disc ms-5'> Security assessmen
                        </li>
                    </ul>
                )
        },
    ];

    return (
        <div className="w-full py-16">
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>How You Win with Product Development Outsourcing</h1>
                <p className='lg:w-11/12 mt-2 w-full text-sm 2xl:text-base'>A data analytics company, ScienceSoft helps businesses from 30+ industries integrate, aggregate, and analyze various data types from multiple data sources to address their most ambitious needs at department and enterprise levels.</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
                {ScopeEnterprise.map((item, index) => (
                    <div key={index} className='lg:w-[30%] md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductDevOutSourcing;
