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
            <AllHeader  
            category="SubService"  serviceName="Software Development Services" subServiceName="Legacy Software" 
            />
            <OurPartener />
            <WhyChooseCTSlider category="Service" subCategory="Software Development Services"/>
            <AttributeOfOurApp />
            <ReliableToolsHeading />
            <ReliableTools category="Service" subCategory="Software Development Services"/>
            <CaseStudies category="Service" subCategory="Software Development Services"/>
            <MeetOurClient />
            <AllFaq category="Service" subCategory="Software Development Services"/>
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default LagencySoftModerization
