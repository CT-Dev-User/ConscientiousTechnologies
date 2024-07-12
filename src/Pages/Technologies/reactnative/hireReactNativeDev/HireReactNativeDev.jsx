import React from 'react'

const HireReactNativeDev = () => {
    const SoftwareDesignData = [{ title: "Initial request", points: ["You send us a request, specifying the number of React Native experts you need, their desired level of experience, as well as the model of cooperation you're interested in."] }, { title: "CV scanning", points: ["ScienceSoft performs preliminary scanning of our experts' CVs in the database and sends you the most relevant ones."] }, { title: "Interview scheduling", points: ["You choose the CVs you're most interested in and let us know the time you're available for interviewing candidates."] }, { title: "Interviews", points: ["We help arrange the interviews with our React Native developers within 1-2 days."] }, { title: "SLA preparation", points: ["After you confirm the experts' competence, ScienceSoft works with you to compose a service level agreement (SLA)."] }, { title: "Onboarding", points: ["Once you sign the SLA, we set up communication with your team and our experts (led by ScienceSoft or your PM — you decide) immediately start working on your project."] }]
    return (
        <div className='w-[85vw] mx-[110px] md:w-[90vw] md:mx-[20px] pt-[60px] pb-[30px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px]'>How to Hire React Native Developers from ScienceSoft</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>We cover the implementation of all core functionality modules of operations management software.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    SoftwareDesignData.map((item, index) => {
                        return (
                            <div className='w-[32.5%] h-[160px] md:w-[100%] md:h-auto md:pb-[20px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[15px] px-[15px] box-border' key={index}>
                                <h2 className='text-xl font-bold pl-[10px] md:text-[24px]'>{item.title}</h2>
                                <ul className='list-disc text-[12px] pl-[20px] md:text-[16px]'>
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

export default HireReactNativeDev