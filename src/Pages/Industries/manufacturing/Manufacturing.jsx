import React from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import ITSolution from './Components/ITSolution'
import StrengthOfCt from './Components/StrengthOfCt'
import ServiceOption from './Components/ServiceOption'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import { Helmet } from 'react-helmet'
const Manufacturing = () => {
    return (
        <div>
            <Helmet>
                <title>Manufacturing Industry</title>
                <link rel="canonical" href="https://https://https://www.conscientioustech.in/Industries | Manufacturing" />
                <meta
                    name="description"
                    content={``}
                />
                <meta name="keywords" content="CT, Technology, Industries, Benefits, Manufacturing" />
            </Helmet>
            <AllHeader category="Industry" industryName="Manufacturing"/>
            <OurPartener />
            <WhyChooseCTSlider category="Industry" subCategory="Manufacturing"/>
            <ITSolution />
            <StrengthOfCt />
            <ServiceOption />
            <CaseStudies category="Industry" subCategory="Manufacturing"/>
            <MeetOurClient />
            <AllFaq category="Industry" subCategory="Manufacturing"/>
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default Manufacturing
