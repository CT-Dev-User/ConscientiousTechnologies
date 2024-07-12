import React from 'react'

const MLServiceOptions = () => {
    return (
        <div className='w-[100vw] bg-[#000000] text-white pt-[60px] pb-[60px] md:pb-[30px]'>
            <div className='w-[85%] mx-[110px] md:w-[90%] md:mx-[20px]'>
                <h1 className='font-bold text-3xl mb-[20px] md:text-[24px]'>Choose Your Service Option</h1>
                <p className='text-[14px] font-semibold mb-[60px] md:text-[16px]'>ScienceSoft is a flexible ASP.NET development company that offers different cooperation models to perfectly meet your .NET project needs.</p>
            </div>
            <div className='w-[85%] flex flex-wrap justify-between mx-[110px] md:w-[90%] md:mx-[20px] md:gap-[20px]'>
                <div className='w-[32.5%] h-[200px] md:w-[100%] md:h-auto md:pb-[20px] bg-[#FF6868] box-border p-[15px]'>
                    <h4 className='text-[18px] font-bold mb-[10px]'>Machine learning consulting</h4>
                    <p className='text-[14px] font-normal'>For companies seeking strategic guidance throughout the whole cycle of their machine learning development project.</p>
                </div>
                <div className='w-[32%] h-[200px] md:w-[100%] md:h-auto md:pb-[20px] bg-[#1777BC] box-border p-[15px]'>
                    <h4 className='text-[18px] font-bold mb-[10px]'>Machine learning implementation</h4>
                    <p className='text-[14px] font-normal'>For companies that need to design, develop and launch a smoothly functioning machine learning solution.</p>
                </div>
                <div className='w-[32%] h-[200px] md:w-[100%] md:h-auto md:pb-[20px] bg-[#E751FF] box-border p-[15px]'>
                    <h4 className='text-[18px] font-bold mb-[10px]'>Machine learning support</h4>
                    <p className='text-[14px] font-normal'>For companies that need to fix inefficiencies within their current ML environment and get tailored recommendations on increasing the quality of ML insights in the future.</p>
                </div>
            </div>
        </div>
    )
}

export default MLServiceOptions