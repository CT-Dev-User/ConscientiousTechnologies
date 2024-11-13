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
import { Helmet } from 'react-helmet'
const OilandGasInustry = () => {
  return (
    <div>
      <Helmet>
        <title>Oil and Gas Industry</title>
        <link rel="canonical" href="https://https://https://www.conscientioustech.in/Industries | Oil and Gas" />
        <meta
          name="description"
          content={``}
        />
        <meta name="keywords" content="CT, Technology, Industries, Benefits, Oil and Gas" />
      </Helmet>
      <AllHeader category="Industry" industryName="Oil and Gas" />
      <OurPartener />
      <WhyChooseCTSlider category="Industry" subCategory="Oil and Gas" />
      <ITSolution />
      <Exploration />
      <ServiceOption />
      <CaseStudies category="Industry" subCategory="Oil and Gas" />
      <MeetOurClient />
      <AllFaq category="Industry" subCategory="Oil and Gas" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default OilandGasInustry
