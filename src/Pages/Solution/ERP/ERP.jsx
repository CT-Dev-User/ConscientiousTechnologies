import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import FunctionalERPModule from './Components/FunctionalERPModule'
import ERPDevService from './Components/ERPDevService'
import ERPDevSteps from './Components/ERPDevSteps'
import PerkOfERP from './Components/PerkOfERP'
import TechnologyHeading from './Components/Technology/TechnologyHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import { Helmet } from 'react-helmet'
const ERP = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Helmet>
        <title>ERP Solution</title>
        <link rel="canonical" href="https://https://https://www.conscientioustech.in/Solution | ERP Service" />
        <meta
          name="description"
          content={``}
        />
        <meta name="keywords" content="CT, Technology, Solution, Benefits, ERP" />
      </Helmet>
      <AllHeader category="Solution" solutionName="ERP" />
      <OurPartener />
      <WhyChooseCTSlider category="Solution" subCategory="ERP" />
      <FunctionalERPModule />
      <ERPDevService />
      <ERPDevSteps />
      <PerkOfERP />
      <TechnologyHeading />
      <ReliableTools category="Solution" subCategory="ERP" />
      <CaseStudies category="Solution" subCategory="ERP" />
      <MeetOurClient />
      <AllFaq category="Solution" subCategory="ERP" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default ERP
