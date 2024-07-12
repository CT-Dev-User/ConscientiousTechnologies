import React from 'react'
import perkOfWebDesignImg from './assets/perkOfWebDesign.png'
const PerkOfWebDesign = () => {
    const cloudServiceDevArr = [{ title: "Positive user experience", desc: "We advocate human-centered design and focus on the convenience and emotions of users when designing software workflows and interfaces. We follow ISO 9241 guidelines to create easy-to-use, understandable, and accessible software that interprets and responds to user’s input correctly."}, { title: "Competitive design", desc: "We combine your brand style and the latest web design trends, relying on the data gathered through rival company analysis, market studies and user research. This approach allows us to deliver one-of-a-kind and highly competitive designs that strengthen your brand identity, reflect brand’s values and support your marketing goals" }, { title: "Focus on your business objectives", desc: "When working on a design of a website or web portal, our team always targets your specific marketing and customer service objectives. We establish productive cooperation with the stakeholders to understand your business processes and deliver a design that will empower your individual conversion strategy."}, { title: "Tailored to your target audience", desc: "We perform in-depth analysis of your users' expectations at the very start of the project. The data we use for tailoring your visuals is gained from usability studies (in case of a web solution in development) or comprehensive UX and UI audit (in case of an already developed web solution)." }, { title: "Validation or Testing", desc: "If you’re an early-stage startup, you’re expected to grow. In this case, opting for a dedicated team can be a great choice. This approach will let you build a team quickly, save money on the hiring process and develop the product faster. While your in-house team is left to work on business-oriented tasks, the augmented team does the additional work." }, { title: "Launch", desc: "If you’re an early-stage startup, you’re expected to grow. In this case, opting for a dedicated team can be a great choice. This approach will let you build a team quickly, save money on the hiring process and develop the product faster. While your in-house team is left to work on business-oriented tasks, the augmented team does the additional work." }]

    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[blue]'>Perks of Web Design with CT</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>Elevate Experiences: Experience the perks of web design with CT. Unparalleled user-centricity, responsive interfaces, and seamless navigation redefine digital engagement. Unlock your brand's online potential with us.</p>
            </div>
            <div className='w-[85%] flex mx-auto mt-6 md:w-[95%] gap-[20px]'>
                <div className='w-[33%] h-[650px] md:hidden'>
                    <img src={perkOfWebDesignImg} alt="Perks of Web Design with CT" className='w-[100%] h-[100%]' />
                </div>
                <div className='w-[65%] flex gap-[20px] flex-wrap md:w-[100%] md:w-[100%]'>
                    {cloudServiceDevArr.map((items, i) => {
                        return (
                            <div className='w-[48%] h-[210px] p-3 border border-[#ccc] md:w-[100%] md:border-none md:h-auto md:py-4' key={i}>
                                <h4 className='md:text-[20px]'>{items.title}</h4>
                                <p className='text-[13.5px] mt-1'>{items.desc}</p>
                            </div>
                        )

                    })}
                </div>
            </div>

        </div>
    )
}

export default PerkOfWebDesign
