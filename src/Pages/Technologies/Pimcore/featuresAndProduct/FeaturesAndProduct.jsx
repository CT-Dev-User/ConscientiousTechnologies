import React from 'react'

const FeaturesAndProduct = () => {
    const softwareAdv = [{ title: "Web Content Management", points: ["microsites, landings, mobile sites and apps, responsive sites and more","multilanguage support","intuitive user interface","easy onboarding for admins with little to no coding skills"] }, { title: "Digital Asset Management (DAM/MAM solution)", points: ["built-in style editors, snippets, widgets and responsive design","convenient upload of new content","built-in image editor"] }, { title: "Product Information Management", points: ["“connect anything” architecture to interconnect any piece of content or data on the Pimcore platform and manage and control it from one central hub","advanced product attributes","API integration into the existing IT environment (Pimcore + Magento, e.g.)"] }, { title: "Integrated Multi-Channel E-Commerce-Platform", points: ["catalog, cart and search filter functionality","marketing and pricing rules","user-specific recommendations"] }, { title: "Multi-Channel-Publishing & Web-to-Print", points: ["schedule publishing","traditional web, social and mobile channels","traditional media such as print, smart TV, digital signage, etc. channels"] }, { title: "Customer Experience & Engagement Management", points: ["diversified UX scenarios","gamification strategies","interactive multimedia content"] },{title:"Marketing Campaign Management", points:["social media reporting","QR code management","Google Webmasters and Analytics integration"]},{title:"Targeting & Personalization", points:["content adaptation to the selected targeted segments",",self-learning system","data privacy policy compliance"]}]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px] md:w-[90vw] md:mx-[20px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl md:text-[24px]'>Products & Features</h1>
                <p className='text-[14px] font-semibold mt-[20px] md:text-[16px]'>ScienceSoft provides a full set of Salesforce professional services to support your CRM strategy with an appropriate software solution.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[49%] md:w-[100%] md:h-auto md:pb-[20px] h-[180px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px]'>{item.title}</h2>
                                <ul className='list-disc text-[14px] pl-[30px] font-normal'>
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

export default FeaturesAndProduct