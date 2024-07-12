import React from 'react';

const AttributeOfOurApp = () => {
    const ourSoftDevOption = [
        {
            title: "Scalability and portability",
            desc: "Auditing the way your current software performs and meets your business needs, planning improvements to detected flaws and inefficiencies. Suggested action points may include software modernization, refactoring, migration."
        },
        {
            title: "Resilience",
            desc: "Identifying flaws in a software architecture affecting performance and security, limiting software scalability. Redesigning the architecture with a focus on resilience, quick changes and optimized maintenance costs."
        },
        {
            title: "Flexibility",
            desc: "Planning gradual transition of your software to modern programming techs without disrupting critical business operations. Increasing the value of your software investment through legacy transformation."
        },

        {
            title: "Security",
            desc: "Our front-end developers can implement any design idea and ensure all interface elements work properly. We work with all most-used JavaScript frameworks, such as Angular, React, Meteor, Vue, Next, Ember."
        },
        {
            title: "Cost-efficiency",
            desc: "Our developers accurately implement the business logic of your web app on the back end. We rely on proven frameworks and ensure fast and quality coding in .Net, Java, Python, Node.js, PHP, Go."
        },
        {
            title: "Compliance",
            desc: "We set up APIs to integrate your web app with corporate or third-party systems and services. App integration ensures immediate data synchronization across systems."
        }
    ];

    return (
        <div className="w-full py-[60px] md:py-[40px] md:px-3">
            <div className='w-[85%] mx-auto md:w-full'>
                <h1 className='text-3xl font-bold md:text-base text-blue md:hidden'>Must-Have Attributes of Our Apps</h1>
                <h1 className='text-3xl font-bold md:text-[24px] text-[blue] hidden md:block'>Why Conscientious Tech?</h1>
                <p className='w-11/12 text-sm mt-2 md:w-full md:text-[16px]'>Software product development is the process of ideating and creating commercial software, either unique on the market or having a solid competitive advantage. ScienceSoft is a leading software product development company that helps product startups and mature companies stay confident about the quality and ROI of a new solution they bring to the market.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[95%]'>
                {ourSoftDevOption.map((item, index) => (
                    <div key={index} className='w-[350px] h-[220px] border border-gray-300 p-3 shadow-md md:shadow-none md:border-none md:h-auto md:py-3'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AttributeOfOurApp;
