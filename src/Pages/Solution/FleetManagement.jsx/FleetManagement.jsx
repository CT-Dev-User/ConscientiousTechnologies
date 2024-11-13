import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ChallengesFleet from './Components/ChallengesFleet'
import ServiceOptions from './Components/ServiceOptions'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import Solution from './Components/Solution'
import { Helmet } from 'react-helmet'
const FleetManagement = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Helmet>
        <title>Fleet Management Solution</title>
        <link rel="canonical" href="https://https://https://www.conscientioustech.in/Solution | Fleet Management Service" />
        <meta
          name="description"
          content={``}
        />
        <meta name="keywords" content="CT, Technology, Solution, Benefits, Fleet Management" />
      </Helmet>
      <AllHeader category="Solution" solutionName="Fleet Management" />
      <OurPartener />
      <ChallengesFleet />
      <Solution />
      <WhyChooseCTSlider category="Solution" subCategory="Fleet Management" />
      <ServiceOptions />
      <CaseStudies category="Solution" subCategory="Fleet Management" />
      <MeetOurClient />
      <AllFaq category="Solution" subCategory="Fleet Management" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default FleetManagement
