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
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Web Portals We Can Create for Your Business </h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>A web portal is a secure web-based platform that gives access to varied functionality and content via an easy-to-navigate interface. A web portal development company with expertise in full-stack web techs, ScienceSoft can help you create a web portal of any type to cover your specific needs in engaging with the audience, be it your customers, partners, or employees.</p>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%]'>
                {webPortalWeCreatedArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-[90%] h-[200px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default WebPortalWeCreated
