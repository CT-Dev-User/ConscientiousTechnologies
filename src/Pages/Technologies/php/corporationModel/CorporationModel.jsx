import React from 'react'

const CorporationModel = () => {
    const softDevWithNet = [{ title: "PHP consulting", points: ["We help you select the technology mix for a planned PHP project or provide expert recommendations on how to solve the tech challenges of an ongoing project:Quick access to high-quality Senior-level resources.", "No headache of hiring and retaining new employees.", "Identifying the system’s bottlenecks.", "Checking security vulnerabilities.", "Optimal resource usage at peak/low times."] }, { title: "PHP development", points: ["We adhere to the latest PSR guidelines and use credible frameworks to create powerful and reliable PHP-based web apps. Depending on your needs, we can offer to fully take over PHP development on your project or augment your in-house team with our PHP developers."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px] md:w-[90vw] md:mx-[20px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px]'>Choose Your Cooperation Model</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. ScienceSoft helps telcos ensure that their networks run like clockwork.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between md:gap-[20px]'>
                {
                    softDevWithNet.map((item, index) => {
                        return (
                            <div className='w-[49%] md:w-[100%] md:h-auto md:pb-[20px] h-[230px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
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

export default CorporationModel