import React from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import MeetWhereWe from './meetWhereWeAre/MeetWhereWe'
import InvestmentSoftware from './investmentSoftware/InvestmentSoftware'
import InvestmentAspects from './investmentAspects/InvestmentAspects'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import ReliableToolsHeading from '../financialSoftware/ReliableTools/ReliableToolsHeading'

const Investment = () => {
    return (
        <div>
            <AllHeader category="Industries" industryName="Investment"/>
            <OurPartener />
            <WhyChooseCTSlider category="Industries" subCategory="Investment"/>
            <MeetWhereWe />
            <InvestmentSoftware />
            <InvestmentAspects />
            <ReliableToolsHeading />
            <ReliableTools category="Industries" subCategory="Investment"/>
            <CaseStudies category="Industries" subCategory="Investment"/>
            <Blog />
            <MeetOurClient />
            <AllFaq category="Industries" subCategory="Investment"/>
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default Investment