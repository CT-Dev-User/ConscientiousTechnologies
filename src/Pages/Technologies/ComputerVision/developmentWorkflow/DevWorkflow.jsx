import React from 'react'

const DevWorkflow = () => {
    const processArr = [{
        step: "Step 1", title: "Image analysis solution design", desc: (
            <ul>
                <li className="ms-5 list-disc">Defining how certain business problems should be solved with IA technology. Converting high-level business needs to software features, eliciting the requirements to image quality and recognition accuracy.</li>
            </ul>
        )
    },

    {
        step: "Step 2", title: "Business case creation", desc: (
            <ul>
                <li className="ms-5 list-disc">Outlining IA solution alternatives, providing business case calculations – ROI and TCO.</li>
            </ul>
        )
    },


    {
        step: "Step 3", title: "Software architecture (re)design", desc: (
            <ul>
                <li className="ms-5 list-disc">Developing the architecture while considering all the nuances that might affect image analysis system’s performance; enhancement and optimization of the existing IA software architecture.</li>
            </ul>
        )
    },

    {
        step: "Step 4", title: "Assessment and selection of implementation options", desc: (
            <ul>
                <li className="ms-5 list-disc">Third-party computer vision software API integration and customization.</li>
                <li className="ms-5 list-disc">Developing proprietary ML-driven technology from scratch.</li>
            </ul>
        )
    },


    {
        step: "Step 5", title: "IA implementation planning", desc: (
            <ul>
                <li className="ms-5 list-disc">-------</li>
            </ul>
        )
    },



    {
        step: "Step 6", title: "PoC and prototyping", desc: (
            <ul>
                <li className="ms-5 list-disc">(if required)</li>
            </ul>
        )
    },


    {
        step: "Step 7", title: "IA software development and integration", desc: (
            <ul>
                <li className="ms-5 list-disc">With hardware and third-party apps, IoT devices (sensors, cameras, controllers, etc.).</li>
            </ul>
        )
    },



    {
        step: "Step 8", title: "Quality assurance", desc: (
            <ul>
                <li className="ms-5 list-disc">Manual and automated testing.</li>
            </ul>
        )
    },
    ]


    return (
        <div className='w-[100vw] h-[auto] box-border py-[80px] md:pt-[40px] pb-[20px] bg-[black] md:bg-[white] text-[white] md:text-[black]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Image Analysis Software Consulting and Development Workflow</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>The scope of CT’s AI consulting services varies depending on our customers’ business needs, maturity of the data management practices, and the current AI environment. Our AI services may include:</p>
            </div>
            <div className="w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:hidden">
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
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] hidden md:block'>
                {
                    processArr.map((item, index) => {
                        return (
                            <div className='w-[49%] h-[140px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border md:w-full md:border-none md:p-0 md:h-auto md:py-3' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px] md:text-[20px] md:pl-0'>{item.title}</h2>
                                <div className='text-[14px] pl-[30px] font-normal md:pl-0 text-[16px]'>{item.desc}</div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default DevWorkflow