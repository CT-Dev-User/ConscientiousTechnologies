import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import PerkOfWebDesign from './Component/PerkOfWebDesign'
import UI_UX_Option from './Component/UI_UXOption/UI_UX_Option'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'

const UI_UXService = () => {
      
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

    return (
        <div>
            <AllHeader category="Services" subCategory="UI-UX Design"/>
            <OurPartener />
            <WhyChooseCTSlider category="Services" subCategory="UI-UX Design"/>
            <PerkOfWebDesign />
            <UI_UX_Option />
            <CaseStudies category="Services" subCategory="UI-UX Design"/>
            <MeetOurClient />
            <AllFaq category="Services" subCategory="UI-UX Design"/>
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default UI_UXService
