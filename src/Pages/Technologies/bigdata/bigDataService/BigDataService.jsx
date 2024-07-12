import React from 'react'

const BigDataService = () => {
    const bigDataSer = [{ title: "Big data consulting", points: ["Big data implementation/evolution strategies and detailed roadmaps.", "Recommendations on data quality management.","Solution architecture design + an optimal technology stack.","User adoption strategies.","A proof of concept (for complex projects)."] }, { title: "Big data implementation", points: ["SBig data solution architecture design.","Solution development (a data lake, DWH, ETL/ELT setup, data analysis (SQL and NoSQL), reporting and dashboarding).","Setup of big data governance procedures (data quality, security, etc.)"] },{title:"Big data support and maintenance",points:["Big data solution infrastructure setup and support.","Solution administration.","Software updating.","Adding new users and handling permissions."]},{title:"Advanced big data analytics services", points:["Designing specialized big data analytics solutions for 30+ domains.","Big data visualization.","Real-time big data analytics.","Artificial intelligence.","ML model development and turning."]}]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px] md:w-[90vw] md:mx-[20px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px]'>CT's BigData Services </h1>
                <p className='text-[14px] font-semibold mt-[20px]'>Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. ScienceSoft helps telcos ensure that their networks run like clockwork.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    bigDataSer.map((item, index) => {
                        return (
                            <div className='w-[49%] md:w-[100%] md:h-auto md:pb-[20px] h-[180px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px]'>{item.title}</h2>
                                <ul className='list-disc text-[14px] pl-[30px] font-normal'>
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

export default BigDataService