import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import MSServiceOptions from './msServiceOptions/MSServiceOptions'

import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
const Microsoft = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Technologies" subCategory="Microsoft" />
      <OurPartener />
      <WhyChooseCTSlider category="Technologies" subCategory="Microsoft"/>
      <MSServiceOptions />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="Microsoft"/>
      <CaseStudies category="Technologies" subCategory="Microsoft"/>
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="Microsoft"/>
      <BookFreeConsultation />
      <Footer /></div>
  )
}

export default Microsoft