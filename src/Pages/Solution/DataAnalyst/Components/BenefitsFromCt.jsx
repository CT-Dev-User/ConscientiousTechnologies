import React from 'react'
import ourmission from "../../../../assets/AboutUs/ourMission.png"
import ourmission1 from "../../../../assets/AboutUs/respectCoreValue.png"
const BenefitsFromCt = () => {
    const benefitsFromCtArr = [{ title: "Time-saving automation", desc:" Since 2005, ScienceSoft works with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities. Web portals we create automatically aggregate data from corporate systems and become a source of up-to-date information and help for users."}, { title: "Easy-to-read reports", desc: "250+ businesses, governmental and non-profit organizations use the websites we’ve created for corporate presentation and brand building. We make sure our websites have an easy-to-use page editor for dynamic content management." }, { title: "Reliable insight trustworthy data", desc: "20 years in ecommerce development, we’ve grown the expertise from entry-level shops for startups to custom ecommerce solutions built for large-scale and high-growth businesses. We multiply business efficiency by using scalable microservices architectures and enabling high automation of all business processes."}, { title: "Value-focused data analytics", desc: "In our portfolio of 1,900+ created web apps, you will find solutions for efficient management of different business activities. We apply smart automation to streamline workflows and integrate corporate apps together for coherent operation." }]

    return (
        <div className='w-screen h-auto box-border lg:py-14 py-7'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl md:text-[#3970F0]'>Perks of Web Design with CT</h1>
                <p className='mt-2 w-[98%] mx-auto text-base'>Elevate Experiences: Experience the perks of web design with CT. Unparalleled user-centricity, responsive interfaces, and seamless navigation redefine digital engagement. Unlock your brand's online potential with us.</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-5 w-[95%]'>
                <div className='w-[28%] h-[30rem] hidden bg-[black] lg:block'>
                    <img src={ourmission1} alt="Perks of Web Design with CT" className='w-full h-full' />
                </div>
                <div className='lg:w-[65%] flex gap-5 flex-wrap w-[95%]'>
                    {benefitsFromCtArr.map((items, i) => {
                        return (
                            <div className='lg:w-[46%] h-auto p-3 border border-[#ccc] w-full' key={i}>
                                <h4 className='font-bold text-lg'>{items.title}</h4>
                                <p className='text-sm mt-2'>{items.desc}</p>
                            </div>
                        )

                    })}
                </div>
            </div>

        </div>
    )
}

export default BenefitsFromCt
