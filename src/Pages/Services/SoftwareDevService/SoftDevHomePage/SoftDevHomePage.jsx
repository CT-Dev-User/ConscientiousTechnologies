import React, { useEffect } from 'react'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import SoftAdvance from './Component/SoftAdvance'
import SoftDevSteps from './Component/SoftDevSteps'
import ReliableToolsHeading from '../../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import CollabSenario from './Component/CollabSenario'
import AllFaq from '../../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../../RepeatedComponents/haeder/AllHeader'
import PartnerUpWithCity from '../../../RepeatedComponents/partnerUpWithCity/PartnerUpWithCity'
import ReliableTools from '../../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AreaOfExperties from '../../../RepeatedComponents/AreaOfExperties/AreaOfExperties'
import ExploreSoftDevHeading from './Component/ExploreSoftDevHeading'
import StepsSoftDev from './Component/StepsSoftDev'
import StatsOfServices from './Component/statsOfServices'
const SoftDevHomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <AllHeader category="Services" subCategory="Software Development Services" />
            <OurPartener /> 
            <ExploreSoftDevHeading />
            <AreaOfExperties category="Services" subCategory="Software Development Services" navSubCategory="Software Development Services" navCategory="Services" />
            <StatsOfServices/>
            <PartnerUpWithCity />
            <CollabSenario />
            <SoftAdvance />
            <SoftDevSteps />
            <StepsSoftDev/>
            <ReliableToolsHeading />
            <ReliableTools category="Services" subCategory="Software Development Services" />
            <CaseStudies category="Services" subCategory="Software Development Services" />
            <MeetOurClient />
            <AllFaq category="Services" subCategory="Software Development Services" />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default SoftDevHomePage
