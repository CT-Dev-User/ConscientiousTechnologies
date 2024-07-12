import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import Function from './function/Function'
import HighestImpact from './highestImpact/HighestImpact'
import ARApplication from './arApplication/ARApplication'
import ARSolutions from './arSolutions/ARSolutions'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
const AugmentedReality = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Technologies" subCategory="Augmented Reality" />
      <OurPartener />
      <WhyChooseCTSlider category="Technologies" subCategory="Augmented Reality" />
      <Function />
      <HighestImpact />
      <ARSolutions />
      <ARApplication />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="Augmented Reality" />
      <CaseStudies category="Technologies" subCategory="Augmented Reality" />
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="Augmented Reality" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default AugmentedReality