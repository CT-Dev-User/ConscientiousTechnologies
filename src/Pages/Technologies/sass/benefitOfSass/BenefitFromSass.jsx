import React from 'react'

const BenefitFromSass = () => {
    const benefitsOfSassData = [{ title: "Professional product design", points: ["Our business analysts and brand managers will translate your idea into a competitive product with intuitive UX, eye-catching UI, and a distinctive brand identity."] }, { title: "Reduced development costs", points: ["Due to mature project management, scalable cloud-native architectures, and ready-made components (frameworks, platforms, and cloud services)."] }, { title: "Smooth collaboration", points: ["With a mature outsourced team that shares a genuine commitment to creating a market-winning product."] }, { title: "Access to advanced techs", points: ["Including AI/ML, VR, AR, blockchain, and more, to power your product with value-adding capabilities."] }, { title: "Diligent project documentation", points: ["To ensure that full product knowledge is well-organized and available for future SaaS updates and maintenance."] }, { title: "Preventive cybersecurity approach", points: ["To detect vulnerabilities before they reach production and proactively secure your users’ personal data."] }, { title: "99.98% app availability", points: ["ADue to professional usage of cloud load balancing tools, thorough monitoring activities, and mature DevOps."] }, { title: "Easy SaaS evolution", points: ["Due to the modular architecture, clear separation of concerns (SoC), and standardized APIs."] }]
    return (
        <div className='w-[85vw] md:w-[90vw] md:mx-[20px] mx-[110px] py-[60px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px]'>How You Benefit From SaaS Development with ScienceSoft</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. ScienceSoft helps telcos ensure that their networks run like clockwork.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    benefitsOfSassData.map((item, index) => {
                        return (
                            <div className='w-[49%] h-[180px] md:h-auto md:pb-[20px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[15px] px-[15px] box-border' key={index}>
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

export default BenefitFromSass