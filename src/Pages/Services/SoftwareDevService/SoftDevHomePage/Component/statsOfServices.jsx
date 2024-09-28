import React from 'react'

const StatsOfServices = () => {
    return (
        <div className='w-screen h-auto  box-border py-12 '>
            <div className='lg:w-[85%] mx-auto w-[95%]'>
                <h1 className='lg:text-3xl text-xl 2xl:text-[2rem] md:text-[#3970F0] '>Why Choose Conscientious Technology for Your Software Development </h1>
                <p className='w-[95%] mt-2 md:w-[100%] font-normal text-sm lg:text-base'>Software product development involves the conception and development of commercial software, focusing on creating unique offerings or those with a solid competitive edge. ValueCoders, a prominent software product development firm, empowers startup ventures and established companies to ensure their innovative solutions’ quality.</p>
            </div>
            <div className='flex lg:w-[80%] mx-auto w-[95%] pt-10 justify-between flex-wrap '>
                <div className='w-full md:w-[47%] lg:w-[20%] flex flex-col gap-2 border-b border-dotted  md:border-b-0 pt-5  pb-11 md:border-r-2 border-[#A7A7A7] '>
                    <h3 className='lg:text-2xl font-bold text-xl 2xl:text-2xl'>34 year</h3>
                    <p>in software engineering and IT consulting</p>
                </div>
                <div className='w-full md:w-[47%] lg:w-[20%] flex flex-col gap-2 pb-11 pt-5  md:border-b-0 border-b border-dotted md:border-r-2 border-[#A7A7A7]'>
                    <h3 className='lg:text-2xl font-bold text-xl 2xl:text-2xl'>3600+</h3>
                    <p>successfully completed</p>
                </div>
                <div className='w-full md:w-[47%] lg:w-[20%] flex flex-col gap-2 border-b md:border-b-0 border-dotted border-[#A7A7A7]  pt-5  pb-11'>
                    <h3 className='lg:text-2xl font-bold text-xl 2xl:text-2xl'>HQ in the US</h3>
                    <p>offices in Europe and the Gulf</p>
                </div>
                <div className='bg-gray-400 h-28 lg:w-[20%] md:w-[47%] hidden md:block'>

                </div>
              

            </div>
        </div>
    )
}

export default StatsOfServices
