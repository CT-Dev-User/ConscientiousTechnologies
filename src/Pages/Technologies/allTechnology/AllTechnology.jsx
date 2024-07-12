import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'

const AllTechnology = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Technologies" subCategory="All Technologies" />
      <OurPartener />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="All Technologies"/>
      <CaseStudies category="Technologies" subCategory="All Technologies"/>
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="All Technologies"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default AllTechnology