import React from 'react'
import OurPartener from '../HomePage/Component/OurPartener/OurPartener'
import WhyChooseCT from './Components/WhyChooswCT'
import CareerAtCt from './Components/CareerAtCt'
import Footer from '../HomePage/Component/Footer/Footer'
// import AllHeader from '../RepeatedComponents/haeder/AllHeader'
import Header from './Components/Header'

const CareerPage = () => {
  return (
    <div>
      <Header/>
      <OurPartener />
      <WhyChooseCT />
      <CareerAtCt />
      <Footer />
    </div>
  )
}

export default CareerPage
