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

        <div className="w-full py-[50px] md:py-[10px] md:pb-[40px]">
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px]'>Apps We Support and Maintain</h1>
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

export default AppWeSupport;
