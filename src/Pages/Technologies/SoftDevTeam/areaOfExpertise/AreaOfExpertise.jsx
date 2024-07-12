import React, { useState } from 'react'
import softwareDev from "../../../HomePage/Component/assets/serviceWeOffer/SoftwareDevelopment.png"
import webDev from "../../../HomePage/Component/assets/serviceWeOffer/webDevelopment.png"
import mobileapp from "../../../HomePage/Component/assets/serviceWeOffer/mobileAppDevelopment.png"
import Dataanalytics from "../../../HomePage/Component/assets/serviceWeOffer/dataAnalytics.png"
import QAandTesting from "../../../HomePage/Component/assets/serviceWeOffer/QAandTesting.png"
import ITsupport from "../../../HomePage/Component/assets/serviceWeOffer/ITsupport.png"
import Cybersecurity from "../../../HomePage/Component/assets/serviceWeOffer/Cybersecurity.png"
import Helpdesk from "../../../HomePage/Component/assets/serviceWeOffer/Helpdesk.png"
const AreaOfExpertise = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const areaofExpertiseData = [{ expertiseIn: "Software Development", expertiseImage: softwareDev }, { expertiseIn: "Web Development", expertiseImage: webDev }, { expertiseIn: "Mobile Development", expertiseImage: mobileapp }, { expertiseIn: "Data analytics", expertiseImage: Dataanalytics }, { expertiseIn: "QA & Testing", expertiseImage: QAandTesting }, { expertiseIn: "IT support", expertiseImage: ITsupport }, { expertiseIn: "Cybersecurity", expertiseImage: Cybersecurity }, { expertiseIn: "Help desk", expertiseImage: Helpdesk }]
    return (
        <div className='w-[100vw] bg-[#000000] h-auto text-white py-[60px] pb-[100px]'>
            <div className='w-[85%] mx-[110px] md:w-[90%] md:mx-[20px]'>
                <h1 className='text-3xl font-bold md:text-[24px]'>Areas of Expertise</h1>
                <p className='font-semibold text-[14px] mt-[20px] md:text-[16px]'>Pioneering Excellence: CT's software development teams boast diverse expertise, spanning from web and mobile to AI and blockchain. Empower your projects with our innovative solutions and technical mastery</p>
            </div>
            <div className='w-[85%] flex flex-wrap justify-between mx-[110px] md:w-[90%] md:mx-[20px]'>
                {
                    areaofExpertiseData.map((item, index) => {
                        return (
                            <div key={index} className='md:w-[48%] w-[280px] h-[220px] md:h-[180px] mt-[30px] bg-[black] opacity-[0.6] relative' style={{ backgroundImage: `url(${item.expertiseImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                                <button className='border border-[white] px-[20px] w-[150px] h-[40px] absolute bottom-[-15px] left-[-5px] text-center bg-cyan-500 cursor-pointer text-[14px]  md:text-[12px]' style={{ opacity: hoveredIndex === index ? 1 : 0, transition: 'opacity .4s ease-in-out' }}>Explore More &rarr;</button>
                                <button className='border border-[white] px-[20px] absolute bottom-[-15px] left-[-5px] bg-[#474747] md:w-[180px] w-[200px] h-[40px] text-center text-[white] text-[14px] md:text-[12px]' style={{ opacity: hoveredIndex === index ? 0 : 1, transition: 'opacity .4s ease-in-out' }}>{item.expertiseIn}</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AreaOfExpertise