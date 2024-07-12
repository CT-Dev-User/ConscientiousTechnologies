import React from 'react'

const ARSolutions = () => {
    const processArr = [{
        step: "Step 1", title: "Concept design", desc: (
            <ul>
                <li className="ms-5 list-disc">We help you verify the feasibility of your idea before you commit to full-scale development and create a full functional specification of your future app.</li>
            </ul>
        )
    },

    {
        step: "Step 2", title: "Creating 3D content", desc: (
            <ul>
                <li className="ms-5 list-disc">We create realistic 3D assets to be used in your AR app and make the whole user experience lifelike and aesthetic.</li>
            </ul>
        )
    },


    {
        step: "Step 3", title: "Back-end development.", desc: (
            <ul>
                <li className="ms-5 list-disc">We create a database of 3D models and metadata, and set up algorithms to power AR features.</li>
            </ul>
        )
    },

    {
        step: "Step 4", title: "Front-end development", desc: (
            <ul>
                <li className="ms-5 list-disc">We design a client app that scans the view in the camera lens, retrieves 3D models of requested objects and overlays them on top of scanned environment.</li>
            </ul>
        )
    },


    {
        step: "Step 5", title: "AR integration", desc: (
            <ul>
                <li className="ms-5 list-disc">We incorporate AR functions into your existing software.</li>
            </ul>
        )
    },
    ]


    return (
        <div className='w-[100vw] h-[auto] box-border py-[80px] md:pt-[40px] pb-[20px] bg-black text-[white] md:text-[black] md:bg-[white]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Creating AR Solutions – from Product Vision to Product Release</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>The scope of ScienceSoft’s AI consulting services varies depending on our customers’ business needs, maturity of the data management practices, and the current AI environment. Our AI services may include:</p>
            </div>
            <div className="w-[85%] flex justify-between mx-[110px] mt-[60px] md:hidden">
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
                            <li className="w-[25px] h-[25px] bg-[#FFC635]" key={i}></li>
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
            <div className='hidden md:block w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px]'>
                {
                    processArr.map((item, index) => {
                        return (
                            <div className='w-[49%] h-[180px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border md:w-full md:border-none md:p-0 md:h-auto md:py-3' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px] md:text-[20px] md:pl-0'>{item.title}</h2>
                                <div>{item.desc}</div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ARSolutions