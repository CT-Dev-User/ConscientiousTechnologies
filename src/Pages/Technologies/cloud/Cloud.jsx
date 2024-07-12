import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import ScopeOfCTCloud from './scopeofCTCloud/ScopeOfCTCloud'
import AttributesOfOurApp from './attributes/AttributesOfOurApp'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
const Cloud = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Technologies" subCategory="Cloud" />
      <OurPartener />
      <WhyChooseCTSlider category="Technologies" subCategory="Cloud"/>
      <ScopeOfCTCloud />
      <AttributesOfOurApp />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="Cloud"/>
      <CaseStudies category="Technologies" subCategory="Cloud"/>
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="Cloud"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default Cloud