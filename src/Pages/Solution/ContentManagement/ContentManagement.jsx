import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import CMSKeyFeatures from './Components/CMSKeyFeatures'
import WhatYouWillGet from './Components/WhatYouWillGet'
import MeetYouWhere from './Components/MeetYouWhere'
import TechPlatformHeader from './Components/TechnologyPlatform/TechPlatformHeader'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import { Helmet } from 'react-helmet'
const ContentManagement = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div>
        <Helmet>
        <title>Content Management Solution</title>
        <link rel="canonical" href="https://https://https://www.conscientioustech.in/Solution | Content Management" />
        <meta
          name="description"
          content={``}
        />
        <meta name="keywords" content="CT, Technology, Solution, Benefits, Content Management" />
      </Helmet>
      <AllHeader category="Solution" solutionName="Content Management"/>
      <OurPartener />
      <WhyChooseCTSlider category="Solution" solutionName="Content Management"/>
      <CMSKeyFeatures />
      <WhatYouWillGet />
      <MeetYouWhere />
      <TechPlatformHeader />
      <ReliableTools category="Solution" subCategory="Content Management"/>
      <CaseStudies category="Solution" subCategory="Content Management"/>
      <MeetOurClient />
      <AllFaq category="Solution" subCategory="Content Management"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default ContentManagement
