import React, { useEffect } from 'react'
// import Header from './Components/Header'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
// import AreaOfExperties from './Components/AreaOfExperties'
import ReasonForDedicatedTeam from './Components/ReasonForDedicatedTeam'
import TechnologyHeader from './Components/Technology/TechnologyHeader'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import AllFaq from '../../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import PartnerUpWithCity from '../../../RepeatedComponents/partnerUpWithCity/PartnerUpWithCity'
import ReliableTools from '../../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
// import AreaOfExperties from './Components/AreaOfExperties'
import AreaOfExperties from '../../../RepeatedComponents/AreaOfExperties/AreaOfExperties'
import AreaOfExpertiesHeading from './Components/AreaOfExpertiesHeading'
// import AreaOfExperties from '../../../RepeatedComponents/AreaOfExperties/AreaOfExperties'

const MainDedicatedDevService = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Dedicated Software Team"/>
      <OurPartener />
      <WhyChooseCTSlider category="Services" subCategory="Dedicated Software Team"/>
      <PartnerUpWithCity />
      <AreaOfExpertiesHeading/>
      <AreaOfExperties category="Services" subCategory="Dedicated Software Team" navCategory="Services" navSubCategory="Dedicated Software Team"/>
      <ReasonForDedicatedTeam />
      <TechnologyHeader />
      <ReliableTools category="Services" subCategory="Dedicated Software Team"/>
      <CaseStudies category="Services" subCategory="Dedicated Software Team"/>
      <Blog />
      <MeetOurClient />
      <AllFaq category="Services" subCategory="Dedicated Software Team"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default MainDedicatedDevService
