import React, { useEffect } from 'react'
import KeyFeaturesPM from './Components/KeyFeaturesPM'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ExtendedFeature from './Components/ExtendedFeature'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import PMSoftMang from './Components/PMSoftMang'
import SuccessFactors from './Components/SuccessFactors'
import { Helmet } from 'react-helmet'
const ProjectMang = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Helmet>
        <title>Project Management Solution</title>
        <link rel="canonical" href="https://https://https://www.conscientioustech.in/Solution | Project Management Service" />
        <meta
          name="description"
          content={``}
        />
        <meta name="keywords" content="CT, Technology, Solution, Benefits, Project Management" />
      </Helmet>
      <AllHeader category="Solution" solutionName="Project Management" />
      <OurPartener />
      <KeyFeaturesPM />
      <ExtendedFeature />
      <PMSoftMang />
      <SuccessFactors />
      <CaseStudies category="Solution" subCategory="Project Management" />
      <MeetOurClient />
      <AllFaq category="Solution" subCategory="Project Management" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default ProjectMang
