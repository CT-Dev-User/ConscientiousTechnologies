import React from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import SolutionsWeHelpStartups from './Component/SolutionsWeHelpStartups'
import SoftDevProcess from './Component/SoftDevProcess'
import TechToolsHeader from './Component/TechTools/TechToolsHeader'
import OurSoftDevOption from './Component/OurSoftDevOption'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AreaOfExperties from '../../RepeatedComponents/AreaOfExperties/AreaOfExperties'

const StartUpProductDev = () => {
    return (
        <div>
            <AllHeader category="By Client Type" subCategory="Startup" />
            <OurPartener />
            <WhyChooseCTSlider category="By Client Type" subCategory="Startup" />
            <SolutionsWeHelpStartups />
            <AreaOfExperties category="By Client Type" subCategory="Startup" navSubCategory="start-up-product-development"/>
            <SoftDevProcess />
            <TechToolsHeader />
            <ReliableTools category="By Client Type" subCategory="Startup" />
            <OurSoftDevOption />
            <CaseStudies category="By Client Type" subCategory="Startup" />
            <MeetOurClient />
            <AllFaq category="By Client Type" subCategory="Startup" />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default StartUpProductDev
