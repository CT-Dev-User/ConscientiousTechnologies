import React from 'react'

const KeyCooperation = () => {
    const CollabSenario = [{ title: "Integrity", desc: "We offer full-cycle HR software development, from ideation to design and coding to continuous support. You get all-encompassing expert assistance at every project stage and receive all necessary documentation for your HR system.", bgColor: "FF6868" },
    {
        title: "Transparency", desc: "We devise tailored sets of KPIs to measure the HR software development efficiency and report regularly on the project’s health. If you want full control over the team’s progress and instant knowledge transfer, we can give you direct access to our project tracking systems.",
        bgColor: "1777BC"
    },
    { title: "Minimized risks", desc: "We ensure smooth and predictable development flow via clear task scoping, accurate project planning, and precise resource estimation. Before starting the project, our consultants conduct a feasibility study to guarantee financial gains from your HR software.", bgColor: "E751FF" }]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>ScienceSoft’s Key Cooperation Principles </h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Our custom ERP development services are closely bound to our clients' needs and can be related to:</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[95%]'>
                {CollabSenario.map((item, index) => (
                    <div key={index} className='w-[350px] h-[200px] border border-gray-300 p-3 text-[white] pt-6 md:w-full md:border-none md:h-auto md:py-5' style={{ backgroundColor: `#${item.bgColor}` }}>
                        <h1 className='text-[18px] w-[90%]'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-normal mx-auto w-[95%]'>{item.desc}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default KeyCooperation
