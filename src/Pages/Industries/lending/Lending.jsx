import React from 'react'
import LendingIntegration from './lendingSoftIntegration/LendingIntegration'
import LendingSolutions from './lendingSolutions/LendingSolutions'
import LendingUSeCases from './lendingUseCases/LendingUSeCases'
import BenefitsOfLending from './benefitsOfLending/BenefitsOfLending'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'

const Lending = () => {
    return (
        <div>
            <AllHeader category="Industries" subCategory="Lending" />
            <OurPartener />
            <WhyChooseCTSlider category="Industries" subCategory="Lending" />
            <LendingUSeCases />
            <LendingSolutions />
            <LendingIntegration />
            <BenefitsOfLending />
            <CaseStudies category="Industries" subCategory="Lending" />
            <Blog />
            <MeetOurClient />
            <AllFaq category="Industries" subCategory="Lending" />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default Lending