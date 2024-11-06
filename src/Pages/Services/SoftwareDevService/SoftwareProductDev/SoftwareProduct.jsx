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
import { Helmet } from 'react-helmet'

const SoftwareProduct = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Helmet>
        <title>Software Development Services|Software Consulting Services</title>
        <meta
          name="description"
          content={``}
        />
        <meta name="keywords" content="CT, Technology, Services, Benefits, Software Development Services, Software Consulting Services" />
      </Helmet>
      <AllHeader
        category="SubService" serviceName="Software Development Services" subServiceName="Software product"
      />
      <OurPartener />
      <FullScale />
      <PartnerUpWithCity />
      <ProductDevOutSourcing />
      <ReliableToolsHeading />
      <ReliableTools category="Service" subCategory="Software Development Services" />
      <AllFaq category="Service" subCategory="Software Development Services" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default SoftwareProduct
