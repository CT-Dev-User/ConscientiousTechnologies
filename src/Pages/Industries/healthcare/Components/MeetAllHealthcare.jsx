import React from 'react'

const MeetAllHealthcare = () => {
    const MeetAllHealthcareArr = [{
        title: "Healthcare software development", desc: (
            <ul>
                <li className='list-disc ms-5'>We cover every project step, from healthcare software design to its implementation. A solid project plan, a value-driving feature list, a reliable and secure architecture, full regulatory compliance, and high software performance are a given when you work with ScienceSoft.</li>
            </ul>
        )
    }, {
        title: "Healthcare IT consulting", desc: (
            <ul>
                <li className='list-disc ms-5'>Whether you want to polish your approach to ITSM or launch a new medical app, ScienceSoft's consultants with 5–20 years of industry experience will ensure the success of your initiative.</li>
            </ul>
        )
    }
        , {
        title: "IT modernization", desc: (
            <ul>
                <li className='list-disc ms-5'>Ready to upgrade your healthcare IT environment or legacy software? ScienceSoft’s medical IT services will help you improve the reliability, optimize performance, and ensure 100% security of the target IT components.</li>
            </ul>
        )
    }, {
        title: "Cloud migration", desc: (
            <ul>
                <li className='list-disc ms-5'>Take a step toward a cloud-based IT environment to reduce infrastructure costs and enable on-demand scalability of your healthcare software.</li>
            </ul>
        )
    }, {
        title: "Healthcare data analytics", desc: (
            <ul>
                <li className='list-disc ms-5'>With 34 years of experience in data analytics, ScienceSoft is here to help you get insights from healthcare data and support clinical decision-making with AI-based recommendations.</li>
            </ul>
        )
    }, {
        title: "Healthcare IT support", desc: (
            <ul>
                <li className='list-disc ms-5'>With 16 years in IT support, ScienceSoft covers everything from IT help desk services to holistic IT infrastructure maintenance and modernization.</li>
            </ul>
        )
    }, {
        title: "Managed IT services", desc: (
            <ul>
                <li className='list-disc ms-5'>ScienceSoft's team is ready to proactively monitor and manage your healthcare IT infrastructure or its specific components. We can modify or optimize apps and infrastructures and adjust security policies and processes.</li>
            </ul>
        )
    }, {
        title: "Cybersecurity and compliance", desc: (
            <ul>
                <li className='list-disc ms-5'>Our security and regulatory compliance experts will safeguard your sensitive data in line with HIPAA, GDPR, HITECH, FDA, MDR, MOHAP, and other requirements.</li>
            </ul>
        )
    }, {
        title: "-------", desc: (
            <ul>
                <li className='list-disc ms-5'>Fuel management optimization.</li>
                <li className='list-disc ms-5'>Vehicle maintenance and expenses budgeting.</li>
                <li className='list-disc ms-5'>Vehicle insurance and warranty expiration notifications</li>
            </ul>
        )
    }
    ]
    return (

        <div className='w-[100vw] h-[auto] box-border py-[80px] md:pt-[40px] pb-[20px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>One Partner to Meet All Your Healthcare IT Needs</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>Healthcare IT services by ScienceSoft cover every aspect of medical technology management, from IT strategy planning to software development, modernization, and support.</p>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px]'>
                {MeetAllHealthcareArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-[90%] h-[200px] border border-gray-300 p-3 md:w-full md:border-none md:p-0 md:h-auto md:py-3'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default MeetAllHealthcare
