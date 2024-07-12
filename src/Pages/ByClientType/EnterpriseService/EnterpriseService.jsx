import React from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ScopeOfEnterPrise from './Component/ScopeOfEnterPrise'
import AtoZEnterprise from './Component/AtoZEnterprise'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import PartnerUpWithCity from '../../RepeatedComponents/partnerUpWithCity/PartnerUpWithCity'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'

const EnterpriseService = () => {
  return (
    <div>
      <AllHeader category="By Client Type" subCategory="Enterprises" />
      <OurPartener />
      <ScopeOfEnterPrise />
      <AtoZEnterprise />
      <PartnerUpWithCity />
      <ReliableToolsHeading />
      <ReliableTools category="By Client Type" subCategory="Enterprises"/>
      <CaseStudies category="By Client Type" subCategory="Enterprises"/>
      <MeetOurClient />
      <AllFaq category="By Client Type" subCategory="Enterprises"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default EnterpriseService
