import React, { useState } from 'react'
import softwareDev from "../../../HomePage/Component/assets/serviceWeOffer/SoftwareDevelopment.png"
import webDev from "../../../HomePage/Component/assets/serviceWeOffer/webDevelopment.png"
import mobileapp from "../../../HomePage/Component/assets/serviceWeOffer/mobileAppDevelopment.png"
import Dataanalytics from "../../../HomePage/Component/assets/serviceWeOffer/dataAnalytics.png"
import QAandTesting from "../../../HomePage/Component/assets/serviceWeOffer/QAandTesting.png"
import ITsupport from "../../../HomePage/Component/assets/serviceWeOffer/ITsupport.png"
import Cybersecurity from "../../../HomePage/Component/assets/serviceWeOffer/Cybersecurity.png"
import Helpdesk from "../../../HomePage/Component/assets/serviceWeOffer/Helpdesk.png"

const MObileAppsWeDev = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const areaofExpertiseData = [{ expertiseIn: "Mobile banking, billing apps.", expertiseImage: softwareDev }, { expertiseIn: "Patient and hospital apps", expertiseImage: webDev }, { expertiseIn: "Messaging and VoIP apps", expertiseImage: mobileapp }, { expertiseIn: "E-Commerce apps", expertiseImage: Dataanalytics }, { expertiseIn: "Internet of Things", expertiseImage: QAandTesting }, { expertiseIn: "Investment app", expertiseImage: ITsupport }, { expertiseIn: "Insurance app", expertiseImage: Cybersecurity }, { expertiseIn: "Blockchain", expertiseImage: Helpdesk }]
    return (
        <div className='w-[100vw] bg-[#000000] h-auto text-white py-[60px]'>
            <div className='w-[85%] md:w-[90%] mx-[110px] md:mx-[20px]'>
                <h1 className='text-3xl font-bold md:text-[#3970F0] md:text-[24px]'>Mobile Apps We Develop</h1>
                <p className='font-semibold text-[14px] mt-[20px] md:text-[16px]'>Mobile app development services are aimed at building iOS & Android applications that effectively complement or substitute web solutions. Having delivered 350+ mobile app development projects so far, ScienceSoft ensures app success by delivering striking UI, secure app code, and resilient back ends.</p>
            </div>
            <div className='w-[85%] md:w-[90%] flex flex-wrap justify-between mx-[110px] md:mx-[20px]'>
                {
                    areaofExpertiseData.map((item, index) => {
                        return (
                            <div key={index} className='w-[280px] md:w-[48%] md:h-[110px] h-[220px] mt-[30px] bg-[black] opacity-[0.6] relative' style={{ backgroundImage: `url(${item.expertiseImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                                <button className='border border-[white] px-[20px] w-[150px] md:w-[100%] h-[40px] absolute bottom-[-15px] left-[-5px] text-center bg-cyan-500 cursor-pointer text-[14px]
                                md:text-[12px]' style={{ opacity: hoveredIndex === index ? 1 : 0, transition: 'opacity .4s ease-in-out' }}>Explore More &rarr;</button>
                                <button className='border border-[white] px-[10px] absolute bottom-[-15px] left-[-5px] bg-[#474747] w-[220px] md:w-[100%] h-[40px] text-center text-[white] text-[14px] md:text-[12px]' style={{ opacity: hoveredIndex === index ? 0 : 1, transition: 'opacity .4s ease-in-out' }}>{item.expertiseIn}</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MObileAppsWeDev