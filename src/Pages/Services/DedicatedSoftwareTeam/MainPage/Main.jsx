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
import AreaOfExperties from '../../../RepeatedComponents/AreaOfExperties/AreaOfExperties'
import AreaOfExpertiesHeading from './Components/AreaOfExpertiesHeading'
import { Helmet } from 'react-helmet'

const MainDedicatedDevService = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
       <Helmet>
        <title>Dedicated Software Teams</title>
        <link rel="canonical" href="https://https://https://www.conscientioustech.in/Services | Dedicated Software Teams" />
        <meta
          name="description"
          content={``}
        />
        <meta name="keywords" content="CT, Technology, Services, Benefits, Dedicated Software Teams" />
      </Helmet>
      <AllHeader category="Service" serviceName="Dedicated Software Teams" />
      <OurPartener />
      <WhyChooseCTSlider category="Services" subCategory="Dedicated Software Teams" />
      <PartnerUpWithCity />
      <AreaOfExpertiesHeading />
      <AreaOfExperties category="Service" serviceName="Dedicated Software Teams" navCategory="Services" navSubCategory="Dedicated Software Teams" />
      <ReasonForDedicatedTeam />
      <TechnologyHeader />
      <ReliableTools category="Service" Subcategory="Dedicated Software Teams" />
      <CaseStudies category="Service" subCategory="Dedicated Software Teams" />
      <Blog category="Service" subCategory="Dedicated Software Teams" />
      <MeetOurClient />
      <AllFaq category="Service" subCategory="Dedicated Software Teams" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default MainDedicatedDevService
