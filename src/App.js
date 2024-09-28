import './App.css';
import React, { useState } from 'react';
import NavBar from './Pages/HomePage/Component/NavBar/NavBar';
import HomePage from './Pages/HomePage/homePage';
import CareerPage from './Pages/CareerPage/CareerPage';
import AgenciesDev from './Pages/ByClientType/AgenciesDev/AgenciesDev';
import EnterpriseService from './Pages/ByClientType/EnterpriseService/EnterpriseService';
import ArtificialIntelligence from './Pages/Services/AI/ArtificialIntelligence';
import StartUpProductDev from './Pages/ByClientType/StartUpProductDev/StartUpProductDev';
import WebDevelopment from './Pages/ByClientType/WebDevelopment/WebDevelopment';
import MobileAppDev from './Pages/ByClientType/MobileAppDevelopment/MobileAppDev';
import DeskTopApp from './Pages/ByClientType/DeskTopApp/DeskTopApp';
import SaaSAppplication from './Pages/ByClientType/SaaSApplication/SaaSAppplication';
import DatabaseDevService from './Pages/ByClientType/DataBaseDevServ/DatabaseDevService';
import CustomAPIDev from './Pages/ByClientType/CustomAPIDev/CustomAPIDev';
import DigitalTransfomService from './Pages/ByClientType/DigitalTransService/DigitalTransfomService';
import DevOpsConsulting from './Pages/ByClientType/DevOpsConsulting/DevOpsConsulting';
import QaService from './Pages/Services/QA_Service/QaService';
import Ecommerse from './Pages/Services/ECommerse/Ecommerse';
import CloudComputing from './Pages/Services/CloudComputing/CloudComputing';
import UI_UXService from './Pages/Services/UI_UXService/UI_UXService';
import SoftwareConsulting from './Pages/Services/SoftwareDevService/SoftWareConsultingService/SoftwareConsulting';
import SoftDevHomePage from './Pages/Services/SoftwareDevService/SoftDevHomePage/SoftDevHomePage';
import CustomConsService from './Pages/Services/SoftwareDevService/CustomConsService/CustomConsService';
import Enterprise from './Pages/Services/SoftwareDevService/EnterpriseDev/EnterPrise';
import SoftwareProduct from './Pages/Services/SoftwareDevService/SoftwareProductDev/SoftwareProduct';
import CloudeApplication from './Pages/Services/SoftwareDevService/CloudApplication/CloudeApplication';
import LagencySoftModerization from './Pages/Services/SoftwareDevService/LagencySoftModerization/LagencySoftModerization';
import SoftSupportMaintainence from './Pages/Services/SoftwareDevService/SoftSupportMaintanace.jsx/SoftSupportMaintainence';
import MainDedicatedDevService from './Pages/Services/DedicatedSoftwareTeam/MainPage/Main';
import SoftwareDevelopment from './Pages/Services/DedicatedSoftwareTeam/SoftwareDevelopment/SoftwareDevelopment';
import SoftDevWebDevelopment from './Pages/Services/DedicatedSoftwareTeam/WebDevelopment/WebDevelopment';
import MobileDevelopment from './Pages/Services/DedicatedSoftwareTeam/MobileDevelopment/MobileDevelopment';
import DataAnalytics from './Pages/Services/DedicatedSoftwareTeam/DataAnalytics/DataAnalytics';
import Qa_Service from './Pages/Services/DedicatedSoftwareTeam/QAService/Qa_Service';
import ItSupport from './Pages/Services/DedicatedSoftwareTeam/ITSupport/ItSupport';
import CyberSecurity from './Pages/Services/DedicatedSoftwareTeam/CyberSecurity/CyberSecurity';
import HelpDesk from './Pages/Services/DedicatedSoftwareTeam/HelpDesk/HelpDesk';
import ERP from './Pages/Solution/ERP/ERP';
import OperationMang from './Pages/Solution/OperationManagement/OperationMang';
import FinancialManagement from './Pages/Solution/FinancialManagement/FinancialManagement';
import PaymentManageMent from './Pages/Solution/PaymentManagement/PaymentManageMent';
import SupplyChainManagement from './Pages/Solution/SupplyChainManagement/SupplyChainManagement';
import DataAnalystSolution from './Pages/Solution/DataAnalyst/DataAnalyst';
import AssetManagements from './Pages/Solution/AssetManagement/AssetManagements';
import FleetManagement from './Pages/Solution/FleetManagement.jsx/FleetManagement';
import HRSoftwareDevelopment from './Pages/Solution/HRSoftwareDevelopment/HRSoftwareDevelopment';
import Elearning from './Pages/Solution/ELearning/Elearning';
import DocumentManagement from './Pages/Solution/DocumentManagement/DocumentManagement';
import ProjectMang from './Pages/Solution/ProjectManagement/ProjectMang';
import CRMSoftware from './Pages/Solution/CRMServices/CRMSoftware';
import EcommerceServices from './Pages/Solution/EcommerceServices.jsx/EcommerceServices';
import MarketingAdvertising from './Pages/Solution/MarketingAdvertising.jsx/MarketingAdvertising';
import ContentManagement from './Pages/Solution/ContentManagement/ContentManagement';
import KioskSoftware from './Pages/Solution/KioskSoftware/KioskSoftware';
import WebPortal from './Pages/Solution/WebPortal/WebPortal';

// industries Routes
import OilandGasInustry from './Pages/Industries/oilAndGas/OilandGasInustry';
import Telicommunication from './Pages/Industries/Telecommunications/Telicommunication';
import TransportationandLogistics from './Pages/Industries/TransportationandLogistics/TransportationandLogistics';
import ProfessionalServices from './Pages/Industries/ProfessionalServices/ProfessionalServices';
import Manufacturing from './Pages/Industries/manufacturing/Manufacturing';
import Healthcare from './Pages/Industries/healthcare/Healthcare';
import Retail from './Pages/Industries/Retail/Retail';
import Payments from './Pages/Industries/payments/Payments';
import { Route, Routes } from 'react-router-dom';
import Finance from './Pages/Industries/financialSoftware/Finance';
import Banking from './Pages/Industries/banking/Banking';
import Insurance from './Pages/Industries/insurance/Insurance';
import Lending from './Pages/Industries/lending/Lending';
import Investment from './Pages/Industries/investment/Investment';
import Fineteech from './Pages/Industries/fintech/Fineteech';

import SoftDevTeam from '../src/Pages/Technologies/SoftDevTeam/SoftDevTeam';
import DotNet from './Pages/Technologies/NetPage/DotNet';
import Java from './Pages/Technologies/java/Java';
import Python from './Pages/Technologies/python/Python';
import Php from './Pages/Technologies/php/Php';
import Golang from './Pages/Technologies/golang/Golang';
import CPlus from './Pages/Technologies/cPlus/CPlus';
import Node from './Pages/Technologies/Node/Node';
import JavaScript from './Pages/Technologies/javascript/JavaScript';
import ReactNative from './Pages/Technologies/reactnative/ReactNative';
import MobileApp from './Pages/Technologies/mobileApp/MobileApp';
import AllTechnology from './Pages/Technologies/allTechnology/AllTechnology';
import Cloud from './Pages/Technologies/cloud/Cloud';
import Sass from './Pages/Technologies/sass/Sass';
import Internet from './Pages/Technologies/internet/Internet';
import DataScience from './Pages/Technologies/datascience/DataScience';
import MachineLearning from './Pages/Technologies/machinelearning/MachineLearning';
import ArtififcialIntelligence from './Pages/Technologies/artificialintelligence/ArtififcialIntelligence';
import BlockChain from './Pages/Technologies/blockchain/BlockChain';
import VirtualReality from './Pages/Technologies/virtualreality/VirtualReality';
import AugmentedReality from './Pages/Technologies/augmentedReality/AugmentedReality';
import ComputerVision from './Pages/Technologies/ComputerVision/ComputerVision';
import Microsoft from './Pages/Technologies/Microsoft/Microsoft';
import Azure from './Pages/Technologies/Azure/Azure';
import PowerApps from './Pages/Technologies/PowerApps/PowerApps';
import Dynamic365 from './Pages/Technologies/dynamic365/Dynamic365';
import SharePoint from './Pages/Technologies/sharePoint/SharePoint';
import PowerBiConsulting from './Pages/Technologies/powerBiConsulting/PowerBiConsulting';
import Amazon from './Pages/Technologies/amazon/Amazon';
import Adobe from './Pages/Technologies/adobe/Adobe';
import ServiceNow from './Pages/Technologies/ServiceNow/ServiceNow';
import Pimcore from './Pages/Technologies/Pimcore/Pimcore';
import BigData from './Pages/Technologies/bigdata/BigData';
import MainPage from './Pages/contactUs/MainPage';
import Blogs from './Pages/blogs/Blogs';
import AboutUs from './Pages/AboutUs/AboutUs';
import Solution from './Pages/Solution/solutionPage/Solution';

function App() {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [activeSubNav, setActiveSubNav] = useState(false);
  return (
    <div className="relative md:overflow-x-hidden bg-white font-medium">
      <NavBar hideNavbar={hideNavbar} setHideNavbar={setHideNavbar} activeSubNav={activeSubNav} />
      <Routes>
        <Route path='/' element={<HomePage setHideNavbar={setHideNavbar} setActiveSubNav={setActiveSubNav} />} />
        <Route path='/by-client/Enterprises' element={<EnterpriseService />} />
        <Route path='/by-client/Agencies' element={<AgenciesDev />} />

        {/* service Routes */}
        <Route path='Services/Artificial Intelligence (AI) Services' element={<ArtificialIntelligence />} />
        <Route path='Services/QA & Services' element={<QaService />} />
        <Route path='Services/Ecommerce Services' element={<Ecommerse />} />
        <Route path='Services/UI-UX Design' element={<UI_UXService />} />
        <Route path='Services/Cloud Computing Services' element={<CloudComputing />} />

        {/* software consulting service  */}
        <Route path='Services/Software Development Services' element={<SoftDevHomePage />} />
        <Route path='/Software Development Services/Software consulting' element={<SoftwareConsulting />} />
        <Route path='/Software Development Services/Custom software development' element={<CustomConsService />} />
        <Route path='/Software Development Services/Enterprise software' element={<Enterprise />} />
        <Route path='/Software Development Services/Software product' element={<SoftwareProduct />} />
        <Route path='/Software Development Services/Cloud application' element={<CloudeApplication />} />
        <Route path='/Software Development Services/Legacy Software' element={<LagencySoftModerization />} />
        <Route path='/Software Development Services/Software support' element={<SoftSupportMaintainence />} />
        <Route path='/Software Development Services/maintenance' element={<SoftSupportMaintainence />} />

        {/* Dedicated Development Team */}
        <Route path='Services/Dedicated Software Team' element={<MainDedicatedDevService />} />
        <Route path='/Dedicated Software Team/Software Development' element={<SoftwareDevelopment />} />
        <Route path='/Dedicated Software Team/Web Development' element={<SoftDevWebDevelopment />} />
        <Route path='/Dedicated Software Team/Mobile Development' element={<MobileDevelopment />} />
        <Route path='/Dedicated Software Team/Data Analyst' element={<DataAnalytics />} />
        <Route path='/Dedicated Software Team/QA & Testing' element={<Qa_Service />} />
        <Route path='/Dedicated Software Team/IT support' element={<ItSupport />} />
        <Route path='/Dedicated Software Team/Cyber Security' element={<CyberSecurity />} />
        <Route path='/Dedicated Software Team/Help desk' element={<HelpDesk />} />

        {/* Solution Routes */}
        <Route path='/Solutions/:subCategory' element={<Solution />} />
        {/* <Route path='Solutions/ERP' element={<ERP />} />
        <Route path='Solutions/Operations Management' element={<OperationMang />} />
        <Route path='Solutions/Financial Management' element={<FinancialManagement />} />
        <Route path='Solutions/Payment Management' element={<PaymentManageMent />} />
        <Route path='Solutions/Supply Chain Management' element={<SupplyChainManagement />} />
        <Route path='Solutions/Data Analytics' element={<DataAnalystSolution />} />
        <Route path='Solutions/Asset Management' element={<AssetManagements />} />
        <Route path='Solutions/Fleet Management' element={<FleetManagement />} />
        <Route path='Solutions/HR Software Development Services' element={<HRSoftwareDevelopment />} />
        <Route path='Solutions/eLearning' element={<Elearning />} />
        <Route path='Solutions/Document Management' element={<DocumentManagement />} />
        <Route path='Solutions/Project Management' element={<ProjectMang />} />
        <Route path='Solutions/CRM Services' element={<CRMSoftware />} />
        <Route path='Solutions/Ecommerce Services' element={<EcommerceServices />} />
        <Route path='Solutions/Marketing & advertising' element={<MarketingAdvertising />} />
        <Route path='Solutions/Content Management' element={<ContentManagement />} />
        <Route path='Solutions/Kiosk Software' element={<KioskSoftware />} />
        <Route path='Solutions/Web Portal' element={<WebPortal />} /> */}
        {/* industries */}
        <Route path='/Industries/Oil and Gas' element={<OilandGasInustry />} />
        <Route path='/Industries/Telecommunications' element={<Telicommunication />} />
        <Route path='/Industries/Transportation and Logistics' element={<TransportationandLogistics />} />
        <Route path='/Industries/Professional Services' element={<ProfessionalServices />} />
        <Route path='/Industries/Manufacturing' element={<Manufacturing />} />
        <Route path='/Industries/HealthCare' element={<Healthcare />} />
        <Route path='/Industries/Retail' element={<Retail />} />
        <Route path='/Industries/Payments' element={<Payments />} />
        <Route path='/Industries/Financial Services' element={<Finance />} />
        <Route path='/Industries/Banking' element={<Banking />} />
        <Route path='/Industries/Insurance' element={<Insurance />} />
        <Route path='/Industries/Lending' element={<Lending />} />
        <Route path='/Industries/Investment' element={<Investment />} />
        <Route path='/Industries/FinTech' element={<Fineteech />} />
        {/* by client routes */}
        <Route path='/by-client/Start Up' element={<StartUpProductDev />} />
        <Route path='/start-up-product-development/Web Application' element={<WebDevelopment />} />
        <Route path='/start-up-product-development/Mobile Application' element={<MobileAppDev />} />
        <Route path='/start-up-product-development/Desktop Application' element={<DeskTopApp />} />
        <Route path='/start-up-product-development/SaaS Application' element={<SaaSAppplication />} />
        <Route path='/start-up-product-development/Databases' element={<DatabaseDevService />} />
        <Route path='/start-up-product-development/Integration Solution' element={<CustomAPIDev />} />
        <Route path='/start-up-product-development/Digital Transformation' element={<DigitalTransfomService />} />
        <Route path='/start-up-product-development/DevOps' element={<DevOpsConsulting />} />
        {/* technologies */}
        <Route path='/Technologies/Hire Developers' element={<SoftDevTeam />} />
        <Route path='/Technologies/.NET' element={<DotNet />} />
        <Route path='/Technologies/JAVA' element={<Java />} />
        <Route path='/Technologies/Python' element={<Python />} />
        <Route path='/Technologies/PHP' element={<Php />} />
        <Route path='/Technologies/Golang' element={<Golang />} />
        <Route path='/Technologies/C++' element={<CPlus />} />
        <Route path='/Technologies/Node' element={<Node />} />
        <Route path='/Technologies/JavaScript' element={<JavaScript />} />
        <Route path='/Technologies/React Native' element={<ReactNative />} />
        <Route path='/Technologies/Mobile' element={<MobileApp />} />
        <Route path='/Technologies/All Technologies' element={<AllTechnology />} />
        <Route path='/Technologies/Cloud' element={<Cloud />} />
        <Route path='/Technologies/SaaS Development Services' element={<Sass />} />
        <Route path='/Technologies/Internet of Things' element={<Internet />} />
        <Route path='/Technologies/Big Data' element={<BigData />} />
        <Route path='/Technologies/Data Science' element={<DataScience/>}/>
        <Route path='/Technologies/Machine Learning' element={<MachineLearning />} />
        <Route path='/Technologies/Artificial Intelligence' element={<ArtififcialIntelligence />} />
        <Route path='/Technologies/Blockchain' element={<BlockChain />} />
        <Route path='/Technologies/Virtual Reality' element={<VirtualReality />} />
        <Route path='/Technologies/Augmented Reality' element={<AugmentedReality />} />
        <Route path='/Technologies/Computer Vision' element={<ComputerVision />} />
        <Route path='/Technologies/Microsoft' element={<Microsoft />} />
        <Route path='/Technologies/Azure' element={<Azure />} />
        <Route path='/Technologies/Power Apps' element={<PowerApps />} />
        <Route path='/Technologies/Dynamics 365' element={<Dynamic365 />} />
        <Route path='/Technologies/SharePoint and Office 365' element={<SharePoint />} />
        <Route path='/Technologies/Power BI Consulting' element={<PowerBiConsulting />} />
        <Route path='/Technologies/Amazon Web services' element={<Amazon />} />
        <Route path='/Technologies/Adobe Commerce' element={<Adobe />} />
        <Route path='/Technologies/ServiceNow@' element={<ServiceNow />} />
        <Route path='/Technologies/Pimcore' element={<Pimcore />} />
        <Route path='/get-connect-with-us' element={<MainPage />} />
        <Route path='/Career' element={<CareerPage />} />
        <Route path='/blog/:id' element={<Blogs />} />
        <Route path='/about us' element={<AboutUs setHideNavbar={setHideNavbar} setActiveSubNav={setActiveSubNav}/>}/>
      </Routes>
    </div>
  );
}

export default App;

