import React from 'react'

const PhpDevelopersStandOut = () => {
    return (
        <div className='w-[100vw] bg-[#000000] text-white py-[60px]'>
            <div className='w-[85%] mx-[110px] md:w-[90%] md:mx-[20px]'>
                <h1 className='font-bold text-3xl mb-[20px] md:text-[24px]'>What Makes Our PHP Developers Stand Out</h1>
                <p className='text-[14px] font-semibold mb-[60px] md:text-[16px]'>-------</p>
            </div>
            <div className='w-[85%] md:w-[90%] md:mx-[20px] md:gap-[20px] flex flex-wrap justify-between mx-[110px]'>
                <div className='w-[32.5%] md:w-[100%] md:h-auto h-[200px] bg-[#FF6868] box-border p-[15px]'>
                    <h4 className='text-[18px] font-bold md:text-[24px] mb-[20px]'>Expertise across 31 industries</h4>
                    <p className='text-[14px] font-normal md:text-[16px]'>Including ecommerce, healthcare, banking, manufacturing, logistics, and professional services. This allows us to understand the specifics of your business and meet your requirements to the fullest.</p>
                </div>
                <div className='w-[32%] md:w-[100%] md:h-auto h-[200px] bg-[#1777BC] box-border p-[15px]'>
                    <h4 className='text-[18px] font-bold md:text-[24px] mb-[20px]'>Thought-out software design</h4>
                    <p className='text-[14px] font-normal md:text-[16px]'>We design software to be stable (with load balancing, system health checks, and failure isolation), scalable to be prepared for multiple nodes working in parallel, and with the responsive front end (thanks to the back end optimized with asynchronous calls, microservices, etc.).</p>
                </div>
                <div className='w-[32%] md:w-[100%] md:h-auto h-[200px] bg-[#E751FF] box-border p-[15px]'>
                    <h4 className='text-[18px] font-bold md:text-[24px] mb-[20px]'>Competencies in technologies</h4>
                    <p className='text-[14px] font-normal md:text-[16px]'>Such as AI, predictive analytics and IoT, to bring you a competitive edge with developed software.</p>
                </div>
            </div>
        </div>
    )
}

export default PhpDevelopersStandOut