import React, { useContext } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import BusinessValue from './Component/BusinessValue'
import ChooseServiceOption from './Component/ChooseServiceOption'
import TechToolsHeader from './Component/TechTools/TechToolsHeader'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AreaOfExperties from '../../RepeatedComponents/AreaOfExperties/AreaOfExperties'

const AgenciesDev = () => {


  return (
    <div>
      <AllHeader category="By Client Type" subCategory="Agencies" />
      <OurPartener />
      <WhyChooseCTSlider category="By Client Type" subCategory="Agencies" />
      <BusinessValue />
      <AreaOfExperties category="By Client Type" subCategory="Agencies" navSubCategory="Technologies"/>
      <ChooseServiceOption />
      <TechToolsHeader />
      <ReliableTools category="By Client Type" subCategory="Agencies"/>
      <CaseStudies category="By Client Type" subCategory="Agencies"/>
      <MeetOurClient />
      <AllFaq category="By Client Type" subCategory="Agencies"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default AgenciesDev
