import React from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import PerkOfOurApplication from './Component/WhatMakesOurAPI'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import APIDevIntegration from './Component/APIDevAndIntegration'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'

const CustomAPIDev = () => {
  return (
    <div>
      <AllHeader category="Startup" subCategory="Custom Api Development"/>
      <OurPartener/>
      <WhyChooseCTSlider category="Startup" subCategory="Custom Api Development" />
      <PerkOfOurApplication/>
      <APIDevIntegration/>
      <ReliableToolsHeading/>
      <ReliableTools category="Startup" subCategory="Custom Api Development"/>
      <CaseStudies category="Startup" subCategory="Custom Api Development"/>
      <MeetOurClient/>
      <AllFaq category="Startup" subCategory="Custom Api Development"/>
      <BookFreeConsultation/>
      <Footer/>
    </div>
  )
}

export default CustomAPIDev
