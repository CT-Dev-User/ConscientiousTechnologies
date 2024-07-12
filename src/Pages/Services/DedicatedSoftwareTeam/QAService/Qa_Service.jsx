import React, { useEffect } from 'react'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import TypeOfSoft from './Components/TypeOfSoft'
import TestingType from './Components/TestingType'
import QASoftTesingService from './Components/QASoftTesingService'
import TechToolsHeader from '../../QA_Service/Component/TechTools/TechToolsHeader'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import AllFaq from '../../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AreaOfExperties from '../../../RepeatedComponents/AreaOfExperties/AreaOfExperties'

const Qa_Service = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Dedicated Software Team" subCategory="QA & Testing"/>
      <OurPartener />
      <TypeOfSoft />
      <AreaOfExperties category="Dedicated Software Team" subCategory="QA & Testing"/>
      <TestingType />
      <WhyChooseCTSlider category="Dedicated Software Team" subCategory="QA & Testing"/>
      <QASoftTesingService />
      <TechToolsHeader />
      <ReliableTools category="Dedicated Software Team" subCategory="QA & Testing"/>
      <CaseStudies category="Dedicated Software Team" subCategory="QA & Testing"/>
      <MeetOurClient />
      <AllFaq category="Dedicated Software Team" subCategory="QA & Testing"/>
      <BookFreeConsultation />
      <Footer />

    </div>
  )
}

export default Qa_Service
