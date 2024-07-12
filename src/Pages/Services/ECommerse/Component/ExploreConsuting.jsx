import React from 'react'

const ExploreConsuting = () => {
    const softWareBussinessArr = [{
        title: "QA outsourcing", desc: (
            <div>
                <ul>
                    <li className='list-disc ms-5'>Guiding towards an optimal ecommerce platform.</li>
                    <li className='list-disc ms-5'>Researching market opportunities: target audience, growth potential.</li>
                    <li className='list-disc ms-5'>Researching market entry complexities: competitors, governmental regulations.</li>
                    <li className='list-disc ms-5'>Draw up high-level functional and technical software requirements.</li>
                    <li className='list-disc ms-5'>Prepare the list of software features and integrations.</li>
                    <li className='list-disc ms-5'>Draw up a project roadmap and major milestones.</li>
                </ul>
            </div>

        )
    }, {
        title: "Business optimization and operational consulting", desc: (

            <ul>
                <li className='list-disc ms-5'>Improving stalled business workflows.</li>
                <li className='list-disc ms-5'>Planning a cross-system integration landscape.</li>
                <li className='list-disc ms-5'>Implementing a business-wide data management strategy.</li>
                <li className='list-disc ms-5'>Test automation consulting and setup.</li>
                <li className='list-disc ms-5'>Implementing a business-wide data management strategy.</li>
            </ul>
        )
    }
    ]
    return (
        <div className='w-[100vw] h-[auto] box-border pt-[60px] pb-[20px] md:py-[30px]'>
            <div className='w-[85%] md:w-full md:px-3 mx-auto'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[blue]'>Explore Our Consulting Services</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas ultrices scelerisque urna sed man proin lacinia. Posuere facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros. nibh elementum eget. Integer amet, consectetur adipiscing elit. </p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[95%]'>
                {softWareBussinessArr.map((item, index) => (
                    <div key={index} className='w-[47%] h-[250px] border border-gray-300 p-3 md:w-[100%] md:h-auto md:border-none'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ExploreConsuting
