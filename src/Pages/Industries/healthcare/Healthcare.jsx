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
            <AllHeader category="Industry" industryName="Healthcare"/>
            <OurPartener />
            <MeetAllHealthcare />
            <WhyChooseCTSlider category="Industry" subCategory="Healthcare"/>
            <ITSolution />
            <ReliableToolsHeading/>
            <ReliableTools category="Industry" subCategory="Healthcare"/>
            <CaseStudies category="Industry" subCategory="Healthcare"/>
            <MeetOurClient />
            <AllFaq category="Industry" subCategory="Healthcare"/>
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default Healthcare
