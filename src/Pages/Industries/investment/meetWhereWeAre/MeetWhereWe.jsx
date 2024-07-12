import React from 'react'

const MeetWhereWe = () => {

    const meetWhereWeData = [{ title: "Investment software consulting", desc: "We can design an optimal feature set, architecture, UX and UI, and a tech stack for your unique solution. For software product companies, we are ready to conduct TA and competitor analysis and define a USP for the product. You also receive a project roadmap with cost and time estimates, a risk mitigation plan,", bgColor:"FF6868" },
    {
        title: "Investment software development", desc: "Having 750+ development, BA, PM, QA, and data science professionals on board, we can cover all aspects of investment software creation and take over your project at any implementation stage.",
        bgColor:"1777BC"
    }, 
    { title: "Investment software modernization", desc: "Already have investment software that underperforms but can’t be replaced yet? We can revamp your legacy software's architecture, codebase, and tech stack and evolve it with the required features.", bgColor:"E751FF" }]

  return (
    <div className='w-[100vw] h-[auto] box-border py-[80px] md:py-[30px] md:bg-[black] md:text-[white]'>
    <div className='w-[85%] mx-auto md:w-full md:px-3'>
        <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Perks of ScienceSoft's ERP Software Development Services </h1>
        <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>Our custom ERP development services are closely bound to our clients' needs and can be related to:</p>
    </div>
    <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[95%] '>
        {meetWhereWeData.map((item, index) => (
            <div key={index} className='w-[350px] h-[200px] border border-gray-300 p-3 text-[white] pt-6 h-auto md:py-3 md:border-none' style={{backgroundColor:`#${item.bgColor}`}}>
                <h1 className='text-[18px] w-[90%]'>{item.title}</h1>
                <p className='text-[13.5px] mt-2 font-normal mx-auto w-[95%]'>{item.desc}</p>
            </div>
        ))}
    </div>


</div>
  )
}

export default MeetWhereWe