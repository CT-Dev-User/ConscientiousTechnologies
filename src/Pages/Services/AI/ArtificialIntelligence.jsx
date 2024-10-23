import React from 'react'
import SoftWareAdvBussiness from './Components/SoftWareAdvBussiness'
import AISolutionWeCreate from './Components/AISolutionWeCreate'
import EndtoEndAIConsulting from './Components/EndToEndCunsolting'
import ChooseYourAiService from './Components/ChooseYourAiService'
import MLMethods from './Components/MLMethods'
import AiToolsHeader from './Components/AITechTools/AiToolsHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'


const ArtificialIntelligence = () => {
  return (
    <div>
      <AllHeader category="Services" serviceName="Artificial Intelligence (AI)"  />
      <OurPartener />
      <WhyChooseCTSlider category="Services" subCategory="Artificial Intelligence (AI) Services" />
      <SoftWareAdvBussiness />
      <AISolutionWeCreate />
      <EndtoEndAIConsulting />
      <ChooseYourAiService />
      <MLMethods />
      <AiToolsHeader />
      <ReliableTools category="Services" subCategory="Artificial Intelligence (AI) Services" />
      <CaseStudies category="Services" subCategory="Artificial Intelligence (AI) Services" />
      <MeetOurClient />
      <AllFaq category="Services" subCategory="Artificial Intelligence (AI) Services" />
      <BookFreeConsultation />
      <Footer />

    </div>
  )
}

export default ArtificialIntelligence
