import React from 'react'

const FeaturedInsights = () => {
    const softwareAdv = [{ title: "Moves application to AWS", points: ["-------"] }, { title: "Migrates Infrastructures to AWS", points: ["-------"] }, { title: "Healthcare DWH on AWS", points: ["-------"] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px] md:w-[90vw] md:mx-[20px] md:py-[30px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[20px]'>Featured Insights</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>We work with all the mainstream technologies to expand the scope of functions the software can perform.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between mt-[20px] gap-[20px]'>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[32%] h-[160px] md:h-auto md:pb-[10px] border border-[#fffff] shadow-[4px] flex flex-col gap-[10px] pt-[20px] md:pt-[10px] px-[20px] md:px-[5px] box-border' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px] md:pl-[5px]'>{item.title}</h2>
                                <ul className='list-disc text-[14px] pl-[30px] md:pl-[20px] font-normal'>
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

export default FeaturedInsights