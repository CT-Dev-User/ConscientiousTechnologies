import React from 'react'

const SoftImplementation = () => {
    const SoftImplementationArr = [{
        title: "What we do", desc: (
            <ul>
                <li className='list-disc ms-5'>Operations management software implementation</li>
                <li className='list-disc ms-5'>Research how operations are currently supported by technology: review applications in use, their architecture, functionality, and integrations between them to identify gaps</li>
            </ul>
        )
    }, {
        title: "What you get", desc: (
            <ul>
                <li className='list-disc ms-5'>Software & hardware (barcode / RFID / IoT techs) requirements specification. The level of elaboration is agreed upon individually.</li>
                <li className='list-disc ms-5'>Solution architecture design.</li>
                <li className='list-disc ms-5'>UX and UI (re)design.</li>
                <li className='list-disc ms-5'>Off-the-shelf software comparison.</li>
            </ul>
        )
    }
    ]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[40px] md:py-[20px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Operations management software implementation</h1>
                <p className='mt-2 w-[98%] mx-auto'>Challenges Fleet Management Software by ScienceSoft Solves </p>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[95%] md:gap-y-[40px]'>
                {SoftImplementationArr.map((item, index) => (
                    <div key={index} className='w-[45%] md:w-full h-[200px] border border-gray-300 p-3 md:h-auto md:border-none'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default SoftImplementation
