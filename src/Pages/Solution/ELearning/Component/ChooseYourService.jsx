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
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Choose Your Service Option</h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Challenges Fleet Management Software by ScienceSoft Solves</p>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%] md:gap-y-[40px]'>
                {chooseYourServiceArr.map((item, index) => (
                    <div key={index} className='w-[45%] h-[220px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ChooseYourService
