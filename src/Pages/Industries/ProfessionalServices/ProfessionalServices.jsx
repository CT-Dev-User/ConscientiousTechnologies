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
      <AllHeader category="Industries" industryName="Professional Services"/>
      <OurPartener />
      <WhyChooseCTSlider category="Industries" subCategory="Professional Services"/>
      <StreamlineOperations />
      <AllFaq category="Industries" subCategory="Professional Services"/>
      <Footer />
    </div>
  )
}

export default ProfessionalServices
