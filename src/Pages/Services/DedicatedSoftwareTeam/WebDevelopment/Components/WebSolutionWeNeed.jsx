import React from 'react'
import webSolution from './websolution.png'
const WebSolutionWeNeed = () => {
    const cloudServiceDevArr = [{ title: "Web Portals", desc:" Since 2005, ScienceSoft works with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities. Web portals we create automatically aggregate data from corporate systems and become a source of up-to-date information and help for users."}, { title: "Websites", desc: "250+ businesses, governmental and non-profit organizations use the websites we’ve created for corporate presentation and brand building. We make sure our websites have an easy-to-use page editor for dynamic content management." }, { title: "Ecommerce", desc: "20 years in ecommerce development, we’ve grown the expertise from entry-level shops for startups to custom ecommerce solutions built for large-scale and high-growth businesses. We multiply business efficiency by using scalable microservices architectures and enabling high automation of all business processes."}, { title: "Web apps", desc: "In our portfolio of 1,900+ created web apps, you will find solutions for efficient management of different business activities. We apply smart automation to streamline workflows and integrate corporate apps together for coherent operation." }]

    return (

       
        <div className='w-full mt-16 mb-8'>
        <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
            <h1 className='lg:text-3xl font-bold text-xl lg:text-black text-primary'>Perks of Web Design with CT</h1>
            <p className='lg:w-11/12 mt-2 w-full text-base'>Elevate Experiences: Experience the perks of web design with CT. Unparalleled user-centricity, responsive interfaces, and seamless navigation redefine digital engagement. Unlock your brand's online potential with us.</p>
        </div>
        <div className='w-full  lg:w-[85%] flex mx-auto mt-6 gap-20 justify-start'>
            <div className='w-[27%] h-[500px] hidden lg:block'>
                <img src={webSolution} alt="Perks of Web Design with CT" className='w-[100%] h-[100%]' />
            </div>
            <div className='lg:w-[65%]  flex gap-3 flex-wrap w-full lg:mt-0 mt-4 md:px-3'>
                {cloudServiceDevArr.map((items, i) => {
                    return (
                        <div className='md:w-[45%]  w-full h-auto p-3 border border-[#ccc]' key={i}>
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

export default WebSolutionWeNeed
