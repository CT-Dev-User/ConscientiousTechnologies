import React from 'react'

const LendingUSeCases = () => {
    const serviceDomain = [{ title: "Consumer lending", points: ["Instant processing of consumer loan applications.", "CFast, analytics-based loan decision-making.", "Facilitated payment collection and debt recovery enabled by robust process automation.", "Convenient omnichannel communications"] }, { title: "Commercial lending", points: ["Streamlined origination and servicing of various business loans, including syndicated and multi-entity loans.", "Intelligent assessment of business credit risks.", "Full traceability of commercial lending operations."] }, { title: "Mortgage lending", points: ["Fast generation, secure sharing, and scalable storage of large-volume mortgage documents.", "Automated calculation of mortgage-associated fees.", "Streamlined collateral management, mortgage close, servicing, and foreclosure processes.", "Automated mortgage loan trading."] }, { title: "Alternative lending", points: ["Highly accessible and cost-effective peer-to-peer loans with no middleman services.", "Fast access to funds for borrowers and attractive investment opportunities for lenders.", "Automated microlending and microfinance."] }, { title: "-------", points: ["Establishing omni-channel communications.", "Adopting omni-channel approach for managing customer relationships.", "Building flexible reward systems.", "Including gamification elements, and more"] }, { title: "-------", points: ["Customer analytics (customer segmentation, attrition analysis, cross-sell effectiveness analysis, etc.).", "Channel analytics (analysis of branch transactions and customer traffic, analysis of click patterns, frequently accessed web-pages, search behavior, the most widely used mobile "] }]
    return (

        <div className="w-full py-16">
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>
                    Lending Software Use Cases CT Specializes In            </h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>
                    IT solutions ScienceSoft creates help insurance companies improve overall business efficiency and introduce excellent customer experience. We can design and implement one or several of these targeted insurance solutions, as well as build a full-featured insurance business automation system:
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

export default LendingUSeCases