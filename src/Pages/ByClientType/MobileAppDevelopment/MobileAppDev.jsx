import React from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener.jsx'
import OurMobAppDev from './Component/OurMobAppDev.jsx'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading.jsx'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies.jsx'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient.jsx'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation.jsx'
import Footer from '../../HomePage/Component/Footer/Footer.jsx'
import PartnerUpWithCity from '../../RepeatedComponents/partnerUpWithCity/PartnerUpWithCity.jsx'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader.jsx'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools.jsx'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq.jsx'
import AreaOfExperties from '../../RepeatedComponents/AreaOfExperties/AreaOfExperties.jsx'
import AreaOfExpertiesHeading from '../../Services/DedicatedSoftwareTeam/MainPage/Components/AreaOfExpertiesHeading.jsx'

const MobileAppDev = () => {
  return (
    <div>
      <AllHeader category="Startup" subCategory="Mobile App Development" />
      <OurPartener />
      <OurMobAppDev />
      <PartnerUpWithCity />
      <AreaOfExpertiesHeading/>
      <AreaOfExperties category="Startup" subCategory="Mobile App Development" navCategory="" navSubCategory=""/>
      <ReliableToolsHeading />
      <ReliableTools category="Startup" subCategory="Mobile App Development" />
      <CaseStudies category="Startup" subCategory="Mobile App Development" />
      <MeetOurClient />
      <AllFaq category="Startup" subCategory="Mobile App Development" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default MobileAppDev
