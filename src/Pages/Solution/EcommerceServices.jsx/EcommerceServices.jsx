import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ConsultingService from './Components/ConsultingService'
import ECommerseDevService from './Components/ECommerseDevService'
import GrowthOptimization from './Components/GrowthOptimization'
import TechStackHeader from './Components/OurTechStack/OurTechStackHeader'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import SupportMaintainance from './Components/SupportMaintainance'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import { Helmet } from 'react-helmet'

const EcommerceServices = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Helmet>
        <title>Ecommerce  Solution</title>
        <link rel="canonical" href="https://https://https://www.conscientioustech.in/Solution | Eccommerce" />
        <meta
          name="description"
          content={``}
        />
        <meta name="keywords" content="CT, Technology, Solution, Benefits, Ecommerce Services" />
      </Helmet>
      <AllHeader category="Solution" solutionName="Ecommerce Services" />
      <OurPartener />
      <WhyChooseCTSlider category="Solution" subCategory="Ecommerce Services" />
      <ConsultingService />
      <ECommerseDevService />
      <SupportMaintainance />
      <GrowthOptimization />
      <TechStackHeader />
      <ReliableTools category="Solution" subCategory="Ecommerce Services" />
      <CaseStudies category="Solution" subCategory="Ecommerce Services" />
      <MeetOurClient />
      <AllFaq category="Solution" subCategory="Ecommerce Services" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default EcommerceServices
