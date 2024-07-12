import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import SupplyChainSolutions from './Components/SupplyChainSolutions'
import HowToDevSupplySoft from './Components/HowToDevSupplySoft'
import TechnologyHeading from '../ERP/Components/Technology/TechnologyHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
const SupplyChainManagement = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Solutions" subCategory="Supply Chain Management"/>
      <OurPartener/>
      <SupplyChainSolutions />
      <WhyChooseCTSlider category="Solutions" subCategory="Supply Chain Management"/>
      <HowToDevSupplySoft />
      <TechnologyHeading />
      <ReliableTools category="Solutions" subCategory="Supply Chain Management"/>
      <CaseStudies category="Solutions" subCategory="Supply Chain Management"/>
      <MeetOurClient />
      <AllFaq category="Solutions" subCategory="Supply Chain Management"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default SupplyChainManagement
