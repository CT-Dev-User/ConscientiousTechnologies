import React from 'react'
import ITSolutions from './itSolution/ITSolutions'
import ITServices from './itServices/ITServices'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'

const Insurance = () => {
    return (
        <div>
            <AllHeader category="Industries" subCategory="Insurance" />
            <OurPartener />
            <WhyChooseCTSlider category="Industries" subCategory="Insurance" />
            <ITSolutions />
            <ITServices />
            <CaseStudies category="Industries" subCategory="Insurance" />
            <Blog />
            <MeetOurClient />
            <AllFaq category="Industries" subCategory="Insurance" />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default Insurance