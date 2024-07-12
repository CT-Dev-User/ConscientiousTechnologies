import React from 'react'

const ScopeMLService = () => {
    const processArr = [{
        step: "Step 1", title: "Business analysis", desc: (
            <ul>
                <li className="ms-5 list-disc">Defining business needs a firm wants to address with machine learning.</li>
                <li className="ms-5 list-disc">Analyzing the existing machine learning environment (if any).</li>
                <li className='ms-5 list-disc'>Determining regulatory compliance requirements for an ML solution.</li>
            </ul>
        )
    },

    {
        step: "Step 2", title: "Technical design", desc: (
            <ul>
                <li className="ms-5 list-disc">Designing an optimal feature set for an ML solution.</li>
                <li className="ms-5 list-disc">Architecting an ML system according to scalability, security, and compliance requirements.</li>
                <li className='ms-5 list-disc'>Selecting optimal machine learning technologies (ML programming languages, ML development frameworks, data processing techs, etc.).</li>
            </ul>
        )
    },


    {
        step: "Step 3", title: "Data preparation.", desc: (
            <ul>
                <li className="ms-5 list-disc">Exploratory analysis of the existing data sources.</li>
                <li className="ms-5 list-disc">Data collection, cleansing, and structuring.</li>
                <li className="ms-5 list-disc">Defining the criteria for the machine learning model evaluation.</li>
            </ul>
        )
    },

    {
        step: "Step 4", title: "Development and implementation of machine learning models", desc: (
            <ul>
                <li className="ms-5 list-disc">ML model exploration and refinement.</li>
                <li className='ms-5 list-disc'>ML model testing and evaluation.</li>
                <li className='ms-5 list-disc'>Fine-tuning the parameters of ML models until the generated results are acceptable.</li>
            </ul>
        )
    },


    {
        step: "Step 5", title: "Reporting", desc: (
            <ul>
                <li className="ms-5 list-disc">Delivering machine learning output in an agreed format.</li>
                <li className="ms-5 list-disc">Integrating machine learning models into an application for users’ self-service, if required.</li>
            </ul>
        )
    },

    {
        step: "Step 6", title: "Support and maintenance of machine learning models", desc: (
            <ul>
                <li className="ms-5 list-disc">Continuous monitoring and tuning of ML models for greater accuracy.</li>
                <li className="ms-5 list-disc">Adding new data to the ML models for deeper insight.</li>
                <li className="ms-5 list-disc">Building new ML models to address new business and data analytics questions.</li>
            </ul>
        )
    }
    ]


    return (
        <div className='w-[100vw] h-[auto] bg-[black] md:bg-[#FFFFFF] box-border pt-[60px] md:pt-[50px] pb-[30px] text-[white] md:text-[black] pb-[60px]'>
            <div className='w-[85%] mx-[110px] md:w-[90%] md:mx-auto'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Scope of Our Machine Learning Services</h1>
                <p className='w-[70%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>Below, CT describes key steps that our teams perform to introduce reliable, future-ready supply chain software:</p>
            </div>
            <div className='hidden md:flex flex-col gap-[20px] w-[90%] mx-[20px] my-[30px]'>
                    {processArr.map((step, index) => {
                        return (
                            <div key={index} className="w-[100%] h-auto pb-[20px] text-[black] border border-[#fffff] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border">
                                <h4 className="text-[22px]">{step.step}</h4>
                                <h5 className="text-[20px]">{step.title}</h5>
                                <div className="text-[16px] font-normal w-[95%]">{step.desc}</div>
                            </div>
                        );
                    })}
                </div>
            <div className="w-[85%] flex justify-between mx-[110px] mt-[60px] md:w-[90%] md:mx-[20px]">
                <div className="w-[47%] flex flex-col justify-start items-start gap-[180px] md:hidden">
                    {processArr.map((step, index) => {
                        if (index % 2 == 0) {
                            return (
                                <div key={index} className="w-[100%] h-[180px] bg-[#3C3C3C] p-3 box-border">
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
                <ul className="w-[2px] bg-[#FFC635] flex flex-col items-center gap-[160px] py-[10px] md:hidden">
                    {processArr.map((items, i) => {
                        return (
                            <li  key={i} className="w-[25px] h-[25px] bg-[#FFC635]"></li>
                        )
                    })}
                </ul>
                <div className="w-[47%] flex flex-col md:hidden">
                    {processArr.map((step, index) => {
                        if (index % 2 !== 0) {
                            return (
                                <div key={index} className="w-[100%] h-[180px] bg-[#3C3C3C] p-3 box-border mt-[180px]">
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

export default ScopeMLService