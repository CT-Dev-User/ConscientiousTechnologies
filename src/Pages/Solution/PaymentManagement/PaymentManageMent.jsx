import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import WhomWeServe from './Components/WhomWeServe'
import PaymentSolution from './Components/PaymentSolution'
import ValueDrivenApproach from './Components/ValueDrivenApproach'
import TechnologyHeading from '../ERP/Components/Technology/TechnologyHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
const PaymentManageMent = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Solutions" subCategory="Payment Management" />
      <OurPartener />
      <WhomWeServe />
      <PaymentSolution />
      <WhyChooseCTSlider category="Solutions" subCategory="Payment Management"/>
      <ValueDrivenApproach />
      <TechnologyHeading />
      <ReliableTools category="Solutions" subCategory="Payment Management"/>
      <CaseStudies category="Solutions" subCategory="Payment Management"/>
      <MeetOurClient />
      <AllFaq category="Solutions" subCategory="Payment Management"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default PaymentManageMent
