import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import FunctionalModule from './Components/FunctionalModule'
import KeyCooperation from './Components/KeyCooperation'
import HRSoftService from './Components/HRSoftService'
import TechnologyHeader from './Components/TechnologyStack/TechnologyHeader'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
const HRSoftwareDevelopment = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Solutions" solutionName="HR Software Development Services"/>
      <OurPartener />
      <FunctionalModule />
      <WhyChooseCTSlider category="Solutions" subCategory="HR Software Development Services"/>
      <KeyCooperation />
      <HRSoftService />
      <TechnologyHeader />
      <ReliableTools category="Solutions" subCategory="HR Software Development Services"/>
      <CaseStudies category="Solutions" subCategory="HR Software Development Services"/>
      <MeetOurClient />
      <AllFaq category="Solutions" subCategory="HR Software Development Services"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default HRSoftwareDevelopment
