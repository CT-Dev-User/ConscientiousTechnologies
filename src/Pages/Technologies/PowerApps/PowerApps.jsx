import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import MSPowerApps from './msPowerApps/MSPowerApps'
import PowerAppsUseCases from './powerAppsUseCases/PowerAppsUseCases'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
const PowerApps = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Technologies" subCategory="Power Apps" />
      <OurPartener />
      <MSPowerApps />
      <PowerAppsUseCases />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="Power Apps" />
      <CaseStudies category="Technologies" subCategory="Power Apps" />
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="Power Apps" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default PowerApps