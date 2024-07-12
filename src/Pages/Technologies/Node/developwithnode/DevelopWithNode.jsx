import React from 'react'

const DevelopWithNode = () => {
    return (
        <div className='w-[100vw] bg-[#000000] text-white py-[60px]'>
            <div className='w-[85%] ms-[110px] md:w-[90%] md:ms-[20px]'>
                <h1 className='font-bold text-3xl mb-[20px] md:text-[24px]'>What We Develop with Node.js</h1>
                <p className='text-[14px] font-semibold mb-[60px] md:text-[16px]'>Conscientious Technologies is a flexible ASP.NET development company that offers different cooperation models to perfectly meet your Node project needs.</p>
            </div>
            <div className='w-[85%] md:w-[90%] flex flex-wrap justify-between ms-[110px] md:ms-[20px] md:gap-[20px]'>
                <div className='w-[32.5%] md:w-[100%] md:h-auto h-[200px] bg-[#FF6868] box-border p-[15px]'>
                    <h4 className='text-[18px] font-bold md:text-[24px]'>Web and mobile apps</h4>
                    <p className='text-[14px] font-normal md:text-[16px]'>------</p>
                </div>
                <div className='w-[32%] h-[200px] bg-[#1777BC] box-border p-[15px] md:w-[100%] md:h-auto'>
                    <h4 className='text-[18px] font-bold md:text-[24px]'>Web servers</h4>
                    <p className='text-[14px] font-normal md:text-[16px]'>------</p>
                </div>
                <div className='w-[32%] h-[200px] bg-[#E751FF] box-border p-[15px] md:w-[100%] md:h-auto'>
                    <h4 className='text-[18px] font-bold md:text-[24px]'>Custom API</h4> 
                    <p className='text-[14px] font-normal md:text-[16px]'>------</p>
                </div>
            </div>
        </div>
    )
}

export default DevelopWithNode