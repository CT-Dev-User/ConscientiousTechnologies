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
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[50px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>ERP Development Steps </h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>At our ERP software company, ERP development process typically covers the following major steps:</p>
            </div>
            <div className="w-[85%] flex justify-between mx-[110px] mt-[60px] md:hidden text-[white]">
                <div className="w-[47%] flex flex-col gap-[210px] mt-4">
                    {processArr.map((step, index) => {
                        if (index % 2 == 0) {
                            return (
                                <div key={index} className="w-[100%] bg-[#3C3C3C] p-3 h-[200px]">
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
                <ul className="w-[2px] h-[210vh] bg-[#FFC635] flex flex-col items-center  gap-[180px] py-[10px]">
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
                                <div key={index} className="w-[100%] h-[180px] bg-[#3C3C3C] p-3 mt-[215px] h-[200px] ">
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
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%] hidden md:block'>
                {processArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-[90%] h-[200px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HowToDevSupplySoft