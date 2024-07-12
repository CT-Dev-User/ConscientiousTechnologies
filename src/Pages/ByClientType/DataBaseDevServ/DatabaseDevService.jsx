import React from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import PerkOfOurApplication from './Component/WhatYouGet'
import Scope from './Component/Scope'
import DataBaseConsulting from './Component/DataBaseSoftDev&Cons'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'

const DatabaseDevService = () => {
    return (
        <div>
            <AllHeader category="Startup" subCategory="Database Development Service"/>
            <OurPartener />
            <WhyChooseCTSlider category="Startup" subCategory="Database Development Service"/>
            <PerkOfOurApplication />
            <Scope />
            <DataBaseConsulting />
            <ReliableToolsHeading />
            <ReliableTools category="Startup" subCategory="Database Development Service"/>
            <MeetOurClient />
            <AllFaq category="Startup" subCategory="Database Development Service"/>
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default DatabaseDevService
