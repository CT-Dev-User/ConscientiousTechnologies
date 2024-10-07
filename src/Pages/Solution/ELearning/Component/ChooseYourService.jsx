import React from 'react'

const ChooseYourService = () => {
    const chooseYourServiceArr = [{
        title: "Custom eLearning development", desc: (
            <ul>
                <li className='list-disc ms-5'>Learning needs analysis.
                </li>
                <li className='list-disc ms-5'>Defining a suitable type of an eLearning solution (LMS, LXP, eLearning portal), introducing an optimal functional scope.</li>
                <li className='list-disc ms-5'>Selecting a platform or a tech stack and an implementation methodology.
                </li>
                <li className='list-disc ms-5'> End-to-end eLearning software development.
                </li>
            </ul>
        )
    }, {
        title: "Revamp of legacy learning software", desc: (
            <ul>

                <li className='list-disc ms-5'>Learning needs analysis.
                </li>
                <li className='list-disc ms-5'>Redesign of learning processes.
                </li>
                <li className='list-disc ms-5'>Suggesting new eLearning functionality (e.g., course publishing workflows, gamification).</li>
                <li className='list-disc ms-5'>Cloud migration of an eLearning solution, if required
                </li>
            </ul>
        )
    }, {
        title: "advanced functionality to your current eLearning solution", desc: (
            <ul>
                <li className='list-disc ms-5'>Defining learning processes to transform with innovative techs (AI, VR, AR, big data) and redesigning the learning processes accordingly.
                </li>
                <li className='list-disc ms-5'>A business case, including costs, risks, ROI or NPV.</li>
                <li className='list-disc ms-5'>Implementation, integration and testing of new features.</li>
            </ul>
        )
    }, {
        title: "Customization of an open-source eLearning platform", desc: (
            <ul>
                <li className='list-disc ms-5'>Eliciting eLearning requirements.
                </li>
                <li className='list-disc ms-5'>Advising on an optimal open-source platform.</li>
                <li className='list-disc ms-5'>Customizing an open-source eLearning platform. (e.g., to support complex content approval workflows, unique assessments).</li>
                <li className='list-disc ms-5'>eLearning solution testing.</li>
            </ul>
        )
    }
    ]
    return (

        <div className='w-full mt-16 mb-8'>
        <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
            <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Choose Your Service Option</h1>
            <p className='lg:w-11/12 mt-2 w-full text-base'>Challenges Fleet Management Software by ScienceSoft Solves</p>
        </div>
        <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
            {chooseYourServiceArr.map((item, index) => (
                <div key={index} className='md:w-[48%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                    <h1 className='text-lg text-bold'>{item.title}</h1>
                    <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                </div>
            ))}
        </div>
    </div>

     
    )
}

export default ChooseYourService
