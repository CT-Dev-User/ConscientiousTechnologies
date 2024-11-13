import React, { useEffect } from 'react'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import BuildingDataAnalytics from './Components/BuildingDataAnalytics'
import BenefitsFromCT from './Components/BenefitsFromCT'
import FlexibleService from './Components/FlexibleService'
import CTSolutions from './Components/CTSolutions'
import ReliableToolsHeading from '../../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import AllFaq from '../../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import { Helmet } from 'react-helmet'

const DataAnalytics = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      {/* Helmet for managing document head */}
      <Helmet>
        <title>Dedicated Software Teams | Data Analytics</title>
        <link rel="canonical" href="https://https://https://www.conscientioustech.in/Services | Data Analytics" />
        <meta
          name="description"
          content={``}
        />
        <meta name="keywords" content="CT, Technology, Services, Benefits,  Dedicated Software Teams, Data Analytics" />
      </Helmet>
      <AllHeader category="SubService" serviceName="Dedicated Software Teams" subServiceName="Data Analytics" />
      <OurPartener />
      <BuildingDataAnalytics />
      <WhyChooseCTSlider category="Service" subCategory="Dedicated Software Teams" />
      <BenefitsFromCT />
      <FlexibleService />
      <CTSolutions />
      <ReliableToolsHeading />
      <ReliableTools category="Services" subCategory="Dedicated Software Teams" />
      <CaseStudies category="Service" subCategory="Dedicated Software Teams" />
      <MeetOurClient />
      <AllFaq category="Dedicated Software Teams" subCategory="Data Analyst" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default DataAnalytics
