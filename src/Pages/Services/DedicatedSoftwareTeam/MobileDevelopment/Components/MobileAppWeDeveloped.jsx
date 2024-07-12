import React from 'react'



import { useNavigate, useParams } from 'react-router-dom'
const MobileAppWeDeveloped = () => {
    const navigate = useNavigate()
    
    // const mobileAppWeDev = [{ title: "Mobile banking, billing apps.", image: mobileBanking }, { title: "Patient and hospital apps", image:  hospitality }, { title: "Messaging and VoIP apps", image: messagingApp}, { title: "mCommerce apps", image: mCommerse }, { title: "Internet of Things", image: IoT }, { title: "Investment app", image: investmentApp}, { title: "Insurance app", image: insuranceApp }, { title: "Blockchain", image: blockchain }]

    return (
        <div className='w-[100vw] h-[auto] text-[white] box-border pt-[100px] md:pt-[50px] pb-[100px] bg-[black]'>
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='text-3xl font-bold md:text-[24px] md:text-[blue]'>Explore Our Software Development Offering</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[16px] md:mb-4'>Software product development involves the conception and development of commercial software, focusing on creating unique offerings or those with a solid competitive edge. ValueCoders, a prominent software product development firm, empowers startup ventures and established companies to ensure their innovative solutions’ quality.</p>
            </div>
            {/* <div className='flex flex-wrap w-[85%] mx-auto gap-[30px] mt-[20px] items-center justify-center md:w-[95%]'>
                {mobileAppWeDev.map((items, i) => {
                    return (
                        <div style={{ backgroundImage: `url(${items.image})`, backgroundSize: "cover", backgroundPosition: "center" }} className='w-[260px] h-[230px] relative md:w-[320px] md:mt-2'>
                            <div className='absolute top-0 left-0 w-[100%] h-[100%]'>
                                <button className='text-white border border-[white] px-2 absolute bottom-[-10px] left-[-10px] bg-[#272727] h-[46px] text-left' onClick={() => { navigate(`/service/software-dev-service/${items.title}`) }}>{items.title}</button>
                            </div>
                        </div>
                    )
                })}
            </div> */}


        </div>
    )
}

export default MobileAppWeDeveloped
