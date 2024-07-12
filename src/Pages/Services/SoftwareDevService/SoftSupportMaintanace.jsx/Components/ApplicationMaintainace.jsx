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

        <div className="w-full py-[50px] md:py-[30px] md:pb-[40px] hidden md:block">
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px]'>Application maintenance services</h1>
                <p className='w-11/12 text-sm mt-2 md:w-full md:text-[16px]'>We can provide any single service or a mix of services from the list.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[95%]'>
                {appMainatainace.map((item, index) => (
                    <div key={index} className='w-[350px] h-[220px] border border-gray-300 p-3 shadow-md md:shadow-none md:border-none md:h-auto md:py-3'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ApplicationMaintainace;
