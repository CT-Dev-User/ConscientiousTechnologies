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
        <div className='w-[100vw] h-[auto] bg-[black] box-border pt-[60px] md:pt-[50px] pb-[30px] text-[white] pb-[60px] md:bg-[white] md:text-[black]'>
            <div className='w-[85%] mx-[110px] md:w-full md:px-3 md:ms-0'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>End-to-End AI Consulting Services by ScienceSoft</h1>
                <p className='w-[70%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>The scope of ScienceSoft’s AI consulting services varies depending on our customers’ business needs, maturity of the data management practices, and the current AI environment. Our AI services may include:</p>
            </div>
            <div className="w-[85%] flex justify-between mx-[110px] mt-[60px] md:hidden">
                <div className="w-[47%] flex flex-col justify-start items-start gap-[190px] mt-[30px] ">
                    {processArr.map((step, index) => {
                        if (index % 2 == 0) {
                            return (
                                <div key={index} className="w-[100%] h-[180px] bg-[#3C3C3C] p-3">
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
                <ul className="w-[2px] h-[250vh] bg-[#FFC635] flex flex-col items-center  gap-[160px] py-[10px]">
                    {processArr.map((items, i) => {
                        return (
                            <li className="w-[25px] h-[25px] bg-[#FFC635]" key={i}></li>
                        )
                    })}
                </ul>
                <div className="w-[47%] flex flex-col justify-end gap-[190px]">
                    {processArr.map((step, index) => {
                        if (index % 2 !== 0) {
                            return (
                                <div key={index} className="w-[100%] h-[180px] bg-[#3C3C3C] p-3 ">
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
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[95%] hidden md:block'>
                {processArr.map((item, index) => (
                    <div key={index} className='w-[350px] h-[180px] border border-gray-300 p-3 md:border-none md:h-auto md:py-5'>
                        <h1 className='text-[18px] text-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-3 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EndtoEndAIConsulting