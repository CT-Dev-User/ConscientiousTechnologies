import React, { useEffect } from 'react'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import WebSolutionWeNeed from './Components/WebSolutionWeNeed'
import FullScale from './Components/FullScale'
import WebDevprocess from './Components/WebDevprocess'
import ReliableToolsHeading from '../../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import AllFaq from '../../../RepeatedComponents/AllFaq/AllFaq'
import PartnerUpWithCity from '../../../RepeatedComponents/partnerUpWithCity/PartnerUpWithCity'
import AllHeader from '../../../RepeatedComponents/haeder/AllHeader'
import ReliableTools from '../../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import { Helmet } from 'react-helmet'

const SoftDevWebDevelopment = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <Helmet>
                <title>Dedicated Software Teams | Web Development</title>
                <meta
                    name="description"
                    content={``}
                />
                <meta name="keywords" content="CT, Technology, Services, Benefits, Dedicated Software Teams, Web Development" />
            </Helmet>
            <AllHeader category="SubService" serviceName="Dedicated Software Teams" subServiceName="Web Development" />
            <OurPartener />
            <WebSolutionWeNeed />
            <PartnerUpWithCity />
            <FullScale />
            <WebDevprocess />
            <ReliableToolsHeading />
            <ReliableTools category="Service" subCategory="Dedicated Software Teams" />
            <CaseStudies category="Service" subCategory="Dedicated Software Teams" />
            <MeetOurClient />
            <AllFaq category="Service" subCategory="Dedicated Software Teams" />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default SoftDevWebDevelopment
