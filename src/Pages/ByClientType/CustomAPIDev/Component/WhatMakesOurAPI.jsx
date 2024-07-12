import React from 'react'

const PerkOfOurApplication = () => {
    const OurDeskTop = [{ title: "Meticulous planning and scoping", desc: "We carefully mark out what needs to be done, making sure everyone on our team knows their mission. Our project managers use their experience and smarts to figure out how much time and people we'll need to get the job done. Of course, every adventure has its dragons or stormy seas. Our team is always on the lookout for potential risks before they become problems and have mitigation plans ready..", bgColor:"FF6868" },
    {
        title: "Structured project execution and monitoring", desc: "We prioritize effective interaction among team members and stakeholders, set clear benchmarks for success, keep stakeholders informed about project status, and have a structured process for implementing changes.",
        bgColor:"1777BC"
    }, 
    { title: "Sufficient documentation", desc: "The critical information on our projects is always well-structured, up-to-date, and easily accessible to authorized parties. Our project management approach emphasizes thorough documentation, covering all project aspects, and effective knowledge management to capture, share, and preserve valuable insights.", bgColor:"E751FF" }]
    return (
        <div className='w-[100vw] h-[auto] box-border pt-[100px] md:pt-[50px] pb-[30px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>What Makes Our API Development Stand Out </h1>
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
