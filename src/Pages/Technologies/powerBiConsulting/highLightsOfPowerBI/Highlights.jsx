import React from 'react'

const Highlights = () => {
    const softwareAdv = [{ title: "Feasibility check", points: ["To ensure substantial ROI out of your Power BI investments, we conduct a feasibility check to ascertain that Power BI technologies are in full compliance with your analytical needs, time, and technical constraints and work out a fitting implementation/improvement strategy. For example, for customers who don’t have a DWH in place, it may be feasible to start using Power BI as a self-sufficient repository to integrate, aggregate and further analyze data, and add a DWH later."] }, { title: "Incremental implementation for you to get value early", points: ["Power BI implementation may take from 2 weeks to 5 months, depending on the project complexity. For you to benefit from the Power BI platform as soon as possible, we run the project iteratively. That way, you start using a functioning solution with the essential functionality within a minimal timeframe, with further enhancements adjusted on the fly."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px] md:w-[90vw] md:mx-[20px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[20px]'>Highlights of CT’s Power BI Consulting Services </h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, consectetur adipiscing elit. </p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[49%] h-[240px] md:w-[100%] md:h-auto md:pb-[10px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] md:pt-[10px] px-[20px] md:px-[5px] box-border' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px] md:pl-[5px] md:text-[18px]'>{item.title}</h2>
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

export default Highlights