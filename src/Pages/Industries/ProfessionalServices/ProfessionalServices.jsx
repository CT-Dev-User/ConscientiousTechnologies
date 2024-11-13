import React from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import StreamlineOperations from './Components/StreamlineOperations'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import WhyChooseCTSlider from '../../RepeatedComponents/WhyChooseCT/WhyChooseCT'
const ProfessionalServices = () => {
  return (
    <div>
      <Helmet>
        <title>Professional Services Industry</title>
        <link rel="canonical" href="https://https://https://www.conscientioustech.in/Industries | Professional Services" />
        <meta
          name="description"
          content={``}
        />
        <meta name="keywords" content="CT, Technology, Industries, Benefits, Professional Services" />
      </Helmet>
      <AllHeader category="Industry" subCategory="Professional Services" />
      <OurPartener />
      <WhyChooseCTSlider category="Industry" subCategory="Professional Services" />
      <StreamlineOperations />
      <AllFaq category="Industry" subCategory="Payments" />
      <Footer />
    </div>
  )
}

export default ProfessionalServices
