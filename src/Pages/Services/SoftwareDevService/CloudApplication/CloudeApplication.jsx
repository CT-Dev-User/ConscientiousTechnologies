import React, { useEffect } from 'react'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import ScopeOfCloudeApp from './Component/ScopeOfCloudeApp'
import AttributeOfOurApp from './Component/AttributeOfOurApp'
import ReliableToolsHeading from '../../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import AllFaq from '../../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../../RepeatedComponents/ReliableTechTools/ReliableTechTools'

const CloudeApplication = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <AllHeader category="Software Development Services" subCategory="Cloud application"/>
            <OurPartener />
            <WhyChooseCTSlider category="Software Development Services" subCategory="Cloud application"/>
            <ScopeOfCloudeApp />
            <AttributeOfOurApp />
            <ReliableToolsHeading />
            <ReliableTools category="Software Development Services" subCategory="Cloud application" />
            <CaseStudies />
            <MeetOurClient />
            <AllFaq category="Software Development Services" subCategory="Cloud application"/>
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default CloudeApplication

