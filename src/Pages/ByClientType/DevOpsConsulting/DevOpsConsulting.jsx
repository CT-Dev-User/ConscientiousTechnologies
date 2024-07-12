import React from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import DevopsServiceByCt from './Component/DevopsServiceByCt'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'

const DevOpsConsulting = () => {
  return (
    <div>
      <AllHeader category="Startup" subCategory="Devops Consulting" />
      <OurPartener />
      <WhyChooseCTSlider category="Startup" subCategory="Devops Consulting" />
      <DevopsServiceByCt />
      <ReliableToolsHeading />
      <ReliableTools category="Startup" subCategory="Devops Consulting" />
      <CaseStudies category="Startup" subCategory="Devops Consulting" />
      <MeetOurClient />
      <AllFaq category="Startup" subCategory="Devops Consulting" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default DevOpsConsulting
