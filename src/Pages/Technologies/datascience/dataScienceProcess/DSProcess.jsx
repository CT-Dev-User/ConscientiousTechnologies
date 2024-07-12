import React from 'react'

const DSProcess = () => {
    const processArr = [{
        step: "Step 1", title: "Business needs analysis.", desc: (
            <ul>
                <li className="ms-5 list-disc">Outlining business objectives to meet with data science.</li>
                <li className="ms-5 list-disc">Defining issues with the existing data science solution (if any).</li>
                <li className='ms-5 list-disc'>Deciding on data science deliverables.</li>
            </ul>
        )
    },

    {
        step: "Step 2", title: "Data preparation.", desc: (
            <ul>
                <li className="ms-5 list-disc">Determining data source for data science.</li>
                <li className="ms-5 list-disc">Data collection, transformation and cleansing.</li>
            </ul>
        )
    },


    {
        step: "Step 3", title: "Machine learning (ML) model design and development.", desc: (
            <ul>
                <li className="ms-5 list-disc">Choice of the optimal data science techniques and methods.</li>
                <li className="ms-5 list-disc">Defining the criteria for the future ML model(s) evaluation.</li>
                <li className="ms-5 list-disc">ML model development, training, testing and deployment.</li>
            </ul>
        )
    },

    {
        step: "Step 4", title: "ML model evaluation and tuning.", desc: (
            <ul>
                <li className="ms-5 list-disc">-------</li>

            </ul>
        )
    },


    {
        step: "Step 5", title: "Delivering data science output in an agreed format.", desc: (
            <ul>
                <li className="ms-5 list-disc">Data science insights ready for business use in the form of reports and dashboards.</li>
                <li className="ms-5 list-disc">Custom ML-driven app for self-service use (optional).</li>
                <li className='ms-5 list-disc'>ML model integration into other applications (optional).</li>
            </ul>
        )
    },

    {
        step: "Step 6", title: "User & admin training, data science support consultations.", desc: (
            <ul>
                <li className="ms-5 list-disc">------</li>
            </ul>
        )
    }
    ]


    return (
        <div className='w-[100vw] h-[auto] bg-[black] md:bg-[#FFFFFF] box-border py-[60px] md:py-[30px] text-[white]'>
            <div className='w-[85%] mx-[110px] md:w-[90%] md:mx-[20px]'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>How Data Science Process Unfolds with CT</h1>
                <p className='w-[70%] text-[14px] mt-2 md:w-[100%] md:text-[black] md:text-[16px]'>Below, CT describes key steps that our teams perform to introduce reliable, future-ready supply chain software:</p>
            </div>
            <div className='hidden md:flex flex-col gap-[20px] md:w-[90%] md:mx-[20px] md:my-[30px]'>
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
            <div className="w-[85%] flex justify-between mx-[110px] mt-[60px] md:w-[90%] md:mx-[20px] md:hidden">
                <div className="w-[47%] flex flex-col justify-start items-start gap-[180px]">
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
                            <li key={i} className="w-[25px] h-[25px] bg-[#FFC635]"></li>
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

export default DSProcess