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
import { Helmet } from 'react-helmet'

const Banking = () => {
    return (
        <div>
            <Helmet>
                <title>Banking</title>
                <link rel="canonical" href="https://https://https://www.conscientioustech.in/Industries | Banking" />
                <meta
                    name="description"
                    content={``}
                />
                <meta name="keywords" content="CT, Technology, Industries, Benefits, Banking" />
            </Helmet>
            <AllHeader category="Industry" industryName="Banking" />
            <OurPartener />
            <WhyChooseCTSlider category="Industry" subCategory="Banking" />
            <BankingSoftSolution />
            <BankingServiceOffer />
            <ReliableToolsHeading />
            <ReliableTools category="Industry" subCategory="Banking" />
            <CaseStudies category="Industry" subCategory="Banking" />
            <Blog category="Industry" subCategory="Banking" />
            <MeetOurClient />
            <AllFaq category="Industries" subCategory="Banking" />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default Banking