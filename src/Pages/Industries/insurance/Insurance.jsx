import React from 'react'
import ITSolutions from './itSolution/ITSolutions'
import ITServices from './itServices/ITServices'
import CaseStudies from '../../HomePage/Component/CaseStudies/CaseStudies'
import Blog from '../../HomePage/Component/Blog/Blog'
import MeetOurClient from '../../HomePage/Component/MeetOurClient/MeetOurClient'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import { Helmet } from 'react-helmet'

const Insurance = () => {
    return (
        <div>
            <Helmet>
                <title>Insurance Industry</title>
                <link rel="canonical" href="https://https://https://www.conscientioustech.in/Industries | Insurance" />
                <meta
                    name="description"
                    content={``}
                />
                <meta name="keywords" content="CT, Technology, Industries, Benefits, Insurance" />
            </Helmet>
            <AllHeader category="Industry" industryName="Insurance" />
            <OurPartener />
            <WhyChooseCTSlider category="Industry" subCategory="Insurance" />
            <ITSolutions />
            <ITServices />
            <CaseStudies category="Industry" subCategory="Insurance" />
            <Blog category="Industry" subCategory="Insurance" />
            <MeetOurClient />
            <AllFaq category="Industry" subCategory="Insurance" />
            <BookFreeConsultation />
            <Footer />
        </div>
    )
}

export default Insurance