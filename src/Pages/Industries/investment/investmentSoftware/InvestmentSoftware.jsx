import React from 'react'

const InvestmentSoftware = () => {
    const serviceDomain = [{ title: "Investment portfolio management", points: ["Automation of a company’s unique portfolio modeling, monitoring, and performance reporting workflows, which brings improvement in operational efficiency. Advanced analytics to accurately forecast the financial market and investment performance and minimize risks. Seamless and legally compliant digital trade"] }, { title: "Investment accounting software", points: ["Eliminated manual routines across the major accounting operations like transaction recordkeeping, billing, payouts, and financial reporting to free the fund managers’ time for high-value tasks. Support for all required accounting methods to accurately recognize the income from company-specific types of investments."] }, { title: "Investment compliance monitoring", points: ["Real-time monitoring of the wealth management operations’ compliance with the internal policies and required legal standards, including local standards. It helps prevent improper investment practices and avoid the risk of penalties for non-compliance."] }, { title: "Client lifecycle management", points: ["Facilitated investor data and relationships management and 100% visibility of investor interactions across the entire client lifecycle. Automated KYC/AML verification of new investors to prevent unauthorized access to services."] }, { title: "Investor reporting software", points: ["Streamlined generation and distribution of financial disclosure reports to timely meet the fiduciary responsibility to the investors and keep them up to date on their asset performance."] }, { title: "Trading apps", points: ["Web and mobile client-facing apps enabling seamless 24/7 investment operations across multiple asset classes, including alternative assets: real estate, renewable energy, crypto assets (crypto securities, tokenized commodities, NFTs), and more."]}]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[80px] md:pt-[40px] pb-[20px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Investment Software CT Delivers </h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>From multi-functional wealth management systems to specialized solutions that automate particular investment operations – ScienceSoft can assist in designing and building software of any complexity to meet your unique needs. The examples of investment solutions we create include:</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[95%]'>
                {
                    serviceDomain.map((item, index) => {
                        return (
                            <div className='w-[350px] h-[250px] border border-gray-300 p-3 py-[30px] md:h-auto md:border-none md:py-2' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px]'>{item.title}</h2>
                                <ul className='list-disc text-[14px] pl-[30px] font-normal'>
                                    {
                                        item.points.map((point, i) => {
                                            return (
                                                <li key={i}>{point}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default InvestmentSoftware