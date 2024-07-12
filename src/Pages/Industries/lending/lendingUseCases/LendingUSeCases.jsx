import React from 'react'

const LendingUSeCases = () => {
    const serviceDomain = [{ title: "Consumer lending", points: ["Instant processing of consumer loan applications.", "CFast, analytics-based loan decision-making.", "Facilitated payment collection and debt recovery enabled by robust process automation.", "Convenient omnichannel communications"] }, { title: "Commercial lending", points: ["Streamlined origination and servicing of various business loans, including syndicated and multi-entity loans.", "Intelligent assessment of business credit risks.", "Full traceability of commercial lending operations."] }, { title: "Mortgage lending", points: ["Fast generation, secure sharing, and scalable storage of large-volume mortgage documents.", "Automated calculation of mortgage-associated fees.","Streamlined collateral management, mortgage close, servicing, and foreclosure processes.","Automated mortgage loan trading."] }, { title: "Alternative lending", points: ["Highly accessible and cost-effective peer-to-peer loans with no middleman services.", "Fast access to funds for borrowers and attractive investment opportunities for lenders.", "Automated microlending and microfinance."] }, { title: "-------", points: ["Establishing omni-channel communications.", "Adopting omni-channel approach for managing customer relationships.", "Building flexible reward systems.", "Including gamification elements, and more"] }, { title: "-------", points: ["Customer analytics (customer segmentation, attrition analysis, cross-sell effectiveness analysis, etc.).", "Channel analytics (analysis of branch transactions and customer traffic, analysis of click patterns, frequently accessed web-pages, search behavior, the most widely used mobile "] }]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:pt-[30px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-2'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Lending Software Use Cases CT Specializes In</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>IT solutions ScienceSoft creates help insurance companies improve overall business efficiency and introduce excellent customer experience. We can design and implement one or several of these targeted insurance solutions, as well as build a full-featured insurance business automation system:</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%] md:gap-y-[40px]'>
                {
                    serviceDomain.map((item, index) => {
                        return (
                            <div className='w-[350px] h-[240px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border md:border-none md:h-auto' key={index}>
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

export default LendingUSeCases