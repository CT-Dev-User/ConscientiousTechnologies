import React, { useEffect } from 'react'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import DiverseSkills from './Component/DiverseSkills'
import ReliableToolsHeading from '../../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import AllFaq from '../../../RepeatedComponents/AllFaq/AllFaq'
import PartnerUpWithCity from '../../../RepeatedComponents/partnerUpWithCity/PartnerUpWithCity'
import AllHeader from '../../../RepeatedComponents/haeder/AllHeader'
import ReliableTools from '../../../RepeatedComponents/ReliableTechTools/ReliableTechTools'

const CustomConsService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <AllHeader category="Software Development Services" subCategory="Custom software development" />
            <OurPartener />
            <PartnerUpWithCity/>
            <DiverseSkills />
            <ReliableToolsHeading />
            <ReliableTools category="Software Development Services" subCategory="Custom software development" />
            <CaseStudies category="Software Development Services" subCategory="Custom software development"/>
            <MeetOurClient />
            <AllFaq category="Software Development Services" subCategory="Custom software development"/>
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default CustomConsService
