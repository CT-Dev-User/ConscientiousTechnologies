import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import SoftwareThatDrives from './Components/SoftwareThatDrives'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
const MarketingAdvertising = () => {
      
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

    return (
        <div>
            <AllHeader category="Solutions" solutionName="Marketing & advertising"/>
            <OurPartener />
            <SoftwareThatDrives />
            <WhyChooseCTSlider category="Solutions" subCategory="Marketing & advertising"/>
            <CaseStudies category="Solutions" subCategory="Marketing & advertising"/>
            <MeetOurClient />
            <AllFaq category="Solutions" subCategory="Marketing & advertising"/>
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default MarketingAdvertising
