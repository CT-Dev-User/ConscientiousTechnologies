import { Route, Routes } from 'react-router-dom';
import './App.css';
// import NavBar from './NavBar/NavBar';
import SignUp from './Pages/SignUpPage/SignUp.jsx';
import SideBar from './SideBar/SideBar.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import HeroSection from './Pages/HomePage/HeroSection.jsx';
import Ourpartener from './Pages/HomePage/Ourpartener.jsx';
import ServiceWeOffer from './Pages/HomePage/ServiceWeOffer.jsx';
import Solution from './Pages/HomePage/Solution.jsx';
import Industries from './Pages/HomePage/Industries.jsx';
import CaseStudies from './Pages/HomePage/CaseStudies.jsx';
import Blogs from './Pages/HomePage/Blogs.jsx';
import Clients from './Pages/HomePage/Clients.jsx';
import Consultation from './Pages/HomePage/Consultation.jsx';
import ServicePage from './Pages/Services/ServicePage.jsx';
import SolutionPage from './Pages/Solution/SolutionPage.jsx';
import IndustryPage from './Pages/industries/IndustryPage.jsx';
import BlogPage from './Pages/Blogs/BlogPage.jsx';
import HomeFAQ from './Pages/HomePage/HomeFAQ.jsx';
import FAQ from './Pages/FAQ/Faq.jsx';
import AllFAQ from './Pages/FAQ/AllQuestions.jsx';
import Header from './Pages/Header/Header.jsx';
import AllHeader from './Pages/Header/AllHeader.jsx';
import NavbarPage from './Pages/NavbarPage/NavbarPage.jsx';
import NavbarandDropFields from './Pages/NavbarPage/NavbarandDropFields.jsx';
import WhyChooseCtSliderPage from './Pages/WhyChooseCtSliderPage/WhyChooseCtSliderPage.jsx';
import AllSliderData from './Pages/WhyChooseCtSliderPage/AllSliderData.jsx';
import PartnerUp from './Pages/partnerUp/PartnerUp.jsx';
import CaseStudiesByCategory from './Pages/CaseStudiesByCategory/CaseStudiesByCategory.jsx';
import AllCaseStudies from './Pages/CaseStudiesByCategory/AllCaseStudies.jsx';
import ReliableTools from './Pages/ReliableTools/ReliableTools.jsx';
import AllCategoryReliableTools from './Pages/ReliableTools/AllCategoryReliableTools.jsx';
import KeyFeature from './Pages/HomePage/KeyFeature.jsx';
import ContactUs from './Pages/ContactUs/ContactUs.jsx';
import SocialMedia from './Pages/About/SocialMedia.jsx';
import ExpertiesCategory from './Pages/AreaOfExperties/ExpertiesCategory.js';
import AllExperties from './Pages/AreaOfExperties/AllExperties.jsx';
import SubPageHeader from './Pages/Header/SubPageHeader.jsx';
import OtherHeader from './Pages/Header/OtherHeader.jsx';
import SubPagesFaq from './Pages/FAQ/SubPagesFaq.jsx';
import OtherFaqs from './Pages/FAQ/OtherFaqs.jsx';
import OtherWhyChooseCT from './Pages/WhyChooseCtSliderPage/OtherWhyChooseCT.jsx';
import OtherReliableTools from './Pages/ReliableTools/OtherReliableTools.jsx';
import SubPageSlider from './Pages/WhyChooseCtSliderPage/SubPageSlider.jsx';
import SubPageRelibleTech from './Pages/ReliableTools/SubPageRelibleTech.jsx';
import ExpertiesSubPage from './Pages/AreaOfExperties/ExpertiesSubPage.jsx';
import OtherExpertise from './Pages/AreaOfExperties/OtherExpertise.jsx';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<SideBar>
          <Dashboard />
        </SideBar>}
      />
      <Route
        path='/conscientious-home-heroslider'
        element={<SideBar>
          <HeroSection />
        </SideBar>}
      />
      <Route
        path='/conscientious-home-partners'
        element={<SideBar>
          <Ourpartener />
        </SideBar>}
      />
      <Route
        path='/conscientious-home-services'
        element={<SideBar>
          <ServiceWeOffer />
        </SideBar>}
      />
      <Route
        path='/conscientious-home-solutions'
        element={<SideBar>
          <Solution />
        </SideBar>}
      />
      <Route
        path='/conscientious-home-industries'
        element={<SideBar>
          <Industries />
        </SideBar>}
      />
      <Route
        path='/conscientious-home-casestudies'
        element={<SideBar>
          <CaseStudies />
        </SideBar>}
      />
      <Route
        path='/conscientious-home-blogs'
        element={<SideBar>
          <Blogs />
        </SideBar>}
      />
      <Route
        path='/conscientious-home-clients'
        element={<SideBar>
          <Clients />
        </SideBar>}
      />
      <Route
        path='/conscientious-home-book-free-consultation'
        element={<SideBar>
          <Consultation />
        </SideBar>}
      />
      <Route
        path='/conscientious-home-faq-data'
        element={<SideBar>
          <HomeFAQ />
        </SideBar>}
      />
      <Route
        path='/conscientious-users-registration'
        element={<SideBar>
          <SignUp />
        </SideBar>}
      />
      {/* services */}
      <Route
        path='/conscientious-services'
        element={<SideBar>
          <ServicePage />
        </SideBar>}
      />

      {/* solution */}
      <Route
        path='/conscientious-solution'
        element={<SideBar>
          <SolutionPage />
        </SideBar>}
      />

      {/* industries */}
      <Route
        path='/conscientious-industries'
        element={<SideBar>
          <IndustryPage />
        </SideBar>}
      />

      {/* case studies */}
      <Route
        path='/conscientious-case-studies'
        element={<SideBar>
          <CaseStudies />
        </SideBar>}
      />
      {/* FAQ Routes */}
      <Route
        path='/conscientious-faq-category'
        element={<SideBar>
          <FAQ />
        </SideBar>}
      />

      {/*All FAQ Routes */}
      <Route
        path='/conscientious/:faqCategory1'
        element={<SideBar>
          <AllFAQ />
        </SideBar>}
      />
      <Route
        path='/conscientious-faq/:faqSubCategory'
        element={<SideBar>
          <SubPagesFaq />
        </SideBar>}
      />

      {/* home category */}
      <Route
        path='/conscientious-header'
        element={<SideBar>
          <Header />
        </SideBar>}
      />

      {/* home category */}
      <Route
        path='/conscientious-header/:category'
        element={<SideBar>
          <AllHeader />
        </SideBar>}
      />
      <Route
        path='/conscientious-header-subpage/:subcategory'
        element={<SideBar>
          <SubPageHeader />
        </SideBar>}
      />

      {/* navbar category */}
      <Route
        path='/conscientious-navbar'
        element={<SideBar>
          <NavbarPage />
        </SideBar>}
      />
      <Route
        path='/conscientioustech-navbar/:navcategory'
        element={<SideBar>
          < NavbarandDropFields />
        </SideBar>}
      />
      <Route
        path='/conscientious-choosect-slider'
        element={<SideBar>
          < WhyChooseCtSliderPage />
        </SideBar>}
      />
      <Route
        path='/conscientious-choose-ct/:slidercategory'
        element={<SideBar>
          < AllSliderData />
        </SideBar>}
      />

      <Route
        path='/conscientious-why-choose-subpage/:subcategory'
        element={<SideBar>
          <SubPageSlider />
        </SideBar>}
      />

      <Route
        path='/conscientious-partner-up'
        element={<SideBar>
          < PartnerUp />
        </SideBar>}
      />
      <Route
        path='/conscientious-case-studies-category'
        element={<SideBar>
          <CaseStudiesByCategory />
        </SideBar>}
      />
      <Route
        path='/conscientious-case-studies-bycategory/:category'
        element={<SideBar>
          <AllCaseStudies />
        </SideBar>} />


      <Route
        path='/conscientious-reliable-tools'
        element={<SideBar>
          < ReliableTools />
        </SideBar>}
      />


      <Route
        path='/conscientious-reliable-tools/:category'
        element={<SideBar>
          < AllCategoryReliableTools />
        </SideBar>}
      />
      <Route
        path='/conscientious-reliable-tool-subpage/:subcategory'
        element={<SideBar>
          < SubPageRelibleTech />
        </SideBar>}
      />
      <Route
        path='/conscientious-key-feature'
        element={<SideBar>
          < KeyFeature />
        </SideBar>}
      />
      <Route
        path='/conscientious-key-feature'
        element={<SideBar>
          < KeyFeature />
        </SideBar>}
      />
      <Route
        path='/conscientious-contact-us'
        element={<SideBar>
          <ContactUs />
        </SideBar>}
      />
      <Route
        path='/conscientious-social-media'
        element={<SideBar>
          <SocialMedia />
        </SideBar>}
      />
      <Route
        path='/conscientious-area-of-experties'
        element={<SideBar>
          <ExpertiesCategory />
        </SideBar>}
      />
      <Route
        path='/conscientious-area-of-experties/:category'
        element={<SideBar>
          <AllExperties />
        </SideBar>}
      />
      <Route
        path='/conscientious-area-of-experties-subpage/:SubCategory'
        element={<SideBar>
          < ExpertiesSubPage />
        </SideBar>}
      />

      <Route
        path='/other-header-data'
        element={<SideBar>
          <OtherHeader />
        </SideBar>}
      />
      <Route
        path='/other-faq-data'
        element={<SideBar>
          <OtherFaqs />
        </SideBar>}
      />
      <Route
        path='/other-whychoosect-data'
        element={<SideBar>
          <OtherWhyChooseCT />
        </SideBar>}
      />
      <Route
        path='/other-reliabletools-data'
        element={<SideBar>
          <OtherReliableTools />
        </SideBar>}
      />

      {/* blogs */}
      <Route
        path='/conscientious-blogs'
        element={<SideBar>
          <BlogPage />
        </SideBar>}
      />
      <Route
        path='/other-expertise-data'
        element={<SideBar>
          <OtherExpertise/>
        </SideBar>}
      />
     

    </Routes>

  );
}

export default App;
