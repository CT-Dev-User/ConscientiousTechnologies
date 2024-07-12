import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import TypeofApp from './typeOfApp/TypeofApp'
import InHouseVSOutsource from './inhouseVsoutsource/InHouseVSOutsource'
import HirePythonDevelopers from './hirePythonDevelopers/HirePythonDevelopers'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'

const Python = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Technologies" subCategory="Python" />
      <OurPartener />
      <WhyChooseCTSlider category="Technologies" subCategory="Python" />
      <TypeofApp />
      <InHouseVSOutsource />
      <HirePythonDevelopers />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="Python" />
      <CaseStudies category="Technologies" subCategory="Python" />
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="Python" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default Python