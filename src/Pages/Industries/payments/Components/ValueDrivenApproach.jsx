import React from 'react'

const ValueDrivenApproach = () => {
    const valueDrivenApproachArr = [{ title: "Close and transparent collaboration", desc: "We design the optimal feature set, architecture, UX and UI of ERP software with your unique needs in mind. Our consultants introduce the best-fitting tech stack for ERP implementation and provide expert advice on security and compliance. You also receive a detailed ERP project plan for risk-free implementation.", bgColor: "FF6868" },
    {
        title: "Designing for maximized value", desc: "We cover all stages of ERP development, from design to deployment in production. Our ERP talents integrate the new software with your existing corporate systems and run the necessary quality assurance procedures. You also benefit from user training in a preferred format and get after-launch support.",
        bgColor: "1777BC"
    },
    { title: "Fast development", desc: "We revamp your legacy ERP software's architecture, codebase, and tech stack and upgrade it with the required features. Our service can comprise cloud migration and data migration to the new modules. You get a modern solution promptly and with minimal disruption to your business operations.", bgColor: "E751FF" }]
    return (

        <div className='w-[100vw] h-[auto] box-border py-[80px] md:py-[30px] md:bg-[black] md:text-[white]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Our Value-Driven Approach to Payment Software Development </h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>Our custom ERP development services are closely bound to our clients' needs and can be related to:</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[95%]'>
                {valueDrivenApproachArr.map((item, index) => (
                    <div key={index} className='w-[350px] h-[200px] border border-gray-300 p-3 text-[white] pt-6' style={{ backgroundColor: `#${item.bgColor}` }}>
                        <h1 className='text-[18px] w-[90%]'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-normal mx-auto w-[95%]'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default ValueDrivenApproach
