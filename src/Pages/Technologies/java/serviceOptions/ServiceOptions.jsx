import React from 'react'

const ServiceOptions = () => {
    return (
        <div className='w-[100vw] pt-[60px] pb-[30px] bg-[#000000] md:pb-[60px] text-white'>
            <div className='w-[85%] mx-[110px] md:w-[90%] md:mx-[20px]'>
                <h1 className='font-bold text-3xl mb-[20px] md:text-[24px] md:text-[#3970F0]'>Choose Your Service Option</h1>
                <p className='text-[14px] font-semibold mb-[20px] md:text-[16px] md:text-[#FFFFFF]'>We work with all the mainstream technologies to expand the scope of functions the software can perform.</p>
            </div>
            <div className='w-[85%] md:w-[90%] flex flex-wrap justify-between mx-[110px] md:mx-[20px] md:text-[#FFFFFF] md:gap-[20px]'>
                <div className='w-[32.5%] md:w-[100%] h-[180px] md:h-auto box-border p-[15px] md:border border-[#fffff] bg-[#FF6868]'>
                    <h4 className='text-[18px] font-bold md:mb-[20px] md:text-[24px]'>Leverage expert Java skills</h4>
                    <p className='text-[14px] font-normal md:text-[16px]'>Cover the resource/skill gaps of your in-house team with Java developers managed by you directly.</p>
                </div>
                <div className='w-[32.5%] md:w-[100%] h-[180px] md:h-auto box-border p-[15px] md:border border-[#fffff] bg-[#1777BC]'>
                    <h4 className='text-[18px] font-bold md:mb-[20px] md:text-[24px]'>Hire a dedicated Java team</h4>
                    <p className='text-[14px] font-normal md:text-[16px]'>Get a self-managed Java team managed by our Team Lead to work on a Java project or its part in collaboration with your in-house team/other vendors.</p>
                </div>
                <div className='w-[32.5%] md:w-[100%] h-[180px] md:h-auto box-border p-[15px] md:border border-[#fffff] bg-[#E751FF]'>
                    <h4 className='text-[18px] font-bold md:mb-[20px] md:text-[24px]'>Hand over the full Java project</h4>
                    <p className='text-[14px] font-normal md:text-[16px]'>Let us take care of the end-to-end Java project delivery from project planning to programming and app support with full responsibility for its quality and risk management.</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceOptions