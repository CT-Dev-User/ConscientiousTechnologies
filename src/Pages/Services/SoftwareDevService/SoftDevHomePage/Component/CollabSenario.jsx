import React from 'react'

const CollabSenario = () => {
    const CollabSenario = [{ title: "Software development outsourcing", desc: "We assemble fully managed development teams to implement software projects end to end. Our team takes 100% responsibility for project planning, collaboration, and risk management. You get top-quality software promptly and at a 1.5–2.5x lower cost.", bgColor:"FF6868" },
    {
        title: "Dedicated teams", desc: "We compose dedicated teams with all necessary competencies to take over particular tasks (e.g., coding, QA, integration). With a high-performing team focused solely on your project, you can efficiently address skill gaps and speed up development.",
        bgColor:"1777BC"
    }, 
    { title: "Team augmentation", desc: "We ramp up your team with our best talents (from 0.5 to 150+ FTEs): back-end, front-end, and mobile developers, architects, testing engineers, DevOps engineers, data scientists, and more. You get quick and budget-friendly access to the needed skills.", bgColor:"E751FF" }]
    return (
        <div className='w-[100vw] h-[auto] box-border py-8 lg:py-16  bg-black text-white'>
            <div className='lg:w-[85%] mx-auto w-[95%]'>
                <h1 className='lg:text-3xl text-xl 2xl:text-[2rem] font-bold  text-[blue] lg:text-white'>Different Collaboration Scenarios for Your Software Development</h1>
                <p className='w-[95%] my-4 md:w-[100%]  text-sm lg:text-base'>Collaboration Scenarios: Explore various engagement models, from in-house teams to outsourced partnerships, to tailor software development collaboration to your needs.Collaboration Scenarios: Explore various engagement models, from in-house teams to outsourced partnerships, to tailor software development collaboration to your needs.</p>
            </div>
            <div className=' lg:w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-12 w-[95%]'>
                {CollabSenario.map((item, index) => (
                    <div key={index} className='w-[95%] lg:w-[31%] lg:h-[200px] p-3 text-[white] pt-6 ' style={{backgroundColor:`#${item.bgColor}`}}>
                        <h1 className='lg:text-[1rem] text-xl 2xl:text-[1.2rem] w-[90%] font-semibold'>{item.title}</h1>
                        <p className='text-[13.5px] mt-5 font-normal mx-auto w-[95%] md:text-[14px]'>{item.desc}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default CollabSenario
