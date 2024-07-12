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
const ProjectMang = () => {
      
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

    return (
        <div>
            <AllHeader category="Solutions" subCategory="Project Management"/>
            <OurPartener />
            <KeyFeaturesPM />
            <ExtendedFeature />
            <PMSoftMang/>
            <SuccessFactors/>
            <CaseStudies category="Solutions" subCategory="Project Management"/>
            <MeetOurClient />
            <AllFaq category="Solutions" subCategory="Project Management"/>
            <BookFreeConsultation />
            <Footer/>
        </div>
    )
}

export default ProjectMang
