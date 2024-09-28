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
        <div className='w-screen h-auto'>
    <div className='w-full h-auto bg-black box-border lg:pt-14 pt-12 pb-7 text-white lg:pb-14 hidden lg:block'>
            <div className='lg:w-[85%] mx-auto w-[90%] '>
                <h1 className='lg:text-3xl font-bold text-2xl md:text-[blue]'>ERP Development Steps</h1>
                <p className='lg:w-[85%] mt-2 w-full text-base'>At our ERP software company, the ERP development process typically covers the following major steps:</p>
            </div>
            <div className="lg:w-[85%] flex justify-between mx-auto mt-14 w-[95%]">
                <div className="w-[47%] flex flex-col gap-48">
                    {processArr.map((step, index) => {
                        if (index % 2 == 0) {
                            return (
                                <div key={index} className="w-full bg-[#3C3C3C] p-3 h-44 mt-1">
                                    <h4 className="text-xl">{step.step}</h4>
                                    <h5 className="text-base">{step.title}</h5>
                                    <div className="text-sm font-normal w-[95%]">{step.desc}</div>
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
                <ul className="w-[2px] h-auto bg-[#FFC635] flex flex-col items-center gap-40 py-2">
                    {processArr.map((items, i) => {
                        return (
                            <li key={i} className="w-6 h-6 bg-[#FFC635]"></li>
                        )
                    })}
                </ul>
                <div className="w-[47%] flex flex-col">
                    {processArr.map((step, index) => {
                        if (index % 2 !== 0) {
                            return (
                                <div key={index} className="w-full lg:h-44 bg-[#3C3C3C] p-3 h-52 mt-48">
                                    <h4 className="text-xl">{step.step}</h4>
                                    <h5 className="text-base">{step.title}</h5>
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

        <div className="w-full py-7 lg:hidden">
            <div className='w-[90%] mx-auto'>
                <h1 className='font-bold text-2xl text-[blue]'>ERP Development Steps</h1>
                <p className='mt-2 w-full text-base'>At our ERP software company, ERP development process typically covers the following major steps:</p>
            </div>
            <div className='flex flex-wrap gap-7 mt-8 w-[90%] mx-auto'>
                {processArr.map((item, index) => (
                    <div key={index} className='w-[350px] p-3 h-auto border'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <div className='text-sm mt-3 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>
        </div>

        </div>
    
    )
}

export default ERPDevSteps