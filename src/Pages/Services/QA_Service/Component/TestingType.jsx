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

        <div className="w-full py-16">
        <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
            <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>We Can Perform Any Testing Type You Need</h1>
            <h4 className='lg:text-2xl font-bold text-xl mt-5 lg:text-black text-[blue]'>Explore Our Consulting Services</h4>
            <p className='lg:w-11/12 mt-2 w-full text-base'>Comprehensive Testing Solutions: With CT, access a versatile array of testing types tailored to your needs. From functional to performance testing, ensure top-notch quality and reliability for your software projects.</p>
        </div>
        <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
            {softWareBussinessArr.map((item, index) => (
                <div key={index} className='lg:w-[46%] w-full lg:border lg:border-gray-300 p-3 h-auto py-3'>
                    <h1 className='text-lg text-bold'>{item.title}</h1>
                    <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
    )
}

export default TestingType
