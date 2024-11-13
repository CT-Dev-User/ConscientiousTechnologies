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
import { Helmet } from 'react-helmet'

const Lending = () => {
    return (
        <div>
            <Helmet>
            <link rel="canonical" href="https://https://https://www.conscientioustech.in/Industries | Lending" />
                <title>Lending Industry</title>
                <meta
                    name="description"
                    content={``}
                />
                <meta name="keywords" content="CT, Technology, Industries, Benefits, Lending" />
            </Helmet>
            <AllHeader category="Industry" industryName="Lending" />
            <OurPartener />
            <WhyChooseCTSlider category="Industry" subCategory="Lending" />
            <LendingUSeCases />
            <LendingSolutions />
            <LendingIntegration />
            <BenefitsOfLending />
            <CaseStudies category="Industry" subCategory="Lending" />
            <Blog category="Industry" subCategory="Lending" />
            <MeetOurClient />
            <AllFaq category="Industry" subCategory="Lending" />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default Lending