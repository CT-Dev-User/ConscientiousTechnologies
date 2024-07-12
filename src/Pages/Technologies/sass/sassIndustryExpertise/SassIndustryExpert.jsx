import React from 'react'

const SassIndustryExpert = () => {
    const benefitsOfSassData = [{ title: "Manufacturing", points: ["-------"] }, { title: "Healthcare", points: ["-------"] }, { title: "Retail", points: ["-------"] }, { title: "Financial services", points: ["-------"] }, { title: "Transportation & logistics", points: ["-------"] }, { title: "Professional services", points: ["-------"] }, { title: "Telecoms", points: ["-------"] }, { title: "Easy SaaS evolution", points: ["Due to the modular architecture, clear separation of concerns (SoC), and standardized APIs."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px] md:w-[90vw] md:mx-[20px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px]'>Our Industry Expertise</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. ScienceSoft helps telcos ensure that their networks run like clockwork.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    benefitsOfSassData.map((item, index) => {
                        return (
                            <div className='w-[49%] h-[180px] md:w-[49%] md:h-auto md:pb-[20px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[15px] px-[15px] box-border' key={index}>
                                <h2 className='text-xl font-bold pl-[10px]'>{item.title}</h2>
                                <ul className='list-disc text-[12px] pl-[20px]'>
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

export default SassIndustryExpert