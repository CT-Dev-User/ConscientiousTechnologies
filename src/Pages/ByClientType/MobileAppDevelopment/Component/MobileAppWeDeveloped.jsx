import React from 'react'
import mobileBanking from '../../../../assets/ByClientType/StartUpMobile/AppDeveloped/mobileBanking.png'
import hospitality from '../../../../assets/ByClientType/StartUpMobile/AppDeveloped/hospital.png'
import insurance from '../../../../assets/ByClientType/StartUpMobile/AppDeveloped/insuranceApp.png'
import investment from '../../../../assets/ByClientType/StartUpMobile/AppDeveloped/investmentApp.png'
import iot from '../../../../assets/ByClientType/StartUpMobile/AppDeveloped/IOT.png'
import mCommerse from '../../../../assets/ByClientType/StartUpMobile/AppDeveloped/mCommerse.png'
import msgVIP from '../../../../assets/ByClientType/StartUpMobile/AppDeveloped/msgVIP.png'
import blockchain from '../../../../assets/ByClientType/StartUpMobile/AppDeveloped/blockchain.png'

const MobileAppWeDeveloped = () => {
    const mobileAppDeveloped = [{ title: "Mobile banking, billing apps.", image: mobileBanking }, { title: "Patient and hospital apps", image: hospitality }, { title: "Messaging and VoIP apps", image: msgVIP }, { title: "mCommerce apps", image: mCommerse }, { title: "Internet of Things", image: iot }, { title: "Investment app", image: investment }, { title: "Insurance app", image: insurance }, { title: "Blockchain", image: blockchain }]
    return (
        <div className='pb-[70px]'>
            <div className='w-[85%] mx-auto md:w-5/6'>
                <h1 className='text-3xl font-bold md:text-base text-blue'>Our Software Development Options for Startups</h1>
                <p className='w-11/12 text-sm mt-2 md:w-full md:text-xs'>Catalyzing Startup Success: Discover comprehensive software development options tailored for startups with CT. From MVPs to scalable solutions, we fuel growth and innovation for budding entrepreneurs.</p>
            </div>
            <div className='flex flex-wrap w-[85%] mx-auto gap-[30px] mt-[20px]'>
                {mobileAppDeveloped.map((items, i) => {
                    return (
                        <div style={{ backgroundImage: `url(${items.image})`, backgroundSize: "cover", backgroundPosition: "center" }} className='w-[250px] h-[230px] relative'>
                            <div className='absolute top-0 left-0 w-[100%] h-[100%]'>
                                <button className='text-white border border-[white] px-[20px] absolute bottom-[-10px] left-[-10px] bg-[#272727] h-[45px] text-center' onClick={() => { navigate(`/start-up-product-development/${items.title}`) }}>{items.title}</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default MobileAppWeDeveloped
