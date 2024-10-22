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

const DataAnalytics = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="SubServices"  serviceName="Dedicated Software Teams" subServiceName="Data Analytics" />
      <OurPartener />
      <BuildingDataAnalytics />
      <WhyChooseCTSlider category="Dedicated Software Team" subCategory="Data Analyst" />
      <BenefitsFromCT />
      <FlexibleService />
      <CTSolutions />
      <ReliableToolsHeading />
      <ReliableTools category="Dedicated Software Team" subCategory="Data Analyst" />
      <CaseStudies category="Dedicated Software Team" subCategory="Data Analyst" />
      <MeetOurClient />
      <AllFaq category="Dedicated Software Team" subCategory="Data Analyst" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default DataAnalytics
