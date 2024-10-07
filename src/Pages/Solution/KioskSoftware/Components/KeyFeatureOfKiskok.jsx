import React from 'react'

const KeyFeatureOfKiskok = () => {
    const KeyFeatureOfKiskokArr = [{
        title: "Information display and media ", desc: "Advertising, informational or navigational audio-video content (core feature of digital signage kiosk software)."
    }, {
        title: "Touch screen input", desc: "On-screen keyboard input, interaction with on-screen UI elements, e-signatures."
    }, {
        title: "Physical keyboard input", desc: "Processing of input data, use of basic control buttons (Ok, Cancel, Back)."
    }, {
        title: "Automatic onsite printing", desc: "Printing tickets and receipts to confirm service operations."
    }, {
        title: "-------", desc: "Centralized storage of multiple document types, easy document navigation and sharing, document templates."
    }, {
        title: "-------", desc: "Centralized knowledge repository with a powerful search engine, automated knowledge classification, knowledge sharing and collaboration tools."
    }
    ]
    return (

        <div className='w-full my-20'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Key Features of Kiosk Software</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>At ScienceSoft, we divide kiosk software features into three groups: operational, service, and security and maintenance.</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-10 w-[95%]'>
                {KeyFeatureOfKiskokArr.map((item, index) => (
                    <div key={index} className='lg:w-[30%]  md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default KeyFeatureOfKiskok
