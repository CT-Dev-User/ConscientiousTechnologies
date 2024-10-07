import React from 'react'
import benefits from './dataAnalyticsBenefits.png'
const BenefitsFromCT = () => {
    const BenefitsFromCT = [{ title: "Time-saving automation", desc:"Since 2005, ScienceSoft works with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities. Web portals we create automatically aggregate data from corporate systems and become a source of up-to-date information and help for users."}, { title: "Easy-to-read reports", desc: "250+ businesses, governmental and non-profit organizations use the websites we’ve created for corporate presentation and brand building. We make sure our websites have an easy-to-use page editor for dynamic content management." }, { title: "Reliable insight trustworthy data", desc: "20 years in ecommerce development, we’ve grown the expertise from entry-level shops for startups to custom ecommerce solutions built for large-scale and high-growth businesses. We multiply business efficiency by using scalable microservices architectures and enabling high automation of all business processes."}, { title: "Value-focused data analytics", desc: "In our portfolio of 1,900+ created web apps, you will find solutions for efficient management of different business activities. We apply smart automation to streamline workflows and integrate corporate apps together for coherent operation." }]

    return (
        <div className='w-full mt-16 mb-8'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
                <h1 className='lg:text-3xl font-bold text-xl lg:text-black text-primary'>How You Benefit from Conscientious Technology as Your Analytics Partner</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>Web development services help create all types of web-based software and ensure great experience for web users. Different types of web solutions may seem similar from the outside but we approach them differently and know what factors are winning in each case.</p>
            </div>
            <div className='w-full  lg:w-[85%] flex mx-auto mt-6 gap-20 justify-start'>
                <div className='w-[27%] h-[500px] hidden lg:block'>
                    <img src={benefits} alt="Perks of Web Design with CT" className='w-[100%] h-[100%]' />
                </div>
                <div className='lg:w-[65%]  flex gap-3 flex-wrap w-full lg:mt-0 mt-4'>
                    {BenefitsFromCT.map((items, i) => {
                        return (
                            <div className='md:w-[45%] w-full h-auto p-3 border border-[#ccc]' key={i}>
                                <h4 className='font-bold'>{items.title}</h4>
                                <p className='text-[13.5px] mt-1'>{items.desc}</p>
                            </div>
                        )

                    })}
                </div>
            </div>

        </div>
    )
}

export default BenefitsFromCT
