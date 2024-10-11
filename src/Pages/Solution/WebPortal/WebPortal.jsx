import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import WebPortalWeCreated from './Components/WebPortalWeCreated'
import BringingInnovation from './Components/BringingInnovation'
import LayingtheFoundation from './Components/LayingtheFoundation'
import WebDevSteps from './Components/WebDevSteps'
import TechPlatformHeader from '../ContentManagement/Components/TechnologyPlatform/TechPlatformHeader'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
const WebPortal = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Solutions" solutionName="Web Portal"/>
      <OurPartener />
      <WhyChooseCTSlider category="Solutions" subCategory="Web Portal"/>
      <WebPortalWeCreated />
      <BringingInnovation />
      <LayingtheFoundation />
      <WebDevSteps />
      <TechPlatformHeader />
      <ReliableTools category="Solutions" subCategory="Web Portal"/>
      <CaseStudies category="Solutions" subCategory="Web Portal"/>
      <MeetOurClient />
      <AllFaq category="Solutions" subCategory="Web Portal"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default WebPortal
