import React from 'react'

const FinancialSerDomain = () => {
    const serviceDomain = [{ title: "Banking", points: ["-------"] }, { title: "Investment and wealth managment", points: ["-------"] }, { title: "Lending", points: ["-------"] }, { title: "Payment services", points: ["-------"] }, { title: "Insurance", points: ["-------"] }, { title: "Decentralized finance", points: ["-------"] }]
    return (


        <div className="w-full py-16">
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>Software Development for All Financial Service Domains</h1>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-5 w-[95%]'>
                {serviceDomain.map((item, index) => (
                    <div key={index} className='lg:w-[30%] md:w-[45%] w-full lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.points}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default FinancialSerDomain