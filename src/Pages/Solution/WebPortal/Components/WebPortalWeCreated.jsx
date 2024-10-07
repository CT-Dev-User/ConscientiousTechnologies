import React from 'react'

const WebPortalWeCreated = () => {
    const webPortalWeCreatedArr = [{
        title: "Vendor portals", desc: "We improve procurement processes for manufacturers and non-manufactures (banks, education establishments, government institutions)."
    }, {
        title: "B2B portals", desc: "We digitally support any processes between businesses: trading, procurement, manufacturing, distribution."
    }, {
        title: "Self-service portals", desc: "We aggregate information on your company’s products or services and allow registered users to request the information, activate / de-activate and schedule services, contact the company’s representatives, resolve issues."
    },
    {
        title: "Customer portals", desc: "We create a digital space where your customers can access your products and place online orders, subscribe for services, submit maintenance requests, share their experience with you and other users."
    },
    {
        title: "Employee portals", desc: "We implement a secure platform for your employees to submit and manage requests for HR, IT, and facility-related services, access structured corporate data, collaborate, and stay up-to-date with corporate events."
    },
    {
        title: "Patient portals", desc: "We provide your patients with secure access to their personal health information (PHI), enable self-scheduling of appointments and telehealth visits."
    },
    {
        title: "Ecommerce portals", desc: "We create intuitive buying experience for business buyers and individual consumers, and can integrate an ecommerce portal into an omnichannel retail ecosystem."
    },
    {
        title: "Sales portals", desc: "We set up a space where your sales agents and business partners can access sales materials (case studies, white papers, product specifications, etc.)."
    },
    {
        title: "eLearning portals", desc: "We create portals for commercial training providers and corporate training programs."
    },
    {
        title: "Community portals", desc: "We connect people with similar interests and encourage them to acquire new knowledge and share their experience via forums, blogs, chats, and other communication means."
    },
    {
        title: "Insurance portals", desc: "We introduce seamless digital experiences and process automation for insurers’ clients, employees, agent teams, and suppliers."
    },
    {
        title: "Investor portals", desc: "We help you streamline investor onboarding and communication, promptly and securely share investment data and documents."
    }
    ]
    return (
        <div className='w-full my-20'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Web Portals We Can Create for Your Business</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>A web portal is a secure web-based platform that gives access to varied functionality and content via an easy-to-navigate interface. A web portal development company with expertise in full-stack web techs, ScienceSoft can help you create a web portal of any type to cover your specific needs in engaging with the audience, be it your customers, partners, or employees.</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-10 w-[95%]'>
                {webPortalWeCreatedArr.map((item, index) => (
                    <div key={index} className='lg:w-[30%] md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default WebPortalWeCreated
