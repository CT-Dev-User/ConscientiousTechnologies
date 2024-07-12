import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import PhpDevelopersStandOut from './phpDevelopersStandOut/PhpDevelopersStandOut'
import CorporationModel from './corporationModel/CorporationModel'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'

const Php = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Technologies" subCategory="PHP" />
      <OurPartener />
      <WhyChooseCTSlider category="Technologies" subCategory="PHP"/>
      <PhpDevelopersStandOut />
      <CorporationModel />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="PHP"/>
      <CaseStudies category="Technologies" subCategory="PHP"/>
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="PHP"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default Php