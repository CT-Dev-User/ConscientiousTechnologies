import React, { useEffect } from 'react'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import MobileAppSolution from './Components/MobileAppSolution'
import ReliableToolsHeading from '../../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import AllFaq from '../../../RepeatedComponents/AllFaq/AllFaq'
import PartnerUpWithCity from '../../../RepeatedComponents/partnerUpWithCity/PartnerUpWithCity'
import AllHeader from '../../../RepeatedComponents/haeder/AllHeader'
import ReliableTools from '../../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AreaOfExperties from '../../../RepeatedComponents/AreaOfExperties/AreaOfExperties'
import MobileAppWeDeveloped from './Components/MobileAppWeDeveloped'
import { Helmet } from 'react-helmet'

const MobileDevelopment = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Helmet>
        <title>Dedicated Software Teams | Mobile Development</title>
        <meta
          name="description"
          content={``}
        />
        <meta name="keywords" content="CT, Technology, Services, Benefits, Dedicated Software Teams, Mobile Development" />
      </Helmet>
      <AllHeader category="SubService" serviceName="Dedicated Software Teams" subServiceName="Mobile Development" />
      <OurPartener />
      <MobileAppSolution />
      <PartnerUpWithCity />
      <MobileAppWeDeveloped />
      <AreaOfExperties category="Dedicated Software Teams" subCategory="Mobile Development" />
      <ReliableToolsHeading />
      <ReliableTools category="Service" subCategory="Dedicated Software Teams" />
      <CaseStudies category="Service" subCategory="Dedicated Software Teams" />
      <MeetOurClient />
      <AllFaq category="Service" subCategory="Dedicated Software Teams" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default MobileDevelopment
