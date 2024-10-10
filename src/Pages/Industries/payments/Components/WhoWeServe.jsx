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

        <div className="w-full py-16">
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-[blue]'>
                Whom We Serve 
                </h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>
                From simple mobile apps to large-scale networks for multi-party transaction processing – as a fintech software development company, ScienceSoft ensures prompt and risk-free implementation of all kinds of fintech initiatives.
                </p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-5 w-[95%]'>
                {WhoWeServeArr.map((item, index) => (
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

export default WhoWeServe
