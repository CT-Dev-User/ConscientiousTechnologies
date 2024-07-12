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
    } ,{
        title: "-------", desc: "Centralized storage of multiple document types, easy document navigation and sharing, document templates."
    }, {
        title: "-------", desc: "Centralized knowledge repository with a powerful search engine, automated knowledge classification, knowledge sharing and collaboration tools."
    }
    ]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:pt-[50px] md:pb-[20px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Key Features of Kiosk Software </h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>At ScienceSoft, we divide kiosk software features into three groups: operational, service, and security and maintenance.</p>

                <h4 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0] mt-5'>Key operational features </h4>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%]'>
                {KeyFeatureOfKiskokArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-[90%] h-[200px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default KeyFeatureOfKiskok
