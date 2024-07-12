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
        <div className="w-full pt-[40px] mb-[60px]">
            <div className='w-[85%] mx-auto md:w-full md:px-4'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[blue]'>How You Win with Product Development Outsourcing </h1>
                <p className='w-11/12 text-sm mt-2 md:w-full md:text-[16px]'>A data analytics company, ScienceSoft helps businesses from 30+ industries integrate, aggregate, and analyze various data types from multiple data sources to address their most ambitious needs at department and enterprise levels.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[95%]'>
                {ScopeEnterprise.map((item, index) => (
                    <div key={index} className='w-[350px] h-[220px] border border-gray-300 p-3 shadow-md md:shadow-none md:border-none md:h-auto md:py-4'>
                        <h1 className='text-[18px]'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductDevOutSourcing;
