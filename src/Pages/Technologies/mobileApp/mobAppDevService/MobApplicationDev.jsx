import React from 'react'

const MobApplicationDev = () => {
    const SoftwareDesignData = [{ title: "Product Design", points: ["We analyze the market and your brand identity to spot and manifest your competitive advantage."] }, { title: "Mobile app consulting", points: ["We assist with app concept finalization, advise on platform/device compatibility, plan project activities, and optimize development costs."] }, { title: "Mobile app design", points: ["Our designers create sleek and intuitive UX and visually appealing UI to ensure conversion, engagement, and easy adoption."] }, { title: "Mobile app Development", points: ["Our front-end developers can implement any design idea and ensure all interface elements work properly. We work with all most-used JavaScript frameworks, such as Angular, React, Meteor, Vue, Next, Ember."] }, { title: "Web Development", points: ["Our developers accurately implement the business logic of your web app on the back end. We rely on proven frameworks and ensure fast and quality coding in .Net, Java, Python, Node.js, PHP, Go."] }, { title: "Mobile app Integration", points: ["We set up APIs to integrate your web app with corporate or third-party systems and services. App integration ensures immediate data synchronization across systems."] },{title:"QA and Testing",points:["We guarantee that your web solution will function flawlessly, work fast, be user-friendly and secure. We have a team of skilled testing engineers to make promises like that."]},{title:"Mobile app modernization", points:["Providing L1, L2 and L3 support services, we deliver hot-fixes within 24 hours to prevent or resolve any issues in usage, technology and code that may arise. We help you provide high availability and trouble-free functionality of your web app."]},{title:"support", points:["We advance your web-based software to keep it efficient, competitive on the market, and compliant with all your evolving business needs. Our well-established DevOps processes let us roll out urgent updates within 1-2 days and release new, planned functional modules every 2-6 weeks."]}]
    return (
        <div className='w-[85vw] md:w-[90vw] mx-[110px] md:mx-[20px] py-[60px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px] md:text-[#3970F0]'>Our Mobile Application Development Services</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>ScienceSoft assists in specific development stages as well as provides full-cycle mobile app implementation. Our mobile app development services include:</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    SoftwareDesignData.map((item, index) => {
                        return (
                            <div className='w-[32.5%] md:w-[100%] md:h-auto md:pb-[20px] h-[180px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[15px] px-[15px] box-border' key={index}>
                                <h2 className='text-xl font-bold pl-[10px] md:text-[24px]'>{item.title}</h2>
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

export default MobApplicationDev