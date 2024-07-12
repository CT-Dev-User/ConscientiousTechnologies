import React from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import WhatWebSolution from './Component/WhatWebSolution'
import FullScaleWebDevelopment from './Component/FullScaleWebDevelopment'
import EnsureSuccess from './Component/EnsureSuccess'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import Footer from '../../HomePage/Component/Footer/Footer'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import TechToolsHeader from '../StartUpProductDev/Component/TechTools/TechToolsHeader'
import PartnerUpWithCity from '../../RepeatedComponents/partnerUpWithCity/PartnerUpWithCity'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
const WebDevelopment = () => {
  return (
    <div>
      <AllHeader category="Startup" subCategory="Web Development" />
      <OurPartener />
      <WhatWebSolution />
      <PartnerUpWithCity />
      <FullScaleWebDevelopment />
      <EnsureSuccess />
      <TechToolsHeader />
      <ReliableTools category="Startup" subCategory="Web Development" />
      <CaseStudies category="Startup" subCategory="Web Development" />
      <MeetOurClient />
      <AllFaq category="Startup" subCategory="Web Development" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default WebDevelopment
