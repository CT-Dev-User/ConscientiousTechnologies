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
        <div className='w-[100vw] h-[auto] box-border py-[10px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Support and Maintenance Services </h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, consectetur adipiscing elit.</p>
                <h4 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0] mt-5'>Need to build a new CRM?</h4>
            </div>

            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%] md:gap-y-[40px]'>
                {meetingAllArr.map((item, index) => (
                    <div key={index} className='w-[45%] h-[220px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default SupportMaintainance
