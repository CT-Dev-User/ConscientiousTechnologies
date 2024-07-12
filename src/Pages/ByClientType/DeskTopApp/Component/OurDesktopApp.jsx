import React from 'react'

const OurDesktopApp = () => {
    const OurDeskTop = [{title:"C++ department", desc:(
        <ul>
            <li className='list-disc ms-5'>Established in 1989.</li>
            <li className='list-disc ms-5'>40+ C/C++ developers proficient in Qt.</li>
            <li className='list-disc ms-5'>70% of developers have 10 years of experience.</li>
            <li className='list-disc ms-5'>100+ successfully delivered projects.</li>
        </ul>
    )}, {title:".NET department", desc:(
        <ul>
            <li className='list-disc ms-5'>Established in 2004.</li>
            <li className='list-disc ms-5'>50+ C#/C++ developers and 7 architects experienced in .NET.</li>
            <li className='list-disc ms-5'>50% of developers have MCTS and MCPD certifications.</li>
            <li className='list-disc ms-5'>190+ successfully delivered projects.</li>
        </ul>
    )}, {title:"C++ department", desc:(
        <ul>
            <li className='list-disc ms-5'>Established in 2023.</li>
            <li className='list-disc ms-5'>25+ Python programmers.</li>
            <li className='list-disc ms-5'>Use of ScienceSoft’s 34 years of expertise in data science and analytics.</li>
            <li className='list-disc ms-5'>50+ successfully delivered projects.</li>
        </ul>
    )}]
  return (
    <div className='w-[100vw] h-[auto] box-border pt-[100px] md:pt-[50px] pb-[30px]'>
    <div className='w-[85%] mx-auto md:w-[90%]'>
        <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>Solutions We Help Startups Create</h1>
        <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'>Click on the cards below to explore a full scope of ScienceSoft’s services for the type of software you want to build.</p>
    </div>
    <div className='w-[85%] flex mx-auto flex-wrap gap-x-[60px] gap-y-[30px] mt-8'>
                {OurDeskTop.map((item, index) => (
                    <div key={index} className='w-[300px] h-[220px] border border-gray-300 p-3'>
                        <h1 className='text-[18px]'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>


</div>
  )
}

export default OurDesktopApp
