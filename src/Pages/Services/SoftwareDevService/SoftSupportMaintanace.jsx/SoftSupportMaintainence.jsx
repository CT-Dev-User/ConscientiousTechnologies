 import React, { useEffect } from 'react'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import AppWeSupport from './Components/AppWeSupport'
import ReliableToolsHeading from '../../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import ApplicationMaintainace from './Components/ApplicationMaintainace'
import AllFaq from '../../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
 
 const SoftSupportMaintainence = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

   return (
     <div>
       <AllHeader category="Software Development Services" subCategory="Software support"/>
       <OurPartener/>
       <WhyChooseCTSlider category="Software Development Services" subCategory="Software support"/>
       <AppWeSupport/>
       <ApplicationMaintainace/>
       <ReliableToolsHeading/>
       <ReliableTools category="Software Development Services" subCategory="Software support"/>
       <CaseStudies category="Software Development Services" subCategory="Software support"/>
       <MeetOurClient/>
       <AllFaq category="Software Development Services" subCategory="Software support"/>
       <BookFreeConsultation/>
       <Footer/>
     </div>
   )
 }
 
 export default SoftSupportMaintainence
 