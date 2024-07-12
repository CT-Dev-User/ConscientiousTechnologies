import React from 'react'

const Benefits = () => {

    const benifitsData = [{ title: "Corporate systems", desc: (
        <ul>
            <li>Full outsourcing of fintech software development.</li>
            <li>A dedicated team to take over a part of your project.</li>
            <li>Team augmentation with the required number (from 0.5 to 150+ FTEs) of our best talents.</li>
        </ul>
    ), bgColor:"FF6868" },
    {
        title: "Flexible pricing options", desc: (
        <ul>
            <li>Full outsourcing of fintech software development.</li>
            <li>A dedicated team to take over a part of your project.</li>
            <li>Team augmentation with the required number (from 0.5 to 150+ FTEs) of our best talents.</li>
        </ul>
    ),
        bgColor:"1777BC"
    }, 
    { title: "Flexible development pace", desc:  (
        <ul>
            <li>T&M, T&M with a cap – for advisory activities or agile implementation of a fintech solution.</li>
            <li>Fixed price – for software development divided into clear stages (fixed price for each stage).</li>
            <li>A monthly subscription fee – for support activities.</li>
        </ul>
    ), bgColor:"E751FF" }]

    return (
        <div className='w-[100vw] h-[auto] box-border py-[80px] md:py-[30px] md:bg-[black] md:text-[white]'>
        <div className='w-[85%] mx-auto md:w-full md:px-3'>
            <h1 className='text-3xl font-bold md:text-[24px] md:text-[blue]'>See How You Benefit from Partnering with Us </h1>
            <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>ScienceSoft’s practice shows that flexibility is a key to meeting each client’s expectations regarding the fintech software development timelines and budget. We offer:</p>
        </div>
        <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[95%]'>
            {benifitsData.map((item, index) => (
                <div key={index} className='w-[350px] h-[200px] border border-gray-300 p-3 text-[white] pt-6' style={{backgroundColor:`#${item.bgColor}`}}>
                    <h1 className='text-[18px] w-[90%]'>{item.title}</h1>
                    <div className='text-[13.5px] mt-2 font-normal mx-auto w-[95%]'>{item.desc}</div>
                </div>
            ))}
        </div>


    </div>
    )
}

export default Benefits