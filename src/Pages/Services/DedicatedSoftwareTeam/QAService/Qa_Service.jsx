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
import { Helmet } from 'react-helmet'

const Qa_Service = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Helmet>
        <title>Dedicated Software Teams | QA & Testing</title>
        <meta
          name="description"
          content={``}
        />
        <meta name="keywords" content="CT, Technology, Services, Benefits, Dedicated Software Teams, QA & Testing" />
      </Helmet>
      <AllHeader category="SubService" serviceName="Dedicated Software Teams" subServiceName="QA & Testing" />
      <OurPartener />
      <TypeOfSoft />
      <AreaOfExperties category="Dedicated Software Teams" subCategory="QA & Testing" />
      <TestingType />
      <WhyChooseCTSlider category="Service" subCategory="Dedicated Software Teams" />
      <QASoftTesingService />
      <TechToolsHeader />
      <ReliableTools category="Service" subCategory="Dedicated Software Teams" />
      <CaseStudies category="Service" subCategory="Dedicated Software Teams" />
      <MeetOurClient />
      <AllFaq category="Dedicated Software Teams" subCategory="QA & Testing" />
      <BookFreeConsultation />
      <Footer />

    </div>
  )
}

export default Qa_Service
