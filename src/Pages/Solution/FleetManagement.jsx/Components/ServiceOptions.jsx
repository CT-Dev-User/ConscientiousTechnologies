import React from 'react'

const ServiceOptions = () => {
    const ServiceOptionsArr = [{
        title: "Fleet management consulting", desc: (
            <div>
                <p> For you to build a robust and scalable fleet management application, we:  </p>
                <ul className='mt-3'>
                    <li className='list-disc ms-5'>Analyze your needs or elaborate on your idea.</li>
                    <li className='list-disc ms-5'>Review application architecture or design one from scratch.
                    </li>
                    <li className='list-disc ms-5'>Advise on an optimal tech stack.
                    </li>
                    <li className='list-disc ms-5'>Audit or design a thought-out user experience.
                    </li>

                </ul>

            </div>

        )
    }, {
        title: "End-to-end fleet management", desc: (
            <div>
                <p> For you to get an application ready to bring ROI right away, we unfold the development process:  </p>
                <ul className='mt-3'>
                    <li className='list-disc ms-5'>Business analysis.</li>
                    <li className='list-disc ms-5'>User experience design.
                    </li>
                    <li className='list-disc ms-5'>Architecture and tracking algorithms design.
                    </li>
                    <li className='list-disc ms-5'>Application development.
                    </li>
                    <li className='list-disc ms-5'>Support and evolution.
                    </li>

                </ul>

            </div>
        )
    }, {
        title: "Fleet management solution ", desc: (
            <div>
                <p>We audit the application you currently use, design and implement new functional modules so that you get an opportunity to generate new value with legacy software. </p>

            </div>
        )
    }
    ]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Choose Your Service Option </h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Choose Your Service Option </p>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%] md:gap-y-[40px]'>
                {ServiceOptionsArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-[90%] h-[250px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto '>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ServiceOptions
