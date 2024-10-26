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
      <AllHeader category="Industry" subCategory="Payments"/>
      <OurPartener />
      <WhyChooseCTSlider category="Industry" subCategory="Professional Services"/>
      <StreamlineOperations />
      <AllFaq category="Industry" subCategory="Payments"/>
      <Footer />
    </div>
  )
}

export default ProfessionalServices
