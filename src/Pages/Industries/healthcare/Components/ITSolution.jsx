import React from 'react'

const ITSolution = () => {
    const ITSolutionArr = [{
        title: "Telemedicine software", desc: (
            <ul>
                <li className='list-disc ms-5'> Video appointments and chats.</li>
                <li className='list-disc ms-5'>Vitals tracking.</li>
                <li className='list-disc ms-5'>Automated billing due to integration with EHR.</li>
                <li className='list-disc ms-5'>Data analytics for patient vitals, outcomes, and employee performance.</li>
            </ul>
        )
    }, {
        title: "Chronic disease management", desc: (
            <ul>
                <li className='list-disc ms-5'>Specialized functionality for managing specific chronic conditions.</li>
                <li className='list-disc ms-5'>Medication intake plans.
                </li>
                <li className='list-disc ms-5'>Telemedicine appointments.</li>
                <li className='list-disc ms-5'>Patient motivation features.</li>
            </ul>
        )
    }
        , {
        title: "Remote patient monitoring", desc: (
            <ul>
                <li className='list-disc ms-5'>Tracking of patients' vitals via medical devices and wearables.</li>
                <li className='list-disc ms-5'>RPM data uploading to integrated healthcare IT systems.</li>
                <li className='list-disc ms-5'>Alerts on abnormal health parameters.</li>
            </ul>
        )
    }
        , {
        title: "Medical device software and SaMD", desc: (
            <ul>
                <li className='list-disc ms-5'>Software for FDA Class II and Class III medical devices (CT scanners, wearable glucose monitors, pacemakers, etc.).</li>
                <li className='list-disc ms-5'>Software as a medical device meant to be used on smartphones, PCs, smart watches, etc.</li>
            </ul>
        )
    }, {
        title: "Custom EHR systems", desc: (
            <ul>
                <li className='list-disc ms-5'>Secure and compliant PHI storage.</li>
                <li className='list-disc ms-5'>Convenient UX/UI and access from desktops, tablets, smartphones.</li>
                <li className='list-disc ms-5'>Advanced EHRs with blockchain-based records storage, AI features, chatbots, voice assistance, speech-to-text, and image recognition.</li>
            </ul>
        )
    }, {
        title: "Home health software", desc: (
            <ul>
                <li className='list-disc ms-5'>Home visit scheduling, shift optimization.</li>
                <li className='list-disc ms-5'>Offline app features for remote locations.</li>
                <li className='list-disc ms-5'>Electronic visit verification and billing.</li>
                <li className='list-disc ms-5'>Records, care, and medication management.</li>
            </ul>
        )
    }, {
        title: "Digital therapeutics (DTx)", desc: (
            <ul>
                <li className='list-disc ms-5'>Diseases and symptoms management, e.g., asthma triggers monitoring and alerting.</li>
                <li className='list-disc ms-5'>Disease-specific prevention programs, e.g., carbohydrate consumption monitoring for prediabetes.</li>
            </ul>
        )
    }, {
        title: "Patient engagement solutions", desc: (
            <ul>
                <li className='list-disc ms-5'>Patient portals and apps for appointment scheduling, prescription refills, and more.</li>
                <li className='list-disc ms-5'>Health education apps for wellness, nutrition, health checkups, and chronic conditions.</li>
                <li className='list-disc ms-5'>Health data trackers.</li>
            </ul>
        )
    }, {
        title: "Administrative software", desc: (
            <ul>
                <li className='list-disc ms-5'>Healthcare CRM.</li>
                <li className='list-disc ms-5'>Hospital inventory management.</li>
                <li className='list-disc ms-5'>HR management.</li>
                <li className='list-disc ms-5'>Learning management.</li>
                <li className='list-disc ms-5'>Financial management.</li>
            </ul>
        )
    }
    ]
    return (
        <div className="w-full pt-10 pb-16">
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>
                    IT Solutions for Healthcare We Deliver
                </h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>
                    Healthcare IT services by ScienceSoft cover every aspect of medical technology management, from IT strategy planning to software development, modernization, and support.
                </p>
                <h4 className='lg:text-2xl font-bold text-xl lg:text-black text-[blue] mt-5'>
                    Business management
                </h4>

            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-5 w-[95%]'>
                {ITSolutionArr.map((item, index) => (
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

export default ITSolution
