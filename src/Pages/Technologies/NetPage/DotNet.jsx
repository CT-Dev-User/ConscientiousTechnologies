import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import SoftDevwithDotNet from './softwareDevWithDotNet/SoftDevwithDotNet'
import CustomNet from './CustomNET/CustomNet'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import CorporationModel from './corporationmodel/CorporationModel'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'

const DotNet = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Technologies" subCategory=".NET" />

      <OurPartener />
      <WhyChooseCTSlider category="Technologies" subCategory=".NET" />
      <SoftDevwithDotNet />
      <CustomNet />
      <CorporationModel />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory=".NET" />
      <CaseStudies category="Technologies" subCategory=".NET" />
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory=".NET" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default DotNet