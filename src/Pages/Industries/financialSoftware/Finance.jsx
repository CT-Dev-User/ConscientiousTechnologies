import React from 'react'
import CustomerExperience from './customerExperience/CustomerExperience'
import FinancialSerDomain from './financialServiceDomain/FinancialSerDomain'
import SuccessDrivenApproach from './successDriveApproach/SuccessDrivenApproach'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import ReliableToolsHeading from './ReliableTools/ReliableToolsHeading'
import { Helmet } from 'react-helmet'

const Finance = () => {
    return (
        <div>
            <Helmet>
                <title>Financial Services</title>
                <link rel="canonical" href="https://https://https://www.conscientioustech.in/Industries | Finance" />
                <meta
                    name="description"
                    content={``}
                />
                <meta name="keywords" content="CT, Technology, Industries, Benefits, Financial Services" />
            </Helmet>
            <AllHeader category="Industry" industryName="Financial Services" />
            <OurPartener />
            <WhyChooseCTSlider category="Industry" subCategory="Financial Services" />
            <FinancialSerDomain />
            <CustomerExperience />
            <SuccessDrivenApproach />
            <ReliableToolsHeading />
            <ReliableTools category="Industry" subCategory="Financial Services" />
            <CaseStudies category="Industry" subCategory="Financial Services" />
            <Blog category="Industry" subCategory="Financial Services" />
            <MeetOurClient />
            <AllFaq category="Industry" subCategory="Financial Services" />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default Finance