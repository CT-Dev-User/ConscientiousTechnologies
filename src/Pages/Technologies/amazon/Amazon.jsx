import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AWSWork from './awsWork/AWSWork'
import FeaturedInsights from './featuredInsights/FeaturedInsights'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
const Amazon = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Technologies" subCategory="Amazon Web services" />
      <OurPartener />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="Amazon Web services"/>
      <AWSWork />
      <FeaturedInsights />
      <CaseStudies category="Technologies" subCategory="Amazon Web services"/>
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="Amazon Web services"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default Amazon