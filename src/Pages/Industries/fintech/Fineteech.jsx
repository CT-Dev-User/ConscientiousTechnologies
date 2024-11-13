import React from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import Solutions from './finetechSolutions/Solutions'
import Benefits from './finetechBenefits/Benefits'
import Specialised from './finetechspecialised/Specialised'
import ReliableToolsHeading from '../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import ReliableTools from '../../RepeatedComponents/ReliableTechTools/ReliableTechTools'
import { Helmet } from 'react-helmet'

const Fineteech = () => {
    return (
        <div>
            <Helmet>
                <title>Fintech Industry</title>
                <link rel="canonical" href="https://https://https://www.conscientioustech.in/Industries | Finetech" />
                <meta
                    name="description"
                    content={``}
                />
                <meta name="keywords" content="CT, Technology, Industries, Benefits, Fintech" />
            </Helmet>
            <AllHeader category="Industry" industryName="Fintech" />
            <OurPartener />
            <Solutions />
            <WhyChooseCTSlider category="Industry" subCategory="Fintech" />
            <Benefits />
            <Specialised />
            <ReliableToolsHeading />
            <ReliableTools category="Industry" subCategory="Fintech" />
            <CaseStudies category="Industry" subCategory="Fintech" />
            <Blog category="Industry" subCategory="Fintech" />
            <MeetOurClient />
            <AllFaq category="Industry" subCategory="Fintech" />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default Fineteech