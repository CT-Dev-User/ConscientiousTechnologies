import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ChallengesFleet from './Components/ChallengesFleet'
import ServiceOptions from './Components/ServiceOptions'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import Solution from './Components/Solution'
const FleetManagement = () => {
      
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

    return (
        <div>
            <AllHeader category="Solutions" solutionName="Fleet Management"/>
            <OurPartener />
            <ChallengesFleet />
            <Solution/>
            <WhyChooseCTSlider category="Solutions" subCategory="Fleet Management"/>
            <ServiceOptions />
            <CaseStudies category="Solutions" subCategory="Fleet Management"/>
            <MeetOurClient />
            <AllFaq category="Solutions" subCategory="Fleet Management"/>
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default FleetManagement
