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
        // <div className='w-screen h-auto bg-black box-border py-16 text-[white]'>
        //     <div className='lg:w-[85%] mx-auto w-[95%]'>
        //         <h1 className='lg:text-3xl text-xl 2xl:text-[2rem] lg:text-white text-[blue]'>Software Development Process for Startups: Key Steps and Best Practices</h1>
        //         <p className='w-[95%] mt-2 md:w-[100%] font-normal text-sm lg:text-base'>CT's Roadmap to Success: Navigating startups through a streamlined software development process. From ideation to launch, we empower with key steps and best practices for sustainable growth and innovation.</p>
        //     </div>
        //     <div className="w-[85%] h-[200vh] flex justify-between mx-auto mt-6">
        //         <div className="w-[47%] h-[100%] flex flex-col justify-start items-start gap-[200px]">
        //             {processArr.map((step, index) => {
        //                 if (index % 2 == 0) {
        //                     return (
        //                         <div key={index} className="w-[100%] h-[200px] bg-[#3C3C3C] p-3 box-border mt-[3%]">
        //                         <h4 className="text-[19px]">{step.step}</h4>
        //                         <h5 className="text-[17px]">{step.title}</h5>
        //                         <p className="text-[13.5px] font-normal w-[95%]">{step.desc}</p>
        //                     </div>
        //                     );
        //                 } else {
        //                     return null;
        //                 }
        //             })}
        //         </div>
        //         <ul className="w-1 h-[207vh] bg-[#FFC635] flex flex-col justify-start items-center gap-[180px]">
        //             {processArr.map((items, i) => {
        //                 return (
        //                     <li className="w-[25px] h-[25px] bg-[#FFC635] overflow-auto"></li>
        //                 )
        //             })}
        //         </ul>
        //         <div className="w-[47%] h-full flex flex-col justify-end items-end gap-[200px] mt-7">
        //             {processArr.map((step, index) => {
        //                 if (index % 2 !== 0) {
        //                     return (
        //                         <div key={index} className="w-[100%] h-[200px] bg-[#3C3C3C] p-3 box-border">
        //                             <h4 className="text-[19px]">{step.step}</h4>
        //                             <h5 className="text-[17px]">{step.title}</h5>
        //                             <p className="text-[13.5px] font-normal w-[95%]">{step.desc}</p>
        //                         </div>
        //                     );
        //                 } else {
        //                     return null;
        //                 }
        //             })}
        //         </div>
        //     </div>

        // </div>

        <div className="w-screen h-auto">
            <div className="w-full h-auto bg-black box-border py-16 text-white hidden lg:block">
                <div className="lg:w-[85%] mx-auto">
                    <h1 className="lg:text-3xl text-xl 2xl:text-[2rem] font-bold text-[blue] lg:text-white">
                        Software Development Process for Startups: Key Steps and Best Practices
                    </h1>
                    <p className="w-[85%] text-base mt-2">
                        CT's Roadmap to Success: Navigating startups through a streamlined software development process. From ideation to launch, we empower with key steps and best practices for sustainable growth and innovation.
                    </p>
                </div>
                <div className="w-[85%] mx-auto mt-10">
                    {processArr.map((step, index) => {
                        return (
                            <div
                                key={index}
                                className={`${index % 2 === 0 ? "flex-row border-r-2 border-r-[#FFC635] " : "border-l-2 border-l-[#FFC635] 2xl:ml-[49.9%] flex-row-reverse"
                                    } w-1/2 h-auto py-5 flex justify-between flex-wrap`}
                            >
                                <div className="w-[95%] flex flex-col h-full bg-[#3C3C3C] p-4">
                                    <h4 className="text-base 2xl:text-xl">{step.step}</h4>
                                    <h5 className="text-base 2xl:text-xl">{step.title}</h5>
                                    <div className="text-sm font-normal w-[95%]">{step.desc}</div>
                                </div>
                                <div className="w-[2px] h-auto relative">
                                    <div className="w-6 h-6 bg-[#FFC635] absolute top-0 -left-1/2 -translate-x-1/2 -translate-y-1/2">

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="w-full py-10 lg:hidden block">
                <div className="mx-auto w-[95%]">
                    <h1 className="font-bold text-base text-blue">
                        Software for Advanced Business Tasks
                    </h1>
                    <p className="text-sm mt-2 w-full">
                        We work with all the mainstream technologies to expand the scope of
                        functions the software can perform.
                    </p>
                </div>
                <div className="w-[95%] flex mx-auto flex-wrap gap-3 mt-8 items-center justify-center ">
                    {processArr.map((item, index) => (
                        <div key={index} className="p-3 w-full h-auto border">
                            <h1 className="text-base">{item.title}</h1>
                            <div className="text-xs mt-2 font-medium">{item.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

};

export default EndtoEndAIConsulting;
