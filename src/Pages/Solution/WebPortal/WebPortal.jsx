import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import WebPortalWeCreated from './Components/WebPortalWeCreated'
import BringingInnovation from './Components/BringingInnovation'
import LayingtheFoundation from './Components/LayingtheFoundation'
import WebDevSteps from './Components/WebDevSteps'
import TechPlatformHeader from '../ContentManagement/Components/TechnologyPlatform/TechPlatformHeader'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import { Helmet } from 'react-helmet'
const WebPortal = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Helmet>
        <title>Web Portal Solution</title>
        <link rel="canonical" href="https://https://https://www.conscientioustech.in/Solution | Web Portal Service" />
        <meta
          name="description"
          content={``}
        />
        <meta name="keywords" content="CT, Technology, Solution, Benefits, Web Portal" />
      </Helmet>
      <AllHeader category="Solution" solutionName="Web Portal" />
      <OurPartener />
      <WhyChooseCTSlider category="Solution" subCategory="Web Portal" />
      <WebPortalWeCreated />
      <BringingInnovation />
      <LayingtheFoundation />
      <WebDevSteps />
      <TechPlatformHeader />
      <ReliableTools category="Solution" subCategory="Web Portal" />
      <CaseStudies category="Solution" subCategory="Web Portal" />
      <MeetOurClient />
      <AllFaq category="Solution" subCategory="Web Portal" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default WebPortal
