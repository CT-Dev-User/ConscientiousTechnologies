import React from 'react'

const ApproachToGolang = () => {
    const pythonAppData = [{ title: "Approach to collaboration", points: ["Tools: Slack, Microsoft Teams, Skype, Zoom, Jira, etc.", "Meetings: Regular stand-ups, sprint planning, reviews, and retrospectives to keep everyone aligned."] }, { title: "Project scoping", points: ["In-depth analysis of a customer's needs, goals, constraints, and success vision.", "Interviews, workshops, and on-site visits to explore the customer's operations and workflows"] }, { title: "Project estimation", points: ["Functional and non-functional requirements for the software.", "Architecture, tech stack, and deployment models.", "Cooperation mode and the required resources."] }, { title: "Success measurement", points: ["Mapping success criteria and quantitative KPIs to track project health.", "Regularly communicating with the clients' management teams to report our achievements, review the success evaluation framework, and understand their satisfaction with the results."] }, { title: "Project reporting", points: ["Weekly, bi-weekly, or monthly reports.", "Reports on project status and health, planned vs. actual outcomes, emerging risks, and more."] }, { title: "Project documentation", points: ["Project initiation documentation.", "Requirements specification.", "Design documentation.", "Test documentation."] }, { title: "Knowledge management", points: ["Each team member knows what knowledge assets they are responsible for.", "Permission-based access to the knowledge base for each project member."] }, { title: "Risk management", points: ["Regular risk assessments to identify potential issues early on.", "Mitigation strategies for identified risks."] }, { title: "Change management", points: ["An impact analysis to understand implications before any change is approved.", "Communicating changes effectively to all stakeholders and updating project documentation."] }]
    return (
        <div className='w-[85vw] mx-[110px] pt-[60px] pb-[30px] md:w-[90vw] md:mx-[20px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px]'>Our Approach to Golang Development Projects</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>-------</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    pythonAppData.map((item, index) => {
                        return (
                            <div className='w-[32.5%] h-[180px] md:w-[100%] md:h-auto md:pb-[20px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[15px] px-[15px] box-border' key={index}>
                                <h2 className='text-xl font-bold pl-[10px] md:text-[24px]'>{item.title}</h2>
                                <ul className='list-disc font-normal text-[12px] pl-[20px] md:text-[16px]'>
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

export default ApproachToGolang