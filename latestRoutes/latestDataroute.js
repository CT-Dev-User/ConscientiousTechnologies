import express from 'express';

import upload from "../multer.js"; // assuming multer is set up for file uploads
import { createService, deleteService, editService, getAllServices, getServiceById, getServiceByserviceName } from '../latestControllers/servicesController.js';
import { createSolution, deleteSolution, editSolution, getAllSolutions, getSolutionById, getSolutionBySolutionName } from '../latestControllers/solutionController.js';
import { createIndustry,deleteIndustry, editIndustry, getAllIndustries, getIndustryById, getIndustryByIndustryName } from '../latestControllers/industriesController.js';
import { createCaseStudy, deleteCaseStudy, editCaseStudy, getAllCaseStudies, getCaseStudyByCategory, getCaseStudyById, getCaseStudyBySubCategory } from '../latestControllers/caseStudyController.js';

const latestrouter = express.Router();

// Route to get all services
latestrouter.post('/create-new-service-data', upload.fields([
    { name: 'cardImage', maxCount: 1 },
    { name: 'headerImage', maxCount: 1 }
]), createService);
latestrouter.put('/edit-existing-service-data/:id', upload.fields([
    { name: 'cardImage', maxCount: 1 },
    { name: 'headerImage', maxCount: 1 }
]), editService);

latestrouter.get('/get-latest-service-data', getAllServices);
latestrouter.get('/get-service-data-by-id/:id', getServiceById);
latestrouter.get('/get-service-data-by-serviceName/:serviceName', getServiceByserviceName);
latestrouter.delete('/delete-existing-service-data-by-id/:id', deleteService);


// Route to create a new solution
latestrouter.post('/create-new-solution-data', upload.fields([
    { name: 'cardImage', maxCount: 1 },
    { name: 'headerImage', maxCount: 1 }
]), createSolution);

latestrouter.put('/edit-solution-data/:id', upload.fields([
    { name: 'cardImage', maxCount: 1 },
    { name: 'headerImage', maxCount: 1 }
]), editSolution);
latestrouter.get('/get-latest-solution-data', getAllSolutions);
latestrouter.get('/get-solution-data-by-id/:id', getSolutionById);
latestrouter.get('/get-solution-data-by-solutionName/:solutionName', getSolutionBySolutionName);
latestrouter.delete('/delete-existing-solution-data-by-id/:id', deleteSolution);

//industries routes
latestrouter.post('/create-new-industry-data', upload.fields([
    { name: 'cardImage', maxCount: 1 },
    { name: 'headerImage', maxCount: 1 }
]), createIndustry);

latestrouter.put('/edit-existing-industry-data/:id', upload.fields([
    { name: 'cardImage', maxCount: 1 },
    { name: 'headerImage', maxCount: 1 }
]), editIndustry);

latestrouter.get('/get-latest-industry-data', getAllIndustries);
latestrouter.get('/get-latest-industry-data-by-id/:id', getIndustryById);
latestrouter.get('/get-latest-industry-data-by-industryName/:industryName', getIndustryByIndustryName);
latestrouter.delete('/delete-existing-industry-data-by-id/:id', deleteIndustry);


latestrouter.post(
    '/create-case-studies',
    upload.fields([
        { name: 'cardDatacardImage', maxCount: 1 },
        { name: 'cardDataheaderImage', maxCount: 1 },
        { name: 'overviewimage', maxCount: 1 },
        { name: 'insightsImage', maxCount: 1 },
        { name: 'solutionImage', maxCount: 1 },
        { name: 'resultsImg1', maxCount: 1 },
        { name: 'resultsImg2', maxCount: 1 },
        { name: 'resultsImg3', maxCount: 1 }
    ]),
    createCaseStudy
);
latestrouter.put(
    '/edit-case-studies/:id',
    upload.fields([
        { name: 'cardDatacardImage', maxCount: 1 },
        { name: 'cardDataheaderImage', maxCount: 1 },
        { name: 'overviewimage', maxCount: 1 },
        { name: 'insightsImage', maxCount: 1 },
        { name: 'solutionImage', maxCount: 1 },
        { name: 'resultsImg1', maxCount: 1 },
        { name: 'resultsImg2', maxCount: 1 },
        { name: 'resultsImg3', maxCount: 1 }
    ]),
    editCaseStudy
);
latestrouter.get('/get-all-case-studies', getAllCaseStudies);
latestrouter.get('/get-case-studies-by-id/:id', getCaseStudyById);
latestrouter.get('/get-case-studies-by-cateory/:category', getCaseStudyByCategory);
latestrouter.get('/get-case-studies-by-subcategory/category/:category/subcategory/:Subcategory', getCaseStudyBySubCategory);
latestrouter.delete('/delete-case-studies/:id', deleteCaseStudy);


export default latestrouter;
