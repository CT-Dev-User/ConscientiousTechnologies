import React from 'react'

const AIServiceOption = () => {
    const aiServiceData = [{ title: "AI consulting", points: ["We introduce a tailored AI launch strategy, design the optimal architecture and tech stack for your AI solution, and assess its economic feasibility. You also get expert advice on AI security and compliance and receive a detailed project plan for risk-free AI implementation."] }, { title: "PoC delivery", points: ["We code and train small AI software components to prove the technical viability of the idea and avoid costly changes along the way. These proof-of-concept modules can be reused later in development to speed up delivery."] }, { title: "MVP development", points: ["Launching an AI MVP is a cost-effective way to roll out the software faster and start driving early payback. We can deliver an MVP of your AI solution in 3+ months, taking full charge of the app development, AI model design and implementation, and all necessary QA procedures."] }, { title: "AI-based software development", points: ["Depending on your needs, we can integrate AI into your existing app or develop fully-featured AI-powered software from scratch. Our seasoned AI developers have all it takes to build industry-specific AI-powered solutions of any type and complexity and deploy them at scale."] }, { title: "AI model training", points: ["Our data scientists are here to help you train proprietary and open-source AI models or retrain your existing models to reach >95% output accuracy. We can compose a representative training dataset, define the appropriate hyperparameters, and tune the models to prevent under- and overfitting"] }, { title: "AI audit and revamp", points: ["We can perform an expert audit of your AI solution to identify the root cause of its operational issues and find pragmatic ways to fix them. Our experts can promptly upgrade the software and enhance AI models to help you generate higher value with your existing AI solution."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px] md:w-[90vw] md:mx-[20px] md:py-[30px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px]'>Choose Your AI Service Option</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>Unlock AI Potential: Navigate through CT's AI service options for tailored solutions. From natural language processing to computer vision, harness the power of AI for transformative outcomes.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    aiServiceData.map((item, index) => {
                        return (
                            <div className='w-[32.5%] h-[220px] md:w-[100%] md:h-auto md:pb-[10px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] md:pt-[10px] md:px-[5px] box-border' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px] md:pl-[5px]'>{item.title}</h2>
                                <ul className='list-disc text-[14px] pl-[30px] md:pl-[20px] font-normal md:text-[12px]'>
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

export default AIServiceOption