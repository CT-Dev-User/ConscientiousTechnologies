import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import OpManFeature from './Components/OpManFeature'
import ServiceOpMang from './Components/ServiceOpMang'
import OpManCons from './Components/OpManCons'
import SoftImplementation from './Components/SoftImplementation'
import TechnologyHeading from '../ERP/Components/Technology/TechnologyHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'

const OperationMang = () => {
      
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

    return (
        <div>
            <AllHeader category="Solutions" solutionName="Operations Management"/>
            <OurPartener />
            <OpManFeature />
            <ServiceOpMang />
            <WhyChooseCTSlider category="Solutions" subCategory="Operations Management"/>
            <OpManCons />
            <SoftImplementation />
            <TechnologyHeading />
            <ReliableTools category="Solutions" subCategory="Operations Management"/>
            <CaseStudies category="Solutions" subCategory="Operations Management"/>
            <MeetOurClient />
            <AllFaq category="Solutions" subCategory="Operations Management"/>
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default OperationMang
