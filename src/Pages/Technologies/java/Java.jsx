import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import JavaDevService from './javaDevService/JavaDevService'
import ServiceOptions from './serviceOptions/ServiceOptions'
import JavaDeveloper from './javaDeveloper/JavaDeveloper'
import JavaCodeQuality from './javaCodeQuality/JavaCodeQuality'
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

const Java = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Technologies" subCategory="JAVA" />
      <OurPartener />
      <WhyChooseCTSlider category="Technologies" subCategory="JAVA" />
      <JavaDevService />
      <ServiceOptions />
      <JavaDeveloper />
      <JavaCodeQuality />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="JAVA" />
      <CaseStudies category="Technologies" subCategory="JAVA" />
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="JAVA" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default Java