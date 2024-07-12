import React from 'react'

const VRDevService = () => {
    const softwareAdv = [{ title: "Business consulting", points: ["We help you finalize both detailed and high-level VR software concepts as we:","Gather and analyze your needs.","Formulate technical requirements and functional scope.","Help you choose VR equipment with your budget in mind."] }, { title: "Architecture design", points: ["We plan out an individual software architecture to ensure that your VR application will have:", "High performance​.","Fast scalability.","Easy configurability.","World-class security."] }, { title: "3D modeling", points: ["When creating VR content, we apply such immersion-improving elements as:","Highly realistic visuals.","Kinesthetic attributes.","Engaging animations."] }, { title: "VR software development", points: ["Our large and experienced team of VR developers delivers smooth VR experiences by:","Making use of motion/eye tracking and computer vision technologies.","Introducing intuitive interactivity and realistic sound acoustics.","Optimizing back ends for high-load VR processes."] }, { title: "Quality assurance", points: ["To guarantee the quality of your VR application, our testing engineers:","Run unit tests.","Combine manual testing with automated tests.","Provide detailed test documentation."] }, { title: "VR software integration", points: ["We integrate VR software not only with VR hardware but also with any software applications including:", "CMS.","LMS", "EHR.", "CRM."] }, { title: "VR software support", points: ["We maintain your VR application to ensure its seamless performance and long-lasting value and provide regular reports on the app's health and potential risks."] }, { title: "VR software evolution", points: ["We revamp your VR software and expand it with new functional capabilities to keep the solution competitive on the market and enhance its attractiveness for end users."] }, { title: "-------", points: ["Automated spotting of fraudulent activities in digital and physical environments.", "Intelligent enforcement"] }]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[80px] md:pt-[40px] pb-[20px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Our Virtual Reality Development Services</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>We work with all the mainstream technologies to expand the scope of functions the software can perform.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px]'>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[350px] h-[200px] border border-gray-300 p-3 md:w-full md:border-none md:p-0 md:h-auto md:py-3' key={index}>
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

export default VRDevService