import React from 'react'

const SupportMaintainance = () => {
    const meetingAllArr = [{
        title: "Ecommerce testing", desc: (
            <ul>
                <li className='list-disc ms-5'>Website functionality for various user scenarios.
                </li>
                <li className='list-disc ms-5'>Ecommerce solution integrations.</li>
                <li className='list-disc ms-5'>SEO-related aspects.</li>
                <li className='list-disc ms-5'>Website performance.</li>
                <li className='list-disc ms-5'>Security.</li>
            </ul>
        )
    }, {
        title: "Ecommerce audit", desc: (
            <ul>
                <li className='list-disc ms-5'>Assessing digital experience and planning a website redesign strategy.</li>
                <li className='list-disc ms-5'>Reviewing the code and analyzing its impact on the website operation.</li>
                <li className='list-disc ms-5'>Revising and updating security patches.</li>
                <li className='list-disc ms-5'>Full checkup of IT infrastructure.</li>
            </ul>
        )
    }
    ]
    return (

        <div className='w-full my-16 '>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Support and Maintenance Services</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, consectetur adipiscing elit.</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
                {meetingAllArr.map((item, index) => (
                    <div key={index} className='md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default SupportMaintainance
