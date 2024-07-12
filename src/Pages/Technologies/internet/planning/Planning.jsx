import React from 'react'

const Planning = () => {
    const planningData = [{ title: "Consulting for the best IoT adoption", points: ["Investigating your business context and tasks/problems you want to address with IoT implementation.","Defining what data must be collected to meet project goals.","Hardware consulting.","Planning a data center with proper data processing and mining capabilities.","Setting up a data pipeline.","Functionally scoping each solution component: smart things, data warehousing and analytics solutions, control and user-facing apps."] }, { title: "IoT ecosystem setup:", points: ["Data generation layer: configuring IoT devices and connecting them to the network.","Edge computing: building a decentralized network to keep data processing close to where it originates, which allows for fast local decisions.","Data center setup: modelling a data processing environment for heterogeneous IoT data, applying machine learning and data science algorithms to identify patterns and trends needed for the solution."] }, { title: "IoT application management", points: ["Technical support and troubleshooting: quick identification of data quality, application availability and usage issues.","Cloud management: monitoring and optimization of cloud resources consumption.","Security management and regulatory compliance: network, server, database, and application vulnerability assessment; infrastructure compliance review; DDoS and APT prevention."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px] md:w-[90vw] md:mx-[20px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px]'>From Planning to Launch - We Hand You a Turnkey IoT Solution</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>Note: QA and testing services differ in the scope of activities involved. Software quality assurance (QA) is a process that may cover all stages of SDLC, from requirements gathering to maintenance, and ensures the software meets the established quality standards.Being a part of QA, testing is aimed to check software's functional, performance, security, and other aspects. For more details, you can check the article by ScienceSoft’s Senior QA Consultant.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    planningData.map((item, index) => {
                        return (
                            <div className='w-[32%] h-[320px] md:w-[100%] md:h-auto md:pb-[20px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[15px] px-[15px] box-border' key={index}>
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

export default Planning