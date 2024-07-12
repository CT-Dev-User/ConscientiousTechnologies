import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import DataScienceSer from './dataScienceService/DataScienceSer'
import Complementry from './complementery/Complementry'
import UseCases from './usecases/UseCases'
import BenefitsOfCR from './benefitsCR/BenefitsOfCR'
import DSProcess from './dataScienceProcess/DSProcess'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
const DataScience = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Technologies" subCategory="Data Science" />
      <OurPartener />
      <WhyChooseCTSlider category="Technologies" subCategory="Data Science" />
      <DataScienceSer />
      <Complementry />
      <DSProcess />
      <UseCases />
      <BenefitsOfCR />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="Data Science" />
      <CaseStudies category="Technologies" subCategory="Data Science" />
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="Data Science" />
      <BookFreeConsultation />
      <Footer /></div>
  )
}

export default DataScience