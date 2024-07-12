import React from 'react'

const WhoWeServe = () => {
    const WhoWeServeArr = [{
        title: "Banks", desc: (
            <ul>
                <li className='list-disc ms-5'>-------</li>
            </ul>
        )
    }, {
        title: "Non-bank payment services", desc: (
            <ul>
                <li className='list-disc ms-5'>-------</li>
            </ul>
        )
    }, {
        title: "Card providers", desc: (
            <ul>
                <li className='list-disc ms-5'>-------</li>
            </ul>
        )
    }, {
        title: "Enterprises looking to digitalize", desc: (
            <ul>
                <li className='list-disc ms-5'>-------</li>
            </ul>
        )
    }, {
        title: "Paytech startups", desc: (
            <ul>
                <li className='list-disc ms-5'>-------</li>
            </ul>
        )
    }, {
        title: "Payment software companies", desc: (
            <ul>
                <li className='list-disc ms-5'>-------</li>
            </ul>
        )
    }
    ]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[80px] md:pt-[40px] pb-[20px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Whom We Serve </h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>From simple mobile apps to large-scale networks for multi-party transaction processing – as a fintech software development company, ScienceSoft ensures prompt and risk-free implementation of all kinds of fintech initiatives.</p>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px]'>
                {WhoWeServeArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-[90%] h-[200px] border border-gray-300 p-3 md:w-full md:border-none md:p-0 md:h-auto md:py-3'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default WhoWeServe
