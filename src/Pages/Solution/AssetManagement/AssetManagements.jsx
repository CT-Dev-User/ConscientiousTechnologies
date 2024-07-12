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
      <AllHeader category="Solutions" subCategory="Asset Management"/>
      <OurPartener />
      <FunctionalityModule />
      <WhyChooseCTSlider category="Solutions" subCategory="Asset Management"/>
      <EAMServices />
      <TechnologyHeading />
      <ReliableTools category="Solutions" subCategory="Asset Management"/>
      <CaseStudies category="Solutions" subCategory="Asset Management"/>
      <MeetOurClient />
      <AllFaq category="Solutions" subCategory="Asset Management"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default AssetManagements
