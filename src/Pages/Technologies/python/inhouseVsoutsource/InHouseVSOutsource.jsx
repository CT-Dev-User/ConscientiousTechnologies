import React from 'react'

const InHouseVSOutsource = () => {
    const softDevWithNet = [{ title: "Outsourced Developers", points: ["Quick access to high-quality Senior-level resources.", "No headache of hiring and retaining new employees.", "No hiring expenses, training expenses, bonuses, vacations and sick leaves.", "Minimized managerial efforts.", "Optimal resource usage at peak/low times."] }, { title: "In-house developers", points: ["Easier control over the development process.", "Less security risks.", "Minimized risk of communication gaps."] }]
    return (
        <div className='w-[85vw] md:w-[90vw] md:mx-auto mx-[110px] pt-[60px] pb-[30px] md:py-[30px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px]'>In-House vs. Outsourced Python Developers: What's the Difference? </h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. ScienceSoft helps telcos ensure that their networks run like clockwork.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    softDevWithNet.map((item, index) => {
                        return (
                            <div className='w-[49%] md:w-[100%] md:h-auto md:pb-[20px] h-[180px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
                                <h2 className='text-xl font-bold pl-[10px]'>{item.title}</h2>
                                <ul className='list-disc text-[14px] pl-[30px]'>
                                    {
                                        item.points.map((point, i) => {
                                            return (
                                                <li key={i}>{point}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default InHouseVSOutsource