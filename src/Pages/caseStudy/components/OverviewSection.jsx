import React from 'react'
import overviewImg from '../components/caseStudiesoverview.png'

const OverviewSection = () => {
    return (
        <div className='w-full text-white  bg-black py-14'>
            <div className='lg:w-[85%] mx-auto w-[90%] flex justify-between  flex-wrap'>
                <div className='lg:w-[50%] w-[90%]'>
                    <h1 className='lg:text-3xl 2xl:text-4xl font-semibold text-2xl'>Burger King, one of the world's largest fast-food restaurant chains.</h1>
                    <div className='w-full flex gap-x-4 mt-9 flex-wrap gap-y-4'>
                        <div className='w-full md:w-[45%] lg:w-[22%]'>
                            <h5 className='lg:text-[1.1rem] 2xl:text-[1.3rem] font-semibold text-[#3970F0]'>Industry</h5>
                            <p className='text-base font-normal mt-3 text-[#CC5C2D]'>Marketing & Advertisement, Media</p>
                        </div>
                        <div className='w-full md:w-[45%] lg:w-[22%]'>
                            <h5 className='lg:text-[1.1rem] 2xl:text-[1.3rem] font-semibold text-[#3970F0]'>Business Type</h5>
                            <p className='text-base font-normal mt-3'>Franchise</p>
                        </div>
                        <div className='w-full md:w-[45%] lg:w-[22%]'>
                            <h5 className='lg:text-[1.1rem] 2xl:text-[1.3rem] font-semibold text-[#3970F0]'>Franchise</h5>
                            <p className='text-base font-normal mt-3 text-[#CC5C2D]'>Design, Development, and Deployment</p>
                        </div>
                        <div className='w-full md:w-[45%] lg:w-[22%]'>
                            <h5 className='lg:text-[1.1rem] 2xl:text-[1.3rem] font-semibold text-[#3970F0]'>Build your idea</h5>
                            <p className='text-base font-normal mt-3'>Consult our experts</p>
                        </div>
                    </div>
                    <div className='mt-10 lg:mt-16 2xl:mt-24'>
                        <h3 className='lg:text-2xl 2xl:text-3xl my-4 font-semibold text-[#3970F0]'>Overview</h3>
                        <p className='text-xl text-[#FFFFFF] font-normal'>Burger King is a global chain of hamburger fast food restaurants1. It is the second largest fast-food chain in the United States. Burger King operates in over 13,000 locations serving more than 11 million guests daily in 98 countries and territories worldwide. The company was founded in 1954 and is headquartered in Miami, Florida. Burger King offers a menu that includes whoppers, flame-grilled hamburgers, chicken and other specialty sandwiches, french fries, soft drinks, as well as other food items.</p>
                    </div>
                </div>
                <div className='lg:w-[45%] w-[90%] lg:h-[90vh] mt-20 lg:mt-0 flex justify-center items-center'>
                    <img src={overviewImg} alt="" className='h-[90%]' />
                </div>
            </div>
        </div>
    )
}

export default OverviewSection
