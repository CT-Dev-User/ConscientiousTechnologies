import React from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ScopeofOurSaaSDev from './Components/ScopeofOurSaaSDev'
import BenefitFromSaaSDev from './Components/BenefitFromSaaSDev'
import TypeOfSaasApplication from './Components/TypeOfSaasApplication'
import TechToolsHeader from '../StartUpProductDev/Component/TechTools/TechToolsHeader'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import PartnerUpWithCity from '../../RepeatedComponents/partnerUpWithCity/PartnerUpWithCity'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'

const SaaSAppplication = () => {
  return (
    <div>
      <AllHeader category="Startup" subCategory="Saas Application"/>
      <OurPartener />
      <PartnerUpWithCity />
      <ScopeofOurSaaSDev />
      <BenefitFromSaaSDev />
      <TypeOfSaasApplication />
      <TechToolsHeader />
      <ReliableTools category="Startup" subCategory="Saas Application" />
      <CaseStudies category="Startup" subCategory="Saas Application" />
      <MeetOurClient />
      <AllFaq category="Startup" subCategory="Saas Application" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default SaaSAppplication
