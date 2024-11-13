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
import { Helmet } from 'react-helmet'
const CyberSecurity = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      {/* Helmet for managing document head */}
      <Helmet>
        <title>Dedicated Software Teams | Cyber Security</title>
        <link rel="canonical" href="https://https://https://www.conscientioustech.in/Services | Cyber Security" />
        <meta
          name="description"
          content={``}
        />
        <meta name="keywords" content="CT, Technology, Services, Benefits,  Dedicated Software Teams, Cyber Security" />
      </Helmet>
      <AllHeader category="SubService"  serviceName="Dedicated Software Teams" subServiceName="Cyber Security" />
      <OurPartener />
      <WhyChooseCTSlider category="Service" subCategory="Dedicated Software Teams"/>
      <CyberSecService />
      <CompitativeTraits />
      <CaseStudies category="Service" subCategory="Dedicated Software Teams"/>
      <MeetOurClient />
      <AllFaq category="Dedicated Software Teams" subCategory="Cyber Security"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default CyberSecurity
