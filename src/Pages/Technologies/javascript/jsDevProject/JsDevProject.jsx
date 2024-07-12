import React from 'react'

const JsDevProject = () => {
    const SoftwareDesignData = [{ title: "Flexible collaboration", points: ["We customize the frequency and methods of collaboration based on our client's preferences to ensure transparency and consistency in our JavaScript development projects."] }, { title: "Accurate scoping", points: ["We clearly define functional and non-functional requirements for JavaScript software, ensuring there are no gaps or conflicts in them. This approach enables us to accurately define the JavaScript project scope."] }, { title: "Precise cost estimation", points: ["We calculate the project cost after thoroughly analyzing the software and tech stack complexity, the required resources, and potential project risks for every unique case."] }, { title: "Quality management", points: ["QA is incorporated into every step of our SDLC, guaranteeing zero severe defects in production. Our approach to quality management is compliant with ISO 9001 standards."] }, { title: "Security management", points: ["With an ISO 27001-certified security management system, we ensure full security of the project environment, our client's digital assets and intellectual property, and the web software we create."] }, { title: "Comprehensive risk management", points: ["We monitor all important project risks and design a pragmatic risk mitigation plan to proactively address potential issues."] }, { title: "Continuous success measurement", points: ["We select the best-suited sets of objectives and key results for each JavaScript project to evaluate how well the software meets the client's expectations and understand the project's health."] }, { title: "Reporting process and examples", points: ["We regularly report on the project progress (completed tasks, implemented features, and milestones reached), financial aspects, risks, changes, and more."] }, { title: "Complete project documentation", points: ["We thoroughly document all important decisions regarding the software and its development process to ensure easy app maintenance and evolution in the future."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px] md:w-[90vw] md:mx-[20px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px]'>How We Approach JavaScript Development Projects</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>We cover the implementation of all core functionality modules of operations management software.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    SoftwareDesignData.map((item, index) => {
                        return (
                            <div className='w-[32.5%] md:w-[48.5%] md:h-auto md:pb-[20px] h-[180px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[15px] px-[15px] box-border' key={index}>
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

export default JsDevProject