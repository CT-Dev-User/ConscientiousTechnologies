import React from 'react'

const ServiceOption = () => {
    const ServiceOptionArr = [{
        title: "Advanced technologies consulting", desc: (
            <ul>
                <li className='list-disc ms-5'>Route modeling and optimization.</li>
                <li className='list-disc ms-5'>Transportation monitoring and risk management.
                </li>
                <li className='list-disc ms-5'>Demand forecasting and spend planning.</li>
                <li className='list-disc ms-5'>Predictive fleet maintenance.</li>
            </ul>
        )
    }, {
        title: "T&L product consulting", desc: (
            <ul>
                <li className='list-disc ms-5'> A clear T&L product concept.</li>
                <li className='list-disc ms-5'>A unique selling proposition to differentiate your product from competitors’ offerings.
                </li>
                <li className='list-disc ms-5'>User journey maps and a usability testing report.</li>
                <li className='list-disc ms-5'>A comprehensive UI kit.</li>
            </ul>
        )
    }
        , {
        title: "T&L solution implementation", desc: (
            <ul>
                <li className='list-disc ms-5'>Designing optimal T&L solution features, architecture, UX and UI, and tech stack.</li>
                <li className='list-disc ms-5'>Estimating the project's cost & timelines, ROI calculation.</li>
                <li className='list-disc ms-5'>T&L software development and testing.</li>
            </ul>
        )
    }
        , {
        title: "Outsourcing of IT functions", desc: (
            <ul>
                <li className='list-disc ms-5'>Outsourced QA.</li>
                <li className='list-disc ms-5'>Cybersecurity services.</li>
                <li className='list-disc ms-5'>Outsourced IT support.DevOps engineers.</li>
                <li className='list-disc ms-5'>Managed infrastructure services.</li>
                <li className='list-disc ms-5'>Outsourced help desk.</li>
            </ul>
        )
    }
        , {
        title: "IT staff augmentation", desc: (
            <ul>
                <li className='list-disc ms-5'> Developers (Java, .NET, Python, PHP, C++, and more).</li>
                <li className='list-disc ms-5'>Testers (manual and automated testing).</li>
                <li className='list-disc ms-5'>DevOps engineers.</li>
                <li className='list-disc ms-5'>Data analysts.</li>
            </ul>
        )
    }
        , {
        title: "-------", desc: (
            <ul>
                <li className='list-disc ms-5'>Managing RFxs, e-auctions, e-tenders.</li>
                <li className='list-disc ms-5'>AI-enabled cost-benefit analysis and carrier bid/rate compliance scoring.</li>
                <li className='list-disc ms-5'>Creation, editing, approval, and centralized storage of carrier contracts and transport orders.</li>
            </ul>
        )
    }
    ]
    return (
        <div className="w-full py-10">
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>
                    IT Solutions for T&L by CT                </h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>
                    Software we build is well-suited to managing a variety of vehicles, including:
                </p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-5 w-[95%]'>
                {ServiceOptionArr.map((item, index) => (
                    <div key={index} className='lg:w-[31%] md:w-[45%] w-full lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <div className='text-sm mt-3 font-medium'>

                            <p className='mb-2 text-base'>{item.desc}</p>

                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default ServiceOption
