import React from 'react'

const PerkOfOurApplication = () => {
    const OurDeskTop = [{ title: "Cross-platform development", desc: "Apart from targeting Windows, Mac OS, and Linux natively, ScienceSoft's desktop app developers help you reduce development time and costs up to 50% by delivering Qt-based app code that smoothly runs on all popular desktop operating systems.", bgColor:"FF6868" },
    {
        title: ".NET department", desc: (
            <ul>
                <li className='list-disc ms-5'>ISO 9001-certified quality management system.</li>
                <li className='list-disc ms-5'>High and stable app performance.</li>
                <li className='list-disc ms-5'>Multilayer security measures to safeguard apps against potential threats, including ensuring secure access to the required OS functions.</li>
                <li className='list-disc ms-5'>5Ease of integration with required software and hardware.</li>
                <li className='list-disc ms-5'>Strong focus on user experience and user interface design to ensure that the final app is not only visually appealing but also intuitive and easy-to-use.</li>
            </ul>
        ),
        bgColor:"1777BC"
    }, { title: "Focus on delivering high-quality results", desc: "ScienceSoft applies Agile principles, CI/CD, code reviews, and unit testing in all desktop app development projects. We also follow a set of KPIs that we share with our clients. Regular progress reports and integrated risk management provide transparency and project predictability. We also create detailed documentation for each development stage and set up collaboration that encourages knowledge sharing among team members and close cooperation with clients.", bgColor:"E751FF" }]
    return (
        <div className='w-[100vw] h-[auto] box-border pt-[100px] md:pt-[50px] pb-[30px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>Perks of Our Desktop Application Development</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'>Efficiency meets versatility: Our desktop application development offers seamless integration, customizable features, intuitive interfaces, and robust performance, empowering users with tailored solutions for enhanced productivity and streamlined operations.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8'>
                {OurDeskTop.map((item, index) => (
                    <div key={index} className='w-[350px] h-[320px] border border-gray-300 p-3 text-[white]' style={{backgroundColor:`#${item.bgColor}`}}>
                        <h1 className='text-[18px] w-[90%]'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-normal'>{item.desc}</p>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default PerkOfOurApplication
