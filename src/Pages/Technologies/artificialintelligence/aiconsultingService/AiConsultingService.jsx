import React from 'react'

const AiConsultingService = () => {
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
                <li className='ms-5 list-disc'>AI solution PoC delivery (optional).</li>
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
                <li className="ms-5 list-disc">AI solution user training in the preferred format.</li>
                <li className="ms-5 list-disc">Designing user guides and manuals and sharing them with the company's in-house IT team.</li>
            </ul>
        ) 
    },
    {
        step: "Step 8", title: "AI solution support and optimization", desc: (
            <ul>
                <li className="ms-5 list-disc">Continuous AI solution monitoring and optimization.</li>
                <li className="ms-5 list-disc">Adding new data sources to feed the AI solution for greater accuracy and insight.</li>
                <li className='ms-5 list-disc'>Building new ML models to meet the newly arisen business needs.</li>
            </ul>
        )  
    }
    ]


    return (
        <div className='w-[100vw] h-[auto] bg-[black] md:bg-[#FFFFFF] box-border py-[60px] md:pt-[50px] text-[white] md:text-black'>
            <div className='w-[85%] mx-[110px] md:w-[90%] md:mx-[20px]'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>End-to-End AI Consulting Services by CT</h1>
                <p className='w-[70%] text-[14px] mt-[20px] md:w-[100%] md:text-[16px]'>The scope of CT’s AI consulting services varies depending on our customers’ business needs, maturity of the data management practices, and the current AI environment. Our AI services may include:</p>
            </div>
            <div className='hidden md:flex flex-col gap-[20px] mt-[20px] w-[90%] mx-[20px]'>
            {processArr.map((step, index) => {
                            return (
                                <div key={index} className="w-[100%] h-auto p-3 box-border border border-[#fffff] shadow-[4px]">
                                    <h4 className="text-[18px]">{step.step}</h4>
                                    <h5 className="text-[16px]">{step.title}</h5>
                                    <div className="text-[14px] font-normal w-[95%]">{step.desc}</div>
                                </div>
                            );
                    })}
            </div>
            <div className="w-[85%] flex justify-between mx-[110px] mt-[60px] md:hidden">
                <div className="w-[47%] flex flex-col justify-start items-start gap-[180px]">
                    {processArr.map((step, index) => {
                        if (index % 2 == 0) {
                            return (
                                <div key={index} className="w-[100%] h-[180px] bg-[#3C3C3C] p-[10px] box-border">
                                    <h4 className="text-[18px]">{step.step}</h4>
                                    <h5 className="text-[16px]">{step.title}</h5>
                                    <div className="text-[12px] font-normal w-[95%]">{step.desc}</div>
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
                <ul className="w-[2px] bg-[#FFC635] flex flex-col items-center gap-[160px] py-[10px]">
                    {processArr.map((items, i) => {
                        return (
                            <li key={i} className="w-[25px] h-[25px] bg-[#FFC635]"></li>
                        )
                    })}
                </ul>
                <div className="w-[47%] flex flex-col">
                    {processArr.map((step, index) => {
                        if (index % 2 !== 0) {
                            return (
                                <div key={index} className="w-[100%] h-[180px] bg-[#3C3C3C] p-3 box-border mt-[180px]">
                                    <h4 className="text-[18px]">{step.step}</h4>
                                    <h5 className="text-[16px]">{step.title}</h5>
                                    <div className="text-[12px] font-normal w-[95%]">{step.desc}</div>
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

export default AiConsultingService