import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import Swal from "sweetalert2";

const HomeCaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [addPopupShow, setAddPopUpShow] = useState(false);
  const [editPopupShow, setEditPopUpShow] = useState(false);
  const [editCaseStudy, setEditCaseStudy] = useState({});
  // Card section
  const [cardDatatitle, setCardDatatitle] = useState("");
  const [cardDatasubTitle, setCardDatasubTitle] = useState("");
  const [cardDatacoreTech, setCardDatacoreTech] = useState("");
  const [cardDatacardImage, setCardDatacardImage] = useState(null); // file input

  // Header section
  const [headerTagLine, setheaderTagLine] = useState("");
  const [headerdesc, setheaderdesc] = useState("");
  const [headerImage, setheaderImage] = useState(null); // file input

  // Overview section
  const [overviewtitle, setOverviewtitle] = useState("");
  const [overviewindustryType, setOverviewindustryType] = useState("");
  const [overviewbusinessType, setOverviewbusinessType] = useState("");
  const [overviewservicesProvided, setOverviewservicesProvided] = useState("");
  const [overviewdescription, setOverviewdescription] = useState("");
  const [overviewimage, setOverviewimage] = useState(null); // file input

  // Additional fields
  const [goals, setGoals] = useState(""); // comma-separated
  const [insights, setInsights] = useState("");
  const [insightsImage, setInsightsImage] = useState(null); // file input
  const [challenges, setChallenges] = useState(""); // comma-separated
  const [approach, setApproach] = useState("");

  // Execution section
  const [executionHeading1, setExecutionHeading1] = useState("");
  const [executionPoint1, setExecutionPoint1] = useState("");
  const [executionHeading2, setExecutionHeading2] = useState("");
  const [executionPoint2, setExecutionPoint2] = useState("");
  const [executionHeading3, setExecutionHeading3] = useState("");
  const [executionPoint3, setExecutionPoint3] = useState("");

  const [solution, setSolution] = useState("");
  const [solutionImage, setSolutionImage] = useState(null); // file input
  const [techTools, setTechTools] = useState(""); // comma-separated

  // Result Images
  const [resultsImg1, setResultsImg1] = useState(null); // file input
  const [resultsImg2, setResultsImg2] = useState(null); // file input
  const [resultsImg3, setResultsImg3] = useState(null); // file input

  // Handlers for file input changes
  const handleFileChange = (e, setImageState) => {
    setImageState(e.target.files[0]);
  };

  const getCaseStudiesDataFunc = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/get-latest-case-studies"
      );
      console.log(response.data);
      setCaseStudies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addCaseStudyDataFunc = async (req, res) => {
    try {
      const formData = new FormData();

      formData.append("category", "Home");
      formData.append("Subcategory", "Home Case Studies");
      formData.append("cardDatatitle", cardDatatitle);
      formData.append("cardDatasubTitle", cardDatasubTitle);
      formData.append("cardDatacoreTech", cardDatacoreTech);
      formData.append("headerTagLine", headerTagLine);
      formData.append("headerdesc", headerdesc);
      formData.append("overviewtitle", overviewtitle);
      formData.append("overviewindustryType", overviewindustryType);
      formData.append("overviewbusinessType", overviewbusinessType);
      formData.append("overviewservicesProvided", overviewservicesProvided);
      formData.append("overviewdescription", overviewdescription);
      formData.append("goals", goals);
      formData.append("insights", insights);
      formData.append("challenges", challenges);
      formData.append("approach", approach);
      formData.append("executionHeading1", executionHeading1);
      formData.append("executionPoint1", executionPoint1);
      formData.append("executionHeading2", executionHeading2);
      formData.append("executionPoint2", executionPoint2);
      formData.append("executionHeading3", executionHeading3);
      formData.append("executionPoint3", executionPoint3);
      formData.append("solution", solution);
      formData.append("techTools", techTools);
      formData.append("cardDatacardImage", cardDatacardImage);
      formData.append("cardDataheaderImage", headerImage);
      formData.append("overviewimage", overviewimage);
      formData.append("insightsImage", insightsImage);
      formData.append("solutionImage", solutionImage);
      formData.append("resultsImg1", resultsImg1);
      formData.append("resultsImg2", resultsImg2);
      formData.append("resultsImg3", resultsImg3);

      await axios.post(
        "http://localhost:8080/create-case-studies",
        formData
      );

      Swal.fire("Saved!", "Your data has been saved.", "success");
      setAddPopUpShow(false);
      getCaseStudiesDataFunc();
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Error creating case study." });
    }
  };

  useEffect(() => {
    getCaseStudiesDataFunc();
  }, []);

  const deleteCaseStudies = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/delete-case-studies/${id}`
      );
      if (response.status === 200) {
        Swal.fire("Deleted!", "Your data has been deleted.", "success");
        getCaseStudiesDataFunc();
      }
    } catch (error) {
      console.log(error);
    }
  }

/*************  ✨ Codeium Command 🌟  *************/
  const existingValues = (caseStudy) => {
    setCardDatatitle(editCaseStudy.cardDatatitle);
    setCardDatasubTitle(editCaseStudy.cardDatasubTitle);
    setCardDatacoreTech(editCaseStudy.cardDatacoreTech);
    setheaderTagLine(editCaseStudy.headerTagLine);
    setheaderdesc(editCaseStudy.headerdesc);
    setOverviewtitle(editCaseStudy.overviewtitle);
    setOverviewindustryType(editCaseStudy.overviewindustryType);
    setOverviewbusinessType(editCaseStudy.overviewbusinessType);
    setOverviewservicesProvided(editCaseStudy.overviewservicesProvided);
    setOverviewdescription(editCaseStudy.overviewdescription);
    setGoals(editCaseStudy.goals);
    setInsights(editCaseStudy.insights);
    setChallenges(editCaseStudy.challenges);
    setApproach(editCaseStudy.approach);
    setExecutionHeading1(editCaseStudy.executionHeading1);
    setExecutionPoint1(editCaseStudy.executionPoint1);
    setExecutionHeading2(editCaseStudy.executionHeading2);
    setExecutionPoint2(editCaseStudy.executionPoint2);
    setExecutionHeading3(editCaseStudy.executionHeading3);
    setExecutionPoint3(editCaseStudy.executionPoint3);
    setSolution(editCaseStudy.solution);  
    setTechTools(editCaseStudy.techTools);       
  }
    return (
      <div className="w-full bg-gray-300 h-full mx-auto p-4">
        <div className="flex justify-between mb-5 mr-3">
          <h1 className="text-xl font-bold text-black">Case Studies</h1>
          <button
            onClick={() => setAddPopUpShow(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-base"
          >
            +
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-800 text-white text-left">
              <tr className="border-b border-gray-300">
                <th className="border-r px-4 py-2">Cards</th>
                <th className="border-r px-4 py-2">Header</th>
                <th className="border-r px-4 py-2">Overview</th>
                <th className="border-r px-4 py-2">Additional</th>
                <th className="border-r px-4 py-2">Execution</th>
                <th className="border-r px-4 py-2">Solution</th>
                <th className="border-r px-4 py-2">Result</th>
                <th className="border-r px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="text-left bg-white text-black">
              {caseStudies.map((caseStudy) => (
                <tr key={caseStudy._id} className="border-b border-gray-300">
                  <td className="border-r px-4 py-2">
                    {caseStudy.cardDatatitle}
                    {caseStudy.cardDatasubTitle}
                    {caseStudy.cardDatacoreTech}
                    <img src={caseStudy.cardDatacardImage} alt={cardDatatitle} />
                  </td>
                  <td className="border-r px-4 py-2">
                    {caseStudy.headerTagLine}
                    {caseStudy.headerdesc}
                    <img src={caseStudy.headerImage} alt={headerTagLine} />
                  </td>
                  <td className="border-r px-4 py-2">
                    {caseStudy.overviewtitle}
                    {caseStudy.overviewindustryType}
                    {caseStudy.overviewbusinessType}
                    {caseStudy.overviewservicesProvided}
                    {caseStudy.overviewdescription}
                    <img src={caseStudy.overviewimage} alt={overviewtitle} />
                  </td>
                  <td className="border-r px-4 py-2">
                    {caseStudy.goals}
                    {caseStudy.insights}
                    {caseStudy.challenges}
                  </td>
                  <td className="border-r px-4 py-2">
                    {caseStudy.approach}
                    {caseStudy.executionHeading1}
                    {caseStudy.executionPoint1}
                    {caseStudy.executionHeading2}
                    {caseStudy.executionPoint2}
                    {caseStudy.executionHeading3}
                    {caseStudy.executionPoint3}
                  </td>
                  <td className="border-r px-4 py-2">
                    {caseStudy.solution}
                    {caseStudy.techTools}
                    <img src={caseStudy.solutionImage} alt="solution" />
                  </td>
                  <td className="border-r px-4 py-2">
                    <img src={caseStudy.resultsImg1} alt="result" />
                    <img src={caseStudy.resultsImg2} alt="result" />
                    <img src={caseStudy.resultsImg3} alt="result" />
                  </td>
                  <td className="border-r px-4 py-2">
                    <button
                      type="button"
                      className="text-blue-500 hover:underline"
                      onClick={() => {setEditPopUpShow(true); setEditCaseStudy(caseStudy); existingValues(caseStudy);}}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="text-red-500 hover:underline ml-4"
                      onClick={() => deleteCaseStudies(caseStudy._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Modals popup*/}
        <Modal show={addPopupShow} onHide={() => setAddPopUpShow(false)}>
          <Modal.Header closeButton className="bg-gray-800 text-white">
            <Modal.Title>Add Case Study</Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-white">
            <form className="space-y-6">
              {/* Card Data */}
              <div className="space-y-4 text-sm border border-gray-300 rounded p-4">
                <div>
                  <h1 className="text-base font-bold">Card Data</h1>
                  <label htmlFor="cardDatatitle" className="font-semibold mt-2">
                    Title
                  </label>
                  <input
                    type="text"
                    name="cardDatatitle"
                    value={cardDatatitle}
                    onChange={(e) => setCardDatatitle(e.target.value)}
                    placeholder="Card Title"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label htmlFor="cardDataSubtitle" className="font-semibold">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    name="cardDatasubTitle"
                    value={cardDatasubTitle}
                    onChange={(e) => setCardDatasubTitle(e.target.value)}
                    placeholder="Card Subtitle"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label htmlFor="cardDataCoreTech" className="font-semibold">
                    Core Tech
                  </label>
                  <input
                    type="text"
                    name="cardDatacoreTech"
                    value={cardDatacoreTech}
                    onChange={(e) => setCardDatacoreTech(e.target.value)}
                    placeholder="Card Core Tech"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cardDataheaderImage"
                    className="font-semibold"
                  >
                    Image
                  </label>
                  <input
                    type="file"
                    name="cardDatacardImage"
                    onChange={(e) => handleFileChange(e, setCardDatacardImage)}
                    className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded file:text-sm file:font-semibold file:bg-gray-50 hover:file:bg-gray-100"
                  />
                </div>
              </div>
              {/* heade section */}
              <div className="space-y-4 text-sm border border-gray-300 rounded p-4">
                <div>
                  <h1 className="text-base font-bold">Header</h1>
                  <label htmlFor="headerTagLine" className="font-semibold mt-2">
                    TagLine
                  </label>
                  <input
                    type="text"
                    name="headerTagLine"
                    value={headerTagLine}
                    onChange={(e) => setheaderTagLine(e.target.value)}
                    placeholder="Header Title"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label htmlFor="headerdesc" className="font-semibold">
                    Description
                  </label>
                  <textarea
                    name="headerdesc"
                    value={headerdesc}
                    onChange={(e) => setheaderdesc(e.target.value)}
                    placeholder="Header Description"
                    className="p-2 border border-gray-300 rounded w-full"
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="headerImage" className="font-semibold">
                    Image
                  </label>
                  <input
                    type="file"
                    name="headerImage"
                    onChange={(e) => handleFileChange(e, setheaderImage)}
                    className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded file:text-sm file:font-semibold file:bg-gray-50 hover:file:bg-gray-100"
                  />
                </div>
              </div>
              {/* Overview Section */}
              <div className="space-y-4 text-sm border border-gray-300 rounded p-4">
                <div>
                  <h1 className="text-base font-bold">Overview</h1>
                  <label htmlFor="overviewtitle" className="font-semibold mt-2">
                    Title
                  </label>
                  <input
                    type="text"
                    name="overviewtitle"
                    value={overviewtitle}
                    onChange={(e) => setOverviewtitle(e.target.value)}
                    placeholder="Overview Title"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="overviewindustryType"
                    className="font-semibold"
                  >
                    Industry Type
                  </label>
                  <input
                    type="text"
                    name="overviewindustryType"
                    value={overviewindustryType}
                    onChange={(e) => setOverviewindustryType(e.target.value)}
                    placeholder="Overview Industry Type"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="overviewbusinessType"
                    className="font-semibold"
                  >
                    Business Type
                  </label>
                  <input
                    type="text"
                    name="overviewbusinessType"
                    value={overviewbusinessType}
                    onChange={(e) => setOverviewbusinessType(e.target.value)}
                    placeholder="Overview Business Type"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="overviewservicesProvided"
                    className="font-semibold"
                  >
                    Services Provided
                  </label>
                  <input
                    type="text"
                    name="overviewservicesProvided"
                    value={overviewservicesProvided}
                    onChange={(e) =>
                      setOverviewservicesProvided(e.target.value)
                    }
                    placeholder="Overview Services Provided"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="overviewdescription"
                    className="font-semibold"
                  >
                    Description
                  </label>
                  <textarea
                    type="text"
                    name="overviewdescription"
                    value={overviewdescription}
                    onChange={(e) => setOverviewdescription(e.target.value)}
                    placeholder="Overview Description"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label htmlFor="overviewimage" className="font-semibold">
                    image
                  </label>
                  <input
                    type="file"
                    name="overviewimage"
                    onChange={(e) => handleFileChange(e, setOverviewimage)}
                    className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded file:text-sm file:font-semibold file:bg-gray-50 hover:file:bg-gray-100"
                  />
                </div>
              </div>

              {/* Goals, Insights, Challenges, Approach */}
              <div className="space-y-4 text-sm border border-gray-300 rounded p-4">
                <div>
                  <h1 className="text-base font-bold">
                    Goals, Insights, Challenges, Approach
                  </h1>
                  <label htmlFor="goals" className="font-semibold mt-2">
                    Goals
                  </label>
                  <textarea
                    type="text"
                    name="goals"
                    value={goals}
                    onChange={(e) => setGoals(e.target.value)}
                    placeholder="Goals"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label htmlFor="insights" className="font-semibold">
                    insights
                  </label>
                  <textarea
                    name="insights"
                    value={insights}
                    onChange={(e) => setInsights(e.target.value)}
                    placeholder="Insights"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label htmlFor="insightsImage" className="font-semibold">
                    insightsImage
                  </label>
                  <input
                    type="file"
                    name="insightsImage"
                    onChange={(e) => handleFileChange(e, setInsightsImage)}
                    className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded file:text-sm file:font-semibold file:bg-gray-50 hover:file:bg-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="challenges" className="font-semibold">
                    Challenges
                  </label>
                  <textarea
                    name="challenges"
                    value={challenges}
                    onChange={(e) => setChallenges(e.target.value)}
                    placeholder="Challenges"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label htmlFor="approach" className="font-semibold">
                    Approach
                  </label>
                  <textarea
                    name="approach"
                    value={approach}
                    onChange={(e) => setApproach(e.target.value)}
                    placeholder="Approach"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
              </div>

              {/* Execution Section */}
              <div className="space-y-4 text-sm border border-gray-300 rounded p-4">
                <div>
                  <h1 className="text-base font-bold">Execution</h1>
                  <label
                    htmlFor="executionHeading1"
                    className="font-semibold mt-2"
                  >
                    Execution Heading 1
                  </label>
                  <input
                    type="text"
                    name="executionHeading1"
                    value={executionHeading1}
                    onChange={(e) => setExecutionHeading1(e.target.value)}
                    placeholder="Execution Heading 1"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label htmlFor="executionPoint1" className="font-semibold">
                    Execution Point 1
                  </label>
                  <textarea
                    name="executionPoint1"
                    value={executionPoint1}
                    onChange={(e) => setExecutionPoint1(e.target.value)}
                    placeholder="Execution Point 1"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label htmlFor="executionHeading2" className="font-semibold">
                    {" "}
                    Execution Heading 2
                  </label>
                  <input
                    type="text"
                    name="executionHeading2"
                    value={executionHeading2}
                    onChange={(e) => setExecutionHeading2(e.target.value)}
                    placeholder="Execution Heading 2"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label htmlFor="executionPoint2" className="font-semibold">
                    Execution Point 2
                  </label>
                  <textarea
                    name="executionPoint2"
                    value={executionPoint2}
                    onChange={(e) => setExecutionPoint2(e.target.value)}
                    placeholder="Execution Point 2"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label htmlFor="executionHeading3" className="font-semibold">
                    {" "}
                    Execution Heading 3
                  </label>
                  <input
                    type="text"
                    name="executionHeading3"
                    value={executionHeading3}
                    onChange={(e) => setExecutionHeading3(e.target.value)}
                    placeholder="Execution Heading 3"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label htmlFor="executionPoint3" className="font-semibold">
                    Execution Point 3
                  </label>
                  <textarea
                    name="executionPoint3"
                    value={executionPoint3}
                    onChange={(e) => setExecutionPoint3(e.target.value)}
                    placeholder="Execution Point 3"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
              </div>

              {/* Solution and Tech Tools */}
              <div className="space-y-4 text-sm border border-gray-300 rounded p-4">
                <div>
                  <h1 className="text-base font-bold">Solution</h1>
                  <label htmlFor="solution" className="font-semibold">
                    heading
                  </label>
                  <textarea
                    name="solution"
                    value={solution}
                    onChange={(e) => setSolution(e.target.value)}
                    placeholder="Solution"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label htmlFor="solutionImg" className="font-semibold">
                    Image
                  </label>
                  <input
                    type="file"
                    name="solutionImage"
                    onChange={(e) => handleFileChange(e, setSolutionImage)}
                    className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded file:text-sm file:font-semibold file:bg-gray-50 hover:file:bg-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="techTools" className="font-semibold">
                    Tech Tools (comma-separated)
                  </label>
                  <textarea
                    name="techTools"
                    value={techTools}
                    onChange={(e) => setTechTools(e.target.value)}
                    placeholder="Tech Tools"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
              </div>

              {/* Result Images */}
              <div className="space-y-4 text-sm border border-gray-300 rounded p-4">
                <div>
                  <h1 className="text-base font-bold">Results</h1>
                  <label htmlFor="resultsImg1" className="font-semibold">
                    Image 1
                  </label>
                  <input
                    type="file"
                    name="resultsImg1"
                    onChange={(e) => handleFileChange(e, setResultsImg1)}
                    className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded file:text-sm file:font-semibold file:bg-gray-50 hover:file:bg-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="resultsImg2" className="font-semibold">
                    Image 2
                  </label>
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, setResultsImg2)}
                    className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded file:text-sm file:font-semibold file:bg-gray-50 hover:file:bg-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="resultsImg3" className="font-semibold">
                    image 3
                  </label>
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, setResultsImg3)}
                    className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded file:text-sm file:font-semibold file:bg-gray-50 hover:file:bg-gray-100"
                  />
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer className="bg-gray-100">
            <button
              type="button"
              onClick={() => {
                setAddPopUpShow(false);
              }}
              className="text-gray-700 hover:text-gray-900 px-2 py-2 bg-slate-300 rounded-md"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                addCaseStudyDataFunc();
                setAddPopUpShow(false);
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 rounded-md"
            >
              Save Changes
            </button>
          </Modal.Footer>
        </Modal>

        {/* Edit Modal */}
        <Modal show={editPopupShow} onHide={() => setEditPopUpShow(false)}>
          <Modal.Header closeButton className="bg-gray-800 text-white">
            <Modal.Title>Edit Case Study</Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-white">
            <form className="space-y-6">
              {/* Card Data */}
              <div className="space-y-4 text-sm border border-gray-300 rounded p-4">
                <div>
                  <h1 className="text-base font-bold">Card Data</h1>
                  <label htmlFor="cardDatatitle" className="font-semibold mt-2">
                    Title
                  </label>
                  <input
                    type="text"
                    name="cardDatatitle"
                    value={cardDatatitle}
                    onChange={(e) => setCardDatatitle(e.target.value)}
                    placeholder="Card Title"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label htmlFor="cardDataSubtitle" className="font-semibold">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    name="cardDatasubTitle"
                    value={cardDatasubTitle}
                    onChange={(e) => setCardDatasubTitle(e.target.value)}
                    placeholder="Card Subtitle"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label htmlFor="cardDataCoreTech" className="font-semibold">
                    Core Tech
                  </label>
                  <input
                    type="text"
                    name="cardDatacoreTech"
                    value={cardDatacoreTech}
                    onChange={(e) => setCardDatacoreTech(e.target.value)}
                    placeholder="Card Core Tech"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cardDataheaderImage"
                    className="font-semibold"
                  >
                    Image
                  </label>
                  <input
                    type="file"
                    name="cardDatacardImage"
                    onChange={(e) => handleFileChange(e, setCardDatacardImage)}
                    className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded file:text-sm file:font-semibold file:bg-gray-50 hover:file:bg-gray-100"
                  />
                </div>
              </div>
              {/* heade section */}
              <div className="space-y-4 text-sm border border-gray-300 rounded p-4">
                <div>
                  <h1 className="text-base font-bold">Header</h1>
                  <label htmlFor="headerTagLine" className="font-semibold mt-2">
                    TagLine
                  </label>
                  <input
                    type="text"
                    name="headerTagLine"
                    value={headerTagLine}
                    onChange={(e) => setheaderTagLine(e.target.value)}
                    placeholder="Header Title"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label htmlFor="headerdesc" className="font-semibold">
                    Description
                  </label>
                  <textarea
                    name="headerdesc"
                    value={headerdesc}
                    onChange={(e) => setheaderdesc(e.target.value)}
                    placeholder="Header Description"
                    className="p-2 border border-gray-300 rounded w-full"
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="headerImage" className="font-semibold">
                    Image
                  </label>
                  <input
                    type="file"
                    name="headerImage"
                    onChange={(e) => handleFileChange(e, setheaderImage)}
                    className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded file:text-sm file:font-semibold file:bg-gray-50 hover:file:bg-gray-100"
                  />
                </div>
              </div>
              {/* Overview Section */}
              <div className="space-y-4 text-sm border border-gray-300 rounded p-4">
                <div>
                  <h1 className="text-base font-bold">Overview</h1>
                  <label htmlFor="overviewtitle" className="font-semibold mt-2">
                    Title
                  </label>
                  <input
                    type="text"
                    name="overviewtitle"
                    value={overviewtitle}
                    onChange={(e) => setOverviewtitle(e.target.value)}
                    placeholder="Overview Title"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="overviewindustryType"
                    className="font-semibold"
                  >
                    Industry Type
                  </label>
                  <input
                    type="text"
                    name="overviewindustryType"
                    value={overviewindustryType}
                    onChange={(e) => setOverviewindustryType(e.target.value)}
                    placeholder="Overview Industry Type"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="overviewbusinessType"
                    className="font-semibold"
                  >
                    Business Type
                  </label>
                  <input
                    type="text"
                    name="overviewbusinessType"
                    value={overviewbusinessType}
                    onChange={(e) => setOverviewbusinessType(e.target.value)}
                    placeholder="Overview Business Type"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="overviewservicesProvided"
                    className="font-semibold"
                  >
                    Services Provided
                  </label>
                  <input
                    type="text"
                    name="overviewservicesProvided"
                    value={overviewservicesProvided}
                    onChange={(e) =>
                      setOverviewservicesProvided(e.target.value)
                    }
                    placeholder="Overview Services Provided"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="overviewdescription"
                    className="font-semibold"
                  >
                    Description
                  </label>
                  <textarea
                    type="text"
                    name="overviewdescription"
                    value={overviewdescription}
                    onChange={(e) => setOverviewdescription(e.target.value)}
                    placeholder="Overview Description"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label htmlFor="overviewimage" className="font-semibold">
                    image
                  </label>
                  <input
                    type="file"
                    name="overviewimage"
                    onChange={(e) => handleFileChange(e, setOverviewimage)}
                    className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded file:text-sm file:font-semibold file:bg-gray-50 hover:file:bg-gray-100"
                  />
                </div>
              </div>

              {/* Goals, Insights, Challenges, Approach */}
              <div className="space-y-4 text-sm border border-gray-300 rounded p-4">
                <div>
                  <h1 className="text-base font-bold">
                    Goals, Insights, Challenges, Approach
                  </h1>
                  <label htmlFor="goals" className="font-semibold mt-2">
                    Goals
                  </label>
                  <textarea
                    type="text"
                    name="goals"
                    value={goals}
                    onChange={(e) => setGoals(e.target.value)}
                    placeholder="Goals"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label htmlFor="insights" className="font-semibold">
                    insights
                  </label>
                  <textarea
                    name="insights"
                    value={insights}
                    onChange={(e) => setInsights(e.target.value)}
                    placeholder="Insights"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label htmlFor="insightsImage" className="font-semibold">
                    insightsImage
                  </label>
                  <input
                    type="file"
                    name="insightsImage"
                    onChange={(e) => handleFileChange(e, setInsightsImage)}
                    className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded file:text-sm file:font-semibold file:bg-gray-50 hover:file:bg-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="challenges" className="font-semibold">
                    Challenges
                  </label>
                  <textarea
                    name="challenges"
                    value={challenges}
                    onChange={(e) => setChallenges(e.target.value)}
                    placeholder="Challenges"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label htmlFor="approach" className="font-semibold">
                    Approach
                  </label>
                  <textarea
                    name="approach"
                    value={approach}
                    onChange={(e) => setApproach(e.target.value)}
                    placeholder="Approach"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
              </div>

              {/* Execution Section */}
              <div className="space-y-4 text-sm border border-gray-300 rounded p-4">
                <div>
                  <h1 className="text-base font-bold">Execution</h1>
                  <label
                    htmlFor="executionHeading1"
                    className="font-semibold mt-2"
                  >
                    Execution Heading 1
                  </label>
                  <input
                    type="text"
                    name="executionHeading1"
                    value={executionHeading1}
                    onChange={(e) => setExecutionHeading1(e.target.value)}
                    placeholder="Execution Heading 1"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label htmlFor="executionPoint1" className="font-semibold">
                    Execution Point 1
                  </label>
                  <textarea
                    name="executionPoint1"
                    value={executionPoint1}
                    onChange={(e) => setExecutionPoint1(e.target.value)}
                    placeholder="Execution Point 1"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label htmlFor="executionHeading2" className="font-semibold">
                    {" "}
                    Execution Heading 2
                  </label>
                  <input
                    type="text"
                    name="executionHeading2"
                    value={executionHeading2}
                    onChange={(e) => setExecutionHeading2(e.target.value)}
                    placeholder="Execution Heading 2"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label htmlFor="executionPoint2" className="font-semibold">
                    Execution Point 2
                  </label>
                  <textarea
                    name="executionPoint2"
                    value={executionPoint2}
                    onChange={(e) => setExecutionPoint2(e.target.value)}
                    placeholder="Execution Point 2"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label htmlFor="executionHeading3" className="font-semibold">
                    {" "}
                    Execution Heading 3
                  </label>
                  <input
                    type="text"
                    name="executionHeading3"
                    value={executionHeading3}
                    onChange={(e) => setExecutionHeading3(e.target.value)}
                    placeholder="Execution Heading 3"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label htmlFor="executionPoint3" className="font-semibold">
                    Execution Point 3
                  </label>
                  <textarea
                    name="executionPoint3"
                    value={executionPoint3}
                    onChange={(e) => setExecutionPoint3(e.target.value)}
                    placeholder="Execution Point 3"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
              </div>

              {/* Solution and Tech Tools */}
              <div className="space-y-4 text-sm border border-gray-300 rounded p-4">
                <div>
                  <h1 className="text-base font-bold">Solution</h1>
                  <label htmlFor="solution" className="font-semibold">
                    heading
                  </label>
                  <textarea
                    name="solution"
                    value={solution}
                    onChange={(e) => setSolution(e.target.value)}
                    placeholder="Solution"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label htmlFor="solutionImg" className="font-semibold">
                    Image
                  </label>
                  <input
                    type="file"
                    name="solutionImage"
                    onChange={(e) => handleFileChange(e, setSolutionImage)}
                    className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded file:text-sm file:font-semibold file:bg-gray-50 hover:file:bg-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="techTools" className="font-semibold">
                    Tech Tools (comma-separated)
                  </label>
                  <textarea
                    name="techTools"
                    value={techTools}
                    onChange={(e) => setTechTools(e.target.value)}
                    placeholder="Tech Tools"
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                </div>
              </div>

              {/* Result Images */}
              <div className="space-y-4 text-sm border border-gray-300 rounded p-4">
                <div>
                  <h1 className="text-base font-bold">Results</h1>
                  <label htmlFor="resultsImg1" className="font-semibold">
                    Image 1
                  </label>
                  <input
                    type="file"
                    name="resultsImg1"
                    onChange={(e) => handleFileChange(e, setResultsImg1)}
                    className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded file:text-sm file:font-semibold file:bg-gray-50 hover:file:bg-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="resultsImg2" className="font-semibold">
                    Image 2
                  </label>
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, setResultsImg2)}
                    className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded file:text-sm file:font-semibold file:bg-gray-50 hover:file:bg-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="resultsImg3" className="font-semibold">
                    image 3
                  </label>
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, setResultsImg3)}
                    className="mt-1 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded file:text-sm file:font-semibold file:bg-gray-50 hover:file:bg-gray-100"
                  />
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer className="bg-gray-100">
            <button
              type="button"
              onClick={() => {
                setEditPopUpShow(false);
              }}
              className="text-gray-700 hover:text-gray-900 px-2 py-2 bg-slate-300 rounded-md"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                addCaseStudyDataFunc();
                setEditPopUpShow(false);
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 rounded-md"
            >
              Update Changes
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };

export default HomeCaseStudies;
