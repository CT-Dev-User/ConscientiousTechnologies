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
            <AllHeader category="Industry" subCategory="Retail"/>
            <OurPartener />
            <WhyChooseCTSlider category="Industry" subCategory="Retail"/>
            <SoftwareSolution />
            <CaseStudies category="Industry" subCategory="Retail"/>
            <MeetOurClient />
            <AllFaq category="Industry" subCategory="Retail"/>
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default Retail
