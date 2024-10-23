import React from 'react'

const OurServiceScope = () => {
    const softWareBussinessArr = [{
        title: "Software stack assessment", desc: "Auditing the way your current software performs and meets your business needs, planning improvements to detected flaws and inefficiencies. Suggested action points may include software modernization, refactoring, migration."
    }, {
        title: "Software architecture assessment", desc: "Identifying flaws in a software architecture affecting performance and security, limiting software scalability. Redesigning the architecture with a focus on resilience, quick changes and optimized maintenance costs."
    }
        , {
        title: "Software modernization", desc: " Planning gradual transition of your software to modern programming techs without disrupting critical business operations. Increasing the value of your software investment through legacy transformation."
    }
        , {
        title: "Software selection", desc: "Our front-end developers can implement any design idea and ensure all interface elements work properly. We work with all most-used JavaScript frameworks, such as Angular, React, Meteor, Vue, Next, Ember."
    }
        , {
        title: "Software development", desc: "Our developers accurately implement the business logic of your web app on the back end. We rely on proven frameworks and ensure fast and quality coding in .Net, Java, Python, Node.js, PHP, Go."
    }
        , {
        title: "Software compliance consulting", desc: "We set up APIs to integrate your web app with corporate or third-party systems and services. App integration ensures immediate data synchronization across systems."
    }
        , {
        title: "Team augmentation", desc: "We guarantee that your web solution will function flawlessly, work fast, be user-friendly and secure. We have a team of skilled testing engineers to make promises like that.."
    }
        , {
        title: "Setup of DevOps processes", desc: "Providing L1, L2 and L3 support services, we deliver hot-fixes within 24 hours to prevent or resolve any issues in usage, technology and code that may arise. We help you provide high availability and trouble-free functionality of your web app."
    }
        , {
        title: "Business process analysis", desc: "We advance your web-based software to keep it efficient, competitive on the market, and compliant with all your evolving business needs. Our well-established DevOps processes let us roll out urgent updates within 1-2 days and release new, planned functional modules every 2-6 weeks."
    }
    ]
    return (
        <div className='w-full my-16'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Our Service Scope: Technology Advisory and Beyond</h1>
                <p className='lg:w-11/12 mt-2 w-full text-sm 2xl:text-base'>Beyond Advisory: Unlocking Potential with CT. From strategic guidance to implementation, our service scope encompasses comprehensive technology solutions, propelling your business towards innovation and sustainable growth</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-10 w-[95%]'>
                {softWareBussinessArr.map((item, index) => (
                    <div key={index} className='lg:w-[30%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default OurServiceScope
