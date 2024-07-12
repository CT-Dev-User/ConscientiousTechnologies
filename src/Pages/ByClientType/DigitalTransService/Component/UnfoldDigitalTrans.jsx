import React from "react";

const UnfoldDigitalTrans = () => {
    const processArr = [{ step: "Step 1", title: "In-depth investigation of the current business state", desc: "Wer transform your business needs into detailed software requirements." },

    { step: "Step 2", title: "Digital transformation strategy", desc: "We plan your desktop app architecture based on your integration plans and budget" },

    { step: "Step 3", title: "Digital transformation strategy", desc: "We plan your desktop app architecture based on your integration plans and budget" },


    { step: "Step 4", title: "Digital transformation implementation", desc: "We combine user expectations, brand identity, and the material design trend in our design." },

    { step: "Step 5", title: "Risk mitigation", desc: "We deliver clean, self- documented code that runs on Windows, Mac, and Linex." },


    { step: "Step 5", title: "Integration", desc: "We perform functional,performance,usability,compatibility and security testing and provide test documentation  " }
    ]


    return (
        <div className='w-[100vw] h-[auto] bg-[black] box-border pt-[100px] md:pt-[50px] pb-[30px] text-[white] pb-[60px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>How We Unfold Digital Transformation </h1>
                <p className='w-[70%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'>Digital transformation is the revision and evolution of a company’s technology environment with the goal of improving business performance metrics. At CT, we manage large-scale projects effectively by bringing clear structure and organization to the process while leaving space for tuning our framework to each unique project.</p>
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

export default UnfoldDigitalTrans;
