import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import BigDataService from './bigDataService/BigDataService'
import BenefitsBD from './benefitOfBigData/BenefitsBD'
import BigDataUsesCases from './bigDataUseCases/BigDataUsesCases'
import AdvBigData from './advBigData/AdvBigData'
import BigDataFactor from './bigDataFactor/BigDataFactor'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
const BigData = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Technologies" subCategory="Big Data" />
      <OurPartener />
      <WhyChooseCTSlider category="Technologies" subCategory="Big Data" />
      <BigDataService />
      <BenefitsBD />
      <BigDataUsesCases />
      <AdvBigData />
      <BigDataFactor />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="Big Data" />
      <CaseStudies category="Technologies" subCategory="Big Data" />
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="Big Data" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default BigData