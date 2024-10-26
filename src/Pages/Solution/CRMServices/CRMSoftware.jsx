import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import MeetingAll from './Components/MeetingAll'
import AdvancedCRM from './Components/AdvancedCRM'
import ExpectAfterTailored from './Components/ExpectAfterTailored'
import TechHeader from './Components/Technologies/TechHeader'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
const CRMSoftware = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Solution" solutionName="CRM Services"/>
      <OurPartener />
      <WhyChooseCTSlider category="Solution" solutionName="CRM Services"/>
      <MeetingAll />
      <AdvancedCRM />
      <ExpectAfterTailored />
      <TechHeader />
      <ReliableTools category="Solution" subCategory="CRM Services"/>
      <CaseStudies category="Solution" subCategory="CRM Services"/>
      <MeetOurClient />
      <AllFaq category="Solution" subCategory="CRM Services"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default CRMSoftware
