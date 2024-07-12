import React from 'react'

const CustomNet = () => {
    const customNetData = [{ title: "Business analysis and planning", points: ["Equipped with hands-on knowledge of 31 industries, our business analysts handle needs assessment and high-level scope definition of your .NET project, while dedicated PMs from our Project Management Office outline project requirements, tech stack, schedule, and more in the detailed project documentation."] }, { title: "UX/UI design", points: ["Our comprehensive UX design process, which includes thorough research, in-depth story mapping, and rigorous usability testing of wireframes and prototypes, culminates in visually appealing and  that guarantees widespread adoption of your .NET software."] }, { title: "Web development", points: ["We offer professional .NET Core, ADO.NET and ASP.NET development services to build secure, scalable, really fast and feature-rich web solutions. These solutions can range from simple websites to complex enterprise software."] }, { title: "Mobile development", points: ["We use Xamarin and .NET Core to build applications that can run on different mobile platforms. With the help of Xamarin, our team overcomes any obstacles of cross-platform development and tailors UIs to the original look-and-feel of iOS and Android."] },{title:"Desktop development",points:["We use .NET Core, Windows Forms, WPF and UWP to build beautiful, robust and reliable desktop apps that run on Windows, Linux, and macOS."]},{title:"Application integration",points:["Our integration architects and developers can establish secure, reliable, and fast connections between your .NET applications and other internal/external software solutions. We can build custom integration points (including using Azure and AWS integration services) or use ready-to-use ESBs/iPaaS of different providers (Talend, Boomi, MuleSoft, Informatica)."]},{title:"Application migration to the cloud", points:["ScienceSoft’s cloud consultants, .NET developers, and DevOps engineers can help you create a pragmatic cloud adoption strategy and execute fast, smooth, and reliable migrations of .NET applications to the cloud without unplanned disruptions and with maximum value to your business."]},{title:"Application modernization", points:["ScienceSoft’s .NET experts proficiently handled large-scale modernization of 20-year-old apps (!). We thoroughly investigate legacy code and infrastructures, restore documentation, describe and implement meaningful, reasonable improvements. These improvements can include architecture and tech stack updates, performace"]},{title:"Testing and QA", points:["ScienceSoft’s 75+ QA experts rely on a robust quality management system backed by ISO 9001 and perform functional, performance, usability, security, exploratory, and other types of testing. With our proprietary Integrated Manual and Automated Testing (IMAAT) approach, we help you reduce testing costs"]},{title:"Support and evolution", points:["We provide L1, L2, and L3 support for your .NET apps as well as comprehensive maintenance services that include performance optimization, compliance management, and security monitoring. We also ensure the continuous evolution of your .NET software, which may include adding AI, AR/VR, IoT,"]},{title:"-------",points:["Consumer survey analysis: collecting and processing survey data to uncover the real drivers of consumer behavior","Marketing campaign analysis: tracking key campaign metrics and monitoring overall performance"]},{title:"-------",points:["Demand-side platforms (DSPs)","Supply-side platforms (SSPs)","Data management platforms (DMPs)","Analytics"]}]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px] md:w-[90vw] md:mx-[20px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px] md:text-[#3970F0]'>Custom .NET Development Services</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>We cover the implementation of all core functionality modules of operations management software.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    customNetData.map((item, index) => {
                        return (
                            <div className='w-[49%] md:w-[100%] md:h-auto h-[180px] border border-[#fffff] mt-[20px] shadow-[4PX] flex flex-col gap-[10px] pt-[20px] box-border px-[10px] md:pb-[20px]' key={index}>
                                <h2 className='text-xl font-bold pl-[10px]'>{item.title}</h2>
                                <ul className='list-disc text-[14px] pl-[30px]'>
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

export default CustomNet