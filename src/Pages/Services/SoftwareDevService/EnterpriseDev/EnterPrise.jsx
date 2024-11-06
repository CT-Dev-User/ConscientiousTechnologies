import React, { useEffect } from 'react'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import ScopeEnterprise from './Component/ScopeEnterprise'
import ReliableToolsHeading from '../../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import AllFaq from '../../../RepeatedComponents/AllFaq/AllFaq'
import PartnerUpWithCity from '../../../RepeatedComponents/partnerUpWithCity/PartnerUpWithCity'
import AllHeader from '../../../RepeatedComponents/haeder/AllHeader'
import ReliableTools from '../../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import { Helmet } from 'react-helmet'

const Enterprise = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Helmet>
        <title>Software Development Services | Enterprise Software</title>
        <meta
          name="description"
          content={``}
        />
        <meta name="keywords" content="CT, Technology, Services, Benefits, Software Development Services, Enterprise software" />
      </Helmet>
      <AllHeader
        category="SubService" serviceName="Software Development Services" subServiceName="Enterprise software"
      />
      <OurPartener />
      <ScopeEnterprise />
      <PartnerUpWithCity />
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

export default Enterprise
