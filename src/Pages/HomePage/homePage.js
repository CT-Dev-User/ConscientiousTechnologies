import React, { useEffect } from "react";
import HeroSection from "./Component/HeroSection/HeroSection";
import OurPartener from "./Component/OurPartener/OurPartener";
import About from "./Component/About/Abouts";
import SubNav from "./Component/subNavBar/SubNav";
import KeyFeature from "./Component/keyFeature/KeyFeature";
import ServiceWeOffer from "./Component/ServiceWeOffer/ServiceWeOffer";
import SolutionWeOffer from "./Component/SolutionWeOffer/SolutionWeOffer";
import ProcessWeFollow from "./Component/ProcessWeFollow/ProcessWeFollow";
import WhoWorkWithUs from "./Component/whoWorkWithUs/WhoWorkWithUs";
import IndustriesWeServe from "./Component/IndustriesWeServe/IndustriesWeServe";
import CaseStudies from "./Component/CaseStudies/CaseStudies";
import Blog from "./Component/Blog/Blog";
import MeetOurClient from "./Component/MeetOurClient/MeetOurClient";
import BookFreeConsultation from "./Component/BookFreeConsultation/BookFreeConsultation";
import Footer from "./Component/Footer/Footer";
import ReliableToolsHeading from "./Component/ReliableTools/ReliableToolsHeading";
import ReliableTools from "../RepeatedComponents/ReliableTechTools/ReliableTechTools";
import AllFaq from "../RepeatedComponents/AllFaq/AllFaq";
import { Helmet } from "react-helmet";

const HomePage = ({ setHideNavbar, setActiveSubNav, hideNavbar }) => {
  // Receive setHideNavbar and setActiveSubNav as props

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {/* Helmet for managing document head */}


      <Helmet>
        <title>Conscientious Technology</title>
        <link rel="canonical" href="https://https://https://www.conscientioustech.in/Home Page" />

        <meta
          name="description"
          content={`Explore why CT is the right choice for. Check out our unique offerings, benefits, and more.`}
        />
        <meta
          name="keywords"
          content="CT, Technology, Services, Benefits, Why Choose CT"
        />
      </Helmet>

      <HeroSection />
      <OurPartener />
      <SubNav
        setHideNavbar={setHideNavbar}
        setActiveSubNav={setActiveSubNav}
        hideNavbar={false}
      />
      <About />
      <KeyFeature />
      <ServiceWeOffer />
      <ReliableToolsHeading />
      <ReliableTools category="HomePage" />
      <SolutionWeOffer />
      <ProcessWeFollow />
      <WhoWorkWithUs />
      <IndustriesWeServe />
      <CaseStudies category="HomePage" />
      <Blog category="HomePage" />
      <MeetOurClient />
      <AllFaq category="HomePage" />
      <BookFreeConsultation />
      <Footer />
    </div>
  );
};

export default HomePage;
