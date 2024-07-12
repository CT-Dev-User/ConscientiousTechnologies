import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import CTService from './Components/CTService'
import SolutionSpecilization from './Components/SolutionSpecilization'
import FinancialSoftCons from './Components/FinancialSoftCons'
import YourServiceOption from './Components/YourServiceOption'
import TechnologyHeading from '../ERP/Components/Technology/TechnologyHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'

const FinancialManagement = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Solutions" subCategory="Financial Management"/>
      <OurPartener />
      <CTService />
      <SolutionSpecilization />
      <WhyChooseCTSlider category="Solutions" subCategory="Financial Management"/>
      <FinancialSoftCons />
      <YourServiceOption />
      <TechnologyHeading />
      <ReliableTools category="Solutions" subCategory="Financial Management"/>
      <CaseStudies category="Solutions" subCategory="Financial Management"/>
      <MeetOurClient />
      <AllFaq category="Solutions" subCategory="Financial Management"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default FinancialManagement
