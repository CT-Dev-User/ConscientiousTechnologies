import React from 'react'
const BenefitsFromCt = () => {
    const benefitsFromCtArr = [{ title: "Time-saving automation", desc:" Since 2005, ScienceSoft works with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities. Web portals we create automatically aggregate data from corporate systems and become a source of up-to-date information and help for users."}, { title: "Easy-to-read reports", desc: "250+ businesses, governmental and non-profit organizations use the websites we’ve created for corporate presentation and brand building. We make sure our websites have an easy-to-use page editor for dynamic content management." }, { title: "Reliable insight trustworthy data", desc: "20 years in ecommerce development, we’ve grown the expertise from entry-level shops for startups to custom ecommerce solutions built for large-scale and high-growth businesses. We multiply business efficiency by using scalable microservices architectures and enabling high automation of all business processes."}, { title: "Value-focused data analytics", desc: "In our portfolio of 1,900+ created web apps, you will find solutions for efficient management of different business activities. We apply smart automation to streamline workflows and integrate corporate apps together for coherent operation." }]

    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Perks of Web Design with CT</h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Elevate Experiences: Experience the perks of web design with CT. Unparalleled user-centricity, responsive interfaces, and seamless navigation redefine digital engagement. Unlock your brand's online potential with us.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%]'>
                <div className='w-[27%] h-[450px] md:hidden bg-[black]'>
                    {/* <img src={webSolution} alt="Perks of Web Design with CT" className='w-[100%] h-[100%]' /> */}
                </div>
                <div className='w-[65%] flex gap-2 flex-wrap md:w-[95%]'>
                    {benefitsFromCtArr.map((items, i) => {
                        return (
                            <div className='w-[350px] h-[220px] p-3 border border-[#ccc] md:w-full md:border-none' key={i}>
                                <h4 className='font-bold md:text-[18px]'>{items.title}</h4>
                                <p className='text-[13.5px] mt-1 md:text-[14px]'>{items.desc}</p>
                            </div>
                        )

                    })}
                </div>
            </div>

        </div>
    )
}

export default BenefitsFromCt
