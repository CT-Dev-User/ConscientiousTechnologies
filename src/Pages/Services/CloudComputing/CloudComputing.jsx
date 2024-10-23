import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import CloudServiceDev from './Component/CloudServiceDev'
import Deployment from './Component/Deployment'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import BenefitsFromCloud from './Component/BenefitsFromCloud'
import WhatGetFromCloud from './Component/WhatGetFRomCloud'
import GoForCloud from './Component/GoForCloud'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'

const CloudComputing = () => {
      
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

    return (
        <div>
            <AllHeader category="Services" serviceName="Cloud Computing Services" />
            <OurPartener />
            <WhyChooseCTSlider category="Services" subCategory="Cloud Computing Services"/>
            <CloudServiceDev />
            <Deployment />
            <BenefitsFromCloud />
            <GoForCloud />
            <WhatGetFromCloud />
            <CaseStudies category="Services" subCategory="Cloud Computing Services"/>
            <MeetOurClient />
            <AllFaq category="Services" subCategory="Cloud Computing Services"/>
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default CloudComputing
