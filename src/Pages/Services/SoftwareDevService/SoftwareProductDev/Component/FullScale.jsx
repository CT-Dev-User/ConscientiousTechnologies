import React from 'react';

const FullScale = () => {
    const ourSoftDevOption = [
        {
            title: "development consulting",
            desc:
                "Auditing the way your current software performs and meets your business needs, planning improvements to detected flaws and inefficiencies. Suggested action points may include software modernization, refactoring, migration."
        },
        {
            title: "Product development",
            desc:"Identifying flaws in a software architecture affecting performance and security, limiting software scalability. Redesigning the architecture with a focus on resilience, quick changes and optimized maintenance costs."
        },
        {
            title: "Product design",
            desc: "Planning gradual transition of your software to modern programming techs without disrupting critical business operations. Increasing the value of your software investment through legacy transformation."
        },
      
        {
            title: "Architecture design",
            desc: "Our front-end developers can implement any design idea and ensure all interface elements work properly. We work with all most-used JavaScript frameworks, such as Angular, React, Meteor, Vue, Next, Ember."
        },
        {
            title: "UI and UX design",
            desc: "Our developers accurately implement the business logic of your web app on the back end. We rely on proven frameworks and ensure fast and quality coding in .Net, Java, Python, Node.js, PHP, Go."
        },
        {
            title: "API development",
            desc: "We set up APIs to integrate your web app with corporate or third-party systems and services. App integration ensures immediate data synchronization across systems."
        },
        {
            title: "Compliance managment",
            desc: "We guarantee that your web solution will function flawlessly, work fast, be user-friendly and secure. We have a team of skilled testing engineers to make promises like that."
        },
        {
            title: "QA and testing",
            desc: "Providing L1, L2 and L3 support services, we deliver hot-fixes within 24 hours to prevent or resolve any issues in usage, technology and code that may arise. We help you provide high availability and trouble-free functionality of your web app."
        },
        {
            title: "Support and maintenence",
            desc: "We advance your web-based software to keep it efficient, competitive on the market, and compliant with all your evolving business needs. Our well-established DevOps processes let us roll out urgent updates within 1-2 days and release new, planned functional modules every 2-6 weeks."
        }
    ];

    return (
        <div className="w-full py-[50px] md:py-[30px]">
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px]'>Full-Cycle Software Product Development Services We Provide</h1>
                <p className='w-11/12 text-sm mt-2 md:w-full md:text-[16px]'>Software product development is the process of ideating and creating commercial software, either unique on the market or having a solid competitive advantage. ScienceSoft is a leading software product development company that helps product startups and mature companies stay confident about the quality and ROI of a new solution they bring to the market.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[95%]'>
                {ourSoftDevOption.map((item, index) => (
                    <div key={index} className='w-[350px] h-[220px] border border-gray-300 p-3 shadow-md md:border-none md:shadow-none'>
                        <h1 className='text-[18px]'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FullScale;
