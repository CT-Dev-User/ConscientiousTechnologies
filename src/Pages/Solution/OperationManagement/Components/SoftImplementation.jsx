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

        <div className='w-full mt-10 '>
        <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
            <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Operations management software consulting</h1>
            <p className='lg:w-11/12 mt-2 w-full text-base'>Challenges Fleet Management Software by ScienceSoft Solves </p>
        </div>
        <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
            {SoftImplementationArr.map((item, index) => (
                <div key={index} className='lg:w-[30%] md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                    <h1 className='text-lg text-bold'>{item.title}</h1>
                    <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                </div>
            ))}
        </div>

    </div>
      

    )
}

export default SoftImplementation
