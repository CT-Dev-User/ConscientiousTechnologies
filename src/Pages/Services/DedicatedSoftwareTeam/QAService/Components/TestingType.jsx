import React from 'react';

const TestingType = () => {
    const testingType = [
        {
            title: "Technology and market entry consulting",
            desc:
                <ul>
                    <li className='list-disc ms-5'>Functional testing.</li>
                    <li className='list-disc ms-5'>Compatibility testing.</li>
                    <li className='list-disc ms-5'>Localization testing.</li>
                    <li className='list-disc ms-5'>Performance testing.</li>
                    <li className='list-disc ms-5'>Usability testing.</li>
                    <li className='list-disc ms-5'> Accessibility testing.</li>
                    <li className='list-disc ms-5'>Security testing.</li>
                </ul>

        },
        {
            title: "Healthcare analytics",
            desc: <ul>
                <li className='list-disc ms-5'>Release testing and testing of newly introduced functions.</li>
                <li className='list-disc ms-5'>Regression testing.</li>
                <li className='list-disc ms-5'>Exploratory testing.</li>
                <li className='list-disc ms-5'>Compliance testing.</li>
                <li className='list-disc ms-5'>Usability testing.</li>
                <li className='list-disc ms-5'> Accessibility testing.</li>
                <li className='list-disc ms-5'>Penetration testing.</li>
            </ul>
        }


    ];

    return (
        <div className="w-full py-[60px] md:py-[30px]">
            <div className='w-[85%] mx-auto md:w-5/6'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[blue]'>We Can Perform Any Testing Type You Need</h1>
                <p className='w-11/12 text-sm mt-2 md:w-full md:text-[16px]'>Comprehensive Testing Solutions: With CT, access a versatile array of testing types tailored to your needs. From functional to performance testing, ensure top-notch quality and reliability for your software projects.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8'>
                {testingType.map((item, index) => (
                    <div key={index} className='w-[45%] h-[220px] border border-gray-300 p-3 shadow-md md:w-[100%] h-[auto] md:shadow-none md:border-0'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestingType;
