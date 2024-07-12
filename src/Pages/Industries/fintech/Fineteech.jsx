import React from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import Solutions from './finetechSolutions/Solutions'
import Benefits from './finetechBenefits/Benefits'
import Specialised from './finetechspecialised/Specialised'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'

const Fineteech = () => {
    return (
        <div>
            <AllHeader category="Industries" subCategory="Fintech"/>
            <OurPartener />
            <Solutions />
            <WhyChooseCTSlider category="Industries" subCategory="Fintech"/>
            <Benefits />
            <Specialised />
            <ReliableToolsHeading />
            <ReliableTools category="Industries" subCategory="Fintech"/>
            <CaseStudies category="Industries" subCategory="Fintech"/>
            <Blog />
            <MeetOurClient />
            <AllFaq category="Industries" subCategory="Fintech"/>
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default Fineteech