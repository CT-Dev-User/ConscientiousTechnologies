import React from 'react'

const PerkOfOurApplication = () => {
    const OurDeskTop = [{ title: "QA consulting", desc: "To improve the overall software quality and introduce test automation on a high scale.", bgColor:"FF6868" },
    {
        title: "Software consulting", desc: "To adapt existing development practices to the new DevOps approach.",
        bgColor:"1777BC"
    }, 
    { title: "Application modernization", desc: "To adapt your legacy applications to DevOps.", bgColor:"E751FF" }]
    return (
        <div className='w-[100vw] h-[auto] box-border pt-[100px] md:pt-[50px] pb-[30px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>Additional Services to Enhance DevOps Implementation</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'>Our API development stands out due to its robustness, flexibility, scalability, and ease of integration. We prioritize clean and well-documented code, offer comprehensive support, and continually innovate to meet evolving market needs.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8'>
                {OurDeskTop.map((item, index) => (
                    <div key={index} className='w-[350px] h-[280px] border border-gray-300 p-3 text-[white] pt-6' style={{backgroundColor:`#${item.bgColor}`}}>
                        <h1 className='text-[18px] w-[90%]'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-normal mx-auto w-[95%]'>{item.desc}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default PerkOfOurApplication
