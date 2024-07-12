import React from 'react'
import Header from './Components/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import WhomWeServe from './Components/WhomWeServe'
import PaymentSolution from './Components/PaymentSolution'
import WhyChooseCt from './Components/WhyChooseCt'
import ValueDrivenApproach from './Components/ValueDrivenApproach'
import TechnologyHeading from '../ERP/Components/Technology/TechnologyHeading'
import TechnologyTools from '../ERP/Components/Technology/TechnologyTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'

const PaymentManageMent = () => {
  return (
    <div>
      <Header/>
      <OurPartener/>
      <WhomWeServe/>
      <PaymentSolution/>
      <WhyChooseCt/>
      <ValueDrivenApproach/>
      <TechnologyHeading/>
      <TechnologyTools/>
      <CaseStudies/>
      <MeetOurClient/>
    </div>
  )
}

export default PaymentManageMent
