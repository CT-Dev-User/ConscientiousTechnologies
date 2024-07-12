import React from 'react'

const KioskSoftService = () => {
    const kioskSoftServiceArr = [{
        title: "Billing", desc: "Performing money transactions by reading a credit/debit card and processing payment (e.g., banking kiosk software for banks)."
    }, {
        title: "Cash disbursement", desc: "Money issuing, whether as bank account withdrawal or as change for a paid purchase (e.g., for kiosk software for banks)."
    }, {
        title: "Order placement", desc: "Ordering a product from a given menu (e.g., for restaurant kiosk software)."
    }, {
        title: "Booking", desc: "E-queues, hotel booking, travel tickets."
    }, {
        title: "Printing on-demand", desc: "Printing images provided by a user (e.g., for self-service kiosk software for photo printing)."
    }, {
        title: "-------", desc: "Centralized knowledge repository with a powerful search engine, automated knowledge classification, knowledge sharing and collaboration tools."
    }
    ]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[60px] md:pt-[50px] md:pb-[20px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Kiosk-specific service features</h1>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%]'>
                {kioskSoftServiceArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-[90%] h-[200px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <p className='text-[13.5px] mt-2 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default KioskSoftService
