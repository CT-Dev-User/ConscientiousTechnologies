import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import MLUseCases from './mLUseCases/MLUseCases'
import ScopeMLService from './scopeOfMLService/ScopeMLService'
import MLServiceOptions from './mlServiceOption/MLServiceOptions'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
const MachineLearning = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Technologies" subCategory="Machine Learning" />
      <OurPartener />
      <WhyChooseCTSlider category="Technologies" subCategory="Machine Learning" />
      <MLUseCases />
      <ScopeMLService />
      <MLServiceOptions />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="Machine Learning" />
      <CaseStudies category="Technologies" subCategory="Machine Learning" />
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="Machine Learning" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default MachineLearning