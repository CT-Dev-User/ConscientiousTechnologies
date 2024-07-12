import React from 'react'

const CustomerExperience = () => {
    const customerExperience = [{ title: "Banking apps", points: ["-------"] }, { title: "Payment apps", points: ["-------"] }, { title: "Money transfer apps", points: ["-------"] }, { title: "Lending apps", points: ["-------"] }, { title: "Insurance apps", points: ["-------"] }, { title: "Crypto wallets", points: ["-------"] }]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:pt-[20px] '>
            <div className='w-[85%] mx-auto md:w-full md:px-2'>
                <h1 className='font-bold text-3xl md:text-[24px] md:text-[#3970F0] md:ms-0 md:w-full'>Web and Mobile Applications to Introduce Excellent Digital Customer Experience</h1>
                <p className='text-[14px] font-semibold my-[20px] md:text-[16px] md:ms-0 md:w-full'>Click on the cards below to explore a full scope of CT’s services for your business area.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%] md:gap-y-[40px]'>
                {
                    customerExperience.map((item, index) => {
                        return (
                            <div className='w-[350px] h-[200px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border md:border-none md:h-auto md:w-full' key={index}>
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

export default CustomerExperience