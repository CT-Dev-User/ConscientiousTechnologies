import React, { useEffect } from 'react'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import GetWithITSupport from './Components/GetWithITSupport'
import Scope from './Components/Scope'
import CompitativeTraits from './Components/CompitativeTraits'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import AllFaq from '../../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
const ItSupport = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="SubServices"  serviceName="Dedicated Software Teams" subServiceName="IT Support"/>
      <OurPartener />
      <Scope />
      <WhyChooseCTSlider category="Dedicated Software Team" subCategory="IT Support"/>
      <GetWithITSupport />
      <CompitativeTraits />
      <CaseStudies category="Dedicated Software Team" subCategory="IT Support"/>
      <MeetOurClient />
      <AllFaq category="Dedicated Software Team" subCategory="IT Support"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default ItSupport
