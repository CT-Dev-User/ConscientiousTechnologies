import React from 'react'
const BenefitsFromCt = () => {
    const benefitsFromCtArr = [{ title: "Time-saving automation", desc: " Since 2005, ScienceSoft works with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities. Web portals we create automatically aggregate data from corporate systems and become a source of up-to-date information and help for users." }, { title: "Easy-to-read reports", desc: "250+ businesses, governmental and non-profit organizations use the websites we’ve created for corporate presentation and brand building. We make sure our websites have an easy-to-use page editor for dynamic content management." }, { title: "Reliable insight trustworthy data", desc: "20 years in ecommerce development, we’ve grown the expertise from entry-level shops for startups to custom ecommerce solutions built for large-scale and high-growth businesses. We multiply business efficiency by using scalable microservices architectures and enabling high automation of all business processes." }, { title: "Value-focused data analytics", desc: "In our portfolio of 1,900+ created web apps, you will find solutions for efficient management of different business activities. We apply smart automation to streamline workflows and integrate corporate apps together for coherent operation." }]

    return (
        <div className='w-full mt-20 mb-8'>

            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>How You Benefit from Conscientious Technology as Your Analytics Partner</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>Web development services help create all types of web-based software and ensure great experience for web users. Different types of web solutions may seem similar from the outside but we approach them differently and know what factors are winning in each case.</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap justify-between gap-7 mt-8 w-[95%]'>
                <div className='w-[27%] h-[450px] hidden lg:block bg-[black]'>
                    {/* <img src={webSolution} alt="Perks of Web Design with CT" className='w-[100%] h-[100%]' /> */}
                </div>

                <div className='lg:w-[65%] flex flex-wrap gap-7 w-[95%]'>
                    {benefitsFromCtArr.map((item, index) => (
                        <div key={index} className='md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                            <h1 className='text-lg text-bold'>{item.title}</h1>
                            <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default BenefitsFromCt
