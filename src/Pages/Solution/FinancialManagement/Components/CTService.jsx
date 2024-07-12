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
        <div className='w-[100vw] h-[auto] box-border pt-[100px] md:pt-[50px] pb-[30px] pb-[60px]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>CT Service Scope </h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Our financial software consulting services are customized to our clients’ needs and may cover:</p>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%] md:gap-y-[50px]'>
                {CTServiceArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-[full] h-[200px] border border-gray-300 p-3 md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default CTService
