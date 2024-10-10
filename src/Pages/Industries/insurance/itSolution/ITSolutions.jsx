import React from 'react'

const ITSolutions = () => {
    const serviceDomain = [{ title: "Underwriting", points: ["Insurance application processing.", "Risk assessment.", "Insurance pricing.", "Compliance management."] }, { title: "Billing", points: ["Personalized premium calculation.", "Automated invoicing.", "E-signature workflow.", "Payment processing."] }, { title: "Policy administration", points: ["Collaborative policy creation.", "Policy issuance, updating, and renewal.", "Centralized storage of all policy-related data."] }, { title: "Claim management", points: ["Claim capture and processing.", "Damage evaluation.", "Claim validation and fraud detection.", "Claim settlement."] }, { title: "Insurance portal", points: ["Self-service options for agents, customers, and service suppliers.", "Insurance application and claim management.", "Access to the required insurance data.", "An intelligent virtual assistant.", "Instant messaging."] }, { title: "Customer-facing insurance app", points: ["Generation and submission of insurance applications and claims.", "Premium payment.", "Full audit trail of account activities.", "KYC/AML verification.", "Multi-factor authentication, including biometric authentication."] }, { title: "CRM", points: ["Customer journey management.", "Content marketing.", "Omnichannel lead generation."] }, { title: "Insurance data analytics", points: ["Customer analytics.", "Finance analytics.", "Risk analytics.", "Operational analytics.", "Workforce analytics.", "Agency performance analytics."] }, { title: "P2P insurance", points: ["Criteria-based search of insurance offerings.", "An insurance price calculator.", "Automated underwriting and policy issuance.", "Payment processing."] }]
    return (

        <div className="w-full py-16">
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>
                    IT Solutions for Insurance We Develop
                </h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>
                    IT solutions CT creates help insurance companies improve overall business efficiency and introduce excellent customer experience. We can design and implement one or several of these targeted insurance solutions, as well as build a full-featured insurance business automation system:
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

export default ITSolutions