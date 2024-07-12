import React from 'react'
import webSolution from './websolution.png'
const WebSolutionWeNeed = () => {
    const cloudServiceDevArr = [{ title: "Web Portals", desc:" Since 2005, ScienceSoft works with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities. Web portals we create automatically aggregate data from corporate systems and become a source of up-to-date information and help for users."}, { title: "Websites", desc: "250+ businesses, governmental and non-profit organizations use the websites we’ve created for corporate presentation and brand building. We make sure our websites have an easy-to-use page editor for dynamic content management." }, { title: "Ecommerce", desc: "20 years in ecommerce development, we’ve grown the expertise from entry-level shops for startups to custom ecommerce solutions built for large-scale and high-growth businesses. We multiply business efficiency by using scalable microservices architectures and enabling high automation of all business processes."}, { title: "Web apps", desc: "In our portfolio of 1,900+ created web apps, you will find solutions for efficient management of different business activities. We apply smart automation to streamline workflows and integrate corporate apps together for coherent operation." }]

    return (
        <div className='w-[100vw] h-[auto] box-border pt-[60px] md:pt-[50px] pb-[30px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[16px] md:hidden'>Perks of Web Design with CT</h1>
                <h1 className='hidden md:block text-3xl font-bold text-[16px]'>What Web Solution Do You Need?</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'>Elevate Experiences: Experience the perks of web design with CT. Unparalleled user-centricity, responsive interfaces, and seamless navigation redefine digital engagement. Unlock your brand's online potential with us.</p>
            </div>
            <div className='w-[85%] flex mx-auto mt-6 justify-evenly md:w-[100%]'>
                <div className='w-[27%] h-[450px] md:hidden'>
                    <img src={webSolution} alt="Perks of Web Design with CT" className='w-[100%] h-[100%]' />
                </div>
                <div className='w-[65%] flex flex-wrap md:w-[100%] md:mx-auto justify-evenly gap-y-2'>
                    {cloudServiceDevArr.map((items, i) => {
                        return (
                            <div className='w-[45%] h-[220px] p-3 border border-[#ccc] md:h-[400px] md:w-[47%]' key={i}>
                                <h4 className='font-bold md:text-[18px]'>{items.title}</h4>
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
