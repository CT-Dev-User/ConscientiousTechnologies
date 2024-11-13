import React, { useEffect } from 'react'
import OurPartener from '../../HomePage/Component/OurPartener/OurPartener'
import AutomationSoftware from './Components/AutomationSoftware'
import IntegrationsDocumentation from './Components/IntegrationsDocumentation'
import DocumentationAutomation from './Components/DocumentationAutomation'
import SoftwareImplementation from './Components/SoftwareImplementation'
import BookFreeConsultation from '../../HomePage/Component/BookFreeConsultation/BookFreeConsultation'
import Footer from '../../HomePage/Component/Footer/Footer'
import AllFaq from '../../RepeatedComponents/AllFaq/AllFaq'
import AllHeader from '../../RepeatedComponents/haeder/AllHeader'
import { Helmet } from 'react-helmet'
const DocumentManagement = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Helmet>
        <title>Document Management Solution</title>
        <link rel="canonical" href="https://https://https://www.conscientioustech.in/Solution | Document Management" />

        <meta
          name="description"
          content={``}
        />
        <meta name="keywords" content="CT, Technology, Solution, Benefits, Document Management" />
      </Helmet>
      <AllHeader category="Solution" solutionName="Document Management" />
      <OurPartener />
      <AutomationSoftware />
      <IntegrationsDocumentation />
      <DocumentationAutomation />
      <SoftwareImplementation />
      <AllFaq category="Solution" subCategory="Document Management" />
      <BookFreeConsultation />
      <Footer />
    </div>
  )
}

export default DocumentManagement
