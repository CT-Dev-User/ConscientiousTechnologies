import React, { useEffect } from 'react'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import SoftForAdv from './softwareForAdvance/SoftForAdv'
import AISolution from './aiSolution/AISolution'
import AiConsultingService from './aiconsultingService/AiConsultingService'
import AIServiceOption from './aiServiceOption/AIServiceOption'
import MLMethods from './mlMethods/MLMethods'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
const ArtififcialIntelligence = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Technologies" subCategory="Artificial Intelligence" />
      <OurPartener />
      <WhyChooseCTSlider category="Technologies" subCategory="Artificial Intelligence" />
      <SoftForAdv />
      <AISolution />
      <AiConsultingService />
      <AIServiceOption />
      <MLMethods />
      <ReliableToolsHeading />
      <ReliableTools category="Technologies" subCategory="Artificial Intelligence" />
      <CaseStudies category="Technologies" subCategory="Artificial Intelligence" />
      <Blog />
      <MeetOurClient />
      <AllFaq category="Technologies" subCategory="Artificial Intelligence" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default ArtififcialIntelligence