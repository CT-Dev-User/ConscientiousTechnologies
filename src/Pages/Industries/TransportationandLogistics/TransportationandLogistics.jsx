import React from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ITSolution from './Components/ITSolutions'
import ServiceOption from './Components/ServiceOption'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
const TransportationandLogistics = () => {
  return (
    <div>
     <AllHeader category="Industries" industryName="Transportation and Logistics"/>
      <OurPartener />
      <ITSolution />
      <WhyChooseCTSlider category="Industries" subCategory="Transportation and Logistics"/>
      <ServiceOption />
      <CaseStudies category="Industries" subCategory="Transportation and Logistics"/>
      <MeetOurClient />
      <AllFaq category="Industries" subCategory="Transportation and Logistics"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default TransportationandLogistics
