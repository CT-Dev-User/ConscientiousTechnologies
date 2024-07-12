import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import BenefitFromSass from './benefitOfSass/BenefitFromSass'
import SassIndustryExpert from './sassIndustryExpertise/SassIndustryExpert'
import SassAppDev from './sassAppDev/SassAppDev'
import ServiceOptions from './serviceOptions/ServiceOptions'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
const Sass = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Technologies" subCategory="SaaS Development Services" />
      <OurPartener />
      <WhyChooseCTSlider category="Technologies" subCategory="SaaS Development Services"/>
      <BenefitFromSass />
      <SassIndustryExpert />
      <SassAppDev />
      <ServiceOptions />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="SaaS Development Services"/>
      <CaseStudies category="Technologies" subCategory="SaaS Development Services"/>
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="SaaS Development Services"/>
      <BookFreeConsultation />
      <Footer />
      </div>
  )
}

export default Sass