import React from 'react'

const BenefitsBD = () => {
    const benefitsOfBD = [{ title: "Industry-centric approach", points: ["With practical experience in 30+ domains, we speak your language, understand your unique challenges, and offer pragmatic solutions that fit your processes."] }, { title: "Optimized costs", points: ["We use our DevOps and Agile expertise to build efficient development processes, apply feasible test automation, and rightsize cloud resources to reduce cloud fees."] }, { title: "High degree of automation", points: ["We set up automated data governance and reporting procedures to eliminate manual work for your IT and BI teams and reduce the risk of human errors."] }, { title: "User-friendly UI", points: ["Enjoy the complete clarity of your big data dashboards: we build easy-to-read reports and responsive interfaces that easily adapt to users’ needs (e.g., sleek visuals for C-level presentations, in-depth data exploration for analysts)."] },{title:"Clean data for reliable insights",points:["We establish robust big data quality management processes that ensure your data is always accurate, consistent, and complete to serve as a trustworthy source for analytics."]},{title:"95%+ AI/ML model accuracy", points:["We combine best-fit algorithms and create tailored data sets for model training, apply cross-validation to fine-tune hyperparameters, and enable self-learning for ML engines to deliver consistently accurate AI output."]}]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px] md:w-[90vw] md:mx-[20px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px]'>The Benefits of ScienceSoft’s Big Data Services</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>Internet of Things (IoT) services help elaborate your idea of IoT adoption and set up secure technology infrastructure for advanced data tasks.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    benefitsOfBD.map((item, index) => {
                        return (
                            <div className='w-[32.5%] md:w-[100%] md:h-auto md:pb-[20px] h-[240px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px]'>{item.title}</h2>
                                <ul className='list-disc text-[14px] pl-[30px] font-normal'>
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

export default BenefitsBD