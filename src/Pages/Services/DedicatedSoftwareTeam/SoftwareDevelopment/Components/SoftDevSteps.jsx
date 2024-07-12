import React from 'react'

const SoftDevSteps = () => {
    const processArr = [{
        step: "Step 1", title: "Planning", desc: (
            <ul>
                <li className="ms-5 list-disc">Document key business processes and how they’re covered with existing software.</li>
                <li className="ms-5 list-disc">Elicit business needs and concerns.</li>
                <li className="ms-5 list-disc">Evaluate risks of new software introduction, e.g., impact on business processes, and plan risk mitigation measures.</li>
                <li className="ms-5 list-disc">Draw up high-level functional and technical software requirements.</li>
                <li className="ms-5 list-disc">Prepare the list of software features and integrations.</li>
                <li className="ms-5 list-disc">Draw up a project roadmap and major milestones.</li>
            </ul>
        )
    },

    {
        step: "Step 2", title: "Business case composition", desc: (
            <ul>
                <li className="ms-5 list-disc">It takes from 1 week to conduct cost-benefit analysis, estimate NVP, ROI.</li>
            </ul>
        )
    },


    {
        step: "Step 3", title: "Architecture, UX and UI design", desc: (
            <ul>
                <li className="ms-5 list-disc">Define app architecture, techs, data flow and integration points.</li>
                <li className="ms-5 list-disc">Note: If possible, ScienceSoft will re-use parts of your existing enterprise systems rather than develop new software modules, for lower cost and higher reliability of your software.</li>
                <li className="ms-5 list-disc">Conduct UX research, outline personas and key user scenarios, prepare user journey maps.</li>
                <li className="ms-5 list-disc">Create wireframes and clickable prototypes.</li>
                <li className="ms-5 list-disc">Conduct visual identity analysis, prepare design concept, create a branded UI kit with ready-to-use components (icons, buttons, colors, fonts, etc.), animations, specifications and assets for developers</li>
            </ul>
        )
    },

    {
        step: "Step 4", title: "MVP launch (upon request)", desc: (
            <ul>
                <li className="ms-5 list-disc">The delivery of the first working version of enterprise software takes from 1 month. The first working version of software product can be delivered in ~ 2 months.</li>

            </ul>
        )
    },


    {
        step: "Step 5", title: "Development and testing", desc: (
            <ul>
                <li className="ms-5 list-disc">Agile delivery of new software parts in 2-week releases. Continuous safe minor releases via automated CI/CD pipelines.</li>
                <li className="ms-5 list-disc">Analysis of emerging needs and the release planning.</li>
                <li className="ms-5 list-disc">Approving the release scope.</li>
                <li className="ms-5 list-disc">Delivering and reviewing mockups.</li>
                <li className="ms-5 list-disc">Developing and testing the approved software part, migrating the developed software part to the staging and production environment.</li>
                <li className="ms-5 list-disc">Getting feedback from a project sponsor and users on the results of the release.</li>
                <li className="ms-5 list-disc">Reviewing the results of the completed release and approving the scope of the next release.</li>

            </ul>
        )
    },

    {
        step: "Step 6", title: "Deployment (and 3-month maintenance)", desc: (
            <ul>
                <li className="ms-5 list-disc">Conducting user acceptance testing (UAT).</li>
                <li className="ms-5 list-disc">Establishing software monitoring processes.</li>
                <li className="ms-5 list-disc">Defining new roles and responsibilities for application support in your and our teams.</li>
            </ul>
        )
    },
    {
        step: "Step 7", title: "Project handover / continuous support (on demand)", desc: (
            <ul>
                <li className="ms-5 list-disc">Conducting project evaluation.</li>
                <li className="ms-5 list-disc">Performing knowledge transfer to your in-house IT team/other vendors.</li>
                <li className="ms-5 list-disc">Providing the final report and requesting your confirmation for the project closure.</li>
            </ul>
        )
    }
    ]
    return (
        <div className='w-[100vw] h-[auto] bg-[black] box-border pt-[60px] md:pt-[50px] pb-[30px] text-[white] pb-[60px] md:hidden'>
            <div className='w-[85%] mx-[110px] md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>Check Out Our Software Development Steps </h1>
                <p className='w-[70%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'>Discover Our Software Development Steps: Gain insights into our comprehensive approach, from ideation to deployment, ensuring transparency and delivering high-quality, custom solutions for your unique business requirements.</p>
            </div>
            <div className="w-[85%] flex justify-between mx-[110px] mt-[60px]">
                <div className="w-[47%] flex flex-col justify-start items-start gap-[210px] mt-[40px]">
                    {processArr.map((step, index) => {
                        if (index % 2 == 0) {
                            return (
                                <div key={index} className="w-[100%] h-auto bg-[#3C3C3C] p-3 h-[350px]">
                                    <h4 className="text-[19px]">{step.step}</h4>
                                    <h5 className="text-[17px]">{step.title}</h5>
                                    <div className="text-[13.5px] font-normal w-[95%]">{step.desc}</div>
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
                <ul className="w-[2px] h-[270vh] bg-[#FFC635] flex flex-col items-center  gap-[210px] py-[10px]">
                    {processArr.map((items, i) => {
                        return (

                            <li className="w-[25px] h-[25px] bg-[#FFC635]" key={i}></li>
                        )
                    })}
                </ul>
                <div className="w-[47%] flex flex-col">
                    {processArr.map((step, index) => {
                        if (index % 2 !== 0) {
                            return (
                                <div key={index} className="w-[100%] h-[180px] bg-[#3C3C3C] p-3 h-[200px] mt-[270px]">
                                    <h4 className="text-[19px]">{step.step}</h4>
                                    <h5 className="text-[17px]">{step.title}</h5>
                                    <div className="text-[13.5px] font-normal w-[95%]">{step.desc}</div>
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>

        </div>
    )
}

export default SoftDevSteps