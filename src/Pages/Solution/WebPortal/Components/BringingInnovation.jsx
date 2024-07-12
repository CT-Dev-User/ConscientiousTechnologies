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
        <div className='w-[100vw] h-[auto] box-border pt-[50px] md:pt-[50px] pb-[30px] pb-[60px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Bringing Innovations to Web Portal Design </h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Delight your customers, employees or business partners by offering them advanced opportunities to collaborate, work, and chat.</p>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%]'>
                {bringingInnovationArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-[90%] h-[200px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default BringingInnovation
