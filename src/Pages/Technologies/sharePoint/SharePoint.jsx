import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import Functionality from './functionality/Functionality'
import KeyIntegration from './keyIntegration/KeyIntegration'
import Customization from './customization/Customization'
import SharePointUseCases from './useCases/SharePointUseCases'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
const SharePoint = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Technologies" subCategory="SharePoint and Office 365" />
      <OurPartener />
      <Functionality />
      <KeyIntegration />
      <Customization />
      <SharePointUseCases />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="SharePoint and Office 365" />
      <CaseStudies category="Technologies" subCategory="SharePoint and Office 365" />
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="SharePoint and Office 365" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default SharePoint