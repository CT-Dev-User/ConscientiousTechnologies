import React from 'react'

const SoftwareSolution = () => {
    const SoftwareSolutionArr = [{
        title: "Customer Experience", desc: (
            <ul>
                <li className='list-disc ms-5'>As consumers expect a truly omni-channel experience, we respond to this challenge by helping brands to provide consistent and personalized service – before, during and after a purchase.</li>
            </ul>
        )
    }, {
        title: "Ecommerce", desc: (
            <ul>
                <li className='list-disc ms-5'>We deliver scalable solutions that meet consumers’ requirements, facilitate their enjoyable, secure shopping experience and supply operational analytics for marketing and sales.</li>
            </ul>
        )
    }, {
        title: "Supply Chain", desc: (
            <ul>
                <li className='list-disc ms-5'>We enable real-time visibility into every stage of the supply chain, from manufacturing to checkout.</li>
            </ul>
        )
    }, {
        title: "Data Analysis & Business", desc: (
            <ul>
                <li className='list-disc ms-5'> We help you make informed decisions based on rich analytics sourced from your IT ecosystem and customer touchpoints.</li>
            </ul>
        )
    }, {
        title: "Computer Vision", desc: (
            <ul>
                <li className='list-disc ms-5'>ScienceSoft offers the development of custom image analysis solutions to increase the level of customer service in retail:</li>
            </ul>
        )
    }, {
        title: "Information Security", desc: (
            <ul>
                <li className='list-disc ms-5'>Being ISO 27001 certified, we maintain the highest standard of information security. We can help your business enable advanced security management.</li>
            </ul>
        )
    }
    ]
    return (

        <div className="w-full py-16 ">
        <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
            <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>
            Software Solutions We Provide               </h1>
            <p className='lg:w-11/12 mt-2 w-full text-base'>
            From simple mobile apps to large-scale networks for multi-party transaction processing – as a fintech software development company, ScienceSoft ensures prompt and risk-free implementation of all kinds of fintech initiatives.
            </p>
        </div>
        <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-5 w-[95%]'>
            {SoftwareSolutionArr.map((item, index) => (
                <div key={index} className='lg:w-[31%] md:w-[45%] w-full lg:border lg:border-gray-300 p-3 h-auto py-3'>
                    <h1 className='text-lg text-bold'>{item.title}</h1>
                    <div className='text-sm mt-3 font-medium'>

                        <p className='mb-2 text-base'>{item.desc}</p>

                    </div>
                </div>
            ))}
        </div>
    </div >
    )
}

export default SoftwareSolution
