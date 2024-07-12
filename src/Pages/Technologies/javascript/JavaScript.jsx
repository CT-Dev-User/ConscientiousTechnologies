import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import DevelopmentAreas from './developmentAreas/DevelopmentAreas'
import JsServices from './jsServices/JsServices'
import JsDevProject from './jsDevProject/JsDevProject'
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

const JavaScript = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Technologies" subCategory="JavaScript" />
      <OurPartener />
      <WhyChooseCTSlider category="Technologies" subCategory="JavaScript" />
      <DevelopmentAreas />
      <JsServices />
      <JsDevProject />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="JavaScript" />
      <CaseStudies category="Technologies" subCategory="JavaScript" />
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="JavaScript" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default JavaScript