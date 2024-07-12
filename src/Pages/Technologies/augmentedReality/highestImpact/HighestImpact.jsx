import React from 'react'

const HighestImpact = () => {
    const softwareAdv = [{ title: "Healthcare", points: ["We deliver ISO 13485-compliant augmented reality apps that assist healthcare practitioners in performing various types of procedures: from simple injections or blood drawing to surgeries. We also see a proven value in using VR for medical education."] }, { title: "Retail", points: ["We give your customers a possibility to use AR for shopping online and make more informed decisions by virtually placing 3D models of products in the real world. Also, we can transform in-store experience with virtual fitting rooms or AR-assisted navigation across shopping malls and hypermarkets."] }, { title: "Training and education", points: ["We enable interactive learning environment for students at educational institutions and improve on-the-job training for specialists in different spheres, including manufacturing, construction, public services, healthcare, etc."] }, { title: "Real estate and interior design", points: ["We create virtual architectural and interior environment. Without any investment into furnishing, you can show how a house or an apartment turns into an individually furnished, cozy living space, and thus assist your clients in their purchasing decisions."] }, { title: "Manufacturing", points: ["AR- or VR-powered digital models of physical assets transform the process of prototyping and assembling new complex equipment and machinery. They also help reduce product design costs and facilitate engineers’ training and equipment maintenance and repair."] }, { title: "Supply chain and logistics", points: ["With AR, we bring transparency, efficiency and speed to supply chain processes. We implement solutions for warehouse simulations for optimal layout and operations, hands-free barcode scanning and warehouse picking, truck completeness checks and assisted driver navigation."] },{title:"Marketing and advertising", points:["Create head-turning marketing campaigns: overlay real-time live streaming with your sponsorship assets, install interactive AR screens in popular locations to enhance brand recognition. Or go beyond and come up with a creative AR-advertising idea of your own!"]},{title:"Tourism and culture", points:["AR brings sightseeing tours or museum/gallery rounds to the next level thanks to adding interactive and immersive content to selected showpieces, displaying historical info, and guiding visitors through specified locations."]},{title:"Entertainment", points:["AR apps help create immersive and delightful experience in online games, theater performances, social media, on live sports and entertainment events."]},{title:"Automotive", points:["AR dashboards make the driving more secure. They capture data from sensors and cameras installed inside and outside vehicles, and indicate danger signs (e.g., worsening road or weather conditions) to make them more noticeable for drivers."]}]
    return (
        <div className='w-[100vw] h-[auto] box-border py-[80px] md:pt-[40px] pb-[20px]'>
            <div className='w-[85%] mx-auto md:w-full md:px-3'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[#3970F0]'>Industries Where We Achieve the Highest Impact with XR</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px]'>Telecommunications software is used to organize and manage all aspects of electronic data (text, voice, video, etc.) exchange. ScienceSoft helps telcos ensure that their networks run like clockwork.</p>
            </div>
            <div className='w-[85%] flex mx-auto flex-wrap gap-x-[30px] gap-y-[30px] mt-[20px]'>
                {
                    softwareAdv.map((item, index) => {
                        return (
                            <div className='w-[45%] h-[180px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border md:w-full md:border-none md:p-0 md:h-auto md:py-3' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px] md:pl-0 md:text-[20px]'>{item.title}</h2>
                                <ul className='list-disc text-[14px] pl-[30px] font-normal md:pl-3 md:text-[14px]'>
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

export default HighestImpact