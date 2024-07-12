import React from 'react'
import apiDevIntegration from './ApiDevIntegration.png'
const IndustryService = () => {
    const webSolutionArr = [{ title: "Healthcare", desc: "Plan an API that perfectly corresponds to your business needs and goals and brings max revenue." },
     { title: "Financial service", desc: "Get a scalable, trusted and easy-to-use API designed, implemented, and smoothly integrated with back-end services." }, { title: "Manufacturing", desc: "Have your APIs high-performing and stable on a daily basis with an eye on scalability." }, { title: "Insurance", desc: "Get your API designed, developed, integrated with back-end solutions and continuously supported for smooth and safe work." }]

    return (
        <div className='w-[100vw] h-[auto] box-border pt-[100px] md:pt-[50px] pb-[30px] pb-[60px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue]'>Industry-Specific Digital Transformation </h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'> We offer tailored API development services to suit your specific needs, ensuring seamless integration with your existing systems and delivering efficient communication between your applications</p>
            </div>
            <div className='w-[85%] flex mx-auto mt-6 justify-between'>
                <div className='w-[27%] h-[440px]'>
                    <img src={apiDevIntegration} alt="What Web Solution Do You Need" className='w-[100%] h-[100%]' />
                </div>
                <div className='w-[70%] flex gap-2 flex-wrap'>
                    {webSolutionArr.map((items, i) => {
                        return (
                            <div className='w-[40%] h-[215px] p-3 border border-[#ccc]'>
                                <h4>{items.title}</h4>
                                <p className='text-[14px] mt-1'>{items.desc}</p>
                            </div>
                        )

                    })}
                </div>
            </div>

        </div>
    )
}

export default IndustryService
