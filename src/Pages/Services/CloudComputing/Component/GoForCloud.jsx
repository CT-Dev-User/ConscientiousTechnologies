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

        <div className='w-screen h-auto  box-border py-12 '>
        <div className='lg:w-[85%] mx-auto w-[95%]'>
            <h1 className='lg:text-3xl text-xl 2xl:text-[2rem] lg:text-black text-[#3970F0] '>Why Choose Conscientious Technology for Your Software Development </h1>
            <p className='w-[95%] mt-2 md:w-[100%] font-normal text-sm lg:text-base'>Software product development involves the conception and development of commercial software, focusing on creating unique offerings or those with a solid competitive edge. ValueCoders, a prominent software product development firm, empowers startup ventures and established companies to ensure their innovative solutions’ quality.</p>
        </div>
        <div className='flex lg:w-[80%] mx-auto w-[95%] pt-10 justify-center flex-wrap gap-6'>
            <div className='w-full md:w-[47%] lg:w-[20%] flex flex-col gap-2 border-b border-dotted  md:border-b-0 pt-5  pb-11 md:border-r-2 border-[#A7A7A7] ps-10'>
                <h3 className='lg:text-2xl font-bold text-xl 2xl:text-2xl ps-5'>+19%</h3>
                <p>to the performance of cloud apps</p>
            </div>
            <div className='w-full md:w-[47%] lg:w-[20%] flex flex-col gap-2 pb-11 pt-5  md:border-b-0 border-b border-dotted md:border-r-2 border-[#A7A7A7] ps-10'>
                <h3 className='lg:text-2xl font-bold text-xl 2xl:text-2xl'>-37%</h3>
                <p>to cloud consumption cost</p>
            </div>
            <div className='w-full md:w-[47%] lg:w-[20%] flex flex-col gap-2 border-b md:border-b-0 border-dotted border-[#A7A7A7]  pt-5  pb-11 ps-10'>
                <h3 className='lg:text-2xl font-bold text-xl 2xl:text-2xl'>+75%</h3>
                <p>to the productivity of IT infrastructure teams.</p>
            </div>
          
          

        </div>
    </div>

    )
}

export default GoForCloud
