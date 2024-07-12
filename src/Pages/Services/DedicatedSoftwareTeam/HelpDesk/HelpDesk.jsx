import React, { useEffect } from 'react'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import ITHelpDesk from './Component/ITHelpDesk'
import OurOutSource from './Component/OurOutSource'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import AllFaq from '../../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
const HelpDesk = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Dedicated Software Team" subCategory="Help Desk" />
      <OurPartener />
      <WhyChooseCTSlider category="Dedicated Software Team" subCategory="Help Desk" />
      <ITHelpDesk />
      <OurOutSource />
      <CaseStudies category="Dedicated Software Team" subCategory="Help Desk"/>
      <MeetOurClient />
      <AllFaq category="Dedicated Software Team" subCategory="Help Desk" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default HelpDesk
