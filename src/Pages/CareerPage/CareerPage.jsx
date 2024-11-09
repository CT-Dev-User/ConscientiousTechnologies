import React from 'react'
import OurPartener from '../HomePage/Component/OurPartener/OurPartener'
import WhyChooseCT from './Components/WhyChooswCT'
import CareerAtCt from './Components/CareerAtCt'
import Footer from '../HomePage/Component/Footer/Footer'
// import AllHeader from '../RepeatedComponents/haeder/AllHeader'
import Header from './Components/Header'
import WhyChooseCTSlider from '../RepeatedComponents/WhyChooseCT/WhyChooseCT'
import { Helmet } from 'react-helmet'

const CareerPage = () => {
  return (
    <div>
      <Helmet>
        <title>Career</title>
        <meta
          name="description"
          content={``}
        />
        <meta name="keywords" content="CT, Technology, Industries, Benefits, Career" />
      </Helmet>
      <Header />
      <OurPartener />
      <WhyChooseCTSlider />
      <CareerAtCt />
      <Footer />
    </div>
  )
}

export default CareerPage
