import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import SoftwareDesign from './softwareDesigned/SoftwareDesign'
import IndustryExpertise from './industryExpertise/IndustryExpertise'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'

import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'


const CPlus = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Technologies" subCategory="C++" />
      <OurPartener />
      <WhyChooseCTSlider category="Technologies" subCategory="C++" />
      <SoftwareDesign />
      <IndustryExpertise />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="C++" />
      <CaseStudies category="Technologies" subCategory="C++" />
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="C++"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default CPlus