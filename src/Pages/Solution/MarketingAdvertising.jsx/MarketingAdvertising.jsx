import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import SoftwareThatDrives from './Components/SoftwareThatDrives'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import { Helmet } from 'react-helmet'
const MarketingAdvertising = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Helmet>
        <title>Marketing & advertising</title>
        <link rel="canonical" href="https://https://https://www.conscientioustech.in/Solution | Marketing Advertising Service" />
        <meta
          name="description"
          content={``}
        />
        <meta name="keywords" content="CT, Technology, Solution, Benefits, Marketing & advertising" />
      </Helmet>
      <AllHeader category="Solution" solutionName="Marketing & advertising" />
      <OurPartener />
      <SoftwareThatDrives />
      <WhyChooseCTSlider category="Solution" subCategory="Marketing & advertising" />
      <CaseStudies category="Solution" subCategory="Marketing & advertising" />
      <MeetOurClient />
      <AllFaq category="Solution" subCategory="Marketing & advertising" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default MarketingAdvertising
