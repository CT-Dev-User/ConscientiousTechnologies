import React from 'react'

const OperationSupportSystem = () => {
    const operationSupportSystemArr = [{
        title: "VoIP-based services", desc: (
            <ul>

                <li className='list-disc ms-5'>Server-side applications for softswitches;</li>
                <li className='list-disc ms-5'>Customized SIP-clients.</li>
            </ul>
        )
    }, {
        title: "Monitoring", desc: (
            <ul>
                <li className='list-disc ms-5'>Network resources inventory;
                </li>
                <li className='list-disc ms-5'>Performance management; </li>
                <li className='list-disc ms-5'>Fault management;</li>
                <li className='list-disc ms-5'>Trouble ticketing;</li>
                <li className='list-disc ms-5'>Fraud protection.</li>
            </ul>
        )
    }
    ]
    return (

        <div className="w-full py-16">
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>Operations Support Systems (OSS)</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. ScienceSoft helps telcos ensure that their networks run like clockwork.</p>

            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-5 w-[95%]'>
                {operationSupportSystemArr.map((item, index) => (
                    <div key={index} className='lg:w-[46%] md:w-[45%] w-full lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default OperationSupportSystem
