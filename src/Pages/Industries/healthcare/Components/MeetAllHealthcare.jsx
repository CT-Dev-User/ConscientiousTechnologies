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

        <div className="w-full pt-20">
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>
                    One Partner to Meet All Your Healthcare IT Needs               </h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>
                    Healthcare IT services by ScienceSoft cover every aspect of medical technology management, from IT strategy planning to software development, modernization, and support.
                </p>

            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-5 w-[95%]'>
                {MeetAllHealthcareArr.map((item, index) => (
                    <div key={index} className='lg:w-[31%] md:w-[45%] w-full lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <div className='text-sm mt-3 font-medium'>
                            <p className='text-base'>{item.desc}</p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MeetAllHealthcare
