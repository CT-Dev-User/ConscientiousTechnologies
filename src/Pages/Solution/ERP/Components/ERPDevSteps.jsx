import React from 'react'

const ERPDevSteps = () => {
    const processArr = [{
        step: "Step 1", title: "Discovery", desc: (
            <ul>
                <li className="ms-5 list-disc">Business needs analysis and ERP requirements engineering.</li>
            </ul>
        )
    },

    {
        step: "Step 2", title: "Technical design", desc: (
            <ul>
                <li className="ms-5 list-disc">Designing the optimal feature set, secure and scalable architecture, role-specific UX and UI of ERP software. Tech stack selection for ERP implementation.</li>
            </ul>
        )
    },


    {
        step: "Step 3", title: "ERP project planning", desc: (
            <ul>
                <li className="ms-5 list-disc"> Determining a clear project scope, case-specific success measures, team composition, timelines, budget, risks and ways to mitigate them.</li>

            </ul>
        )
    },

    {
        step: "Step 4", title: "ERP development", desc: (
            <ul>
                <li className="ms-5 list-disc">Building a new solution from scratch, modernization of the existing ERP system, or market-available ERP customization.</li>

            </ul>
        )
    },


    {
        step: "Step 5", title: "Quality assurance.", desc: (
            <ul>
                <li className="ms-5 list-disc">Running rigorous testing in parallel with coding.</li>
            </ul>
        )
    },

    {
        step: "Step 6", title: "Integration.", desc: (
            <ul>
                <li className="ms-5 list-disc">Establishing integrations between the ERP modules and ERP integration with the required systems.</li>
            </ul>
        )
    },
    {
        step: "Step 7", title: "Data migration.", desc: (
            <ul>
                <li className="ms-5 list-disc">Enterprise data migration from spreadsheets or a previously used resource planning system to ERP.</li>
                
            </ul>
        )
    },
    {
        step: "Step 8", title: "Deployment.", desc: (
            <ul>
                <li className="ms-5 list-disc">ERP infrastructure configuration, solution deployment in the production environment, and knowledge transfer.</li>
                
            </ul>
        )
    },
    {
        step: "Step 9", title: "User training.", desc: (
            <ul>
                <li className="ms-5 list-disc">Drawing end user manuals and maintenance guides for the IT team. Conducting user training in a preferred format (in-person or remote)</li>
                
            </ul>
        )
    },
    {
        step: "Step 10", title: " After-launch ERP services.", desc: (
            <ul>
                <li className="ms-5 list-disc">ontinuous support and evolution of ERP software.</li>
                
            </ul>
        )
    }

    ]
    return (
        <div className='w-[100vw] h-auto'>
    <div className='w-[100vw] h-[auto] bg-[black] box-border pt-[60px] md:pt-[50px] pb-[30px] text-[white] pb-[60px] md:hidden'>
            <div className='w-[85%] mx-[110px] md:w-[90%] '>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[blue]'>ERP Development Steps</h1>
                <p className='w-[70%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>At our ERP software company, ERP development process typically covers the following major steps:</p>
            </div>
            <div className="w-[85%] flex justify-between mx-[110px] mt-[60px] md:w-[95%]">
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
                <ul className="w-[2px] h-[355vh] bg-[#FFC635] flex flex-col items-center  gap-[180px] py-[10px]">
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
                                <div key={index} className="w-[100%] h-[180px] bg-[#3C3C3C] p-3 mt-[215px] h-[200px]">
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

        <div className="w-full py-[30px] hidden md:block">
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] text-[blue]'>ERP Development Steps</h1>
                <p className='w-11/12 text-sm mt-2 md:w-full md:text-[16px]'>At our ERP software company, ERP development process typically covers the following major steps:</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[95%]'>
                {processArr.map((item, index) => (
                    <div key={index} className='w-[350px] h-[180px] border border-gray-300 p-3 md:border-none md:h-auto md:py-3'>
                        <h1 className='text-[18px] text-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-3 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>
        </div>

        </div>
    
    )
}

export default ERPDevSteps