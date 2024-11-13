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
import { Helmet } from 'react-helmet'
const Telicommunication = () => {
    return (
        <div>
            <Helmet>
                <title>Telecommunications Industry</title>
                <link rel="canonical" href="https://https://https://www.conscientioustech.in/Industries | Telecommunications" />
                <meta
                    name="description"
                    content={``}
                />
                <meta name="keywords" content="CT, Technology, Industries, Benefits, Telecommunications Industry" />
            </Helmet>
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
