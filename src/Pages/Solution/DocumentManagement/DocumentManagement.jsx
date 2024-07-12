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
const DocumentManagement = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <AllHeader category="Solutions" subCategory="Document Management"/>
      <OurPartener/>
      <AutomationSoftware/>
      <IntegrationsDocumentation/>
      <DocumentationAutomation/>
      <SoftwareImplementation/>
      <AllFaq category="Solutions" subCategory="Document Management"/>
      <BookFreeConsultation/>
      <Footer/>
    </div>
  )
}

export default DocumentManagement
