import React from 'react'

const PerkOfERP = () => {
    const CollabSenario = [{ title: "Estimation accuracy", desc: "Having vast experience in implementing ERP projects of various complexity, we can precisely estimate project costs and delivery time.", bgColor:"FF6868" },
    {
        title: "Fast MVP development", desc: "Relying on the established Agile and DevOps practices, we typically deliver the first version of a solution within 3–5 months, then introduce new releases every 2–6 weeks.",
        bgColor:"1777BC"
    }, 
    { title: "ERP evolution", desc: "Our ERP software development company provides full transparency of the development flow via regular reporting and documented processes.", bgColor:"E751FF" }]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[80px] md:py-[30px] md:bg-[black] md:text-[white]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[blue]'>Perks of ScienceSoft's ERP Software Development Services </h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>Our custom ERP development services are closely bound to our clients' needs and can be related to:</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[95%]'>
                {CollabSenario.map((item, index) => (
                    <div key={index} className='w-[350px] h-[200px] border border-gray-300 p-3 text-[white] pt-6' style={{backgroundColor:`#${item.bgColor}`}}>
                        <h1 className='text-[18px] w-[90%]'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-normal mx-auto w-[95%]'>{item.desc}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default PerkOfERP
