import React from 'react'

const OpManFeature = () => {
    const OpManFeatureArr = [{
        title: "Operations optimization", desc: (
            <ul>
                <li className='list-disc ms-5'>with AI recommendations drawn from historical operations data and what-if scenario modeling (to balance production load across plants, compa re different versions of a production schedule, etc.).</li>
            </ul>
        )
    }, {
        title: "Inventory and warehouse", desc: (
            <ul>
                <li className='list-disc ms-5'>Analyze and plan ad campaigns across multiple media channels such as TV, Internet, radio, printed press and out-of-home commercials. Combine all the media types in one plan to find the optimal advertising strategy tailored to your needs. Enjoy comprehensive visualized reports induced from sophisticated mathematical </li>
            </ul>
        )
    }, {
        title: "Sales and purchase order", desc: (
            <ul>
                <li className='list-disc ms-5'>Social marketing applications</li>
                <li className='list-disc ms-5'>Social analytics to track user activity and prepare analytical reports</li>
                <li className='list-disc ms-5'>Campaign applications integrated with social networks</li>
            </ul>
        )
    }, {
        title: "Workforce management", desc: (
            <ul>
                <li className='list-disc ms-5'>Customer account management: boost prospect interest through personalized offers and track the purchase history, promotion response and more</li>
                <li className='list-disc ms-5'>Mobile loyalty applications: personalize promotions and provide relevant product information, both in store and at home</li>
            </ul>
        )
    }, {
        title: "Production quality control", desc: (
            <ul>
                <li className='list-disc ms-5'>Consumer survey analysis: collecting and processing survey data to uncover the real drivers of consumer behavior</li>
                <li className='list-disc ms-5'>Marketing campaign analysis: tracking key campaign metrics and monitoring overall performance</li>
            </ul>
        )
    }, {
        title: "--------------", desc: (
            <ul>
                <li className='list-disc ms-5'>Demand-side platforms (DSPs)</li>
                <li className='list-disc ms-5'>Supply-side platforms (SSPs)</li>
                <li className='list-disc ms-5'>Data management platforms (DMPs).</li>
                <li className='list-disc ms-5'>Analytics</li>
            </ul>
        )
    }

    ]
    return (
        <div className='w-[100vw] h-[auto] box-border pt-[40px] md:pt-[50px] pb-[30px] pb-[60px]'>
             <div className='w-[85%] mx-auto md:w-full md:px-3 py-[30px]'>
                <h1 className='text-2xl font-bold md:text-[24px] md:text-[#3970F0]'>CT Recommends: Top Operations Management Features to Consider </h1>
                <p className='md:text-[16px] mt-2'>We cover the implementation of all core functionality modules of operations management software.</p>

            </div>
            <div className='w-[85%] mx-auto md:w-full md:px-3 '>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>For production operations management</h1>

            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-8 md:w-[95%] md:gap-y-[50px]'>
                {OpManFeatureArr.map((item, index) => (
                    <div key={index} className='w-[350px] h-[200px] border border-gray-300 p-3 md:border-none md:h-auto '>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default OpManFeature
