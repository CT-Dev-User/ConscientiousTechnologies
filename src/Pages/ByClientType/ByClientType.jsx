import React from 'react'
import StartUpProductDev from './StartUpProductDev/StartUpProductDev'
import { Route, Routes } from 'react-router-dom'
import WebDevelopment from './WebDevelopment/WebDevelopment'
import MobileAppDev from './MobileAppDevelopment/MobileAppDev'
import DeskTopApp from './DeskTopApp/DeskTopApp'
import SaaSAppplication from './SaaSApplication/SaaSAppplication'
import DatabaseDevService from './DataBaseDevServ/DatabaseDevService'
import CustomAPIDev from './CustomAPIDev/CustomAPIDev'
import DigitalTransfomService from './DigitalTransService/DigitalTransfomService'
import DevOpsConsulting from './DevOpsConsulting/DevOpsConsulting'

const ByClientType = () => {
  return (
    <div>
      <Routes>
        <Route path='/start-up-product-development' element={<StartUpProductDev />} />
        <Route path='/start-up-product-development/Web Application' element={<WebDevelopment />} />
        <Route path='/start-up-product-development/Mobile Application' element={<MobileAppDev/>} />
        <Route path='/start-up-product-development/Desktop Application' element={<DeskTopApp/>} />
        <Route path='/start-up-product-development/SaaS Application' element={<SaaSAppplication/>} />
        <Route path='/start-up-product-development/Databases' element={<DatabaseDevService/>} />
        <Route path='/start-up-product-development/Integration Solution' element={<CustomAPIDev/>} />
        <Route path='/start-up-product-development/Digital Transformation' element={<DigitalTransfomService/>} />
        <Route path='/start-up-product-development/DevOps' element={<DevOpsConsulting/>} />
      </Routes>
    </div>
  )
}

export default ByClientType
