import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import BuildingDataAnalyst from './Components/BuildingDataAnalyst'
import BenefitsFromCt from './Components/BenefitsFromCt'
import FlexibleServiceApp from './Components/FlexibleServiceApp'
import CTSolution from './Components/CTSolution'
import ReliableToolsHeading from '../../../Pages/HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
const DataAnalystSolution = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Solutions" solutionName="Data Analytics"/>
      <OurPartener />
      <BuildingDataAnalyst />
      <WhyChooseCTSlider category="Solutions" subCategory="Data Analytics"/>
      <BenefitsFromCt />
      <FlexibleServiceApp />
      <CTSolution />
      <ReliableToolsHeading />
      <ReliableTools category="Solutions" subCategory="Data Analytics"/>
      <CaseStudies category="Solutions" subCategory="Data Analytics"/>
      <MeetOurClient />
      <AllFaq category="Solutions" subCategory="Data Analytics"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default DataAnalystSolution
