import React from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import SoftwareSolution from './Components/SoftwareSolution'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
const Retail = () => {
    return (
        <div>
            <AllHeader category="Industries" subCategory="Retail"/>
            <OurPartener />
            <WhyChooseCTSlider category="Industries" subCategory="Retail"/>
            <SoftwareSolution />
            <CaseStudies category="Industries" subCategory="Retail"/>
            <MeetOurClient />
            <AllFaq category="Industries" subCategory="Retail"/>
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default Retail
