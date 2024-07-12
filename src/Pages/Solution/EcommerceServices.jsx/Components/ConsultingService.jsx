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
        <div className='w-[100vw] h-[auto] box-border py-[10px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Explore Our Consulting Services</h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, consectetur adipiscing elit. </p>
                <h4 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0] pt-[30px]'>Need to build a new CRM?</h4>
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

export default ConsultingService
