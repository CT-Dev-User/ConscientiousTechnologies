import React from 'react';

const OurSoftDevOption = () => {
    const ourSoftDevOption = [
        {
            title: "Product consulting",
            desc:
                (
                    <ul>
                        <li className='list-disc ms-5'>Competitive market analysis</li>
                        <li className='list-disc ms-5'>Definition of a unique selling proposition</li>
                        <li className='list-disc ms-5'>Idea productization and feature </li>
                        <li className='list-disc ms-5'>Brand positioning strategy management</li>
                        <li className='list-disc ms-5'>Product prototyping.</li>
                    </ul>
                )
        },
        {
            title: "Full-cycle product development",
            desc: (
                <ul>
                    <li className='list-disc ms-5'>Proof of Concept (PoC).</li>
                    <li className='list-disc ms-5'>UX and UI design.</li>
                    <li className='list-disc ms-5'>Iterative product development.</li>
                    <li className='list-disc ms-5'>Testing and Quality Assurance (QA). Integrations with third-party systems.</li>
                    <li className='list-disc ms-5'>Support for smooth and safe operation.</li>
                </ul>
            )
        },
        {
            title: "Product evolution",
            desc: "We take over redesign or further development of your product version or MVP. We start with code and architecture audits and proceed with product improvement and evolution."
        },
        {
            title: "Managed product development",
            desc: (
                <div>
                    <p>
                        Relying on your product requirements, we develop and deploy a scalable, portable, reliable, and secure software product ready to enter the market. On demand,
                    </p>


                    <ul>
                        <li className='list-disc ms-5'> we power the app with advanced capabilities.  </li>
                        <li className='list-disc ms-5'> Integrate the app with third-party systems. </li>
                    </ul>
                </div>


            )
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
        <div className="w-screen lg:py-16 py-8">
            <div className='w-[95%] lg:w-[85%] mx-auto'>
                <h1 className='lg:text-3xl text-xl 2xl:text-[2rem] font-bold text-blue'>Our Software Development Options for Startups</h1>
                <p className='w-11/12 text-sm mt-2 md:w-full lg:text-base'>Catalyzing Startup Success: Discover comprehensive software development options tailored for startups with CT. From MVPs to scalable solutions, we fuel growth and innovation for budding entrepreneurs.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-5 mt-8'>
                {ourSoftDevOption.map((item, index) => (
                    <div key={index} className='w-full md:w-[45%] lg:w-[31%]  h-[220px] border border-gray-300 p-3'>
                        <h1 className='text-[18px]'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurSoftDevOption;
