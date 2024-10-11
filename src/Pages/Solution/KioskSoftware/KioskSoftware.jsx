import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import Architecture from './Components/Architecture'
import KeyFeatureOfKiskok from './Components/KeyFeatureOfKiskok'
import KioskSoftService from './Components/KioskSoftService'
import SecurityMaintainance from './Components/SecurityMaintainance'
import SuccessFactor from './Components/SuccessFactor'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
const KioskSoftware = () => {
      
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

    return (
        <div>
            <AllHeader category="Solutions" solutionName="Kiosk Software"/>
            <OurPartener />
            <WhyChooseCTSlider category="Solutions" subCategory="Kiosk Software"/>
            <Architecture />
            <KeyFeatureOfKiskok />
            <KioskSoftService />
            <SecurityMaintainance />
            <SuccessFactor />
            <CaseStudies category="Solutions" subCategory="Kiosk Software"/>
            <MeetOurClient />
            <AllFaq category="Solutions" subCategory="Kiosk Software"/>
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default KioskSoftware
