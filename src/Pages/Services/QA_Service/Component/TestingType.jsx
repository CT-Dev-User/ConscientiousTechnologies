import React from 'react'

const TestingType = () => {
    const softWareBussinessArr = [{
        title: "Technology and market entry consulting", desc: (
            <ul>
                <li className='list-disc ms-5'>Functional testing.</li>
                <li className='list-disc ms-5'>Compatibility testing.</li>
                <li className='list-disc ms-5'>Localization testing.</li>
                <li className='list-disc ms-5'>Performance testing.</li>
                <li className='list-disc ms-5'>Usability testing.</li>
                <li className='list-disc ms-5'>Accessibility testing.</li>
                <li className='list-disc ms-5'>Security testing.</li>
            </ul>
        )
    }, {
        title: "Customer service and support", desc: (
            <ul>
                <li className='list-disc ms-5'>Release testing and testing of newly introduced functions.</li>
                <li className='list-disc ms-5'>Regression testing.</li>
                <li className='list-disc ms-5'>Exploratory testing.</li>
                <li className='list-disc ms-5'>Compliance testing.</li>
                <li className='list-disc ms-5'>Penetration testing.</li>
            </ul>
        )
    }]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[16px] md:text-[blue] md:hidden'>We Can Perform Any Testing Type You Need </h1>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[blue] hidden md:block'>Explore Our Consulting Services</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>Comprehensive Testing Solutions: With CT, access a versatile array of testing types tailored to your needs. From functional to performance testing, ensure top-notch quality and reliability for your software projects.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 justify-center items-center md:w-[95%]'>
                {softWareBussinessArr.map((item, index) => (
                    <div key={index} className='w-[45%] h-[200px] border border-gray-300 p-3 md:w-[100%] md:border-none md:h-auto md:py-3'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default TestingType
