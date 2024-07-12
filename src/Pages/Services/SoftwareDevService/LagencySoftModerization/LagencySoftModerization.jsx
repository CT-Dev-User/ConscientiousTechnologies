import React, { useEffect } from 'react'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import AttributeOfOurApp from './Component/AttributeOfOurApp'
import ReliableToolsHeading from '../../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import AllFaq from '../../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../../RepeatedComponents/ReliableTechTools/ReliableTechTools'

const LagencySoftModerization = () => {
      
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
    return (
        <div>
            <AllHeader category="Software Development Services" subCategory="Legacy Software" />
            <OurPartener />
            <WhyChooseCTSlider category="Software Development Services" subCategory="Legacy Software" />
            <AttributeOfOurApp />
            <ReliableToolsHeading />
            <ReliableTools category="Software Development Services" subCategory="Legacy Software" />
            <CaseStudies category="Software Development Services" subCategory="Legacy Software"/>
            <MeetOurClient />
            <AllFaq category="Software Development Services" subCategory="Legacy Software"/>
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default LagencySoftModerization
