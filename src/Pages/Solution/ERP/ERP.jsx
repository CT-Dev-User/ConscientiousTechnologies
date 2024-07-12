import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import FunctionalERPModule from './Components/FunctionalERPModule'
import ERPDevService from './Components/ERPDevService'
import ERPDevSteps from './Components/ERPDevSteps'
import PerkOfERP from './Components/PerkOfERP'
import TechnologyHeading from './Components/Technology/TechnologyHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
const ERP = () => {
      
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

    return (
        <div>
            <AllHeader category="Solutions" subCategory="ERP"/>
            <OurPartener />
            <WhyChooseCTSlider category="Solutions" subCategory="ERP"/>
            <FunctionalERPModule />
            <ERPDevService />
            <ERPDevSteps />
            <PerkOfERP />
            <TechnologyHeading />
            <ReliableTools category="Solutions" subCategory="ERP"/>
            <CaseStudies category="Solutions" subCategory="ERP"/>
            <MeetOurClient />
            <AllFaq category="Solutions" subCategory="ERP"/>
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default ERP
