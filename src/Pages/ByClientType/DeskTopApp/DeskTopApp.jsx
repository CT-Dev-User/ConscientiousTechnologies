import React from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import OurDesktopApp from './Component/OurDesktopApp'
import PerkOfOurApplication from './Component/PerkOfOurApplication'
import SoftDevProcess from './Component/SoftDevProcess'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'

const DeskTopApp = () => {
    return (
        <div>
            <AllHeader category="Startup" subCategory="Desktop Application" />
            <OurPartener />
            <WhyChooseCTSlider category="Startup" subCategory="Desktop Application"/>
            <OurDesktopApp />
            <PerkOfOurApplication />
            <SoftDevProcess />
            <ReliableTools category="Startup" subCategory="Desktop Application" />
            <CaseStudies category="Startup" subCategory="Desktop Application"/>
            <MeetOurClient />
            <AllFaq category="Startup" subCategory="Desktop Application" />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default DeskTopApp
