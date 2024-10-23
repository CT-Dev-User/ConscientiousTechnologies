import React from 'react'
import overviewImg from '../components/caseStudiesoverview.png'

const OverviewSection = ({overviewtitle, overviewdescription, overviewimage,overviewservicesProvided, overviewindustryType, overviewbusinessType  }) => {
    return (
        <div className='w-full text-white  bg-black py-14'>
            <div className='lg:w-[85%] mx-auto w-[90%] flex justify-between  flex-wrap'>
                <div className='lg:w-[50%] w-[90%]'>
                    <h1 className='lg:text-3xl 2xl:text-4xl font-semibold text-2xl'>{overviewtitle}</h1>
                    <div className='w-full flex gap-x-4 mt-9 flex-wrap gap-y-4'>
                        <div className='w-full md:w-[45%] lg:w-[22%]'>
                            <h5 className='lg:text-[1.1rem] 2xl:text-[1.3rem] font-semibold text-[#3970F0]'>Industry</h5>
                            <p className='text-base font-normal mt-3 text-[#CC5C2D]'>{overviewindustryType}</p>
                        </div>
                        <div className='w-full md:w-[45%] lg:w-[22%]'>
                            <h5 className='lg:text-[1.1rem] 2xl:text-[1.3rem] font-semibold text-[#3970F0]'>Business Type</h5>
                            <p className='text-base font-normal mt-3'>{overviewbusinessType}</p>
                        </div>
                        <div className='w-full md:w-[45%] lg:w-[22%]'>
                            <h5 className='lg:text-[1.1rem] 2xl:text-[1.3rem] font-semibold text-[#3970F0]'>Franchise</h5>
                            <p className='text-base font-normal mt-3 text-[#CC5C2D]'>{overviewservicesProvided}</p>
                        </div>
                        <div className='w-full md:w-[45%] lg:w-[22%]'>
                            <h5 className='lg:text-[1.1rem] 2xl:text-[1.3rem] font-semibold text-[#3970F0]'>Build your idea</h5>
                            <p className='text-base font-normal mt-3'>Consult our experts</p>
                        </div>
                    </div>
                    <div className='mt-10 lg:mt-16 2xl:mt-24'>
                        <h3 className='lg:text-2xl 2xl:text-3xl my-4 font-semibold text-[#3970F0]'>Overview</h3>
                        <p className='lg:text-base 2xl:text-xl text-[#FFFFFF] font-normal'>{overviewdescription}</p>
                    </div>
                </div>
                <div className='lg:w-[45%] w-[90%] lg:h-[90vh] mt-20 lg:mt-0 flex justify-center items-center'>
                    <img src={overviewimage} alt="" className='h-[90%]' />
                </div>
            </div>
        </div>
    )
}

export default OverviewSection
