import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import Planning from './planning/Planning'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
const Internet = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
            <AllHeader category="Technologies" subCategory="Internet of Things" />

      <OurPartener />
      <WhyChooseCTSlider category="Technologies" subCategory="Internet of Things"/>
      <Planning />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="Internet of Things"/>
      <CaseStudies category="Technologies" subCategory="Internet of Things"/>
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="Internet of Things"/>
      <BookFreeConsultation />
      <Footer /></div>
  )
}

export default Internet