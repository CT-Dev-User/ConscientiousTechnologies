import React, { useEffect } from 'react'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import OurServiceScope from './Component/OurServiceScope'
import SoftDevProjectMan from './Component/SoftDevProjectMan'
import ReliableToolsHeading from '../../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import AllFaq from '../../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../../RepeatedComponents/haeder/AllHeader'
import PartnerUpWithCity from '../../../RepeatedComponents/partnerUpWithCity/PartnerUpWithCity'
import ReliableTools from '../../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
const SoftwareConsulting = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Software Development Services" subCategory="Software consulting"/>
      <OurPartener />
      <OurServiceScope />
      <PartnerUpWithCity />
      <SoftDevProjectMan />
      <ReliableToolsHeading />
      <ReliableTools category="Software Development Services" subCategory="Software consulting" />
      <CaseStudies category="Software Development Services" subCategory="Software consulting"/>
      <MeetOurClient />
      <AllFaq category="Software Development Services" subCategory="Software consulting"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default SoftwareConsulting
