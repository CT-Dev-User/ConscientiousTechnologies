import React from 'react'

const BringingInnovation = () => {
    const bringingInnovationArr = [{
        title: "AI chatbots", desc: "for faster, yet helpful, customer service."
    }, {
        title: "AI-powered personalization", desc: "to create dynamic digital experience."
    }, {
        title: "Telemedicine", desc: "to enable remote healthcare services."
    },
    {
        title: "AR-powered user manuals", desc: "to explain visually each installation or repair step."
    },
    {
        title: "AR-powered learning programs", desc: "to visualize the concepts being taught and create interactive content."
    },
    {
        title: "Crypto payments", desc: "to enable intermediary-free transactions."
    },
    {
        title: "Live video consultations", desc: "to replace one-to-one customer service."
    },
    {
        title: "Remote servicing", desc: "to monitor the functioning and provide remote after-sales support of sold complex machinery or devices."
    },
    {
        title: "Voice-controlled navigation", desc: "for content search and input."
    }
    ]
    return (
        <div className='w-full my-20 box-border'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Bringing Innovations to Web Portal Design</h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>Delight your customers, employees or business partners by offering them advanced opportunities to collaborate, work, and chat.</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-10 w-[95%]'>
                {bringingInnovationArr.map((item, index) => (
                    <div key={index} className='lg:w-[30%] md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default BringingInnovation
