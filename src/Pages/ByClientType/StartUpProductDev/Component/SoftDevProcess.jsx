import React from "react";

const EndtoEndAIConsulting = () => {
    const processArr = [{ step: "Step 1", title: "Ideation and discovery", desc: "We analyze the needs of your business and target audience and research the competition to determine the best-fitting market niche and a unique selling proposition that will differentiate your product on the market. You receive a clear vision and scope documentation and a high-level project roadmap with cost and time estimates and feasibility assessment for your product idea." },

    { step: "Step 2", title: "Product design", desc: "We design an optimal feature set, architecture,UX and UI, integration plan,and tech stack for your product with your business priorities and end user expectations in mind. Our teams document all major technical decisions across the product design and never jump into development before getting a client’s approval. If you look to attract external funding, we can also assist in preparing a whitepaper for investors and regulators." },


    { step: "Step 3", title: "Project planning", desc: "At this stage, we scope the project and introduce a comprehensive project plan that outlines the project goals, deliverables, team composition, and KPIs. It also comprises a detailed work breakdown structure, acommunication plan, and a risk mitigation strategy." },

    { step: "Step 4", title: "Development and quality assurance", desc: "Our software engineers establish development and delivery automation environment, set up data storage, code the solution's back end and APIs, and create user interfaces. We run testing in parallel with development to rapidly fix any identified issues." },


    { step: "Step 5", title: "Integration", desc: "At this stage, we integrate the software product with your corporate systems and required third-party services (e.g., payment, messaging, authentication). We run rigorous integration testing to ensure smooth and secure data flow between the connected solutions." },

    { step: "Step 6", title: "Product launch", desc: "We configure the app's infrastructure, backup and recovery procedures, establish infrastructure security, and release the solution to the end users. We can also assist in creating a promotional website and uploading your software to the required app stores to streamline product release." },
    ]


    return (
        <div className='w-[100vw] h-[auto] bg-[black] box-border pt-[100px] md:pt-[50px] pb-[30px] text-[white] pb-[60px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>Software Development Process for Startups: Key Steps and Best Practices</h1>
                <p className='w-[70%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'>CT's Roadmap to Success: Navigating startups through a streamlined software development process. From ideation to launch, we empower with key steps and best practices for sustainable growth and innovation.</p>
            </div>
            <div className="w-[85%] h-[200vh] flex justify-between mx-auto mt-6">
                <div className="w-[47%] h-[100%] flex flex-col justify-start items-start gap-[200px]">
                    {processArr.map((step, index) => {
                        if (index % 2 == 0) {
                            return (
                                <div key={index} className="w-[100%] h-[200px] bg-[#3C3C3C] p-3 box-border mt-[3%]">
                                <h4 className="text-[19px]">{step.step}</h4>
                                <h5 className="text-[17px]">{step.title}</h5>
                                <p className="text-[13.5px] font-normal w-[95%]">{step.desc}</p>
                            </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
                <ul className="w-1 h-[207vh] bg-[#FFC635] flex flex-col justify-start items-center gap-[180px]">
                    {processArr.map((items, i) => {
                        return (
                            <li className="w-[25px] h-[25px] bg-[#FFC635] overflow-auto"></li>
                        )
                    })}
                </ul>
                <div className="w-[47%] h-full flex flex-col justify-end items-end gap-[200px] mt-7">
                    {processArr.map((step, index) => {
                        if (index % 2 !== 0) {
                            return (
                                <div key={index} className="w-[100%] h-[200px] bg-[#3C3C3C] p-3 box-border">
                                    <h4 className="text-[19px]">{step.step}</h4>
                                    <h5 className="text-[17px]">{step.title}</h5>
                                    <p className="text-[13.5px] font-normal w-[95%]">{step.desc}</p>
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

};

export default EndtoEndAIConsulting;
