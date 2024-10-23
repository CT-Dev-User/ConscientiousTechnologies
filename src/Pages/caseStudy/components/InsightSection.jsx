import React from 'react'

const InsightSection = ({ insightsImage, insights }) => {
    return (
        <div className='w-screen h-auto bg-black py-14'>
            <div className='w-[85%] mx-auto flex justify-between flex-wrap'>
                <div className='w-[90%] lg:w-[50%]'>
                    <h3 className='lg:text-[1.5rem] 2xl:text-[2rem] my-4 font-semibold text-[#3970F0]'>Insights</h3>
                    <p className='lg:text-base 2xl:text-xl text-[#FFFFFF] font-normal w-[95%] mx-auto'> {insights ? insights : "Implemented cross-device analytics and developed new KPIs for precise marketing performance measurement. Raw data collection from various sources enabled a deeper understanding of user behavior."}</p>
                </div>
                <div className='lg:w-[45%] w-[90%] bg-red-100 mt-10 lg:mt-0'>
                    <img src={insightsImage} alt="Case study insight" className='h-[350px] w-full' />
                </div>
            </div>
        </div>
    )
}

export default InsightSection
