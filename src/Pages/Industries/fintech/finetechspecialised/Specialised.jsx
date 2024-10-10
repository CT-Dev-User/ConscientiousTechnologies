import React from 'react'

const Specialised = () => {
    const serviceDomain = [{ title: "Banking", points: ["Convenient 24/7 access to banking services for customers via self-service banking apps.", "Fast and easy delivery of banking services due to automation of core banking operations.", "Prompt and error-free processing of financial transactions with the help of open banking APIs."] }, { title: "Payments", points: ["Instant, accurate, and secure payment processing due to payment automation.", "High customer satisfaction due to seamless digital payment experience and support for trending payment options: QR code-based payments, NFC-enabled"] }, { title: "Lending", points: ["Prompt AI-powered risk assessment and loan-related decision-making.", "Optimal, analytics-based loan pricing.", "Efficient payment collection and debt recovery enabled by process automation."] }, { title: "Mortgage", points: ["Automated processing of mortgage applications and calculation of mortgage-associated fees; streamlined collateral management, mortgage close, servicing, and foreclosure processes"] }, { title: "Insurance", points: ["Data-driven insurance underwriting and automated, risk-based insurance pricing.", "Prompt and accurate claim settlement due to instant capture and intelligent validation of claim-related data."] }, { title: "Financing", points: ["Minimized financing-associated fees due to intelligent advice on the optimal loan amount and duration.", "Automated calculation of charges and commissions under the financing activities."] }]
    return (
        <div className="w-full py-16">
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>
                    How Each BFSI Industry Sector Benefits from Specialized Fintech Software
                </h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>
                    We provide full-cycle consulting and development services to help companies build single-purpose lending solutions or implement full-featured loan management systems to drive high ROI across the entire lending process.
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

export default Specialised