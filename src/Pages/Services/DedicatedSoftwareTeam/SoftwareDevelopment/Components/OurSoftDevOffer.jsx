import React from 'react'
import softDev from '../../../../../assets/Services/DedicatedDevTeam/SoftDevService/softDevService.png'
import customSoftDev from '../../../../../assets/Services/DedicatedDevTeam/SoftDevService/customDevCon.png'
import  enterPriseSoftware from '../../../../../assets/Services/DedicatedDevTeam/SoftDevService/enterpriseSoftware.png'
import  softProduct from '../../../../../assets/Services/DedicatedDevTeam/SoftDevService/soft_product.png'
import  cloudApplication from '../../../../../assets/Services/DedicatedDevTeam/SoftDevService/cloudApplication.png'
import  lagencySoft from '../../../../../assets/Services/DedicatedDevTeam/SoftDevService/lagencySoftware.png'
import  SoftSupport from '../../../../../assets/Services/DedicatedDevTeam/SoftDevService/softwareSupport.png'
import  maintainace from '../../../../../assets/Services/DedicatedDevTeam/SoftDevService/maintainance.png'


import { useNavigate} from 'react-router-dom'
const OurSoftDevOffer = () => {
    const navigate = useNavigate()
    
    const ourSoftDevOffer = [{ title: "Software consulting", image: softDev }, { title: "Custom software development", image:  customSoftDev }, { title: "Enterprise software ", image: enterPriseSoftware}, { title: "Software product ", image: softProduct }, { title: "Cloud application", image: cloudApplication }, { title: "Legacy software", image: lagencySoft}, { title: "Software support", image: SoftSupport }, { title: "maintenance", image: maintainace }]


    return (
        <div className='w-[100vw] h-[auto] text-[white] box-border pt-[100px] md:pt-[50px] pb-[30px] bg-[black] md:hidden'>
            fff
            <div className='w-[85%] mx-auto md:w-[90%]'>
                <h1 className='2xl:text-3xl font-bold text-2xl md:text-[blue]'>Explore Our Software Development Offering</h1>
                <p className='w-[95%] text-[14px] mt-2 md:w-[100%] md:text-[12px]'>Software product development involves the conception and development of commercial software, focusing on creating unique offerings or those with a solid competitive edge. ValueCoders, a prominent software product development firm, empowers startup ventures and established companies to ensure their innovative solutions’ quality.</p>
            </div>
            <div className='flex flex-wrap w-[85%] mx-auto gap-[30px] mt-[20px] items-center justify-center'>
                {ourSoftDevOffer.map((items, i) => {
                    return (
                        <div style={{ backgroundImage: `url(${items.image})`, backgroundSize: "cover", backgroundPosition: "center" }} className='w-[260px] h-[230px] relative'>
                            <div className='absolute top-0 left-0 w-[100%] h-[100%]'>
                                <button className='text-white border border-[white] px-2 absolute bottom-[-10px] left-[-10px] bg-[#272727] h-[45px] text-left' onClick={() => { navigate(`/service/software-dev-service/${items.title}`) }}>{items.title}</button>
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default OurSoftDevOffer
