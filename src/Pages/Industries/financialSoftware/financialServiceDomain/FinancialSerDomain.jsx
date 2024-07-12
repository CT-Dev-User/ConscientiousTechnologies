import React from 'react'

const FinancialSerDomain = () => {
    const serviceDomain = [{ title: "Banking", points: ["-------"] }, { title: "Investment and wealth managment", points: ["-------"] }, { title: "Lending", points: ["-------"] }, { title: "Payment services", points: ["-------"] }, { title: "Insurance", points: ["-------"] }, { title: "Decentralized finance", points: ["-------"] }]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:pt-[20px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-2'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Software Development for All Financial Service Domains</h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Click on the cards below to explore a full scope of CT’s services for your business area.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%] md:gap-y-[40px]'>
                {
                    serviceDomain.map((item, index) => {
                        return (
                            <div className='w-[350px] md:w-[90%] h-[200px] border border-gray-300 p-3 md:border-none md:h-auto md:pb-[20px]' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px]'>{item.title}</h2>
                                <ul className='list-disc text-[14px] pl-[30px] font-normal'>
                                    {
                                        item.points.map((point, i) => {
                                            return (
                                                <li key={i}>{point}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FinancialSerDomain