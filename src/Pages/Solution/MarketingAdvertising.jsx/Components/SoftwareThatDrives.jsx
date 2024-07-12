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
        <div className='w-[100vw] h-[auto] box-border pt-[80px] py-[60px] md:pt-[50px] md:pb-[20px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Software That Drives Markets </h1>
                <p className='mt-2 w-[98%] mx-auto md:text-[16px]'>Software we build is well-suited to managing a variety of vehicles, including:</p>
                {/* <h4 className='text-[22px] ms-2 mt-5'>Need to build a new CRM?</h4> */}
            </div>

            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px] md:w-[95%]'>
                {softwareThatDrivesArr.map((item, index) => (
                    <div key={index} className='w-[350px] md:w-[90%] h-[200px] border border-gray-300 p-3 md:w-full md:border-none md:h-auto'>
                        <h1 className='text-[18px] font-bold'>{item.title}</h1>
                        <div className='text-[13.5px] mt-2 font-medium'>{item.desc}</div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default SoftwareThatDrives
