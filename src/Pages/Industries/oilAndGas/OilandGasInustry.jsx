import React from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ITSolution from './Components/ITSolution'
import Exploration from './Components/Exploration'
import ServiceOption from './Components/ServiceOption'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
const OilandGasInustry = () => {
  return (
    <div>
      <AllHeader category="Industries" industryName="Oil and Gas"/>
      <OurPartener />
      <WhyChooseCTSlider category="Industries" subCategory="Oil and Gas" />
      <ITSolution />
      <Exploration />
      <ServiceOption />
      <CaseStudies category="Industries" subCategory="Oil and Gas" />
      <MeetOurClient />
      <AllFaq category="Industries" subCategory="Oil and Gas" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default OilandGasInustry
