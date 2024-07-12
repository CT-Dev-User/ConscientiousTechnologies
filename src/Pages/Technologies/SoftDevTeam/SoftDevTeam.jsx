import React from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AreaOfExpertise from './areaOfExpertise/AreaOfExpertise'
import ReasonstoOpt from './ReasonstoOpt/ReasonstoOpt'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import PartnerUpWithCity from '../../RepeatedComponents/partnerUpWithCity/PartnerUpWithCity'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'

const SoftDevTeam = () => {
  return (
    <div>
      <AllHeader category="Technologies" subCategory="Hire Developers" />
      <OurPartener />
      <WhyChooseCTSlider category="Technologies" subCategory="Hire Developers"/>
      <PartnerUpWithCity />
      <AreaOfExpertise />
      <ReasonstoOpt />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="Hire Developers"/>
      <CaseStudies category="Technologies" subCategory="Hire Developers"/>
      <Blog />    
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="Hire Developers"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default SoftDevTeam