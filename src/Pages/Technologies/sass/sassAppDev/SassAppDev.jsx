import React from 'react'

const SassAppDev = () => {
    const scopeOfSassData = [{ title: "Ecommerce and retail solutions", points: ["Online storefronts.", "Shopping cart and checkout systems.", "Inventory management, and many more."] }, { title: "Enterprise resource planning (ERP)", points: ["Corporate finance management.", "Procurement and supply chain management.", "HR management, and many more."] }, { title: "CRM", points: ["Sales automation.", "Customer support and service.", "Marketing automation, and many more."] }, { title: "Productivity and collaboration tool", points: ["Document creation and editing.", "Project management.", "Communication platforms.", "Time management and tracking, and many more."] }, { title: "Content management systems", points: ["Website creation and management.", "Blogging platforms.", "Domain hosting and management, and many more."] }, { title: "Fleet management apps", points: ["Vehicle tracking and telematics.", "Maintenance scheduling and management.", "Route planning and optimization, and many more."] }, { title: "Human capital management", points: ["Recruitment and applicant tracking systems (ATS).", "Employee performance management.", "Learning management systems (LMS), and many more."] }, { title: "Financial services and fintech", points: ["Payment processing.", "Loan processing.", "Claim processing.", "Cryptocurrency wallets, and more."] }, { title: "Healthcare and life sciences", points: ["Electronic health records (EHR).", "Telemedicine platforms.", "Clinical trial management, and many more."] }, { title: "Social networking", points: ["Dating apps and social networks.", "Social media management.", "Messaging apps."] }, { title: "On-demand service marketplaces", points: ["Ride-sharing and transportation services.", "Food delivery services.", "Home services and gig economy platforms, and many more."] }, { title: "Travel apps", points: ["Booking platforms.", "Itinerary planning tools.", "Flight tracking and airport information services, and many more."] }, { title: "Health and wellness services", points: ["Personal wellness and fitness apps.", "Mental health apps.", "Nutrition tracking, and many more."] }, { title: "Entertainment apps", points: ["Music and podcast streaming services.", "Video streaming platforms.", "Gaming services, and many more."] }, { title: "Cybersecurity", points: ["Network security.", "Identity and access management (IAM).", "Threat detection and response, and many more."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px] md:w-[90vw] md:mx-[20px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px]'>Types of SaaS Applications We Develop</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>Our solid portfolio of 3,600 projects includes solutions that enable any type of interactions, be they B2C, B2B, P2P, G2P, or corporate.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    scopeOfSassData.map((item, index) => {
                        return (
                            <div className='w-[32.5%] md:w-[49%] md:h-auto md:pb-[20px] h-[180px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[15px] px-[15px] box-border' key={index}>
                                <h2 className='text-xl font-bold pl-[10px]'>{item.title}</h2>
                                <ul className='list-disc text-[12px] pl-[20px]'>
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

export default SassAppDev