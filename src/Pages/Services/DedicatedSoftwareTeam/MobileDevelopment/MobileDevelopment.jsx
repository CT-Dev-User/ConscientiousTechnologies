import React, { useEffect } from 'react'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import MobileAppSolution from './Components/MobileAppSolution'
import ReliableToolsHeading from '../../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import AllFaq from '../../../RepeatedComponents/AllFaq/AllFaq'
import PartnerUpWithCity from '../../../RepeatedComponents/partnerUpWithCity/PartnerUpWithCity'
import AllHeader from '../../../RepeatedComponents/haeder/AllHeader'
import ReliableTools from '../../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AreaOfExperties from '../../../RepeatedComponents/AreaOfExperties/AreaOfExperties'
import MobileAppWeDeveloped from './Components/MobileAppWeDeveloped'

const MobileDevelopment = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="SubServices"  serviceName="Dedicated Software Teams" subServiceName="Mobile Development"/>
      <OurPartener/>
      <MobileAppSolution/>
      <PartnerUpWithCity/>
      <MobileAppWeDeveloped/>
      <AreaOfExperties category="Dedicated Software Team" subCategory="Mobile Development"/>
      <ReliableToolsHeading/>
      <ReliableTools category="Dedicated Software Team" subCategory="Mobile Development"/>
      <CaseStudies category="Dedicated Software Team" subCategory="Mobile Development"/>
      <MeetOurClient/>
      <AllFaq category="Dedicated Software Team" subCategory="Mobile Development"/>
      <BookFreeConsultation/>
      <Footer/>
    </div>
  )
}

export default MobileDevelopment
