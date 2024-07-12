import React from 'react'

const QASoftWareService = () => {
    const softWareBussinessArr = [{
        title: "QA outsourcing", desc: (
            <div>
                <p>ScienceSoft provides QA as a service and takes charge of the entire quality assurance process that includes:</p>
                <ul>
                    <li className='list-disc ms-5'>Designing a QA strategy and a test plan.</li>
                    <li className='list-disc ms-5'>Analyzing the relevancy of test automation for the project and calculating its ROI.</li>
                    <li className='list-disc ms-5'>Building all relevant testing activities into the SDLC and performing them.</li>
                    <li className='list-disc ms-5'>Providing regular test reports and reports on the QA team’s performance.</li>
                    <li className='list-disc ms-5'>Managing the testing team and enhancing its performance.</li>
                </ul>
            </div>

        )
    }, {
        title: "QA consulting", desc: (
            <div>
            <p>ScienceSoft’s QA consultants help eliminate QA process constraints, achieve higher QA maturity and efficiency by providing the following services:</p>
            <ul>
                <li className='list-disc ms-5'>QA process setup.</li>
                <li className='list-disc ms-5'>QA process audit and improvement.</li>
                <li className='list-disc ms-5'>QA consulting to obtain software, process, or QA maturity certifications.</li>
                <li className='list-disc ms-5'>Test automation consulting and setup.</li>
                <li className='list-disc ms-5'>Consulting on testing a specific software type (e.g., IoT, big data, SaaS software).</li>
                <li className='list-disc ms-5'>Performing relevant testing activities.</li>
                <li className='list-disc ms-5'>Training the in-house QA team.</li>
            </ul>
        </div>
        )
    },
    {
        title: "Managed testing services", desc: (
            <div>
            <p>To release on time, ScienceSoft provides a testing team that is managed by your in-house QA manager and requires little time to onboard. The team takes over a part or the whole scope of testing activities, including:</p>
            <ul>
                <li className='list-disc ms-5'>Setting up a test environment.</li>
                <li className='list-disc ms-5'>Preparing test data.</li>
                <li className='list-disc ms-5'>Developing test cases.</li>
                <li className='list-disc ms-5'>Executing tests.</li>
                <li className='list-disc ms-5'>Submitting and describing defects in a defect tracking system of your choice.</li>
                <li className='list-disc ms-5'>Providing regular test reports and reports on the QA team’s performance..</li>
            </ul>
        </div>
        )
    },
    {
        title: "One-time testing", desc: (
            <div>
            <p>ScienceSoft’s testing team performs all or selected types of testing:</p>
            <ul>
                <li className='list-disc ms-5'>Functional testing.</li>
                <li className='list-disc ms-5'>Compatibility testing.</li>
                <li className='list-disc ms-5'>Localization testing.</li>
                <li className='list-disc ms-5'>Performance testing.</li>
                <li className='list-disc ms-5'>Usability testing.</li>
                <li className='list-disc ms-5'>Security testing.</li>
                <li className='list-disc ms-5'>Testing before a major software release.</li>
            </ul>
        </div>
        )
    },
    {
        title: "Quality assessment", desc: (
            <div>
            <p>ScienceSoft’s IT professionals perform:</p>
            <ul>
                <li className='list-disc ms-5'>Manual code review and automated code audit to ensure code’s quality and adherence to coding conventions.</li>
                <li className='list-disc ms-5'>Checking your software compliance with relevant standards and regulations (e.g., HIPAA, GAMP, PCI DSS, GLBA, GDPR, etc.).</li>
            </ul>
        </div>
        )
    },
    {
        title: "Testing as a service", desc: (
            <div>
            <p>ScienceSoft takes over the whole testing process from test execution to testing process and team management. ScienceSoft’s is responsible for:</p>
            <ul>
                <li className='list-disc ms-5'>Creating test strategy and plan, managing testing activities.</li>
                <li className='list-disc ms-5'>Designing tests and writing test scripts</li>
                <li className='list-disc ms-5'>Providing tools and frameworks for automated testing.</li>
                <li className='list-disc ms-5'>Executing tests and providing test reports.</li>
            </ul>
        </div>
        )
    }
]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:py-[30px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[blue]'>Our QA and Software Testing Services</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>Note: QA and testing services differ in the scope of activities involved. Software quality assurance (QA) is a process that may cover all stages of SDLC, from requirements gathering to maintenance, and ensures the software meets the established quality standards.Being a part of QA, testing is aimed to check software's functional, performance, security, and other aspects. For more details, you can check the article by ScienceSoft’s Senior QA Consultant.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 justify-center items-center md:w-[95%]'>
                {softWareBussinessArr.map((item, index) => (
                    <div key={index} className='w-[350px] h-[350px] border border-gray-300 p-3 md:w-[100%] md:border-none md:h-auto md:py-3'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default QASoftWareService
