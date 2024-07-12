import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import DevelopWithNode from './developwithnode/DevelopWithNode'
import IndustryExpertise from './industryExpertise/IndustryExpertise'
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

const Node = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Technologies" subCategory="Node" />
      <OurPartener />
      <WhyChooseCTSlider category="Technologies" subCategory="Node" />
      <DevelopWithNode />
      <IndustryExpertise />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="Node" />
      <CaseStudies category="Technologies" subCategory="Node" />
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="Node" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default Node