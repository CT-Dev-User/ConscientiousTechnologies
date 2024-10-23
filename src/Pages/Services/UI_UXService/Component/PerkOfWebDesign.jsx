import React from 'react'
import perkOfWebDesignImg from './assets/perkOfWebDesign.png'
const PerkOfWebDesign = () => {
    const cloudServiceDevArr = [{ title: "Positive user experience", desc: "We advocate human-centered design and focus on the convenience and emotions of users when designing software workflows and interfaces. We follow ISO 9241 guidelines to create easy-to-use, understandable, and accessible software that interprets and responds to user’s input correctly."}, { title: "Competitive design", desc: "We combine your brand style and the latest web design trends, relying on the data gathered through rival company analysis, market studies and user research. This approach allows us to deliver one-of-a-kind and highly competitive designs that strengthen your brand identity, reflect brand’s values and support your marketing goals" }, { title: "Focus on your business objectives", desc: "When working on a design of a website or web portal, our team always targets your specific marketing and customer service objectives. We establish productive cooperation with the stakeholders to understand your business processes and deliver a design that will empower your individual conversion strategy."}, { title: "Tailored to your target audience", desc: "We perform in-depth analysis of your users' expectations at the very start of the project. The data we use for tailoring your visuals is gained from usability studies (in case of a web solution in development) or comprehensive UX and UI audit (in case of an already developed web solution)." }, { title: "Validation or Testing", desc: "If you’re an early-stage startup, you’re expected to grow. In this case, opting for a dedicated team can be a great choice. This approach will let you build a team quickly, save money on the hiring process and develop the product faster. While your in-house team is left to work on business-oriented tasks, the augmented team does the additional work." }, { title: "Launch", desc: "If you’re an early-stage startup, you’re expected to grow. In this case, opting for a dedicated team can be a great choice. This approach will let you build a team quickly, save money on the hiring process and develop the product faster. While your in-house team is left to work on business-oriented tasks, the augmented team does the additional work." }]

    return (

        <div className='w-full mt-16 mb-8 '>
        <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
            <h1 className='lg:text-3xl font-bold text-xl lg:text-black text-primary'>Perks of Web Design with CT</h1>
            <p className='lg:w-11/12 mt-2 w-full text-sm 2xl:text-base'>Elevate Experiences: Experience the perks of web design with CT. Unparalleled user-centricity, responsive interfaces, and seamless navigation redefine digital engagement. Unlock your brand's online potential with us.</p>
        </div>
        <div className='w-full  lg:w-[85%] flex mx-auto mt-6 gap-20 justify-start '>
            <div className='w-[27%] h-[600px] hidden lg:block'>
                <img src={perkOfWebDesignImg} alt="Ecommerce Development Services" className='w-[100%] h-[100%]' />
            </div>
            <div className='lg:w-[65%]  flex gap-3 flex-wrap w-full lg:mt-0 mt-4'>
                {cloudServiceDevArr.map((items, i) => {
                    return (
                        <div className='md:w-[45%] w-full h-auto p-3 border border-[#ccc]' key={i}>
                            <h4 className='font-bold'>{items.title}</h4>
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
