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

const SoftDevWebDevelopment = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <AllHeader category="SubServices"  serviceName="Dedicated Software Teams" subServiceName="Web Development"/>
            <OurPartener />
            <WebSolutionWeNeed />
            <PartnerUpWithCity />
            <FullScale />
            <WebDevprocess />
            <ReliableToolsHeading />
            <ReliableTools category="Dedicated Software Team" subCategory="Web Development" />
            <CaseStudies category="Dedicated Software Team" subCategory="Web Development"/>
            <MeetOurClient />
            <AllFaq category="Dedicated Software Team" subCategory="Web Development"/>
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default SoftDevWebDevelopment
