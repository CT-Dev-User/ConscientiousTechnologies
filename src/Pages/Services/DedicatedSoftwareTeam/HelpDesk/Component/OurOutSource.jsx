import React from 'react'

const OurOutSource = () => {
    const CollabSenario = [{ title: "Thorough IT background", desc: "Before we take up your app or infrastructure support, we analyze TCO and ROI of supported assets and assess how far these financial estimates will be improved after we commence the support.", bgColor:"FF6868" },
    {
        title: "Effective collaboration", desc: "Our IT support activities and service quality are reflected in regular reports with clear metrics for strict compliance with service level objectives.",
        bgColor:"1777BC"
    }, 
    { title: "Flexibility", desc: "We believe that long-term IT support is mutually beneficial for a customer and a service provider, as a longer service term means fewer transition periods and integration phases for the customer and well-tailored working routines for the support team.", bgColor:"E751FF" }]
    return (
        <div className='w-[100vw] h-[auto] box-border pt-[50px] md:pt-[50px] pb-[30px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-[30px] font-bold mt-[40px] mb-[20px] md:text-[blue] md:text-[24px]'>What Makes Our Outsourced IT Help Desk Services Reliable</h1>
                <p className='w-[95%] text-[18px] mt-2 md:w-[100%] md:text-[16px]'>Collaboration Scenarios: Explore various engagement models, from in-house teams to outsourced partnerships, to tailor software development collaboration to your needs.Collaboration Scenarios: Explore various engagement models, from in-house teams to outsourced partnerships, to tailor software development collaboration to your needs.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8'>
                {CollabSenario.map((item, index) => (
                    <div key={index} className='w-[350px] h-[200px] border border-gray-300 p-3 text-[white] pt-6 md:h-auto md:py-[20px]' style={{backgroundColor:`#${item.bgColor}`}}>
                        <h1 className='text-[18px] w-[90%]'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-normal mx-auto w-[95%]'>{item.desc}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default OurOutSource
