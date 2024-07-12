import upload from "../multer.js";
import express from "express";
import { MultiImageupload } from "../middleware/multiImageMulter.js";
export const dataroute = express.Router();

// import { Admin, authlogin } from "../middlwares/userauth.js";
import { addSliderData, deleteheroslliderdata, editherosliderdata, getherosliderdata } from "../controllers/HomePage/heroSectionsController.js";
import { addPartener, deletePartenerData, editPartenerData, getPartenarData } from "../controllers/HomePage/OurPartenerController.js";
import { addSolutionData, deleteSolutionData, editSolutionWeOffer, getSolutionData } from "../controllers/HomePage/SolutionWeOfferController.js";
import { addServiceData, deleteServiceData, editServiceData, getServiceData } from "../controllers/HomePage/serviceWeOfferController.js";
import { addIndustriesData, deleteIndustriesData, editIndustriesData, getIndustriesData } from "../controllers/HomePage/industriesController.js";
import { addCaseStudiesData, deleteCaseStudiesData, editCaseStudiesData, getCaseStudiesData } from "../controllers/HomePage/CaseStudiesController.js";
import { addBlogsData, deleteBlogData, editBlogData, getBlogData } from "../controllers/HomePage/BlogController.js";
import { addClientReviewData, deleteClientReviewData, editClientReviewData, getClientReviewData } from "../controllers/HomePage/meetOurClientController.js";
import { addHomeFaq, deleteHomeFaq, getHomeFaq, updateHomeFaqById } from "../controllers/FAQ's/HomePageFaqController.js";
import { addbookFreeConData, deletebookFreeConData, editbookFreeConData, getbookFreeConData } from "../controllers/HomePage/bookFreeConController.js";
import { addFaq, deleteFaq, getFaq, getFaqByCategory, getFaqByCategorySubCategory, getFaqBySubCategory, updateFaqById } from "../controllers/FAQ's/FaqControllers.js";
import { addCategory, deleteCategory, getCategory } from "../controllers/FAQ's/categoryController.js";
import { addHeadersData, deleteHeadersdata, editHeadersdata, getHeaderByCategory, getHeaderByCategorySubCategory, getHeaderBySubCategory, getHeadersdata } from "../controllers/Headers/headersController.js";
import { addNavbarData, deleteNavbardata, editNavbardata, getNavbarByCategory, getNavbardata } from "../controllers/NavBar/NavBarController.js";
import { addChooseCtSliderData, deleteChooseCtSliderdata, editChooseCtSliderData, getChooseCtSliderByCategory, getChooseCtSliderByCategorySubCategory, getChooseCtSliderBySubCategory, getChooseCtSliderdata } from "../controllers/WhyChooseCtSlider/WhyChooseCtSliderController.js";
import { addPartnerUpData, deletePartnerUpdata, editPartnerUpdata, getPartnerupdata } from "../controllers/partnerUpController/PartnerUpController.js";
import { addCaseStudy, deleteCaseStudy, getCSByCategorySubCategory, getCaseStudies, getCaseStudiesByCategory, getCaseStudyBySubCategory, updateCaseStudyById } from "../controllers/caseStudyController/CaseStudyController.js";
import { addReliableToolsData, deleteReliableToolsData, editReliableToolsData, getReliableToolsByCategory, getReliableToolsBySubCategory, getReliableToolsData } from "../controllers/ReliableToolsController/ReliableTools.js";
import { addKeyFeatureData, deleteKeyFeatureData, editKeyFeatureData, getKeyFeaturedata } from "../controllers/HomePage/keyFeatureController.js";
import { addContactUsData, deleteContactUsData, editContactUsData, getContactUsData } from "../controllers/contactUsController/ContactUsController.js";
import { addSocialMediaData, deleteSocialMediadata, editSocialMediadata, getSocialMediadata } from "../controllers/About/socialMedia.js";
import { addAddress, deleteAddress, editAddress, getAddress } from "../controllers/About/Address.js";
import { addAreaOfExpertiesData, deleteAreaOfExpertiesdata, editAreaOfExpertiessdata, getAreaOfExpertiesByCategory, getAreaOfExpertiesByCategorySubCategory, getAreaOfExpertiesSubCategory, getAreaOfExpertiesdata } from "../controllers/AreaOfExperies/AreaOfExperiesController.js";
import { addBlogData, deleteBlogsData, getBlogDataByCategory, getBlogDataByCategorySubCategory, getBlogDataBySubCategory, getBlogsData, updateBlogsDataById } from "../controllers/BlogController/BlogController.js";

//heroslider routes
dataroute.post('/add-heroslider-data', upload.single('herosliderImage'), addSliderData)
dataroute.get('/get-heroslider-data', getherosliderdata)
dataroute.put('/edit-heroslider-data/:id', upload.single('herosliderImage'), editherosliderdata)
dataroute.delete('/delete-heroslider-data/:id', deleteheroslliderdata)

//our partener route
dataroute.post('/add-partener-data', upload.single('logo'), addPartener)
dataroute.get('/get-partener-data', getPartenarData)
dataroute.put('/edit-partener-data/:id', upload.single('logo'), editPartenerData)
dataroute.delete('/delete-partener-data/:id', deletePartenerData)

//service data routes 
dataroute.get("/get-service-data", getServiceData);
dataroute.post("/add-service-data", MultiImageupload.array("images", 2), addServiceData);
dataroute.put("/edit-service-data/:id", MultiImageupload.array("images", 2), editServiceData);
dataroute.delete("/delete-service-data/:id", deleteServiceData);

//solution we offer routes

dataroute.post('/add-solution-we-offer-data', MultiImageupload.array('images', 1), addSolutionData)
dataroute.get('/get-solution-we-offer-data', getSolutionData)
dataroute.put('/edit-solution-we-offer-data/:id', MultiImageupload.array('images', 2), editSolutionWeOffer)
dataroute.delete('/delete-solution-we-offer-data/:id', deleteSolutionData)

//industries we offer routes
dataroute.post('/add-industries-data', MultiImageupload.array('images', 1), addIndustriesData)
dataroute.get('/get-industries-data', getIndustriesData)
dataroute.put('/edit-industries-data/:id', MultiImageupload.array('images', 1), editIndustriesData)
dataroute.delete('/delete-industries-data/:id', deleteIndustriesData)

//case Studies Routes
dataroute.post("/add-case-studies-data", MultiImageupload.array('images', 1), addCaseStudiesData)
dataroute.get("/get-case-studies-data", getCaseStudiesData)
dataroute.put("/edit-case-studies-data/:id", MultiImageupload.array('images', 1), editCaseStudiesData)
dataroute.delete("/delete-case-studies-data/:id", deleteCaseStudiesData)

//blog data Routes
dataroute.post("/add-blog-data", MultiImageupload.array('images', 1), addBlogsData)
dataroute.get("/get-blog-data", getBlogData)
dataroute.put("/edit-blog-data/:id", MultiImageupload.array('images', 1), editBlogData)
dataroute.delete("/delete-blog-data/:id", deleteBlogData)

//meet our client data routes
dataroute.post("/add-client-review-data", MultiImageupload.array('images', 1), addClientReviewData)
dataroute.get("/get-client-review-data", getClientReviewData)
dataroute.put("/edit-client-review-data/:id", MultiImageupload.array('images', 1), editClientReviewData)
dataroute.delete("/delete-client-review-data/:id", deleteClientReviewData)

//home faq routes
dataroute.post("/add-home-faq", MultiImageupload.array('images', 1), addHomeFaq)
dataroute.get("/get-home-faq", getHomeFaq)
dataroute.put("/edit-home-faq/:id", MultiImageupload.array('images', 1), updateHomeFaqById)
dataroute.delete("/delete-home-faq/:id", deleteHomeFaq)

//book free consultation routes
dataroute.post("/add-book-free-con-data", addbookFreeConData)
dataroute.get("/get-book-free-con-data", getbookFreeConData)
dataroute.put("/edit-book-free-con-data/:id", editbookFreeConData)
dataroute.delete("/delete-book-free-con-data/:id", deletebookFreeConData)

// Faq Data routes 
dataroute.post('/add-faq', MultiImageupload.array('images', 1), addFaq)
dataroute.get('/get-faq', getFaq)
dataroute.delete('/delete-faq/:id', deleteFaq)
dataroute.put('/update-faq/:id', MultiImageupload.array('images', 1), updateFaqById)
dataroute.get('/get-faq-bycategory/:category', getFaqByCategory)
dataroute.get('/get-faq-bysubcategory/:Subcategory', getFaqBySubCategory)
dataroute.get('/get-faq-bycategorysubcategory/:category/:Subcategory', getFaqByCategorySubCategory)

// category for FAQ's
dataroute.post('/add-category', addCategory)
dataroute.get('/get-category', getCategory)
dataroute.delete('/delete-category/:id', deleteCategory)

// header for all pages 
dataroute.post('/add-header', upload.single('image'), addHeadersData)
dataroute.get('/get-header', getHeadersdata)
dataroute.get('/get-header-by-headerCategory/:headerCategory', getHeaderByCategory)
dataroute.get('/get-header-by-headerSubCategory/:headerSubCategory', getHeaderBySubCategory)
dataroute.get('/get-header-by-headerCategoryandSubCategory/:headerCategory/:headerSubCategory', getHeaderByCategorySubCategory)
dataroute.put('/edit-header-by-id/:id', upload.single('image'), editHeadersdata)
dataroute.delete('/delete-header-by-id/:id', deleteHeadersdata)

//navigations and dropdown
dataroute.post('/add-navigation', addNavbarData)
dataroute.get('/get-navigation', getNavbardata)
dataroute.get('/get-navigation-by-navCategory/:navCategory', getNavbarByCategory)
dataroute.put('/edit-navigation-by-id/:id', editNavbardata)
dataroute.delete('/delete-navigation-by-id/:id', deleteNavbardata)

// why choose ct routes
dataroute.post('/add-choose-ct-slider-data', MultiImageupload.array('images'), addChooseCtSliderData)
dataroute.get('/get-choose-ct-slider-data', getChooseCtSliderdata)

dataroute.get('/get-choose-ct-slider-data/:category', getChooseCtSliderByCategory)
dataroute.get('/get-choose-ct-slider-data/:subcategory', getChooseCtSliderBySubCategory)
dataroute.get('/get-choose-ct-slider-data-byCategorySubCategory/:category/:subcategory', getChooseCtSliderByCategorySubCategory)
// dataroute.put('/edit-choose-ct-slider-data/:id', editChooseCtSliderdata)

dataroute.get('/get-choose-ct-slider-data/:category', getChooseCtSliderByCategory)
dataroute.get('/get-choose-ct-slider-by-sub-data/:Subcategory', getChooseCtSliderBySubCategory)
dataroute.put('/edit-choose-ct-slider-data/:id', MultiImageupload.array('images'), editChooseCtSliderData)

dataroute.delete('/delete-choose-ct-slider-data/:id', deleteChooseCtSliderdata)

dataroute.post('/add-partner-up-data', MultiImageupload.fields([{ name: 'images1' }, { name: 'images2' }]), addPartnerUpData);
dataroute.get('/get-partner-up-data', getPartnerupdata);
dataroute.put('/edit-partner-up-data/:id', MultiImageupload.fields([{ name: 'images1' }, { name: 'images2' }]), editPartnerUpdata);
dataroute.delete('/delete-partner-up-data/:id', deletePartnerUpdata);

// case studies routes
dataroute.post('/add-case-study', MultiImageupload.array('images', 1), addCaseStudy)
dataroute.get('/get-case-studies', getCaseStudies)
dataroute.delete('/delete-case-study/:id', deleteCaseStudy)
dataroute.put('/update-case-study/:id', updateCaseStudyById)
dataroute.get('/get-case-study-bycategory/:category', getCaseStudiesByCategory)
dataroute.get('/get-case-study-bycategory/:Subcategory', getCaseStudyBySubCategory)
dataroute.get('/get-case-study-bycategorysubcategory/:category/:Subcategory', getCSByCategorySubCategory)

dataroute.post('/add-reliable-tools-data', MultiImageupload.array('techLogos'), addReliableToolsData);
dataroute.get('/get-reliable-tools-data', getReliableToolsData);
dataroute.get('/get-reliable-tools-data/:category', getReliableToolsByCategory)
dataroute.get('/get-reliable-tools-data/:category/:Subcategory', getReliableToolsBySubCategory)
dataroute.put('/update-reliable-tools-data/:id', MultiImageupload.array('techLogos'), editReliableToolsData)
dataroute.delete('/delete-reliable-tools-data/:id', deleteReliableToolsData)

//  key feature routes
dataroute.post('/add-key-feature-data', upload.single('keyFeatureImag'), addKeyFeatureData);
dataroute.get('/get-key-feature-data', getKeyFeaturedata);
dataroute.put('/update-key-feature-data/:id', upload.single('keyFeatureImag'), editKeyFeatureData)
dataroute.delete('/delete-key-feature-data/:id', deleteKeyFeatureData)

// contact us controller
dataroute.post("/add-contact-us-data", upload.single('sourceImage'), addContactUsData)
dataroute.get("/get-contact-us-data", getContactUsData)
dataroute.put("/edit-contact-us-data/:id", upload.single('sourceImage'), editContactUsData)
dataroute.delete("/delete-contact-us-data/:id", deleteContactUsData)

// social media routes
dataroute.post('/add-social-media-data', upload.single('social_icon'), addSocialMediaData);
dataroute.get('/get-social-media-data', getSocialMediadata);
dataroute.put('/update-social-media-data/:id', upload.single('social_icon'), editSocialMediadata)
dataroute.delete('/delete-social-media-data/:id', deleteSocialMediadata)

// social media routes
dataroute.post('/add-address', addAddress);
dataroute.get('/get-address', getAddress);
dataroute.put('/update-address/:id', editAddress)
dataroute.delete('/delete-address/:id', deleteAddress)

// experties data for all pages 
dataroute.post('/add-experies-data', upload.single('image'), addAreaOfExpertiesData)
dataroute.get('/get-experies-data', getAreaOfExpertiesdata)
dataroute.get('/get-experies-by-category/:Category', getAreaOfExpertiesByCategory)
dataroute.get('/get-experies-by-SubCategory/:SubCategory', getAreaOfExpertiesSubCategory)
dataroute.get('/get-experties-by-CategoryandSubCategory/:Category/:SubCategory', getAreaOfExpertiesByCategorySubCategory)
dataroute.put('/edit-experties-by-id/:id', upload.single('image'), editAreaOfExpertiessdata)
dataroute.delete('/delete-experties-by-id/:id', deleteAreaOfExpertiesdata)

// blogData for all pages 
dataroute.post('/add-blogs-data', MultiImageupload.array('images', 2), addBlogData)
dataroute.get('/get-blogs-data', getBlogsData)
dataroute.put('/edit-blogs-data-by-id/:id', MultiImageupload.array('images', 2), updateBlogsDataById)
dataroute.delete('/delete-blogs-data-by-id/:id', deleteBlogsData)
dataroute.get('/get-blogs-data-by-id/:id', getBlogDataByCategory)
dataroute.get('/get-blogs-data-by-SubCategory/:SubCategory', getBlogDataBySubCategory)
dataroute.get('/get-blogs-data-by-CategoryandSubCategory/:Category/:SubCategory', getBlogDataByCategorySubCategory)