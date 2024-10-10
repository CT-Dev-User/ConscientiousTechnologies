import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
// import TypesOfSoftwareInCT from './Component/TypesOfSoftwareInCTHeading'
import TestingType from './Component/TestingType'
import QASoftWareService from './Component/QASoftWareService'
import TechToolsHeader from './Component/TechTools/TechToolsHeader'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import TypesOfSoftwareInCT from './Component/TypesOfSoftwareInCTHeading'
import AreaOfExperties from '../../RepeatedComponents/AreaOfExperties/AreaOfExperties'

const QaService = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="QA & Services" />
      <OurPartener />
      <TypesOfSoftwareInCT />
      <AreaOfExperties category="Services" subCategory="QA & Services" />
      <WhyChooseCTSlider category="Services" subCategory="QA & Services" />
      <TestingType />
      <QASoftWareService />
      <TechToolsHeader />
      <ReliableTools category="Services" subCategory="QA & Services" />
      <CaseStudies category="Services" subCategory="QA & Services" />
      <MeetOurClient />
      <AllFaq category="Services" subCategory="QA & Services" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default QaService
