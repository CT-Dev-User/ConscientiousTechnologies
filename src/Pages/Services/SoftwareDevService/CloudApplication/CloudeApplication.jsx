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
import { Helmet } from 'react-helmet'

const CloudeApplication = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <Helmet>
                <title>Software Development Services | Cloud application</title>
                <meta
                    name="description"
                    content={``}
                />
                <meta name="keywords" content="CT, Technology, Services, Benefits, Software Development Services, Cloud application" />
            </Helmet>
            <AllHeader
                category="SubService" serviceName="Software Development Services" subServiceName="Cloud application"
            />
            <OurPartener />
            <WhyChooseCTSlider category="Service" subCategory="Software Development Services" />
            <ScopeOfCloudeApp />
            <AttributeOfOurApp />
            <ReliableToolsHeading />
            <ReliableTools category="Service" subCategory="Software Development Services" />
            <CaseStudies category="Service" subCategory="Software Development Services" />
            <MeetOurClient />
            <AllFaq category="Service" subCategory="Software Development Services" />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default CloudeApplication

