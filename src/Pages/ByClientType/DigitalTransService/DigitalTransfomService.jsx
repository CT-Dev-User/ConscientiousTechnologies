import React from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import IndustryService from './Component/IndustryService'
import UnfoldDigitalTrans from './Component/UnfoldDigitalTrans'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'

const DigitalTransfomService = () => {
  return (
    <div>
      <AllHeader category="Startup" subCategory="Digital Transform Services" />
      <OurPartener />
      <WhyChooseCTSlider category="Startup" subCategory="Digital Transform Services" />
      <IndustryService />
      <UnfoldDigitalTrans />
      <ReliableToolsHeading />
      <ReliableTools category="Startup" subCategory="Digital Transform Services" />
      <CaseStudies category="Startup" subCategory="Digital Transform Services"/>
      <MeetOurClient />
      <AllFaq category="Startup" subCategory="Digital Transform Services"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default DigitalTransfomService
