import React from 'react'

const ConsultingService = () => {
    const meetingAllArr = [{
        title: "Technology and market entry consulting", desc: (
            <ul>
                <li className='list-disc ms-5'>Guiding towards an optimal ecommerce platform.</li>
                <li className='list-disc ms-5'>Researching market opportunities: target audience, growth potential. </li>
                <li className='list-disc ms-5'> Researching market entry complexities: competitors, governmental regulations.</li>
            </ul>
        )
    }, {
        title: "Business optimization and operational consulting", desc: (
            <ul>
                <li className='list-disc ms-5'>Improving stalled business workflows.</li>
                <li className='list-disc ms-5'>Planning a cross-system integration landscape.</li>
                <li className='list-disc ms-5'>Implementing a business-wide data management strategy.</li>
                <li className='list-disc ms-5'>Reviewing your digital experience strategy to drive business KPIs up.</li>
            </ul>
        )
    }
    ]
    return (
        <div className='w-full mt-16 mb-8'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Explore Our Consulting Services</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, consectetur adipiscing elit.</p>
            </div>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-8'>
                <h4 className='lg:text-2xl font-bold text-xl lg:text-black text-primary'>Need to build a new CRM?</h4>

            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-4 w-[95%]'>
                {meetingAllArr.map((item, index) => (
                    <div key={index} className='md:w-[46%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default ConsultingService
