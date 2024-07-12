import React from 'react'

const BenefitsOfCR = () => {
    return (
        <div className='w-[100vw] bg-[#000000] text-white py-[60px] md:py-[30px]'>
            <div className='w-[85%] mx-[110px] md:w-[90%] md:mx-[20px]'>
                <h1 className='font-bold text-3xl mb-[20px] md:text-[24px]'>Benefits Our Customers Report</h1>
                <p className='text-[14px] font-semibold mb-[60px] md:text-[16px]'>Benefits Our Customers Report</p>
            </div>
            <div className='w-[85%] flex flex-wrap justify-between mx-[110px] md:w-[90%] md:mx-[20px] md:gap-[20px]'>
                <div className='w-[32.5%] h-[200px] md:w-[100%] md:h-auto md:pb-[20px] bg-[#FF6868] box-border p-[15px]'>
                    <h4 className='text-[18px] font-bold mb-[10px]'>Lower equipment maintenance</h4>
                    <p className='text-[14px] font-normal'>due to AI-powered recommendations on parts replacement.</p>
                </div>
                <div className='w-[32%] h-[200px] md:w-[100%] md:h-auto md:pb-[20px] bg-[#1777BC] box-border p-[15px]'>
                    <h4 className='text-[18px] font-bold mb-[10px]'>Minimized human factor errors</h4>
                    <p className='text-[14px] font-normal'>due to process automation powered by a custom AI algorithm.</p>
                </div>
                <div className='w-[32%] h-[200px] md:w-[100%] md:h-auto md:pb-[20px] bg-[#E751FF] box-border p-[15px]'>
                    <h4 className='text-[18px] font-bold mb-[10px]'>Precise image recognition</h4>
                    <p className='text-[14px] font-normal'>due to an ML model with 95% accuracy.</p>
                </div>
            </div>
        </div>
    )
}

export default BenefitsOfCR