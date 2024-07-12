import React from 'react'

const Specialised = () => {
    const serviceDomain = [{ title: "Banking", points: ["Convenient 24/7 access to banking services for customers via self-service banking apps.", "Fast and easy delivery of banking services due to automation of core banking operations.", "Prompt and error-free processing of financial transactions with the help of open banking APIs."] }, { title: "Payments", points: ["Instant, accurate, and secure payment processing due to payment automation.", "High customer satisfaction due to seamless digital payment experience and support for trending payment options: QR code-based payments, NFC-enabled"] }, { title: "Lending", points: ["Prompt AI-powered risk assessment and loan-related decision-making.", "Optimal, analytics-based loan pricing.", "Efficient payment collection and debt recovery enabled by process automation."] }, { title: "Mortgage", points: ["Automated processing of mortgage applications and calculation of mortgage-associated fees; streamlined collateral management, mortgage close, servicing, and foreclosure processes"] }, { title: "Insurance", points: ["Data-driven insurance underwriting and automated, risk-based insurance pricing.", "Prompt and accurate claim settlement due to instant capture and intelligent validation of claim-related data."] }, { title: "Financing", points: ["Minimized financing-associated fees due to intelligent advice on the optimal loan amount and duration.", "Automated calculation of charges and commissions under the financing activities."] }]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[80px] md:pt-[40px] pb-[20px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>How Each BFSI Industry Sector Benefits from Specialized Fintech Software </h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>We provide full-cycle consulting and development services to help companies build single-purpose lending solutions or implement full-featured loan management systems to drive high ROI across the entire lending process.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px]'>
                {
                    serviceDomain.map((item, index) => {
                        return (
                            <div className='w-[350px] h-[200px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border md:w-full md:border-none md:p-0 md:h-auto md:py-3' key={index}>
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

export default Specialised