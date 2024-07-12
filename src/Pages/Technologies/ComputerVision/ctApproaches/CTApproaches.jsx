import React from 'react'

const CTApproaches = () => {
    const softwareAdv = [{ title: "Rule-based approach", points: ["Excellent performance within a narrow domain.","Doesn’t require big datasets.","Performance can be easily validated.","Explicability (every decision step is clearly seen in the code).","Easy debugging."] }, { title: "Machine learning approach", points: ["Deals better with complex objects and tasks.","Doesn’t require explicit knowledge.","Easier scalability.","Lower operational costs."] }]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[80px] md:pt-[40px] pb-[20px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>CT’s Approaches to Build Image Analysis Software</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, consectetur adipiscing elit. </p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] '>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[45%] h-[240px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border md:w-full md:border-none md:p-0 md:h-auto md:py-3' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px] md:text-[20px] md:pl-0'>{item.title}</h2>
                                <ul className='list-disc text-[14px] pl-[30px] font-normal md:pl-0 text-[16px] md:pl-[20px]'>
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

export default CTApproaches