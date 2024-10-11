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

const Finance = () => {
    return (
        <div>
            <AllHeader category="Industries" industryName="Financial Services"/>
            <OurPartener/>
            <WhyChooseCTSlider category="Industries" subCategory="Financial Services"/>
            <FinancialSerDomain />
            <CustomerExperience />
            <SuccessDrivenApproach />
            <ReliableToolsHeading />
            <ReliableTools category="Industries" subCategory="Financial Services"/>
            <CaseStudies category="Industries" subCategory="Financial Services"/>
            <Blog />
            <MeetOurClient />
            <AllFaq category="Industries" subCategory="Financial Services"/>
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default Finance