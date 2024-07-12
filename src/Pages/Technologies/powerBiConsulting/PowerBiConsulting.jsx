import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import Highlights from './highLightsOfPowerBI/Highlights'
import PowerBIOptions from './powerBIServiceOptions/PowerBIOptions'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
const PowerBiConsulting = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Technologies" subCategory="Power BI Consulting" />
      <OurPartener />
      <WhyChooseCTSlider category="Technologies" subCategory="Power BI Consulting" />
      <Highlights />
      <PowerBIOptions />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="Power BI Consulting" />
      <CaseStudies category="Technologies" subCategory="Power BI Consulting" />
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="Power BI Consulting" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default PowerBiConsulting