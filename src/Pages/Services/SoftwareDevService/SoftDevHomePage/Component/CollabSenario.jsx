import React from 'react'

const CollabSenario = () => {
    const CollabSenario = [{ title: "Software development outsourcing", desc: "We assemble fully managed development teams to implement software projects end to end. Our team takes 100% responsibility for project planning, collaboration, and risk management. You get top-quality software promptly and at a 1.5–2.5x lower cost.", bgColor:"FF6868" },
    {
        title: "Dedicated teams", desc: "We compose dedicated teams with all necessary competencies to take over particular tasks (e.g., coding, QA, integration). With a high-performing team focused solely on your project, you can efficiently address skill gaps and speed up development.",
        bgColor:"1777BC"
    }, 
    { title: "Team augmentation", desc: "We ramp up your team with our best talents (from 0.5 to 150+ FTEs): back-end, front-end, and mobile developers, architects, testing engineers, DevOps engineers, data scientists, and more. You get quick and budget-friendly access to the needed skills.", bgColor:"E751FF" }]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[blue] '>Different Collaboration Scenarios for Your Software Development</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>Collaboration Scenarios: Explore various engagement models, from in-house teams to outsourced partnerships, to tailor software development collaboration to your needs.Collaboration Scenarios: Explore various engagement models, from in-house teams to outsourced partnerships, to tailor software development collaboration to your needs.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[90%]'>
                {CollabSenario.map((item, index) => (
                    <div key={index} className='w-[350px] h-[200px] border border-gray-300 p-3 text-[white] pt-6 md:h-[250px]' style={{backgroundColor:`#${item.bgColor}`}}>
                        <h1 className='text-[18px] w-[90%] md:text-[20px]'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-normal mx-auto w-[95%] md:text-[14px]'>{item.desc}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default CollabSenario
