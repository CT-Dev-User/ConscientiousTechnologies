import React from 'react'

const Execution = () => {
  return (
    <div className='w-screen h-auto bg-black py-14'>
        <div className='lg:w-[85%] w-[90%] mx-auto'>
        <h1 className='text-4xl font-bold text-[#3970F0] tracking-wider' >Execution</h1> 
        <div className='w-full mt-14 flex flex-wrap gap-y-14'>
            <div className='md:w-[46%] w-full'>
            <h1 className='text-3xl text-[#3970F0] tracking-wider font-semibold' >Analytics</h1> 
            <ul className='list-decimal ms-5 text-white mt-7 flex flex-col gap-y-4 font-normal text-xl w-[90%]'>
                <li>Implemented cross-device analytics for comprehensive user behavior tracking.</li>
                <li>Developed new KPIs for accurate marketing effectiveness measurement.</li>
                <li>Collected raw data from advertising sources for in-depth user segmentation.</li>
            </ul>
            </div>
            <div className='md:w-[46%] w-full'>
            <h1 className='text-3xl font-semibold text-[#3970F0] tracking-wider' >Paid Media</h1> 
            <ul className='list-decimal ms-5 text-white mt-7 flex flex-col gap-y-4 font-normal text-xl w-[90%]'>
                <li>Shifted marketing budgets towards mobile app promotion to align with the mobile-centric user trend.</li>
                <li>Designed appealing welcome offers to attract and convert new customers, resulting in improved conversion rates.</li>
            </ul>
            </div>
            <div className='md:w-[46%] w-full'>
            <h1 className='text-3xl font-semibold text-[#3970F0] tracking-wider' >UI/UX Optimization</h1> 
            <ul className='list-decimal ms-5 text-white mt-7 flex flex-col gap-y-4 font-normal text-xl w-[90%]'>
                <li>Conducted thorough analytics to identify user interaction weaknesses.</li>
                <li>Redesigned the checkout process to increase order numbers and conversion rates.</li>
            </ul>
            </div>
            <div className='md:w-[46%] w-full'>
            <h1 className='text-3xl font-semibold text-[#3970F0] tracking-wider' >Audience Segmentation & Targeting</h1> 
            <ul className='list-decimal ms-5 text-white mt-7 flex flex-col gap-y-4 font-normal text-xl w-[90%]'>
                <li>Identified distinct audience groups through focus group surveys and post-view conversion analytics.</li>
                <li>Adjusted marketing efforts to target valuable audience segments, resulting in increased restaurant visits from financially stable customer bases.</li>
            </ul>
            </div>
            

        </div>
            
        </div>
      
    </div>
  )
}

export default Execution
