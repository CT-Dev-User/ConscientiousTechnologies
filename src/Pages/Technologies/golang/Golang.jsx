import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import DevelopWithGoLang from './developwithGolang/DevelopWithGoLang'
import ApproachToGolang from './approachtoGolang/ApproachToGolang'
import ServiceOptions from './serviceOptions/ServiceOptions'
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

const Golang = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Technologies" subCategory="Golang" />
      <OurPartener />
      <WhyChooseCTSlider category="Technologies" subCategory="Golang"/>
      <DevelopWithGoLang />
      <ApproachToGolang />
      <ServiceOptions />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="Golang"/>
      <CaseStudies category="Technologies" subCategory="Golang"/>
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="Golang"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default Golang