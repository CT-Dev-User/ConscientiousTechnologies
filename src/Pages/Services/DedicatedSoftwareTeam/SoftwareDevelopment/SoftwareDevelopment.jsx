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
import { Helmet } from 'react-helmet'

const SoftwareDevelopment = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Helmet>
        <title>Dedicated Software Teams | Software Development</title>
        <meta
          name="description"
          content={``}
        />
        <meta name="keywords" content="CT, Technology, Services, Benefits, Dedicated Software Teams, Software Development" />
      </Helmet>
      <AllHeader category="SubService"  serviceName="Dedicated Software Teams" subServiceName="Software Development"/>
      <OurPartener />
      <ExploreOurConsulting/>
      <AreaOfExperties category="Dedicated Software Teams" subCategory="Software Development" navCategory="Services" navSubCategory="Software Development Services"/>
      <WhyChooseCTSlider category="Service" subCategory="Dedicated Software Teams" />
      <PartnerUpWithCity/>
      <DiffCollabration />
      <SoftAdvance />
      <SoftDevSteps />
      <ReliableToolsHeading />
      <ReliableTools category="Service" subCategory="Dedicated Software Teams" />
      <CaseStudies category="Service" subCategory="Dedicated Software Teams"/>
      <MeetOurClient />
      <AllFaq category="Service" subCategory="Dedicated Software Teams"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default SoftwareDevelopment
