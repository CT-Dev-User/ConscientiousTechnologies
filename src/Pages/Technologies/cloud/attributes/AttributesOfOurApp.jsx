import React from 'react'

const AttributesOfOurApp = () => {
    const attributesData = [{ title: "Scalability and portability", points: ["Auditing the way your current software performs and meets your business needs, planning improvements to detected flaws and inefficiencies. Suggested action points may include software modernization, refactoring, migration."] }, { title: "Resilience", points: ["Identifying flaws in a software architecture affecting performance and security, limiting software scalability. Redesigning the architecture with a focus on resilience, quick changes and optimized maintenance costs."] }, { title: "Flexibility", points: ["Planning gradual transition of your software to modern programming techs without disrupting critical business operations. Increasing the value of your software investment through legacy transformation."] }, { title: "Security", points: ["Our front-end developers can implement any design idea and ensure all interface elements work properly. We work with all most-used JavaScript frameworks, such as Angular, React, Meteor, Vue, Next, Ember."] }, { title: "Cost-efficiency", points: ["Our developers accurately implement the business logic of your web app on the back end. We rely on proven frameworks and ensure fast and quality coding in .Net, Java, Python, Node.js, PHP, Go."] }, { title: "Compliance", points: ["We set up APIs to integrate your web app with corporate or third-party systems and services. App integration ensures immediate data synchronization across systems."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px] md:w-[90vw] md:mx-[20px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px]'>Must-Have Attributes of Our Apps</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>Software product development is the process of ideating and creating commercial software, either unique on the market or having a solid competitive advantage. ScienceSoft is a leading software product development company that helps product startups and mature companies stay confident about the quality and ROI of a new solution they bring to the market.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    attributesData.map((item, index) => {
                        return (
                            <div className='w-[32.5%] h-[180px] md:w-[100%] md:h-auto md:pb-[20px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[15px] px-[15px] box-border' key={index}>
                                <h2 className='text-xl font-bold pl-[10px]'>{item.title}</h2>
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

export default AttributesOfOurApp