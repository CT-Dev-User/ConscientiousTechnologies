import React from 'react';

const ChooseYourAiService = () => {
    const ourSoftDevOption = [
        {
            title: "AI consulting",
            desc:
                "We introduce a tailored AI launch strategy, design the optimal architecture and tech stack for your AI solution, and assess its economic feasibility. You also get expert advice on AI security and compliance and receive a detailed project plan for risk-free AI implementation."
        },
        {
            title: "PoC delivery",
            desc: "We code and train small AI software components to prove the technical viability of the idea and avoid costly changes along the way. These proof-of-concept modules can be reused later in development to speed up delivery."
        },
        {
            title: "MVP development",
            desc: "Launching an AI MVP is a cost-effective way to roll out the software faster and start driving early payback. We can deliver an MVP of your AI solution in 3+ months, taking full charge of the app development, AI model design and implementation, and all necessary QA procedures."
        },
        {
            title: "AI-based software development",
            desc: "Depending on your needs, we can integrate AI into your existing app or develop fully-featured AI-powered software from scratch. Our seasoned AI developers have all it takes to build industry-specific AI-powered solutions of any type and complexity and deploy them at scale."
        },
        {
            title: "AI model training",
            desc: "Our data scientists are here to help you train proprietary and open-source AI models or retrain your existing models to reach >95% output accuracy. We can compose a representative training dataset, define the appropriate hyperparameters, and tune the models to prevent under- and overfitting."
        },
        {
            title: "AI audit and revamp",
            desc: "We can perform an expert audit of your AI solution to identify the root cause of its operational issues and find pragmatic ways to fix them. Our experts can promptly upgrade the software and enhance AI models to help you generate higher value with your existing AI solution."
        }
    ];

    return (

        <div className="w-full py-16">
        <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
            <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>Choose Your AI Service Option</h1>
            <p className='lg:w-11/12 mt-2 w-full text-base'>Unlock AI Potential: Navigate through CT's AI service options for tailored solutions. From natural language processing to computer vision, harness the power of AI for transformative outcomes.</p>
        </div>
        <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
            {ourSoftDevOption.map((item, index) => (
                <div key={index} className='lg:w-[30%] md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                    <h1 className='text-lg text-bold'>{item.title}</h1>
                    <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
    );
};

export default ChooseYourAiService;
