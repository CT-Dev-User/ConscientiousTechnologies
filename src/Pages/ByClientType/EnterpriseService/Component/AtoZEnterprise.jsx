import React from 'react'

const AtoZEnterprise = () => {
    const AtoZEnterpriseArr = [{ title: "End-to-end enterprise application development", desc: "Full-cycle enterprise software development – from needs analysis to the implementation and adoption of the new enterprise app. We can offer support and evolution to ensure your app keeps in step with your business growth", bgColor:"FF6868" },
    {
        title: "Enterprise application development consulting", desc: "Guidance on all enterprise software development steps, from shaping app vision to nuances of application maintenance. Consultancy on project feasibility and possible cost reduction.",
        bgColor:"1777BC"
    }, 
    { title: "------", desc: "-------", bgColor:"E751FF" }]
    return (
        <div className='w-[100vw] h-[auto] box-border pt-[100px] md:pt-[50px] pb-[30px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>ScienceSoft Can Take Care of Your Enterprise App from A to Z </h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'>Our API development stands out due to its robustness, flexibility, scalability, and ease of integration. We prioritize clean and well-documented code, offer comprehensive support, and continually innovate to meet evolving market needs.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8'>
                {AtoZEnterpriseArr.map((item, index) => (
                    <div key={index} className='w-[350px] h-[260px] border border-gray-300 p-3 text-[white] pt-6' style={{backgroundColor:`#${item.bgColor}`}}>
                        <h1 className='text-[18px] w-[90%]'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-normal mx-auto w-[95%]'>{item.desc}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default AtoZEnterprise
