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
import { Helmet } from 'react-helmet'

const Investment = () => {
    return (
        <div>
            <Helmet>
                <title>Investment Industry</title>
                <link rel="canonical" href="https://https://https://www.conscientioustech.in/Industries | Investment" />
                <meta
                    name="description"
                    content={``}
                />
                <meta name="keywords" content="CT, Technology, Industries, Benefits, Investment" />
            </Helmet>
            <AllHeader category="Industry" industryName="Investment" />
            <OurPartener />
            <WhyChooseCTSlider category="Industry" subCategory="Investment" />
            <MeetWhereWe />
            <InvestmentSoftware />
            <InvestmentAspects />
            <ReliableToolsHeading />
            <ReliableTools category="Industry" subCategory="Investment" />
            <CaseStudies category="Industry" subCategory="Investment" />
            <Blog category="Industry" subCategory="Investment" />
            <MeetOurClient />
            <AllFaq category="Industry" subCategory="Investment" />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default Investment