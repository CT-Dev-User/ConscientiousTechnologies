import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import FeaturesAndProduct from './featuresAndProduct/FeaturesAndProduct'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
const Pimcore = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Technologies" subCategory="Pimcore" />
      <OurPartener />
      <FeaturesAndProduct />
      <WhyChooseCTSlider category="Technologies" subCategory="Pimcore" />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="Pimcore" />
      <CaseStudies category="Technologies" subCategory="Pimcore" />
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="Pimcore" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default Pimcore