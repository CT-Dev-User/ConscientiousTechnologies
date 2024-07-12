import React, { useEffect } from 'react'
import OurPartener from '../../../HomePage/Component/OurPartener/OurPartener'
import FullScale from './Component/FullScale'
import BookFreeConsultation from '../../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../../HomePage/Component/Footer/Footer'
import ReliableToolsHeading from '../../../HomePage/Component/ReliableTools/ReliableToolsHeading'
import ProductDevOutSourcing from './Component/ProductDevOutSourcing'
import AllFaq from '../../../RepeatedComponents/AllFaq/AllFaq'
import PartnerUpWithCity from '../../../RepeatedComponents/partnerUpWithCity/PartnerUpWithCity'
import AllHeader from '../../../RepeatedComponents/haeder/AllHeader'
import ReliableTools from '../../../RepeatedComponents/ReliableTechTools/ReliableTechTools'

const SoftwareProduct = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Software Development Services" subCategory="Software product" />
      <OurPartener />
      <FullScale />
      <PartnerUpWithCity />
      <ProductDevOutSourcing />
      <ReliableToolsHeading />
      <ReliableTools category="Software Development Services" subCategory="Software product" />
      <AllFaq category="Software Development Services" subCategory="Software product" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default SoftwareProduct
