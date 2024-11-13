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
import { Helmet } from 'react-helmet'
const PaymentManageMent = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Helmet>
        <title>Payment Management Solution</title>
        <link rel="canonical" href="https://https://https://www.conscientioustech.in/Solution | Payment Management Service" />
        <meta
          name="description"
          content={``}
        />
        <meta name="keywords" content="CT, Technology, Solution, Benefits, Payment Management" />
      </Helmet>
      <AllHeader category="Solution" solutionName="Payment Management" />
      <OurPartener />
      <WhomWeServe />
      <PaymentSolution />
      <WhyChooseCTSlider category="Solution" subCategory="Payment Management" />
      <ValueDrivenApproach />
      <TechnologyHeading />
      <ReliableTools category="Solution" subCategory="Payment Management" />
      <CaseStudies category="Solution" subCategory="Payment Management" />
      <MeetOurClient />
      <AllFaq category="Solution" subCategory="Payment Management" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default PaymentManageMent
