import React from 'react';

const ScopeEnterprise = () => {
    const ScopeEnterprise = [
        {
            title: "Enterprise application planning",
            desc:
                (
                    <div>
                        <p>ScienceSoft provides QA as a service and takes charge of the entire quality assurance process that includes:</p>
                        <ul className='pt-5'>
                            <li className='list-disc ms-5'>  Designing a QA strategy and a test plan.  </li>
                            <li className='list-disc ms-5'>Analyzing the relevancy of test automation for the project and calculating its ROI.</li>
                            <li className='list-disc ms-5'>Building all relevant testing activities into the SDLC and performing them.</li>
                            <li className='list-disc ms-5'> Providing regular test reports and reports on the QA team’s performance.
                            </li>
                            <li className='list-disc ms-5'> Managing the testing team and enhancing its performance.
                            </li>
                            <li className='list-disc ms-5'>ScienceSoft provides QA as a service and takes charge of the entire quality assurance process that includes:
                            </li>
                        </ul>
                    </div>
                )
        },
        {
            title: "Project planning",
            desc:
                (
                    <div>
                        <p>ScienceSoft’s QA consultants help eliminate QA process constraints, achieve higher QA maturity and efficiency by providing the following services:</p>
                        <ul className='pt-5'>
                            <li className='list-disc ms-5'>QA process setup. </li>
                            <li className='list-disc ms-5'>QA process audit and improvement.</li>
                            <li className='list-disc ms-5'>QA consulting to obtain software, process, or QA maturity certifications.</li>
                            <li className='list-disc ms-5'>Test automation consulting and setup
                            </li>
                            <li className='list-disc ms-5'>Consulting on testing a specific software type (e.g., IoT, big data, SaaS software).
                            </li>
                            <li className='list-disc ms-5'>Performing relevant testing activities.
                            </li>
                            <li className='list-disc ms-5'>Training the in-house QA team.
                            </li>
                        </ul>
                    </div>
                )
        },
        {
            title: "Enterprise application architecture",
            desc:
                (
                    <div>
                        <p>To release on time, ScienceSoft provides a testing team that is managed by your in-house QA manager and requires little time to onboard. The team takes over a part or the whole scope of testing activities, including:</p>
                        <ul className='pt-5'>
                            <li className='list-disc ms-5'>Setting up a test environment.</li>
                            <li className='list-disc ms-5'>Preparing test data.</li>
                            <li className='list-disc ms-5'>Developing test cases.</li>
                            <li className='list-disc ms-5'>Executing tests.
                            </li>
                            <li className='list-disc ms-5'>Submitting and describing defects in a defect tracking system of your choice.
                            </li>
                            <li className='list-disc ms-5'>Providing regular test reports and reports on the QA team’s performance.
                            </li>
                        </ul>
                    </div>
                )
        },
        {
            title: "UX and UI design",
            desc:
                (
                    <div>
                        <p>ScienceSoft’s testing team performs all or selected types of testing::</p>
                        <ul className='pt-5'>
                            <li className='list-disc ms-5'>Functional testing.</li>
                            <li className='list-disc ms-5'>Compatibility testing.</li>
                            <li className='list-disc ms-5'>Localization testing.</li>
                            <li className='list-disc ms-5'>Performance testing.
                            </li>
                            <li className='list-disc ms-5'>Usability testing.
                            </li>
                            <li className='list-disc ms-5'>Security testing.
                            </li>
                            <li className='list-disc ms-5'>Testing before a major software release.
                            </li>
                        </ul>
                    </div>
                )
        },
        {
            title: "Testing and QA",
            desc:
                (
                    <div>
                        <p>ScienceSoft’s IT professionals perform:</p>
                        <ul className='pt-5'>
                            <li className='list-disc ms-5'>Manual code review and automated code audit to ensure code’s quality and adherence to coding conventions</li>
                            <li className='list-disc ms-5'>Checking your software compliance with relevant standards and regulations (e.g., HIPAA, GAMP, PCI DSS, GLBA, GDPR, etc.).</li>

                        </ul>
                    </div>
                )
        },
        {
            title: "Legacy enterprise software",
            desc:
                (
                    <div>
                        <p>ScienceSoft takes over the whole testing process from test execution to testing process and team management. ScienceSoft’s is responsible for:</p>
                        <ul className='pt-5'>
                            <li className='list-disc ms-5'>Creating test strategy and plan, managing testing activities.</li>
                            <li className='list-disc ms-5'>Designing tests and writing test scripts.</li>
                            <li className='list-disc ms-5'>Providing tools and frameworks for automated testing.</li>
                            <li className='list-disc ms-5'> Executing tests and providing test reports.
                            </li>
                        </ul>
                    </div>
                )
        },
    ];

    return (

        <div className="w-full py-16">
        <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
            <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>The Scope of Our Enterprise Application Development Services</h1>
            <p className='lg:w-11/12 mt-2 w-full text-sm 2xl:text-base'>ScienceSoft company provides services that cover all aspects of enterprise application implementation. You can either choose one or several components from our offer to get a unique service pack fully covering your enterprise needs.</p>
        </div>
        <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
            {ScopeEnterprise.map((item, index) => (
                <div key={index} className='lg:w-[30%] md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                    <h1 className='text-lg text-bold'>{item.title}</h1>
                    <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                </div>
            ))}
        </div>
    </div>

    );
};

export default ScopeEnterprise;
