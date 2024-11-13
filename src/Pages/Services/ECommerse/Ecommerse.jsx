import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ExploreConsuting from './Component/ExploreConsuting'
import EcommerseDevService from './Component/EcommerseDevService'
import OurTechHeader from './Component/OurTech/OurTechHeader'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'

const Ecommerse = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Helmet>
        <title>Ecommerce Services</title>
        <link rel="canonical" href="https://https://https://www.conscientioustech.in/Services | Ecommerce" />
        <meta
          name="description"
          content={``}
        />
        <meta name="keywords" content="CT, Technology, Services, Benefits, Ecommerce Services" />
      </Helmet>
      <AllHeader category="Service" subServiceName="Ecommerce Services" />
      <OurPartener />
      <ExploreConsuting />
      <WhyChooseCTSlider category="Service" subCategory="Ecommerce Services" />
      <EcommerseDevService />
      <OurTechHeader />
      <ReliableTools category="Service" subCategory="Ecommerce Services" />
      <CaseStudies category="Service" subCategory="Ecommerce Services" />
      <MeetOurClient />
      <AllFaq category="Service" subCategory="Ecommerce Services" />
      <BookFreeConsultation />
      <Footer />

    </div>
  )
}

export default Ecommerse
