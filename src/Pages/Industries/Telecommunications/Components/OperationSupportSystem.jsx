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
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:pt-[20px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-2'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Operations Support Systems (OSS)</h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. ScienceSoft helps telcos ensure that their networks run like clockwork.</p>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%] md:gap-y-[40px]'>
                {operationSupportSystemArr.map((item, index) => (
                    <div key={index} className='w-[45%] md:w-[90%] h-[200px] border border-gray-300 p-3 md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default OperationSupportSystem
