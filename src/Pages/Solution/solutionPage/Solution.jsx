import React from "react";
import SolutionHeader from "./components/SolutionHeader";
import OurPartener from "../../HomePage/Component/OurPartener/OurPartener";
import WhyChooseCTSlider from "../../RepeatedComponents/WhyChooseCT/WhyChooseCT";
import FunctionalERPModule from "../ERP/Components/FunctionalERPModule";
import ERPDevService from "../ERP/Components/ERPDevService";
import ERPDevSteps from "../ERP/Components/ERPDevSteps";
import PerkOfERP from "../ERP/Components/PerkOfERP";
import TechnologyHeading from "../ERP/Components/Technology/TechnologyHeading";
import ReliableTools from "../../RepeatedComponents/ReliableTechTools/ReliableTechTools";
import CaseStudies from "../../HomePage/Component/CaseStudies/CaseStudies";
import MeetOurClient from "../../HomePage/Component/MeetOurClient/MeetOurClient";
import AllFaq from "../../RepeatedComponents/AllFaq/AllFaq";
import BookFreeConsultation from "../../HomePage/Component/BookFreeConsultation/BookFreeConsultation";
import Footer from "../../HomePage/Component/Footer/Footer";

const Solution = () => {
  return (
    <div>
      <SolutionHeader />
      <OurPartener />
      <WhyChooseCTSlider category="Solutions" subCategory="ERP" />
      <FunctionalERPModule />
      <ERPDevService />
      <ERPDevSteps/>
      <PerkOfERP />
      <TechnologyHeading />
      <ReliableTools category="HomePage" />
      <CaseStudies />
      <MeetOurClient />
      <AllFaq category="All" subCategory="" />
      <BookFreeConsultation />
      <Footer />
    </div>
  );
};

export default Solution;
