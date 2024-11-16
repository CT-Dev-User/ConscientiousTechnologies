import express from "express";

import upload from "../multer.js"; // assuming multer is set up for file uploads
import {
  createService,
  deleteService,
  editService,
  getAllServices,
  getServiceById,
  getServiceByserviceName,
} from "../latestControllers/servicesController.js";
import {
  createSolution,
  deleteSolution,
  editSolution,
  getAllSolutions,
  getSolutionById,
  getSolutionBySolutionName,
} from "../latestControllers/solutionController.js";
import {
  createIndustry,
  deleteIndustry,
  editIndustry,
  getAllIndustries,
  getIndustryById,
  getIndustryByIndustryName,
} from "../latestControllers/industriesController.js";
import {
  createCaseStudy,
  deleteCaseStudy,
  editCaseStudy,
  getAllCaseStudies,
  getCaseStudyByCategory,
  getCaseStudyById,
  getCaseStudyBySubCategory,
} from "../latestControllers/caseStudyController.js";
import {
  createSubServices,
  deleteSubServices,
  editSubServices,
  getAllSubServices,
  getSubServicesById,
  getSubServicesByServices,
  getSubservicesBySubServicesName,
} from "../latestControllers/subServicesController.js";
import {
  addBlog,
  deleteBlog,
  getAllBlogs,
  getBlogByCategory,
  getBlogById,
  getBlogBysubCategory,
  updateBlog,
} from "../latestControllers/blogController.js";
import {
  addContactUsFormData,
  deleteContactUsFormData,
  getContactUsFormData,
} from "../latestControllers/contactUs/ContactUsForm.js";
import { authlogin, Super_Admin_or_Admin } from "../middleware/userauth.js";

const latestrouter = express.Router();

// Route to get all services
latestrouter.post(
  "/create-new-service-data",
  authlogin,
  Super_Admin_or_Admin,
  upload.fields([
    { name: "cardImage", maxCount: 1 },
    { name: "headerImage", maxCount: 1 },
  ]),
  createService
);
latestrouter.put(
  "/edit-existing-service-data/:id",
  authlogin,
  Super_Admin_or_Admin,
  upload.fields([
    { name: "cardImage", maxCount: 1 },
    { name: "headerImage", maxCount: 1 },
  ]),
  editService
);

latestrouter.get("/get-latest-service-data", getAllServices);
latestrouter.get("/get-service-data-by-id/:id", getServiceById);
latestrouter.get(
  "/get-service-data-by-serviceName/:serviceName",
  getServiceByserviceName
);
latestrouter.delete(
  "/delete-existing-service-data-by-id/:id",
  authlogin,
  Super_Admin_or_Admin,
  deleteService
);

latestrouter.put(
  "/edit-solution-data/:id",
  authlogin,
  Super_Admin_or_Admin,
  upload.fields([
    { name: "cardImage", maxCount: 1 },
    { name: "headerImage", maxCount: 1 },
  ]),
  editSolution
);
latestrouter.get("/get-latest-solution-data", getAllSolutions);
latestrouter.get("/get-solution-data-by-id/:id", getSolutionById);
latestrouter.get(
  "/get-solution-data-by-solutionName/:solutionName",
  getSolutionBySolutionName
);
latestrouter.delete(
  "/delete-existing-solution-data-by-id/:id",
  authlogin,
  Super_Admin_or_Admin,
  deleteSolution
);

//industries routes
latestrouter.post(
  "/create-new-industry-data",
  authlogin,
  Super_Admin_or_Admin,
  upload.fields([
    { name: "cardImage", maxCount: 1 },
    { name: "headerImage", maxCount: 1 },
  ]),
  createIndustry
);

latestrouter.put(
  "/edit-existing-industry-data/:id",
  authlogin,
  Super_Admin_or_Admin,
  upload.fields([
    { name: "cardImage", maxCount: 1 },
    { name: "headerImage", maxCount: 1 },
  ]),
  editIndustry
);

latestrouter.get("/get-latest-industry-data", getAllIndustries);
latestrouter.get("/get-latest-industry-data-by-id/:id", getIndustryById);
latestrouter.get(
  "/get-latest-industry-data-by-industryName/:industryName",
  getIndustryByIndustryName
);
latestrouter.delete(
  "/delete-existing-industry-data-by-id/:id",
  authlogin,
  Super_Admin_or_Admin,
  deleteIndustry
);

latestrouter.post(
  "/create-case-studies",
  authlogin,
  Super_Admin_or_Admin,
  upload.fields([
    { name: "cardDatacardImage", maxCount: 1 },
    { name: "cardDataheaderImage", maxCount: 1 },
    { name: "overviewimage", maxCount: 1 },
    { name: "insightsImage", maxCount: 1 },
    { name: "solutionImage", maxCount: 1 },
    { name: "resultsImg1", maxCount: 1 },
    { name: "resultsImg2", maxCount: 1 },
    { name: "resultsImg3", maxCount: 1 },
  ]),
  createCaseStudy
);
latestrouter.put(
  "/edit-case-studies/:id",
  authlogin,
  Super_Admin_or_Admin,
  upload.fields([
    { name: "cardDatacardImage", maxCount: 1 },
    { name: "cardDataheaderImage", maxCount: 1 },
    { name: "overviewimage", maxCount: 1 },
    { name: "insightsImage", maxCount: 1 },
    { name: "solutionImage", maxCount: 1 },
    { name: "resultsImg1", maxCount: 1 },
    { name: "resultsImg2", maxCount: 1 },
    { name: "resultsImg3", maxCount: 1 },
  ]),
  editCaseStudy
);
latestrouter.get("/get-latest-case-studies", getAllCaseStudies);
latestrouter.get("/get-case-studies-by-id/:id", getCaseStudyById);
latestrouter.get(
  "/get-case-studies-by-cateory/:category",
  getCaseStudyByCategory
);
latestrouter.get(
  "/get-case-studies-by-subcategory/category/:category/subcategory/:Subcategory",
  getCaseStudyBySubCategory
);
latestrouter.delete("/delete-case-studies/:id", authlogin, Super_Admin_or_Admin, deleteCaseStudy);

//blogs routes
latestrouter.post(
  "/create-new-blog-data",
  authlogin,
  Super_Admin_or_Admin,
  upload.fields([
    { name: "cardImage", maxCount: 1 },
    { name: "headerImage", maxCount: 1 },
  ]),
  addBlog
);

latestrouter.put(
  "/edit-existing-blog-data/:id",
  authlogin,
  Super_Admin_or_Admin,
  upload.fields([
    { name: "cardImage", maxCount: 1 },
    { name: "headerImage", maxCount: 1 },
  ]),
  updateBlog
);

latestrouter.get("/get-latest-blog-data", getAllBlogs);
latestrouter.get("/get-latest-blog-data-by-id/:id", getBlogById);
latestrouter.get(
  "/get-latest-blog-data-by-category/:category",
  getBlogByCategory
);
latestrouter.get(
  "/get-latest-blog-data-by-subcategory/:category/:Subcategory",
  getBlogBysubCategory
);
latestrouter.delete("/delete-existing-blog-data-by-id/:id", authlogin, Super_Admin_or_Admin, deleteBlog);

// Route to get all Sub services
latestrouter.post(
  "/create-new-subservice-data",
  authlogin,
  Super_Admin_or_Admin,
  upload.fields([
    { name: "cardImage", maxCount: 1 },
    { name: "headerImage", maxCount: 1 },
  ]),
  createSubServices
);
latestrouter.put(
  "/edit-existing-subservice-data/:id",
  authlogin,
  Super_Admin_or_Admin,
  upload.fields([
    { name: "cardImage", maxCount: 1 },
    { name: "headerImage", maxCount: 1 },
  ]),
  editSubServices
);

latestrouter.get("/get-latest-subservice-data", getAllSubServices);
latestrouter.get("/get-subservice-data-by-id/:id", getSubServicesById);
latestrouter.get(
  "/get-subservice-data-by-subservice/:serviceName/:subServiceTitle",
  getSubservicesBySubServicesName
);
latestrouter.get(
  "/get-subservice-data-by-service/:serviceName",
  authlogin,
  Super_Admin_or_Admin,
  getSubServicesByServices
);
latestrouter.delete(
  "/delete-existing-subservice-data-by-id/:id",
  authlogin,
  Super_Admin_or_Admin,
  deleteSubServices
);

latestrouter.get("/get-contact-us-form-data", getContactUsFormData);
latestrouter.post("/post-contact-us-form-data", addContactUsFormData);
latestrouter.delete(
  "/delete-contact-us-form-data/:id",
  authlogin,
  Super_Admin_or_Admin,
  deleteContactUsFormData
);

export default latestrouter;
