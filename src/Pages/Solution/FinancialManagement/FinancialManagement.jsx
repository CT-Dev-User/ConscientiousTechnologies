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
import { Helmet } from 'react-helmet'

const FinancialManagement = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Helmet>
        <title>Financial Management Solution</title>
        <link rel="canonical" href="https://https://https://www.conscientioustech.in/Solution | Financial Service" />
        <meta
          name="description"
          content={``}
        />
        <meta name="keywords" content="CT, Technology, Solution, Benefits, Financial Management" />
      </Helmet>
      <AllHeader category="Solution" solutionName="Financial Management" />
      <OurPartener />
      <CTService />
      <SolutionSpecilization />
      <WhyChooseCTSlider category="Solution" subCategory="Financial Management" />
      <FinancialSoftCons />
      <YourServiceOption />
      <TechnologyHeading />
      <ReliableTools category="Solution" subCategory="Financial Management" />
      <CaseStudies category="Solution" subCategory="Financial Management" />
      <MeetOurClient />
      <AllFaq category="Solution" subCategory="Financial Management" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default FinancialManagement
