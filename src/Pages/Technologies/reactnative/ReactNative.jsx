import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReactNativeTalents from './reactNativeTalents/ReactNativeTalents'
import ReactNativeDevelopers from './reactNativeDevelopers/ReactNativeDevelopers'
import HireReactNativeDev from './hireReactNativeDev/HireReactNativeDev'
import QualityCooperation from './qualityCooperation/QualityCooperation'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'

const ReactNative = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Technologies" subCategory="React Native" />
      <OurPartener />
      <WhyChooseCTSlider category="Technologies" subCategory="React Native" />
      <ReactNativeTalents />
      <ReactNativeDevelopers />
      <HireReactNativeDev />
      <QualityCooperation />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="React Native" />
      <CaseStudies category="Technologies" subCategory="React Native" />
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="React Native" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default ReactNative