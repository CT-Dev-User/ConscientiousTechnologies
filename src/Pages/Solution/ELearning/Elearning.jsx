import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import KeyFeatureOfELearning from './Component/KeyFeatureOfELearning'
import BenefitsFromPartenerShip from './Component/BenefitsFromPartenerShip'
import ChooseYourService from './Component/ChooseYourService'
import TechnologyHeader from '../HRSoftwareDevelopment/Components/TechnologyStack/TechnologyHeader'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
const Elearning = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <AllHeader category="Solutions" solutionName="eLearning"/>
            <OurPartener />
            <KeyFeatureOfELearning />
            <BenefitsFromPartenerShip />
            <ChooseYourService />
            <TechnologyHeader />
            <ReliableTools category="Solutions" subCategory="eLearning"/>
            <CaseStudies category="Solutions" subCategory="eLearning"/>
            <MeetOurClient />
            <AllFaq category="Solutions" subCategory="eLearning"/>
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default Elearning
