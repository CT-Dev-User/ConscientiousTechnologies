import React, { useEffect } from 'react'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import DiffCollabration from './Components/DiffCollabration'
import SoftAdvance from './Components/SoftBussinessTask'
import SoftDevSteps from './Components/SoftDevSteps'
import ReliableToolsHeading from '../../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import PartnerUpWithCity from '../../../RepeatedComponents/partnerUpWithCity/PartnerUpWithCity'
import AllHeader from '../../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllFaq from '../../../RepeatedComponents/AllFaq/AllFaq'
import ExploreOurConsulting from './Components/ExploreOurConsulting'
import AreaOfExperties from '../../../RepeatedComponents/AreaOfExperties/AreaOfExperties'

const SoftwareDevelopment = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="SubServices"  serviceName="Dedicated Software Teams" subServiceName="Software Development"/>
      <OurPartener />
      <ExploreOurConsulting/>
      <AreaOfExperties category="Dedicated Software Team" subCategory="Software Development" navCategory="Services" navSubCategory="Software Development Services"/>
      <WhyChooseCTSlider category="Dedicated Software Team" subCategory="Software Development" />
      <PartnerUpWithCity/>
      <DiffCollabration />
      <SoftAdvance />
      <SoftDevSteps />
      <ReliableToolsHeading />
      <ReliableTools category="Dedicated Software Team" subCategory="Software Development" />
      <CaseStudies category="Dedicated Software Team" subCategory="Software Development"/>
      <MeetOurClient />
      <AllFaq category="Dedicated Software Team" subCategory="Software Development"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default SoftwareDevelopment
