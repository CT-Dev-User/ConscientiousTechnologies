import React from 'react'

const HowToDevSupplySoft = () => {
    const processArr = [{
        step: "Step 1", title: "Business analysis and requirements engineering", desc: (
            <ul>
                <li className="ms-5 list-disc">Analyze your supply chain strategy and operations, define how well they align with your overall business strategy.</li>
            </ul>
        )
    },

    {
        step: "Step 2", title: "SCM software design", desc: (
            <ul>
                <li className="ms-5 list-disc">Create an optimal feature set for your SCM solution. Design software architecture in accordance with the performance, scalability, security, and compliance requirements. Choose a technology stack. </li>
            </ul>
        )
    },


    {
        step: "Step 3", title: "Project planning", desc: (
            <ul>
                <li className="ms-5 list-disc"> Define project objectives, deliverables, and tailored sets of KPIs to evaluate success.</li>
                <li className="ms-5 list-disc">Determine the project scope, duration, schedule, and budget.</li>
                <li className="ms-5 list-disc">Decide on the roles in the project team and design efficient collaboration workflows.</li>

            </ul>
        )
    },

    {
        step: "Step 4", title: " Development and quality assurance", desc: (
            <ul>
                <li className="ms-5 list-disc">Establish IT automation (CI/CD pipelines, cloud automation, etc.) to streamline development, testing, integration, and releases.</li>
                <li className="ms-5 list-disc">Develop a custom supply chain management solution OR select and set up off-the-shelf software.</li>

            </ul>
        )
    },


    {
        step: "Step 5", title: "Integration", desc: (
            <ul>
                <li className="ms-5 list-disc">Integrate your SCM solution with the required software and hardware systems.</li>
                <li className="ms-5 list-disc">Configure the software infrastructure, implement robust security mechanisms.</li>
                <li className="ms-5 list-disc">Deploy the solution to the production environment.</li>
            </ul>
        )
    },

    {
        step: "Step 6", title: " Support and evolution ", desc: (
            <ul>
                <li className="ms-5 list-disc">Monitor SCM software performance and handle operational issues.</li>
                <li className="ms-5 list-disc">Provide L1–L3 user support.</li>
                <li className="ms-5 list-disc">Scale the software to process a growing volume of supply chain data.</li>
            </ul>
        )
    }
    ]
    return (

        <div className='w-screen h-auto'>
            <div className='w-full h-auto bg-black box-border py-16 text-white hidden lg:block'>
                <div className='lg:w-[85%] mx-auto'>
                    <h1 className='lg:text-3xl text-xl 2xl:text-[2rem] font-bold text-[blue] lg:text-white'>ERP Development Steps</h1>
                    <p className='w-[85%] text-base mt-2'>We work with all the mainstream technologies to expand the scope of functions the software can perform.</p>
                </div>
                <div className="w-[85%] flex justify-between mx-auto">
                    <div className="w-[47%] flex flex-col justify-start items-start gap-[230px] mt-12 ">
                        {processArr.map((step, index) => {
                            if (index % 2 == 0) {
                                return (
                                    <div key={index} className="w-full h-auto bg-[#3C3C3C] px-3 py-5 flex flex-col gap-2">
                                        <h4 className="text-base 2xl:text-xl">{step.step}</h4>
                                        <h5 className="text-base 2xl:text-xl">{step.title}</h5>
                                        <div className="text-sm font-normal w-[95%]">{step.desc}</div>
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                    <ul className="w-[2px] h-auto bg-[#FFC635] flex flex-col items-center gap-[180px] py-2">
                        {processArr.map((items, i) => { 
                            return (
                                <li key={i} className={`${i % 2 !== 0 && i !==0 ? "mt-20" : "mt-0"} w-6 h-6 bg-[#FFC635]`}></li>
                            )
                        })}
                    </ul>

                    <div className="w-[47%] flex flex-col justify-start mt-80 gap-[300px]">
                        {processArr.map((step, index) => {
                            if (index % 2 !== 0) {
                                return (
                                    <div key={index} className="w-full h-[180px] bg-[#3C3C3C] p-3 py-5 flex flex-col gap-2">
                                        <h4 className="text-base 2xl:text-xl">{step.step}</h4>
                                        <h5 className="text-base 2xl:text-xl">{step.title}</h5>
                                        <div className="text-sm font-normal w-[95%]">{step.desc}</div>
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                </div>

            </div>

            <div className=" w-full py-10 lg:hidden block">
                <div className='mx-auto w-[95%]'>
                    <h1 className='font-bold text-base text-blue'>Software for Advanced Business Tasks </h1>
                    <p className='text-sm mt-2 w-full'>We work with all the mainstream technologies to expand the scope of functions the software can perform.</p>
                </div>
                <div className='w-[95%] flex mx-auto flex-wrap gap-3 mt-8 items-center justify-center '>
                    {processArr.map((item, index) => (
                        <div key={index} className='p-3 w-full h-auto border'>
                            <h1 className='text-base'>{item.title}</h1>
                            <div className='text-xs mt-2 font-medium'>{item.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    )
}

export default HowToDevSupplySoft