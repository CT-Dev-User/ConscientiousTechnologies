import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import FunctionalityModule from './Components/FunctionalityModule'
import EAMServices from './Components/EAMServices'
import TechnologyHeading from '../ERP/Components/Technology/TechnologyHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'

const AssetManagements = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Solution" solutionName="Asset Management"/>
      <OurPartener />
      <FunctionalityModule />
      <WhyChooseCTSlider category="Solution" solutionName="Asset Management"/>
      <EAMServices />
      <TechnologyHeading />
      <ReliableTools category="Solution" subCategory="Asset Management"/>
      <CaseStudies category="Solution" subCategory="Asset Management"/>
      <MeetOurClient />
      <AllFaq category="Solution" subCategory="Asset Management"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default AssetManagements
