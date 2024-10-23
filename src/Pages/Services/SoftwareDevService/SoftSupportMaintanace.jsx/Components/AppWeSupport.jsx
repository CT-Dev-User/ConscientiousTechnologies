import React from 'react';

const AppWeSupport = () => {
    const ourSoftDevOption = [
        {
            title: "Web apps",
            desc:
                "Auditing the way your current software performs and meets your business needs, planning improvements to detected flaws and inefficiencies. Suggested action points may include software modernization, refactoring, migration."
        },
        {
            title: "Database apps",
            desc: "Planning gradual transition of your software to modern programming techs without disrupting critical business operations. Increasing the value of your software investment through legacy transformation."
        },
        {
            title: "Mobile apps",
            desc: "Our front-end developers can implement any design idea and ensure all interface elements work properly. We work with all most-used JavaScript frameworks, such as Angular, React, Meteor, Vue, Next, Ember."
        },

        {
            title: "AR/VR apps",
            desc: "Our developers accurately implement the business logic of your web app on the back end. We rely on proven frameworks and ensure fast and quality coding in .Net, Java, Python, Node.js, PHP, Go."
        },
        {
            title: "Desktop Apps",
            desc: "We set up APIs to integrate your web app with corporate or third-party systems and services. App integration ensures immediate data synchronization across systems."
        },
        {
            title: "Cloud security",
            desc: "We set up APIs to integrate your web app with corporate or third-party systems and services. App integration ensures immediate data synchronization across systems."
        }
    ];

    return (

        <div className="w-full py-16">
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>Apps We Support and Maintain</h1>
                <p className='lg:w-11/12 mt-2 w-full text-sm 2xl:text-base'>Software product development is the process of ideating and creating commercial software, either unique on the market or having a solid competitive advantage. ScienceSoft is a leading software product development company that helps product startups and mature companies stay confident about the quality and ROI of a new solution they bring to the market</p>
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

export default AppWeSupport;
