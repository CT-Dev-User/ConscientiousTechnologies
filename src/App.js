import { Route, Routes } from "react-router-dom";
import "./App.css";
// import NavBar from './NavBar/NavBar';
import SignUp from "./Pages/SignUpPage/SignUp.jsx";
import SideBar from "./SideBar/SideBar.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import HeroSection from "./Pages/HomePage/HeroSection.jsx";
import Ourpartener from "./Pages/HomePage/Ourpartener.jsx";
import ServiceWeOffer from "./Pages/Services/ServiceWeOffer.jsx";
import Solution from "./Pages/Solution/Solution.jsx";
import CaseStudies from "./Pages/Services/CaseStudies.jsx";
import Blogs from "./Pages/HomePage/Blogs.jsx";
import Clients from "./Pages/HomePage/Clients.jsx";
import Consultation from "./Pages/HomePage/Consultation.jsx";
import IndustryPage from "./Pages/industries/IndustryPage.jsx";
import HomeFAQ from "./Pages/HomePage/HomeFAQ.jsx";
import PartnerUp from "./Pages/partnerUp/PartnerUp.jsx";
import KeyFeature from "./Pages/HomePage/KeyFeature.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import SocialMedia from "./Pages/About/SocialMedia.jsx";
import SignIn from "./Pages/LogIn/SignIn.jsx";
import HomeTechTools from "./Pages/HomePage/HomeTechTools.jsx";
import HomeCaseStudies from "./Pages/HomePage/HomeCaseStudies.jsx";
import SubServicesCMS from "./Pages/SubServices/SubServices.jsx";
import ServiceTechTools from "./Pages/Services/ReliableTools.jsx";
import ServiceBlogCMS from "./Pages/Services/ServiceBlogs.jsx";
import SolutionTechTools from "./Pages/Solution/SolutionTechTools.jsx";
import SolutionCaseStudies from "./Pages/Solution/SolutionCaseStudies.jsx";
import SolutionBlogCMS from "./Pages/Solution/SolutionBlogs.jsx";
import SolutionFAQ from "./Pages/Solution/SolutionFaq.jsx";
import IndustryCaseStudies from "./Pages/industries/IndustriesCaseStudy.jsx";
import IndutryBlogCMS from "./Pages/industries/IndustryBlogs.jsx";
import IndustryFAQ from "./Pages/industries/IndustryFaq.jsx";
import ServiceWhyChooseCT from "./Pages/Services/ServiceWhyChooseCT.jsx";
import SolutionWhyChooseCT from "./Pages/Solution/SolutionWhyChooseCT.jsx";
import IndustryWhyChooseCT from "./Pages/industries/IndustryWhyChooseCTSlider.jsx";
import IndustryCMS from "./Pages/industries/IndustryPage.jsx";
import ContactUsForm from "./Pages/ContactUs/ContactUsFormData.jsx";
import ServiceFAQ from "./Pages/Services/Faq.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route
        path="/dashboard"
        element={
          <SideBar>
            <Dashboard />
          </SideBar>
        }
      />
      <Route
        path="/conscientious-contact-us"
        element={
          <SideBar>
            <ContactUs />
          </SideBar>
        }
      />
      <Route
        path="/conscientious-contact-us-form"
        element={
          <SideBar>
            <ContactUsForm />
          </SideBar>
        }
      />
      <Route
        path="/conscientious-social-media"
        element={
          <SideBar>
            <SocialMedia />
          </SideBar>
        }
      />
      <Route
        path="/conscientious-partner-up"
        element={
          <SideBar>
            <PartnerUp />
          </SideBar>
        }
      />
      {/* home page */}

      <Route
        path="/conscientious-users-registration"
        element={
          <SideBar>
            <SignUp />
          </SideBar>
        }
      />
      <Route
        path="/conscientious-home-heroslider"
        element={
          <SideBar>
            <HeroSection />
          </SideBar>
        }
      />
      <Route
        path="/conscientious-home-partners"
        element={
          <SideBar>
            <Ourpartener />
          </SideBar>
        }
      />
      <Route
        path="/conscientious-key-feature"
        element={
          <SideBar>
            <KeyFeature />
          </SideBar>
        }
      />
      <Route
        path="/conscientious-home-reliable-tools"
        element={
          <SideBar>
            <HomeTechTools />
          </SideBar>
        }
      />
      <Route
        path="/conscientious-home-casestudies"
        element={
          <SideBar>
            <HomeCaseStudies />
          </SideBar>
        }
      />
      <Route
        path="/conscientious-home-blogs"
        element={
          <SideBar>
            <Blogs />
          </SideBar>
        }
      />
      <Route
        path="/conscientious-home-clients"
        element={
          <SideBar>
            <Clients />
          </SideBar>
        }
      />

      <Route
        path="/conscientious-home-faq"
        element={
          <SideBar>
            <HomeFAQ />
          </SideBar>
        }
      />
      <Route
        path="/conscientious-home-book-free-consultation"
        element={
          <SideBar>
            <Consultation />
          </SideBar>
        }
      />

      {/* service */}
      <Route
        path="/conscientious-services"
        element={
          <SideBar>
            <ServiceWeOffer />
          </SideBar>
        }
      />
      <Route
        path="/conscientious-service-why-choose-ct-slider"
        element={
          <SideBar>
            <ServiceWhyChooseCT />
          </SideBar>
        }
      />

      <Route
        path="/conscientious-SubServices"
        element={
          <SideBar>
            <SubServicesCMS />
          </SideBar>
        }
      />
      <Route
        path="/conscientious-service-reliable-tools"
        element={
          <SideBar>
            <ServiceTechTools />
          </SideBar>
        }
      />
      <Route
        path="/conscientious-service-casestudies"
        element={
          <SideBar>
            <CaseStudies />
          </SideBar>
        }
      />
      <Route
        path="/conscientious-service-blogs"
        element={
          <SideBar>
            <ServiceBlogCMS />
          </SideBar>
        }
      />
      <Route
        path="/conscientious-service-faq-category"
        element={
          <SideBar>
            <ServiceFAQ />
          </SideBar>
        }
      />

      {/* solution */}
      <Route
        path="/conscientious-solutions"
        element={
          <SideBar>
            <Solution />
          </SideBar>
        }
      />
      <Route
        path="/conscientious-solution-why-choose-ct-slider"
        element={
          <SideBar>
            <SolutionWhyChooseCT />
          </SideBar>
        }
      />
      <Route
        path="/conscientious-solution-reliable-tools"
        element={
          <SideBar>
            <SolutionTechTools />
          </SideBar>
        }
      />
      <Route
        path="/conscientious-solution-casestudies"
        element={
          <SideBar>
            <SolutionCaseStudies />
          </SideBar>
        }
      />
      <Route
        path="/conscientious-solution-blogs"
        element={
          <SideBar>
            <SolutionBlogCMS />
          </SideBar>
        }
      />
      <Route
        path="/conscientious-solution-faq-category"
        element={
          <SideBar>
            <SolutionFAQ />
          </SideBar>
        }
      />

      {/* industries */}
      <Route
        path="/conscientious-home-industries"
        element={
          <SideBar>
            <IndustryCMS />
          </SideBar>
        }
      />
      <Route
        path="/conscientious-industry-why-choose-ct-slider"
        element={
          <SideBar>
            <IndustryWhyChooseCT />
          </SideBar>
        }
      />
      <Route
        path="/conscientious-industry-casestudies"
        element={
          <SideBar>
            <IndustryCaseStudies />
          </SideBar>
        }
      />
      <Route
        path="/conscientious-industry-blogs"
        element={
          <SideBar>
            <IndutryBlogCMS />
          </SideBar>
        }
      />
      <Route
        path="/conscientious-industry-faq-category"
        element={
          <SideBar>
            <IndustryFAQ />
          </SideBar>
        }
      />
      <Route
        path="/conscientious-industries"
        element={
          <SideBar>
            <IndustryPage />
          </SideBar>
        }
      />
    </Routes>
  );
}

export default App;
