import React from 'react'

const FeatureWeRecomded = () => {
    const FeatureWeRecomdedArr = [{
        title: "P2P domestic and money transfers.", desc: (
            <ul>
                <li className='list-disc ms-5'>-------</li>
            </ul>
        )
    }, {
        title: "Multi-currency payments", desc: (
            <ul>
                <li className='list-disc ms-5'>------</li>
            </ul>
        )
    }, {
        title: "AI-powered budget", desc: (
            <ul>
                <li className='list-disc ms-5'>------</li>
            </ul>
        )
    }, {
        title: "Online and offline QR- payments.", desc: (
            <ul>
                <li className='list-disc ms-5'>-------</li>
            </ul>
        )
    }, {
        title: "NFC-enabled mobile payments.", desc: (
            <ul>
                <li className='list-disc ms-5'>------</li>
            </ul>
        )
    }, {
        title: "managing virtual payment", desc: (
            <ul>
                <li className='list-disc ms-5'>------</li>
            </ul>
        )
    }, {
        title: "Biometric authentication.", desc: (
            <ul>
                <li className='list-disc ms-5'>-------</li>
            </ul>
        )
    }, {
        title: "Voice commands & text-to-speech", desc: (
            <ul>
                <li className='list-disc ms-5'>------</li>
            </ul>
        )
    }, {
        title: "ntelligent digital assistants.", desc: (
            <ul>
                <li className='list-disc ms-5'>------</li>
            </ul>
        )
    }
    ]
    return (

        <div className="w-full py-16">
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>
                    Features We Recommend to Add to Drive High User Satisfaction            </h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>
                    In our projects, we power payment solutions with the following capabilities to enhance software convenience for end users and drive high ROI:
                </p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-5 w-[95%]'>
                {FeatureWeRecomdedArr.map((item, index) => (
                    <div key={index} className='lg:w-[31%] md:w-[45%] w-full lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <div className='text-sm mt-3 font-medium'>
                            <p className='text-base'>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    )
}

export default FeatureWeRecomded
