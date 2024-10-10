import React from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import MeetAllHealthcare from './Components/MeetAllHealthcare'
import ITSolution from './Components/ITSolution'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
const Healthcare = () => {
    return (
        <div>
            <AllHeader category="Industries" subCategory="Healthcare"/>
            <OurPartener />
            <MeetAllHealthcare />
            <WhyChooseCTSlider category="Industries" subCategory="Healthcare"/>
            <ITSolution />
            <ReliableToolsHeading/>
            <ReliableTools category="Industries" subCategory="Healthcare"/>
            <CaseStudies category="Industries" subCategory="Healthcare"/>
            <MeetOurClient />
            <AllFaq category="Industries" subCategory="Healthcare"/>
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default Healthcare
