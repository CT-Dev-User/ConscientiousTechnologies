import React, { useEffect } from 'react'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import CyberSecService from './Components/CyberSecService'
import CompitativeTraits from './Components/CompetativeTraits'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import AllFaq from '../../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
const CyberSecurity = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="SubServices"  serviceName="Dedicated Software Teams" subServiceName="Cyber Security" />
      <OurPartener />
      <WhyChooseCTSlider category="Dedicated Software Team" subCategory="Cyber Security"/>
      <CyberSecService />
      <CompitativeTraits />
      <CaseStudies category="Dedicated Software Team" subCategory="Cyber Security"/>
      <MeetOurClient />
      <AllFaq category="Dedicated Software Team" subCategory="Cyber Security"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default CyberSecurity
