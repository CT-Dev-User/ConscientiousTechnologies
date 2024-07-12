import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import IndustryWeDeveloped from './industryWeDeveloped/IndustryWeDeveloped'
import VRDevService from './virtuaRealityDevSer/VRDevService'
import VRSoftware from './vrSoftware/VRSoftware'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
const VirtualReality = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Technologies" subCategory="Virtual Reality" />
      <OurPartener />
      <IndustryWeDeveloped />
      <VRDevService />
      <VRSoftware />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="Virtual Reality" />
      <CaseStudies category="Technologies" subCategory="Virtual Reality" />
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="Virtual Reality" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default VirtualReality