import React from 'react'

const InvestmentSoftware = () => {
    const serviceDomain = [{ title: "Investment portfolio management", points: ["Automation of a company’s unique portfolio modeling, monitoring, and performance reporting workflows, which brings improvement in operational efficiency. Advanced analytics to accurately forecast the financial market and investment performance and minimize risks. Seamless and legally compliant digital trade"] }, { title: "Investment accounting software", points: ["Eliminated manual routines across the major accounting operations like transaction recordkeeping, billing, payouts, and financial reporting to free the fund managers’ time for high-value tasks. Support for all required accounting methods to accurately recognize the income from company-specific types of investments."] }, { title: "Investment compliance monitoring", points: ["Real-time monitoring of the wealth management operations’ compliance with the internal policies and required legal standards, including local standards. It helps prevent improper investment practices and avoid the risk of penalties for non-compliance."] }, { title: "Client lifecycle management", points: ["Facilitated investor data and relationships management and 100% visibility of investor interactions across the entire client lifecycle. Automated KYC/AML verification of new investors to prevent unauthorized access to services."] }, { title: "Investor reporting software", points: ["Streamlined generation and distribution of financial disclosure reports to timely meet the fiduciary responsibility to the investors and keep them up to date on their asset performance."] }, { title: "Trading apps", points: ["Web and mobile client-facing apps enabling seamless 24/7 investment operations across multiple asset classes, including alternative assets: real estate, renewable energy, crypto assets (crypto securities, tokenized commodities, NFTs), and more."] }]
    return (

        <div className="w-full py-16">
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>
                Investment Software CT Delivers 
                </h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>
                From multi-functional wealth management systems to specialized solutions that automate particular investment operations – ScienceSoft can assist in designing and building software of any complexity to meet your unique needs. The examples of investment solutions we create include:
                </p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-5 w-[95%]'>
                {serviceDomain.map((item, index) => (
                    <div key={index} className='lg:w-[31%] md:w-[45%] w-full lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <div className='text-sm mt-3 font-medium'>
                            {item.points.map((point, idx) => (
                                // Split each point by comma and map over the split parts
                                <ul>
                                    {point.split(',').map((splitPoint, subIdx) => (
                                        <li key={subIdx} className='mb-2 list-disc ms-5'>{splitPoint.trim()}</li>
                                    ))}
                                </ul>

                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default InvestmentSoftware