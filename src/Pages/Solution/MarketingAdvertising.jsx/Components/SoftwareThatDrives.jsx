import React from 'react'

const SoftwareThatDrives = () => {
    const softwareThatDrivesArr = [{
        title: "Trade promotion management", desc: (
            <ul>
                <li className='list-disc ms-5'>Planning promotion campaigns and forecasting sales volume</li>
                <li className='list-disc ms-5'>Controlling how the commitments to retailers are executed</li>
                <li className='list-disc ms-5'>Reviewing the campaign results including the amount of shipped goods and promotion costs</li>
                <li className='list-disc ms-5'>Analyzing sales based on the data </li>
            </ul>
        )
    }
        , {
        title: "Advertising planning", desc: "Analyze and plan ad campaigns across multiple media channels such as TV, Internet, radio, printed press and out-of-home commercials. Combine all the media types in one plan to find the optimal advertising strategy tailored to your needs. Enjoy comprehensive visualized reports induced from sophisticated mathematical "
    }
        , {
        title: "Social marketing solutions", desc: (
            <ul>
                <li className='list-disc ms-5'>
                    Social marketing applications
                </li>
                <li className='list-disc ms-5'>
                    Social analytics to track user activity and prepare analytical reports
                </li>
                <li className='list-disc ms-5'>
                    Campaign applications integrated with social networks                </li>
            </ul>
        )
    }, {
        title: "Loyalty software", desc: (
            <ul>
                <li className='list-disc ms-5'>Customer account management: boost prospect interest through personalized offers and track the purchase history, promotion response and more</li>
                <li className='list-disc ms-5'>Mobile loyalty applications: personalize promotions and provide relevant product information, both in store and at home</li>

            </ul>
        )
    }, {
        title: "Marketing data analysis", desc: (
            <ul>
                <li className='list-disc ms-5'>Consumer survey analysis: collecting and processing survey data to uncover the real drivers of consumer behavior</li>
                <li className='list-disc ms-5'>Marketing campaign analysis: tracking key campaign metrics and monitoring overall performance</li>

            </ul>
        )
    }, {
        title: "Real-time bidding advertisement", desc: (
            <ul>

                <li className='list-disc ms-5'>Demand-side platforms (DSPs)</li>
                <li className='list-disc ms-5'>Supply-side platforms (SSPs)</li>
                <li className='list-disc ms-5'>Data management platforms (DMPs)</li>
                <li className='list-disc ms-5'>Analytics</li>

            </ul>
        )
    }
    ]
    return (

        <div className='w-full my-16'>
            <div className='lg:w-[85%] mx-auto w-full px-3 lg:px-0 mt-16'>
                <h1 className='lg:text-3xl font-bold text-2xl lg:text-black text-primary'>Software That Drives Markets </h1>
                <p className='lg:w-11/12 mt-2 w-full text-base'>Software we build is well-suited to managing a variety of vehicles, including:</p>
            </div>
            <div className='lg:w-[85%] flex mx-auto flex-wrap gap-7 mt-10 w-[95%]'>
                {softwareThatDrivesArr.map((item, index) => (
                    <div key={index} className='lg:w-[30%] md:w-[45%] lg:border lg:border-gray-300 p-3 h-auto py-3'>
                        <h1 className='text-lg text-bold'>{item.title}</h1>
                        <p className='text-sm mt-3 font-medium'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SoftwareThatDrives
