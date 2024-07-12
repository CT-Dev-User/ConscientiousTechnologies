import React from 'react'

const ServiceOptions = () => {
    return (
        <div className='w-[100vw] bg-[#000000] text-white py-[60px]'>
            <div className='w-[85%] mx-[110px] md:w-[90%] md:mx-[20px]'>
                <h1 className='font-bold text-3xl mb-[20px] md:text-[24px]'>Choose Your Service Option</h1>
                <p className='text-[14px] font-semibold mb-[60px] md:text-[16px]'>ScienceSoft is a flexible ASP.NET development company that offers different cooperation models to perfectly meet your .NET project needs.</p>
            </div>
            <div className='w-[85%] flex flex-wrap justify-between mx-[110px] md:w-[90vw] md:mx-[20px] md:gap-[20px]'>
                <div className='w-[32.5%] h-[200px] bg-[#FF6868] box-border p-[15px] md:w-[100%] md:h-auto md:pb-[20px]'>
                    <h4 className='text-[18px] font-bold md:text-[24px]'>SaaS consulting</h4>
                    <p className='text-[14px] font-normal mt-[15px] md:text-[16px]'>Rely on ScienceSoft’s business consultants to productize your idea, design a selling brand, prepare detailed SRS and cost-benefit estimation.</p>
                </div>
                <div className='w-[32%] h-[200px] bg-[#1777BC] box-border p-[15px] md:w-[100%] md:h-auto md:pb-[20px]'>
                    <h4 className='text-[18px] font-bold md:text-[24px]'>SaaS development outsourcing</h4>
                    <p className='text-[14px] font-normal mt-[15px] md:text-[16px]'>Entrust your SaaS development project (or its part) to ScienceSoft’s experienced developers and mature PMs.</p>
                </div>
                <div className='w-[32%] h-[200px] bg-[#E751FF] box-border p-[15px] md:w-[100%] md:h-auto md:pb-[20px]'>
                    <h4 className='text-[18px] font-bold md:text-[24px]'>SaaS modernization and support</h4>
                    <p className='text-[14px] font-normal mt-[15px] md:text-[16px]'>Get a full revamp of your existing SaaS or request regular support & maintenance services to keep it stable and up-to-date.</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceOptions