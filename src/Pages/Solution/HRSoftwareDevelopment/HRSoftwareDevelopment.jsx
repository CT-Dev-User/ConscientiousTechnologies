import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import FunctionalModule from './Components/FunctionalModule'
import KeyCooperation from './Components/KeyCooperation'
import HRSoftService from './Components/HRSoftService'
import TechnologyHeader from './Components/TechnologyStack/TechnologyHeader'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import { Helmet } from 'react-helmet'
const HRSoftwareDevelopment = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Helmet>
        <title>HR Software Development Services</title>
        <link rel="canonical" href="https://https://https://www.conscientioustech.in/Solution | HR Software Service" />
        <meta
          name="description"
          content={``}
        />
        <meta name="keywords" content="CT, Technology, Solution, Benefits, HR Software Development Services" />
      </Helmet>
      <AllHeader category="Solution" solutionName="HR Software Development Services" />
      <OurPartener />
      <FunctionalModule />
      <WhyChooseCTSlider category="Solution" subCategory="HR Software Development Services" />
      <KeyCooperation />
      <HRSoftService />
      <TechnologyHeader />
      <ReliableTools category="Solution" subCategory="HR Software Development Services" />
      <CaseStudies category="Solution" subCategory="HR Software Development Services" />
      <MeetOurClient />
      <AllFaq category="Solution" subCategory="HR Software Development Services" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default HRSoftwareDevelopment
