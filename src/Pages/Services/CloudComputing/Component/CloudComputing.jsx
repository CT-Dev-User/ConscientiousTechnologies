import React from 'react'
import Header from './Component/Header'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import CloudServiceDev from './Component/CloudServiceDev'
import Deployment from './Component/Deployment'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ReliableTools from '../../HomePage/Component/ReliableTools/ReliableTools'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'

const CloudComputing = () => {
  return (
    <div>
      <Header/>
      <OurPartener/>
      <CloudServiceDev/>
      <Deployment/>
      <ReliableToolsHeading/>
      <ReliableTools/>
      <CaseStudies/>
      <MeetOurClient/>
      <BookFreeConsultation/>
      <Footer/>
    </div>
  )
}

export default CloudComputing
