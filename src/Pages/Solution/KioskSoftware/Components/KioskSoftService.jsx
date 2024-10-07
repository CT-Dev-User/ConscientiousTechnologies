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
        <div className='w-full my-16'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Kiosk-specific service features</h1>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-10 w-[95%]'>
                {kioskSoftServiceArr.map((item, index) => (
                    <div key={index} className='lg:w-[30%]  md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default KioskSoftService
