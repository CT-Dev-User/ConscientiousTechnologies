import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import ACService from './adobeCommerceService/ACService'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
const Adobe = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Technologies" subCategory="Adobe Commerce" />
      <OurPartener />
      <WhyChooseCTSlider category="Technologies" subCategory="Adobe Commerce" />
      <ACService />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="Adobe Commerce" />
      <CaseStudies category="Technologies" subCategory="Adobe Commerce" />
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="Adobe Commerce" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default Adobe