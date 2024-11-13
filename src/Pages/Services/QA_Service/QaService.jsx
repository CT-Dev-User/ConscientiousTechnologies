import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
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
import { Helmet } from 'react-helmet'

const QaService = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Helmet>
        <title>Dedicated Software Teams | QA & Testing</title>
        <link rel="canonical" href="https://https://https://www.conscientioustech.in/Services | QA Service" />
        <meta
          name="description"
          content={``}
        />
        <meta name="keywords" content="CT, Technology, Services, Benefits, QA & Testing" />
      </Helmet>
      <AllHeader category="SubService" serviceName="Dedicated Software Teams" subServiceName="QA & Testing" />
      <OurPartener />
      <TypesOfSoftwareInCT />
      <AreaOfExperties category="Service" subCategory="QA & Services" />
      <WhyChooseCTSlider category="Service" subCategory="QA & Services" />
      <TestingType />
      <QASoftWareService />
      <TechToolsHeader />
      <ReliableTools category="Service" subCategory="QA & Services" />
      <CaseStudies category="Service" subCategory="QA & Services" />
      <MeetOurClient />
      <AllFaq category="Service" subCategory="QA & Services" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default QaService
