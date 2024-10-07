import React from 'react'

const CTService = () => {
    const CTServiceArr = [{
        title: "Financial software audit consulting", desc: (
            <ul>
                <li className='list-disc ms-5'>Auditing a client's existing financial management tools and their integration points, evaluating technical and economic pains of existing financial software, planning financial IT ecosystem improvements with software-only changes. ScienceSoft's services aim to ensure:</li>

            </ul>
        )
    }, {
        title: "Advanced financial technology", desc: (
            <ul>
                <li className='list-disc ms-5'>Designing a financial management solution based on the customer's unique business needs.</li>
                <li className='list-disc ms-5'>Choosing an optimal tech stack for solution development.</li>
                <li className='list-disc ms-5'>Automated aggregation and comprehensive analysis of multi-dimensional finance data to predict particular aspects </li>
            </ul>
        )
    }, {
        title: "Financial software development", desc: (
            <ul>
                <li className='list-disc ms-5'>Consulting on the use of cloud, AI and ML, big data, blockchain for:</li>
                <li className='list-disc ms-5'>Choosing an optimal tech stack for solution development.</li>
            </ul>
        )
    },
    {
        title: "Financial software implementation", desc: (
            <ul>
                <li className='list-disc ms-5'>Planning the gradual transition of a customer's financial software to modern techs without disrupting critical financial management operations.</li>

            </ul>
        )
    },
    {
        title: "Financial software maintenance", desc: (
            <ul>
                <li className='list-disc ms-5'>Financial software implementation in collaboration with a client's in-house IT team.</li>
                <li className='list-disc ms-5'>Covering up to 100% of financial software implementation</li>

            </ul>
        )
    },
    {
        title: "Financial software modernization", desc: (
            <ul>
                <li className='list-disc ms-5'>Planning the gradual transition of a customer's financial software to modern techs without disrupting critical financial management operations.</li>
            </ul>
        )
    }
    ]
    return (
        <div className='w-full mt-10 '>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>CT Service Scope </h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>Our financial software consulting services are customized to our clients’ needs and may cover:</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-8 w-[95%]'>
                {CTServiceArr.map((item, index) => (
                    <div key={index} className='lg:w-[30%] md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>

        </div>



    )
}

export default CTService
