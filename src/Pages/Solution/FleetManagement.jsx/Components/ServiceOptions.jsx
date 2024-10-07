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


        <div className='w-full mt-16 mb-16'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-20'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Choose Your Service Option</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>Choose Your Service Option</p>
            </div>
            <div className='lg:w-[85%] mx-auto w-[95%]'>
                <div className='lg:w-[90%] flex flex-wrap gap-7 mt-12 w-[95%]'>
                    {ServiceOptionsArr.map((item, index) => (
                        <div key={index} className='lg:w-[31%]  md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-5'>
                            <h1 className='text-lg text-bold'>{item.title}</h1>
                            <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ServiceOptions
