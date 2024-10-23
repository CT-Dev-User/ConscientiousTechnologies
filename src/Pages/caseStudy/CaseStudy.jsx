import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import OurPartener from '../HomePage/Component/OurPartener/OurPartener';
import OverviewSection from './components/OverviewSection';
import GoalSection from './components/GoalSection';
import InsightSection from './components/InsightSection';
import Challages from './components/Challages';
import Execution from './components/Execution';
import Soluion from './components/Solution';
import Result from './components/Result';
import Technologies from './components/Technologies';
import MoreCaseStudies from './components/MoreCaseStudies';
import BookFreeConsultation from '../HomePage/Component/BookFreeConsultation/BookFreeConsultation';
import Footer from '../HomePage/Component/Footer/Footer';

const CaseStudy = () => {
    const { id } = useParams()
    console.log(id)
    const [caseStudy, setCaseStudy] = useState([])

    const fetchCaseStudy = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/get-case-studies-by-id/${id}`)
            setCaseStudy(response.data)
        } catch (error) {
            console.log("Error fetching case study data:", error)
        }
    }

    useEffect(() => {
        fetchCaseStudy()
    }, [])
    console.log(caseStudy)

    return (

        <div>
            {/* {caseStudy.map((caseStudy, i) => ( */}
            <div>
                <Header
                    headerTagline={caseStudy.headerTagLine}
                    headerImage={caseStudy.headerImage}
                    headerdesc={caseStudy.headerdesc}
                />
                <OurPartener />
                <OverviewSection />
                <GoalSection goals={caseStudy.goals} />
                <InsightSection insights={caseStudy.insights} insightsImage={caseStudy.insightsImage} />
                <Challages challenges={caseStudy.challenges} />
                <Execution executionHeading1={caseStudy.executionHeading1} executionHeading2
                    ={caseStudy.executionHeading2} executionHeading3={caseStudy.executionHeading3} executionPoint1={caseStudy.executionPoint1} executionPoint2={caseStudy.executionPoint2} executionPoint3={caseStudy.executionPoint3} />
                <Soluion solutionImage={caseStudy.solutionImage} Soluion={caseStudy.solution} />
                <Result resultsImg1={caseStudy.resultsImg1} resultsImg2={caseStudy.resultsImg2} resultsImg3={caseStudy.resultsImg3}/>
                <Technologies techTools={caseStudy.techTools}/>
                <MoreCaseStudies />
                <BookFreeConsultation/>
                <Footer/>
            </div>
            {/* ))} */}

        </div>
    )


}

export default CaseStudy

