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
import BenefitsFromCt from "../DataAnalyst/Components/BenefitsFromCt";
import FlexibleServiceApp from "../DataAnalyst/Components/FlexibleServiceApp";
import Architecture from "../KioskSoftware/Components/Architecture";
import { useParams } from "react-router-dom";

const Solution = () => {
  const {subCategory} = useParams()
  return (
    <div className="overflow-x-hidden">
      <SolutionHeader />
      <OurPartener />
      {subCategory === "ERP" && <WhyChooseCTSlider />}
      <FunctionalERPModule />
      <ERPDevService />
      <ERPDevSteps/>
      <PerkOfERP />
      <BenefitsFromCt />
      <FlexibleServiceApp />
      <Architecture />
      <TechnologyHeading />
      {subCategory !== "ERP" && <WhyChooseCTSlider />}
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
