import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import CMSKeyFeatures from './Components/CMSKeyFeatures'
import WhatYouWillGet from './Components/WhatYouWillGet'
import MeetYouWhere from './Components/MeetYouWhere'
import TechPlatformHeader from './Components/TechnologyPlatform/TechPlatformHeader'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
const ContentManagement = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div>
      <AllHeader category="Solutions" subCategory="Content Management"/>
      <OurPartener />
      <WhyChooseCTSlider category="Solutions" subCategory="Content Management"/>
      <CMSKeyFeatures />
      <WhatYouWillGet />
      <MeetYouWhere />
      <TechPlatformHeader />
      <ReliableTools category="Solutions" subCategory="Content Management"/>
      <CaseStudies category="Solutions" subCategory="Content Management"/>
      <MeetOurClient />
      <AllFaq category="Solutions" subCategory="Content Management"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default ContentManagement
