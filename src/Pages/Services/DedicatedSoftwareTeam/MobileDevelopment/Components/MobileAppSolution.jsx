import React from 'react';

const MobileAppSolution = () => {
    const ourmobileAppDevOption = [
        {
            title: "Product Design",
            desc:
                "We analyze the market and your brand identity to spot and manifest your competitive advantage."
        },
        {
            title: "Mobile app consulting",
            desc: "We assist with app concept finalization, advise on platform/device compatibility, plan project activities, and optimize development costs."
        },
        {
            title: "Mobile app design",
            desc: "Our designers create sleek and intuitive UX and visually appealing UI to ensure conversion, engagement, and easy adoption."
        },

        {
            title: "Mobile app Development",
            desc: "Our front-end developers can implement any design idea and ensure all interface elements work properly. We work with all most-used JavaScript frameworks, such as Angular, React, Meteor, Vue, Next, Ember."
        },
        {
            title: "Web Development",
            desc: "Our developers accurately implement the business logic of your web app on the back end. We rely on proven frameworks and ensure fast and quality coding in .Net, Java, Python, Node.js, PHP, Go."
        },
        {
            title: "Mobile app Integration",
            desc: "We set up APIs to integrate your web app with corporate or third-party systems and services. App integration ensures immediate data synchronization across systems."
        },
        {
            title: "QA and Testing",
            desc: "We guarantee that your web solution will function flawlessly, work fast, be user-friendly and secure. We have a team of skilled testing engineers to make promises like that."
        },
        {
            title: "Mobile app modernization",
            desc: "Providing L1, L2 and L3 support services, we deliver hot-fixes within 24 hours to prevent or resolve any issues in usage, technology and code that may arise. We help you provide high availability and trouble-free functionality of your web app."
        },
        {
            title: "support",
            desc: "We advance your web-based software to keep it efficient, competitive on the market, and compliant with all your evolving business needs. Our well-established DevOps processes let us roll out urgent updates within 1-2 days and release new, planned functional modules every 2-6 weeks."
        }
    ];

    return (
        <div className='w-full mt-16 mb-8'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Our Mobile Application Development Services</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>ScienceSoft assists in specific development stages as well as provides full-cycle mobile app implementation. Our mobile app development services include:</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
                {ourmobileAppDevOption.map((item, index) => (
                    <div key={index} className='lg:w-[30%] md:w-[45%]  lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg 2xl:text-xl text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MobileAppSolution;
