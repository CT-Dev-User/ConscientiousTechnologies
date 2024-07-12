import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import CoreTask from './coreTask/CoreTask'
import ImageAnalysisService from './imageAnalysisService/ImageAnalysisService'
import CTApproaches from './ctApproaches/CTApproaches'

import DevWorkflow from './developmentWorkflow/DevWorkflow'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
const ComputerVision = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Technologies" subCategory="Computer Vision" />
      <OurPartener />
      <CoreTask />
      <WhyChooseCTSlider category="Technologies" subCategory="Computer Vision" />
      <ImageAnalysisService />
      <CTApproaches />
      <DevWorkflow />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="Computer Vision"/>
      <CaseStudies category="Technologies" subCategory="Computer Vision"/>
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="Computer Vision"/>
      <BookFreeConsultation />
      <Footer /></div>
  )
}

export default ComputerVision