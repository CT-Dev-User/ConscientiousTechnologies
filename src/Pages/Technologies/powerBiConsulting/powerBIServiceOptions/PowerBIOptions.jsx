import React from 'react'

const PowerBIOptions = () => {
    const softwareAdv = [{ title: "Power BI Implementation Consulting", points: ["Business needs elicitation and analysis.", "Power BI feasibility check.", "Power BI implementation strategy with a detailed roadmap set-up bound to your business priorities and technical limitations."] }, { title: "Power BI Consulting + Implementation", points: ["Power BI feasibility assessment.", "Power BI implementation strategy and plan development with further technologies configuration and customization.","Power BI integration with a variety of required internal and external data sources."] }, { title: "Power BI Improvement Consulting", points: ["Examine and assess the existing solution.", "Analyze your business needs.", "Design an improvement roadmap for the solution’s upgrade."] }, { title: "Power BI Consulting + Support", points: ["Examination of the existing solution against analytics needs.", "Daily Power BI administration.","Data management procedures.","Regular health checks (including security)."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px] md:w-[90vw] md:mx-[20px] md:pt-0'>
        <div className='w-[100%] mb-[30px]'>
            <h1 className='font-bold text-3xl md:text-[20px]'>Choose Your Power BI Consulting Service Option</h1>
            <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. ScienceSoft helps telcos ensure that their networks run like clockwork.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[49%] h-[240px] md:w-[100%] md:h-auto md:pb-[10px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] md:pt-[10px] px-[20px] md:px-[5px] box-border' key={index}>
                            <h2 className='text-xl font-semibold pl-[10px] md:pl-[5px] md:text-[18px]'>{item.title}</h2>
                            <ul className='list-disc text-[14px] pl-[30px] md:pl-[20px] font-normal'>
                                {
                                    item.points.map((point, i) => {
                                        return (
                                            <li  key={i}>{point}</li>
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

export default PowerBIOptions