import React from 'react'

const KeyFeaturesPM = () => {
    const keyFeaturesPMArr = [{
        title: "Project planning", desc: (
            <ul>
                <li className='list-disc ms-5'>Learning needs analysis.
                </li>
                <li className='list-disc ms-5'>Setting project goals, milestones, KPIs, and deadlines.</li>
                <li className='list-disc ms-5'>Planning and scheduling project activities.
                </li>
                <li className='list-disc ms-5'>Checking the availability and costs of the required human, financial, and physical resources.
                </li>
            </ul>
        )
    }, {
        title: "Project monitoring", desc: (
            <ul>
                <li className='list-disc ms-5'>Tracking the completion status of each project task and consumption of project resources.
                </li>
                <li className='list-disc ms-5'>Monitoring the overall project progress.
                </li>
                <li className='list-disc ms-5'>Updating project tasks in real time.</li>
                <li className='list-disc ms-5'>Automated notifications about task updates to corresponding team members.
                </li>
            </ul>
        )
    }, {
        title: "Human resource management", desc: (
            <ul>
                <li className='list-disc ms-5'>A project team’s lineup planning and assigning employees to the project roles.
                </li>
                <li className='list-disc ms-5'>Scheduling high-demand professionals to ensure their availability for the upcoming projects.</li>
            </ul>
        )
    }, {
        title: "Financial resource management", desc: (
            <ul>
                <li className='list-disc ms-5'>Project budget estimation and planning with regard to the planned labor and non-labor costs.
                </li>
                <li className='list-disc ms-5'>Requesting/scheduling the needed financial resources and project budget approval.</li>
                <li className='list-disc ms-5'>Setting budget groups for the project and modelling scenarios of budget allocation </li>
            </ul>
        )
    }
        , {
        title: "Physical resource management", desc: (
            <ul>

                <li className='list-disc ms-5'> Checking the real-time availability of the company’s assets (e.g., machinery, hardware, software licenses, facilities, medical equipment, etc.) and consumable resources.
                </li>
                <li className='list-disc ms-5'>Monitoring the consumable resources consumption and its compliance with the planned amounts.</li>
            </ul>
        )
    }
        , {
        title: "Time management", desc: (
            <ul>
                <li className='list-disc ms-5'>Monitoring the actual time spent on each task by each team member.
                </li>
                <li className='list-disc ms-5'>Getting personal time reports on project team members.</li>
                <li className='list-disc ms-5'>Planning and visualizing team members’ availability.</li>
            </ul>
        )
    }
        , {
        title: "Risks management", desc: (
            <ul>
                <li className='list-disc ms-5'>Setting, evaluating, and prioritizing project risks.
                </li>
                <li className='list-disc ms-5'>Monitoring risk factors throughout the project.</li>
                <li className='list-disc ms-5'>Assigning risk mitigation activities to a corresponding project stakeholder.
                </li>
            </ul>
        )
    }
        , {
        title: "Project collaboration", desc: (
            <ul>
                <li className='list-disc ms-5'>Outlining accountability and collaboration scenarios within the project team.
                </li>
                <li className='list-disc ms-5'>Organizing and monitoring group tasks.</li>
                <li className='list-disc ms-5'>Simultaneous work on the project in a group.</li>
                <li className='list-disc ms-5'>Built-in communication tool or an integration with third-party software (e.g., Microsoft Teams, Slack, etc.).</li>
            </ul>
        )
    }
        , {
        title: "Gantt charts", desc: (
            <ul>
                <li className='list-disc ms-5'>Visualizing the information on the project tasks, schedules, and resources in interactive charts.
                </li>
                <li className='list-disc ms-5'>Structuring and breaking down project activities.</li>
                <li className='list-disc ms-5'>Planning the project’s resources capacity.</li>
            </ul>
        )
    }
    ]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Key Features of Custom Project Management Software </h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Based on ScienceSoft's 34 years of experience in software development, we can outline the core functionality of a custom project management system.</p>
                <h4 className='text-[22px] ms-2 mt-5'>Project management software features</h4>
            </div>
            
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%]'>
                {keyFeaturesPMArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-[90%] h-[200px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default KeyFeaturesPM
