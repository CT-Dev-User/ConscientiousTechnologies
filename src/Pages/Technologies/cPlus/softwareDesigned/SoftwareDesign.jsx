import React from 'react'

const SoftwareDesign = () => {
    const SoftwareDesignData = [{ title: "Image analysis", points: ["with AI recommendations drawn from historical operations data and what-if scenario modeling (to balance production load across plants, compare different versions of a production schedule, etc.)."] }, { title: "Image and video processing", points: ["Analyze and plan ad campaigns across multiple media channels such as TV, Internet, radio, printed press and out-of-home commercials. Combine all the media types in one plan to find the optimal advertising strategy tailored to your needs. Enjoy comprehensive visualized reports induced from sophisticated mathematical"] }, { title: "Audio signal processing", points: ["Social marketing applications", "Social analytics to track user activity and prepare analytical reports", "Campaign applications integrated with social networks"] }, { title: "3D modeling and rendering", points: ["Customer account management: boost prospect interest through personalized offers and track the purchase history, promotion response and more", "Mobile loyalty applications: personalize promotions and provide relevant product information, both in store and at home"] }, { title: "Virtual reality", points: ["Consumer survey analysis: collecting and processing survey data to uncover the real drivers of consumer behavior", "Marketing campaign analysis: tracking key campaign metrics and monitoring overall performance"] }, { title: "Information Security", points: ["Demand-side platforms (DSPs)", "Supply-side platforms (SSPs)", "Data management platforms (DMPs)", "Analytics"] }, { title: "User activity monitoring", points: ["Customer account management: boost prospect interest through personalized offers and track the purchase history, promotion response and more", "Mobile loyalty applications: personalize promotions and provide relevant product information, both in store and at home"] }, { title: "Application monitoring", points: ["Consumer survey analysis: collecting and processing survey data to uncover the real drivers of consumer behavior", "Marketing campaign analysis: tracking key campaign metrics and monitoring overall performance"] }, { title: "Ad exchange and bidding", points: ["Demand-side platforms (DSPs)", "Supply-side platforms (SSPs)","Data management platforms (DMPs)","Analytics"] }]
    return (
        <div className='w-[85vw] md:w-[90vw] mx-[110px] md:mx-[20px] pt-[60px] pb-[30px] md:pt-[30px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px]'>We Create Software Designed for</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>We Create Software Designed for</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    SoftwareDesignData.map((item, index) => {
                        return (
                            <div className='w-[32.5%] md:w-[100%] md:h-auto h-[180px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[15px] px-[15px] box-border' key={index}>
                                <h2 className='text-xl font-bold md:text-[24px]'>{item.title}</h2>
                                <ul className='list-disc text-[12px] pl-[20px] md:text-[16px]'>
                                    {
                                        item.points.map((point, i) => {
                                            return (
                                                <li key={i}>{point}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SoftwareDesign