import React, { useEffect } from 'react'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import ITHelpDesk from './Component/ITHelpDesk'
import OurOutSource from './Component/OurOutSource'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import AllFaq from '../../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import { Helmet } from 'react-helmet'
const HelpDesk = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Helmet>
        <title>Dedicated Software Teams | Help Desk</title>
        <link rel="canonical" href="https://https://https://www.conscientioustech.in/Service | Help Desk" />
        <meta
          name="description"
          content={``}
        />
        <meta name="keywords" content="CT, Technology, Services, Benefits,  Dedicated Software Teams, Help Desk" />
      </Helmet>

      <AllHeader category="SubService"  serviceName="Dedicated Software Teams" subServiceName="Help Desk" />
      <OurPartener />
      <WhyChooseCTSlider category="Service" subCategory="Dedicated Software Teams"/>
      <ITHelpDesk />
      <OurOutSource />
      <CaseStudies category="Service" subCategory="Dedicated Software Teams"/>
      <MeetOurClient />
      <AllFaq category="Dedicated Software Teams" subCategory="Help Desk" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default HelpDesk
