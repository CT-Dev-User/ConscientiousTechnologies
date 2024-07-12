import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import MobApplicationDev from './mobAppDevService/MobApplicationDev'
import MObileAppsWeDev from './mobileWeDevelops/MObileAppsWeDev'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import PartnerUpWithCity from '../../RepeatedComponents/partnerUpWithCity/PartnerUpWithCity'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'

const MobileApp = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Technologies" subCategory="Mobile" />
      <OurPartener />
      <MobApplicationDev />
      <PartnerUpWithCity />
      <MObileAppsWeDev />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="Mobile" />
      <CaseStudies category="Technologies" subCategory="Mobile" />
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="Mobile" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default MobileApp