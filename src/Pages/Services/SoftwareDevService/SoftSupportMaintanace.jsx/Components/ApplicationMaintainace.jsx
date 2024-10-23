import React from 'react';

const ApplicationMaintainace = () => {
    const appMainatainace = [
        {
            title: "Application evolution",
            desc: (
                <ul>
                    <li className='ms-5 list-disc'>Updating existing functional modules.</li>
                    <li className='ms-5 list-disc'> Developing new application features.</li>
                    <li className='ms-5 list-disc'>Suggesting new features based on user feedback.</li>
                    <li className='ms-5 list-disc'>Feasibility studies and ROI calculation.</li>
                </ul>
            )
        },
        {
            title: "Database apps",
            desc: (
                <ul>

                    <li className='ms-5 list-disc'>24/7 security monitoring, regular audits, incident troubleshooting.</li>
                    <li className='ms-5 list-disc'> Scheduled app vulnerability and misconfiguration diagnostics.</li>
                    <li className='ms-5 list-disc'>Detailed vulnerability reports.</li>
                    <li className='ms-5 list-disc'>Security and penetration testing.</li>
                    <li className='ms-5 list-disc'>Stress testing (simulation of DoS/DDoS attacks)</li>
                </ul>
            )
        },
        {
            title: "Mobile apps",
            desc: (
                <ul>
                    <li className='ms-5 list-disc'>
                        24/7 app performance monitoring to detect and resolve unfavorable trends.
                        Continuous performance and UX optimization</li>
                    <li className='ms-5 list-disc'>Regular app performance and usability testing (load, stability, scalability testing).</li>
                    <li className='ms-5 list-disc'> Updating existing functional modules.</li>
                </ul>
            )
        }
    ];

    return (

        <div className="w-full py-16">
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>Application maintenance services</h1>
                <p className='lg:w-11/12 mt-2 w-full text-sm 2xl:text-base'>We can provide any single service or a mix of services from the list</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
                {appMainatainace.map((item, index) => (
                    <div key={index} className='lg:w-[30%] md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default ApplicationMaintainace;
