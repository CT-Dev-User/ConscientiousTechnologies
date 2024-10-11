import React from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import BankingServiceOffer from './bankingserviceOffer/BankingServiceOffer'
import BankingSoftSolution from './bankingSoftSolution/BankingSoftSolution'
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

const Banking = () => {
    return (
        <div>
            
            <AllHeader category="Industries" industryName="Banking"/>
            <OurPartener />
            <WhyChooseCTSlider category="Industries" subCategory="Banking"/>
            <BankingSoftSolution />
            <BankingServiceOffer />
            <ReliableToolsHeading />
            <ReliableTools category="Industries" subCategory="Banking"/>
            <CaseStudies category="Industries" subCategory="Banking"/>
            <Blog />
            <MeetOurClient />
            <AllFaq category="Industries" subCategory="Banking"/>
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default Banking