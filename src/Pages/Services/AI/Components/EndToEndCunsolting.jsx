import React from 'react'

const EndtoEndAIConsulting = () => {
    const processArr = [{
        step: "Step 1", title: "Business analysis", desc: (
            <ul>
                <li className="ms-5 list-disc">Definition and analysis of business needs to be pursued with an AI solution.</li>
                <li className="ms-5 list-disc">Analysis of the existing AI environment (if any), data management practices established within the company, the currently used technologies and tools.</li>
            </ul>
        )
    },

    {
        step: "Step 2", title: "AI solution conceptualization and development project planning", desc: (
            <ul>
                <li className="ms-5 list-disc">Designing the architecture and feature set of the AI solution and creating the optimal tech stack for AI implementation.</li>
                <li className="ms-5 list-disc">AI project planning: deliverables and KPIs, cost and timeline estimates, a risk management strategy, etc.</li>
                <li className="ms-5 list-disc">AI solution PoC delivery (optional).</li>
            </ul>
        )
    },


    {
        step: "Step 3", title: "Data preparation management", desc: (
            <ul>
                <li className="ms-5 list-disc">Exploratory analysis of the existing data sources (data type, volume, etc.).</li>
                <li className="ms-5 list-disc">Data gathering and cleansing (standardizing, replacing missing and deviating variables, anonymizing sensitive data) for ML model training.</li>
            </ul>
        )
    },

    {
        step: "Step 4", title: "AI solution development (ML modeling)", desc: (
            <ul>
                <li className="ms-5 list-disc">The delivery of the first working version of enterprise software takes from 1 month. The first working version of software product can be delivered in ~ 2 months.</li>

            </ul>
        )
    },


    {
        step: "Step 5", title: "ML output integration", desc: (
            <ul>
                <li className="ms-5 list-disc">ML output integration</li>

            </ul>
        )
    },

    {
        step: "Step 6", title: "AI solution quality assurance", desc: (
            <ul>
                <li className="ms-5 list-disc">End-to-end AI system testing.</li>
                <li className="ms-5 list-disc">Evaluating the quality of AI solution output according to pre-defined KPIs.</li>
            </ul>
        )
    },
    {
        step: "Step 7", title: "User training", desc: (
            <ul>
                <li className="ms-5 list-disc">End-to-end AI system testing.</li>
                <li className="ms-5 list-disc">Designing user guides and manuals and sharing them with the company's in-house IT team.</li>
            </ul>
        )
    },
    {
        step: "Step 8", title: "AI solution support and optimization", desc: (
            <ul>
                <li className="ms-5 list-disc">Continuous AI solution monitoring and optimization.</li>
                <li className="ms-5 list-disc">Adding new data sources to feed the AI solution for greater accuracy and insight.</li>
                <li className="ms-5 list-disc">Building new ML models to meet the newly arisen business needs.</li>
            </ul>
        )
    },
    ]


    return (
        <div className="w-screen h-auto">
            <div className="w-full h-auto bg-black box-border py-16 text-white hidden lg:block">
                <div className="lg:w-[85%] mx-auto">
                    <h1 className="2xl:text-3xl text-2xl font-bold text-[blue] lg:text-white">
                        End-to-End AI Consulting Services by CT          </h1>
                    <p className="w-[85%] text-sm 2xl:text-base mt-2">
                        The scope of ScienceSoft’s AI consulting services varies depending on our customers’ business needs, maturity of the data management practices, and the current AI environment. Our AI services may include.
                    </p>
                </div>
                <div className="w-[85%] mx-auto mt-10 hidden lg:block">
                    {processArr.map((step, index) => {
                        return (
                            <div
                                key={index}
                                className={`${index % 2 === 0 ? "flex-row border-r-2 border-r-[#FFC635]" : "border-l-2 border-l-[#FFC635] ml-[50%] flex-row-reverse"
                                    } w-1/2 h-auto py-5 flex justify-between flex-wrap`}
                            >
                                <div className="w-[95%] flex flex-col h-auto bg-[#3C3C3C] p-4 box-border">
                                    <h4 className="text-base 2xl:text-xl">{step.step}</h4>
                                    <h5 className="text-base 2xl:text-xl">{step.title}</h5>
                                    <div className="text-sm font-normal w-[95%]">{step.desc}</div>
                                </div>
                                <div className="w-[2px] h-auto relative">
                                    <div className={`w-[25px] h-[25px] bg-[#FFC635] absolute top-[-20px] ${index % 2 === 0 ? "left-1/2" : "left-0"} -translate-x-1/2 -translate-y-1/2`}>

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
                        End-to-End AI Consulting Services by CT            </h1>
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
}

export default EndtoEndAIConsulting