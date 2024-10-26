import React from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import OperationSupportSystem from './Components/OperationSupportSystem'
import BussinessSupportSystem from './Components/BussinessSupportSystem'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
const Telicommunication = () => {
    return (
        <div>
            <AllHeader category="Industry" industryName="Telecommunications" />
            <OurPartener />
            <WhyChooseCTSlider category="Industry" subCategory="Telecommunications" />
            <OperationSupportSystem />
            <BussinessSupportSystem />
            <CaseStudies category="Industry" subCategory="Telecommunications" />
            <MeetOurClient />
            <AllFaq category="Industry" subCategory="Telecommunications" />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default Telicommunication
