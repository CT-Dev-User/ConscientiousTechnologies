import React, { useEffect } from 'react';
import HeroSection from './Component/HeroSection/HeroSection';
import OurPartener from './Component/OurPartener/OurPartener';
import About from './Component/About/Abouts';
import SubNav from './Component/subNavBar/SubNav';
import KeyFeature from './Component/keyFeature/KeyFeature';
import ServiceWeOffer from './Component/ServiceWeOffer/ServiceWeOffer';
import SolutionWeOffer from './Component/SolutionWeOffer/SolutionWeOffer';
import ProcessWeFollow from './Component/ProcessWeFollow/ProcessWeFollow';
import WhoWorkWithUs from './Component/whoWorkWithUs/WhoWorkWithUs';
import IndustriesWeServe from './Component/IndustriesWeServe/IndustriesWeServe';
import CaseStudies from './Component/CaseStudies/CaseStudies';
import Blog from './Component/Blog/Blog';
import MeetOurClient from './Component/MeetOurClient/MeetOurClient';
import BookFreeConsultation from './Component/BookFreeConsultation/BookFreeConsultation';
import Footer from './Component/Footer/Footer';
import ReliableToolsHeading from './Component/ReliableTools/ReliableToolsHeading';
import ReliableTools from '../RepeatedComponents/ReliableTechTools/ReliableTechTools';
import AllFaq from '../RepeatedComponents/AllFaq/AllFaq';

const HomePage = ({ setHideNavbar, setActiveSubNav }) => { // Receive setHideNavbar and setActiveSubNav as props

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <HeroSection />
      <OurPartener />
      <SubNav setHideNavbar={setHideNavbar} setActiveSubNav={setActiveSubNav} />
      <About />
      <KeyFeature />
      <ServiceWeOffer />
      <ReliableToolsHeading />
      <ReliableTools category="HomePage"/>
      <SolutionWeOffer />
      <ProcessWeFollow />
      <WhoWorkWithUs />
      <IndustriesWeServe />
      <CaseStudies category="HomePage"/>
      <Blog />
      <MeetOurClient />
      <AllFaq category="HomePage" />
      <BookFreeConsultation />
      <Footer />
    </>
  );
};

export default HomePage;
