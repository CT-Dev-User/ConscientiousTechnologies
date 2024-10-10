import React from 'react'

const LendingSolutions = () => {
    const serviceDomain = [{ title: "Loan origination software", points: ["Automated borrower onboarding and pre-qualification.", "RPA- and AI-based processing of borrowers’ paper and digital documents.", "AI-powered assessment of borrower credit risks.", "Configurable loan terms (max amount, duration, interest rate, collateral type, etc.)"] }, { title: "Loan servicing software", points: ["Template-based creation of loan amortization schedules.", "Automated calculation of monthly principal and interest amounts and other loan-associated fees.", "Scheduled generation of invoices on due loan repayments and sending them to borrowers"] }, { title: "Debt collection software", points: ["AI-based suggestions on the optimal collection strategies for particular debtors and debtor segments.", "Scheduled and ad hoc omnichannel reminders on due loan repayments.", "Rule-based assignment of debt collection tasks to the debt recovery team members."] }, { title: "Loan pricing software", points: ["Scenario modeling and what-if analysis for various loan pricing strategies.", "Real-time monitoring of competitors’ loan prices across relevant public sources.", "AI-powered analysis and optimization of loan prices."] }, { title: "Peer-to-peer lending software", points: ["Criteria-based search of the best-fitting loan offerings for borrowers and investment opportunities for lenders.", "A comprehensive loan calculator for borrowers.", "Automated loan underwriting and servicing processes."] }, { title: "Customer-facing lending apps", points: ["Automated generation and submission of loan applications.", "Automated loan repayments via the selected payment method.", "End-to-end audit trail of the user account activities."] }]
    return (

        
        <div className="w-full py-10">
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>
                Lending Solutions ScienceSoft Delivers           </h1>
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

export default LendingSolutions