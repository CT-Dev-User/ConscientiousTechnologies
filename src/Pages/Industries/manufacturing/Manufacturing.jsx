import React from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ITSolution from './Components/ITSolution'
import StrengthOfCt from './Components/StrengthOfCt'
import ServiceOption from './Components/ServiceOption'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
const Manufacturing = () => {
    return (
        <div>
            <AllHeader category="Industries" subCategory="Manufacturing"/>
            <OurPartener />
            <WhyChooseCTSlider category="Industries" subCategory="Manufacturing"/>
            <ITSolution />
            <StrengthOfCt />
            <ServiceOption />
            <CaseStudies category="Industries" subCategory="Manufacturing"/>
            <MeetOurClient />
            <AllFaq category="Industries" subCategory="Manufacturing"/>
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default Manufacturing
