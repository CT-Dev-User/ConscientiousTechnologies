import React from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import WhoWeServe from './Components/WhoWeServe'
import FeatureWeRecomded from './Components/FeatureWeRecomded'
import ValueDrivenApproach from './Components/ValueDrivenApproach'
import FieldofExpertise from './Components/FieldofExpertise'
import TechnologyHeader from './Components/TechnologyPlatform/TechnologyHeader'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
const Payments = () => {
    return (
        <div>
            <AllHeader category="Industry" industryName="Payments"/>
            <OurPartener />
            <WhyChooseCTSlider ategory="Industry" subCategory="Payments"/>
            <WhoWeServe />
            <FieldofExpertise />
            <FeatureWeRecomded />
            <ValueDrivenApproach />
            <TechnologyHeader />
            <ReliableTools category="Industry" subCategory="Payments"/>
            <CaseStudies category="Industry" subCategory="Payments"/>
            <MeetOurClient />
            <AllFaq category="Industry" subCategory="Payments"/>
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default Payments
