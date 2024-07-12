import React from 'react'

const WebDevSteps = () => {
    const processArr = [{
        step: "Step 1", title: "Planning", desc: (
            <ul>
                <li className="ms-5 list-disc">We start building a portal with exploring your specific business needs, considering relevant regulatory constraints, gathering and processing opinions and expectations of project stakeholders and drawing up detailed portal requirements and tech specifications.</li>
            </ul>
        )
    },

    {
        step: "Step 2", title: "Design", desc: (
            <ul>
                <li className="ms-5 list-disc">We create the portal architecture design and deliver UX/UI designs.</li>
            </ul>
        )
    },


    {
        step: "Step 3", title: "Iterative development", desc: (
            <ul>
                <li className="ms-5 list-disc">Our team will build and deliver the web portal back end, front end and APIs in quick iterations with major releases each 2-4 weeks.</li>

            </ul>
        )
    },

    {
        step: "Step 4", title: "Portal integration with other software", desc: (
            <ul>
                <li className="ms-5 list-disc">We integrate web portal software with custom-made or platform-based tools and systems you already use, including ERP, CRM, PDM, MES, HIE, LMS, and more.</li>
            </ul>
        )
    },


    {
        step: "Step 5", title: "QA and testing", desc: (
            <ul>
                <li className="ms-5 list-disc">For high-quality test planning, the QA team reviews portal requirements and user stories, and architecture design. Then, in parallel with development, our QA team verifies that your web portal runs as planned and complies with all set requirements and checks the security of your data. </li>
            </ul>
        )
    },

    {
        step: "Step 6", title: "Deployment and setup", desc: (
            <ul>
                <li className="ms-5 list-disc">We get the portal running in your IT environment, train your support team if needed and provide user guides.</li>
            </ul>
        )
    },

    {
        step: "Step 7", title: "After-release support", desc: (
            <ul>
                <li className="ms-5 list-disc">For 1-3 months, we answer your after-release questions, manage incidents, configuration changes and updates.</li>
            </ul>
        )
    },

    {
        step: "Step 8", title: "Ongoing monitoring (optional)", desc: (
            <ul>
                <li className="ms-5 list-disc">We take over web portal performance management, troubleshooting, evolution and change management to keep your portal highly available and relevant to your needs.</li>
            </ul>
        )
    }
   
   

    ]
    return (
        <div className='w-[100vw] h-[auto] bg-[black] box-border py-[60px] md:py-[30px] md:bg-[white]'>
            <div className='w-[85%] mx-[110px] md:w-full md:px-3 md:mx-auto'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Web Portal Development Steps </h1>
                <p className='w-[70%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>The scope of ScienceSoft’s AI consulting services varies depending on our customers’ business needs, maturity of the data management practices, and the current AI environment. Our AI services may include:</p>
            </div>
            <div className="w-[85%] flex justify-between mx-[110px] mt-[60px] md:hidden">
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
                <ul className="w-[2px] h-[280vh] bg-[#FFC635] flex flex-col items-center  gap-[180px] py-[10px]">
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
            <div className='hidden md:block w-[85%] flex mx-auto flex-wrap mt-[20px] md:w-[95%]'>
                {processArr.map((item, index) => (
                    <div key={index} className='w-[45%] md:w-[90%] h-[200px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto md:pb-[40px]'>
                        <h4 className='text-[18px] font-bold'>{item.step}</h4>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WebDevSteps