import React from 'react'

const IndustryWeDeveloped = () => {
    const softwareAdv = [{ title: "Healthcare", points: ["Surgery simulations","Psychological therapy","Gamified rehabilitation"] }, { title: "Education", points: ["Immersive training","Immersive research"] }, { title: "Manufacturing", points: ["Virtual design and engineering","Training","Maintenance guidance"] }, { title: "Retail", points: ["VR showrooms","Training"] }, { title: "Real Estate", points: ["Virtual tours"] }, { title: "Advertising", points: ["Gamified ads","Virtual events"] },{title:"Travel and entertainment", points:["Virtual tours","Virtual art installations"]},{title:"Transportation", points:["Driving simulators","Flight simulators"]}]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[80px] md:pt-[40px] pb-[20px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Industries We Develop VR Apps for</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. CT helps telcos ensure that their networks run like clockwork.</p>
            </div>
            <div className='w-[85%] flex flex-wrap gap-[20px] md:gap-[10px] mt-[20px] mx-auto md:w-[95%]'>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[48%] h-[140px] border border-[#fffff] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border md:border-none md:px-[10px] md:h-auto md:py-[10px]' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px] md:text-[20px]'>{item.title}</h2>
                                <ul className='list-disc text-[14px] pl-[30px] font-normal md:text-[14px]'>
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

export default IndustryWeDeveloped