import React from 'react'

const JsServices = () => {
    const softDevWithNet = [{ title: "Team augmentation with JavaScript developers", points: ["Suitable for: covering the resource/skill gaps team with the needed number of JavaScript developers managed by you directly.", "Pricing model: T&M."] }, { title: "A dedicated JavaScript team", points: ["Suitable for: covering the resource/skill gaps with more than 4 developers managed by a PM on ScienceSoft’s side.","Pricing model: T&M"] }]
    return (
        <div className='w-[85vw] md:w-[90vw] mx-[110px] md:mx-[20px] pt-[60px] md:pt-[30px] pb-[30px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px]'>Our JavaScript Development Services</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. ScienceSoft helps telcos ensure that their networks run like clockwork.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    softDevWithNet.map((item, index) => {
                        return (
                            <div className='w-[49%] md:w-[100%] md:h-auto md:pb-[20px] h-[180px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px] md:text-[24px]'>{item.title}</h2>
                                <ul className='list-disc text-[14px] pl-[30px] font-normal md:text-[16px]'>
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

export default JsServices