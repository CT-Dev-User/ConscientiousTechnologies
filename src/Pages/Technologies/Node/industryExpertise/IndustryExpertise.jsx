import React from 'react'

const IndustryExpertise = () => {
    const customNetData = [{ title: "Manufacturing", points: ["-------"] }, { title: "Healthcare", points: ["-------"] }, { title: "Retail", points: ["-------"] }, { title: "Financial services", points: ["-------"] }, { title: "Transportation & logistics", points: ["-------"] }, { title: "Professional services", points: ["-------"] }, { title: "Telecoms", points: ["-------"] }, { title: "Education", points: ["-------"] }]
    return (
        <div className='w-[85vw] md:w-[90vw] mx-[110px] md:mx-[20px] py-[60px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl'>Our Industry Expertise</h1>
                <p className='text-[14px] font-semibold mt-[20px]'>Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. ScienceSoft helps telcos ensure that their networks run like clockwork.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    customNetData.map((item, index) => {
                        return (
                            <div className='w-[49%] h-[180px] border border-[#fffff] mt-[20px] shadow-[4PX] flex flex-col gap-[10px] pt-[20px] box-border px-[10px]' key={index}>
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

export default IndustryExpertise