import React from 'react'

const GoForCloud = () => {
    const softWareBussinessArr = [{
        title: "+19%", desc: "to the performance of cloud apps"
    }, {
        title: "-37%", desc: "to cloud consumption cost"
    }
    , {
        title: "+75%", desc: "to the productivity of IT infrastructure teams."
    }
    ]
    return (
        <div className='w-[100vw] h-[auto] box-border pt-[100px] md:pt-[50px] pb-[30px] pb-[60px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[blue]'>Go for Cloud Consulting to Enhance Your Cloud Operations</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>Maximize Cloud Potential: Partner with CT for expert cloud consulting. Elevate operations, optimize resources, and drive innovation with tailored strategies for seamless cloud adoption and performance enhancement.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 justify-center items-center md:hidden'>
                {softWareBussinessArr.map((item, index) => (
                    <div key={index} className={index%2 ? 'w-[200px] h-[120px] border-l border-r border-black p-3 flex flex-col justify-center px-[30px]' :'w-[150px] h-[180px] p-3 flex flex-col justify-center '}>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>

            <div className='hidden md:block w-[95%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 justify-center items-center'>
                {softWareBussinessArr.map((item, index) => (
                   
                    <div className='w-[15%] md:h-auto pb-[20px] flex flex-col justify-center gap-2 md:w-[90%] md:h-[50px] md:w-[100%] md:border-dashed md:border-b  border-box border-[#747474] md:mt-5 px-2' key={index}>
                    <h4 className='font-bold text-[20px] text-[#3379E4]' style={{color: (index==1) ? "#23B14B":"#3379E4"  }}>{item.title}</h4>
                    <p className='text-[14px]'>{item.desc}</p>
                 </div>
                ))}
            </div>

        </div>
    )
}

export default GoForCloud
