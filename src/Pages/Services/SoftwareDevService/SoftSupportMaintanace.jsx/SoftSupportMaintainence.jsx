import React, { useEffect } from 'react'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import AppWeSupport from './Components/AppWeSupport'
import ReliableToolsHeading from '../../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import ApplicationMaintainace from './Components/ApplicationMaintainace'
import AllFaq from '../../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import { Helmet } from 'react-helmet'

const SoftSupportMaintainence = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Helmet>
        <title>Software Development Services</title>
        <meta
          name="description"
          content={``}
        />
        <meta name="keywords" content="CT, Technology, Services, Benefits, Software Development Services" />
      </Helmet>
      <AllHeader
        category="SubService" serviceName="Software Development Services" subServiceName="Software support"
      />
      <OurPartener />
      <WhyChooseCTSlider category="Service" subCategory="Software Development Services" />
      <AppWeSupport />
      <ApplicationMaintainace />
      <ReliableToolsHeading />
      <ReliableTools category="Service" subCategory="Software Development Services" />
      <CaseStudies category="Service" subCategory="Software Development Services" />
      <MeetOurClient />
      <AllFaq category="Service" subCategory="Software Development Services" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default SoftSupportMaintainence
