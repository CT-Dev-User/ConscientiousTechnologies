import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import FunctionalityModule from './Components/FunctionalityModule'
import EAMServices from './Components/EAMServices'
import TechnologyHeading from '../ERP/Components/Technology/TechnologyHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import { Helmet } from 'react-helmet'

const AssetManagements = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (

    <div>
       <Helmet>
        <title>Asset Management Solution</title>
        <link rel="canonical" href="https://https://https://www.conscientioustech.in/Solution | Asset Management" />
        <meta
          name="description"
          content={``}
        />
        <meta name="keywords" content="CT, Technology, Solution, Benefits, Asset Management" />
      </Helmet>
      <AllHeader category="Solution" solutionName="Asset Management"/>
      <OurPartener />
      <FunctionalityModule />
      <WhyChooseCTSlider category="Solution" solutionName="Asset Management"/>
      <EAMServices />
      <TechnologyHeading />
      <ReliableTools category="Solution" subCategory="Asset Management"/>
      <CaseStudies category="Solution" subCategory="Asset Management"/>
      <MeetOurClient />
      <AllFaq category="Solution" subCategory="Asset Management"/>
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default AssetManagements
