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
import { Helmet } from 'react-helmet'
const TransportationandLogistics = () => {
  return (
    <div>
      <Helmet>
        <title>Transportation and Logistics Industry</title>
        <link rel="canonical" href="https://https://https://www.conscientioustech.in/Industries | Transportation and Logistics" />
        <meta
          name="description"
          content={``}
        />
        <meta name="keywords" content="CT, Technology, Industries, Benefits, Transportation and Logistics Industry" />
      </Helmet>
      <AllHeader category="Industry" industryName="Transportation and Logistics" />
      <OurPartener />
      <ITSolution />
      <WhyChooseCTSlider category="Industry" subCategory="Transportation and Logistics" />
      <ServiceOption />
      <CaseStudies category="Industry" subCategory="Transportation and Logistics" />
      <MeetOurClient />
      <AllFaq category="Industry" subCategory="Transportation and Logistics" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default TransportationandLogistics
