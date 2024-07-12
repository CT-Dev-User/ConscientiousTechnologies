import React from 'react'

const AWSWork = () => {
    const softwareAdv = [{ title: "Development of web and mobile apps", points: ["From robust enterprise software to sleek customer-facing applications, ScienceSoft plans, builds, tests, deploys, and evolves efficient AWS-based solutions for midsize and large organizations."] }, { title: "Migration to AWS", points: ["ScienceSoft plans and performs safe and efficient migration of applications, databases, or whole IT infrastructures to AWS cloud. We also handle all the required architecture and code adjustments to leverage cloud capabilities to the fullest."] }, { title: "DevOps implementation", points: ["ScienceSoft enables companies to build and deliver software more rapidly and reliably using AWS services and DevOps practices. We are eager to automate:"] }, { title: "Security & compliance", points: ["ScienceSoft helps set up a secure and compliant cloud environment from scratch or enhance protection of the existing cloud assets."] }, { title: "AWS infrastructure and app", points: ["ScienceSoft can help keep your entire AWS infrastructure or specific AWS-based applications and databases highly available, reliable, and proactively improved."] }, { title: "AWS cost optimization", points: ["Relying on deep knowledge of AWS specifics and over a decade of experience in building cost-efficient cloud solutions, ScienceSoft can help you cut your AWS bill by 30–70%."] }, { title: "Travel and entertainment", points: ["Virtual tours", "Virtual art installations"] }, { title: "Transportation", points: ["Driving simulators", "Flight simulators"] }]
    return (
        <div className='w-[85vw] mx-auto py-[60px] md:w-[95vw] md:py-[30px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[20px]'>How CT Makes AWS Work for You</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. ScienceSoft helps telcos ensure that their networks run like clockwork.</p>
            </div>
            <div className='w-[100%] flex flex-wrap gap-[20px]'>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[49%] h-[160px] md:w-[100%] md:h-auto md:pb-[10px] border border-[#fffff] md:border-none shadow-[4px] flex flex-col gap-[10px] pt-[20px] md:pt-[10px] px-[20px] md:px-[5px] box-border' key={index}>
                                 <h2 className='text-xl font-semibold pl-[10px] md:pl-[5px]'>{item.title}</h2>
                                <ul className='list-disc text-[14px] pl-[30px] md:pl-[20px] font-normal'>
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

export default AWSWork