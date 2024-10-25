import upload from "../multer.js";
import MultiImageupload from "../middleware/multiImageMulter.js";
import express from "express";
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
import { authlogin, Super_Admin } from "../middleware/userauth.js";

//service data routes // should be deleted
dataroute.get("/get-service-data", getServiceData);
dataroute.post("/add-service-data",authlogin, Super_Admin, MultiImageupload.array("images", 2), addServiceData);
dataroute.put("/edit-service-data/:id",authlogin, Super_Admin, MultiImageupload.array("images", 2), editServiceData);
dataroute.delete("/delete-service-data/:id",authlogin, Super_Admin, deleteServiceData);

//solution we offer routes // should be deleted
dataroute.post('/add-solution-we-offer-data',authlogin, Super_Admin, MultiImageupload.array('images', 1), addSolutionData)
dataroute.get('/get-solution-we-offer-data', getSolutionData)
dataroute.put('/edit-solution-we-offer-data/:id',authlogin, Super_Admin, MultiImageupload.array('images', 2), editSolutionWeOffer)
dataroute.delete('/delete-solution-we-offer-data/:id',authlogin, Super_Admin, deleteSolutionData)

//industries we offer routes // should be deleted
dataroute.post('/add-industries-data',authlogin, Super_Admin, MultiImageupload.array('images', 1), addIndustriesData)
dataroute.get('/get-industries-data', getIndustriesData)
dataroute.put('/edit-industries-data/:id',authlogin, Super_Admin, MultiImageupload.array('images', 1), editIndustriesData)
dataroute.delete('/delete-industries-data/:id',authlogin, Super_Admin, deleteIndustriesData)

//case Studies Routes // should be deleted
dataroute.post("/add-case-studies-data",authlogin, Super_Admin, MultiImageupload.array('images', 1), addCaseStudiesData)
dataroute.get("/get-case-studies-data", getCaseStudiesData)
dataroute.put("/edit-case-studies-data/:id",authlogin, Super_Admin, MultiImageupload.array('images', 1), editCaseStudiesData)
dataroute.delete("/delete-case-studies-data/:id",authlogin, Super_Admin, deleteCaseStudiesData)

//blog data Routes // should be deleted
dataroute.post("/add-blog-data",authlogin, Super_Admin, MultiImageupload.array('images', 1), addBlogsData)
dataroute.get("/get-blog-data", getBlogData)
dataroute.put("/edit-blog-data/:id",authlogin, Super_Admin, MultiImageupload.array('images', 1), editBlogData)
dataroute.delete("/delete-blog-data/:id",authlogin, Super_Admin, deleteBlogData)

// header for all pages // should be deleted
dataroute.post('/add-header',authlogin, Super_Admin, upload.single('image'), addHeadersData)
dataroute.get('/get-header', getHeadersdata)
dataroute.get('/get-header-by-headerCategory/:headerCategory', getHeaderByCategory)
dataroute.get('/get-header-by-headerSubCategory/:headerSubCategory', getHeaderBySubCategory)
dataroute.get('/get-header-by-headerCategoryandSubCategory/:headerCategory/:headerSubCategory', getHeaderByCategorySubCategory)
dataroute.put('/edit-header-by-id/:id',authlogin, Super_Admin, upload.single('image'), editHeadersdata)
dataroute.delete('/delete-header-by-id/:id',authlogin, Super_Admin, deleteHeadersdata)

//navigations and dropdown // should be deleted
dataroute.post('/add-navigation',authlogin, Super_Admin, addNavbarData)
dataroute.get('/get-navigation', getNavbardata)
dataroute.get('/get-navigation-by-navCategory/:navCategory', getNavbarByCategory)
dataroute.put('/edit-navigation-by-id/:id',authlogin, Super_Admin, editNavbardata)
dataroute.delete('/delete-navigation-by-id/:id',authlogin, Super_Admin, deleteNavbardata)

// why choose ct routes // should be deleted
dataroute.post('/add-choose-ct-slider-data',authlogin, Super_Admin, MultiImageupload.array('images'), addChooseCtSliderData)
dataroute.get('/get-choose-ct-slider-data', getChooseCtSliderdata)
dataroute.get('/get-choose-ct-slider-data/:category', getChooseCtSliderByCategory)
dataroute.get('/get-choose-ct-slider-data/:subcategory', getChooseCtSliderBySubCategory)
dataroute.get('/get-choose-ct-slider-data-byCategorySubCategory/:category/:subcategory', getChooseCtSliderByCategorySubCategory)
dataroute.get('/get-choose-ct-slider-data/:category', getChooseCtSliderByCategory)
dataroute.get('/get-choose-ct-slider-by-sub-data/:Subcategory', getChooseCtSliderBySubCategory)
dataroute.put('/edit-choose-ct-slider-data/:id',authlogin, Super_Admin, MultiImageupload.array('images'), editChooseCtSliderData)
dataroute.delete('/delete-choose-ct-slider-data/:id',authlogin, Super_Admin, deleteChooseCtSliderdata)

// partner up data // should be deleted
dataroute.post('/add-partner-up-data',authlogin, Super_Admin, MultiImageupload.fields([{ name: 'images1' }, { name: 'images2' }]), addPartnerUpData);
dataroute.get('/get-partner-up-data', getPartnerupdata);
dataroute.put('/edit-partner-up-data/:id',authlogin, Super_Admin, MultiImageupload.fields([{ name: 'images1' }, { name: 'images2' }]), editPartnerUpdata);
dataroute.delete('/delete-partner-up-data/:id',authlogin, Super_Admin, deletePartnerUpdata);

// case studies routes // should be deleted
dataroute.post('/add-case-study',authlogin, Super_Admin, MultiImageupload.array('images', 1), addCaseStudy)
dataroute.get('/get-case-studies', getCaseStudies)
dataroute.delete('/delete-case-study/:id',authlogin, Super_Admin, deleteCaseStudy)
dataroute.put('/update-case-study/:id',authlogin, Super_Admin, updateCaseStudyById)
dataroute.get('/get-case-study-bycategory/:category', getCaseStudiesByCategory)
dataroute.get('/get-case-study-bycategory/:Subcategory', getCaseStudyBySubCategory)
dataroute.get('/get-case-study-bycategorysubcategory/:category/:Subcategory', getCSByCategorySubCategory)

// experties data for all pages // should be deleted
dataroute.post('/add-experies-data',authlogin, Super_Admin, upload.single('image'), addAreaOfExpertiesData)
dataroute.get('/get-experies-data', getAreaOfExpertiesdata)
dataroute.get('/get-experies-by-category/:Category', getAreaOfExpertiesByCategory)
dataroute.get('/get-experies-by-SubCategory/:SubCategory', getAreaOfExpertiesSubCategory)
dataroute.get('/get-experties-by-CategoryandSubCategory/:Category/:SubCategory', getAreaOfExpertiesByCategorySubCategory)
dataroute.put('/edit-experties-by-id/:id',authlogin, Super_Admin, upload.single('image'), editAreaOfExpertiessdata)
dataroute.delete('/delete-experties-by-id/:id',authlogin, Super_Admin, deleteAreaOfExpertiesdata)

// blogData for all pages // should be deleted
dataroute.post('/add-blogs-data',authlogin, Super_Admin, MultiImageupload.array('images', 2), addBlogData)
dataroute.get('/get-blogs-data', getBlogsData)
dataroute.put('/edit-blogs-data-by-id/:id',authlogin, Super_Admin, MultiImageupload.array('images', 2), updateBlogsDataById)
dataroute.delete('/delete-blogs-data-by-id/:id',authlogin, Super_Admin, deleteBlogsData)
dataroute.get('/get-blogs-data-by-id/:id', getBlogDataByCategory)
dataroute.get('/get-blogs-data-by-SubCategory/:SubCategory', getBlogDataBySubCategory)
dataroute.get('/get-blogs-data-by-CategoryandSubCategory/:Category/:SubCategory', getBlogDataByCategorySubCategory)


// category for FAQ's // should be delete
dataroute.post('/add-category',authlogin, Super_Admin, addCategory)
dataroute.get('/get-category', getCategory)
dataroute.delete('/delete-category/:id',authlogin, Super_Admin, deleteCategory)

//heroslider routes // no need to be deleted
dataroute.post('/add-heroslider-data',authlogin, Super_Admin, upload.single('herosliderImage'), addSliderData)
dataroute.get('/get-heroslider-data', getherosliderdata)
dataroute.put('/edit-heroslider-data/:id',authlogin, Super_Admin, upload.single('herosliderImage'), editherosliderdata)
dataroute.delete('/delete-heroslider-data/:id', deleteheroslliderdata)

//our partener route // no need to be deleted
dataroute.post('/add-partener-data',authlogin, Super_Admin, upload.single('logo'), addPartener)
dataroute.get('/get-partener-data', getPartenarData)
dataroute.put('/edit-partener-data/:id',authlogin, Super_Admin, upload.single('logo'), editPartenerData)
dataroute.delete('/delete-partener-data/:id',authlogin, Super_Admin, deletePartenerData)

//meet our client data routes // no need to delete
dataroute.post("/add-client-review-data", MultiImageupload.array('profileImage', 1), addClientReviewData)
dataroute.get("/get-client-review-data", getClientReviewData)
dataroute.put("/edit-client-review-data/:id",authlogin, Super_Admin, MultiImageupload.array('profileImage', 1), editClientReviewData)
dataroute.delete("/delete-client-review-data/:id",authlogin, Super_Admin, deleteClientReviewData)

//home faq routes // no need to delete
dataroute.post("/add-home-faq",authlogin, Super_Admin, MultiImageupload.array('images', 1), addHomeFaq)
dataroute.get("/get-home-faq", getHomeFaq)
dataroute.put("/edit-home-faq/:id",authlogin, Super_Admin, MultiImageupload.array('images', 1), updateHomeFaqById)
dataroute.delete("/delete-home-faq/:id",authlogin, Super_Admin, deleteHomeFaq)

//book free consultation routes // no need to delete
dataroute.post("/add-book-free-con-data",authlogin, Super_Admin, addbookFreeConData)
dataroute.get("/get-book-free-con-data", getbookFreeConData)
dataroute.put("/edit-book-free-con-data/:id",authlogin, Super_Admin, editbookFreeConData)
dataroute.delete("/delete-book-free-con-data/:id",authlogin, Super_Admin, deletebookFreeConData)

// Faq Data routes // no need to delete
dataroute.post('/add-faq',authlogin, Super_Admin, MultiImageupload.array('images', 1), addFaq)
dataroute.get('/get-faq', getFaq)
dataroute.delete('/delete-faq/:id',authlogin, Super_Admin, deleteFaq)
dataroute.put('/update-faq/:id',authlogin, Super_Admin, MultiImageupload.array('images', 1), updateFaqById)
dataroute.get('/get-faq-bycategory/:category', getFaqByCategory)
dataroute.get('/get-faq-bysubcategory/:Subcategory', getFaqBySubCategory)
dataroute.get('/get-faq-bycategorysubcategory/:category/:Subcategory', getFaqByCategorySubCategory)

// reliable tools routes // no need to delete
dataroute.post('/add-reliable-tools-data',authlogin, Super_Admin, MultiImageupload.array('techLogos'), addReliableToolsData);
dataroute.get('/get-reliable-tools-data', getReliableToolsData);
dataroute.get('/get-reliable-tools-data/:category', getReliableToolsByCategory)
dataroute.get('/get-reliable-tools-data/:category/:Subcategory', getReliableToolsBySubCategory)
dataroute.put('/update-reliable-tools-data/:id',authlogin, Super_Admin, MultiImageupload.array('techLogos'), editReliableToolsData)
dataroute.delete('/delete-reliable-tools-data/:id',authlogin, Super_Admin, deleteReliableToolsData)

//  key feature routes // no need to delete
dataroute.post('/add-key-feature-data',authlogin, Super_Admin, upload.single('keyFeatureImag'), addKeyFeatureData);
dataroute.get('/get-key-feature-data', getKeyFeaturedata);
dataroute.put('/update-key-feature-data/:id',authlogin, Super_Admin, upload.single('keyFeatureImag'), editKeyFeatureData)
dataroute.delete('/delete-key-feature-data/:id',authlogin, Super_Admin, deleteKeyFeatureData)

// contact us controller // no need to delete
dataroute.post("/add-contact-us-data",authlogin, Super_Admin, upload.single('sourceImage'), addContactUsData)
dataroute.get("/get-contact-us-data", getContactUsData)
dataroute.put("/edit-contact-us-data/:id",authlogin, Super_Admin, upload.single('sourceImage'), editContactUsData)
dataroute.delete("/delete-contact-us-data/:id",authlogin, Super_Admin, deleteContactUsData)

// social media routes // no need to delete
dataroute.post('/add-social-media-data',authlogin, Super_Admin, upload.single('social_icon'), addSocialMediaData);
dataroute.get('/get-social-media-data', getSocialMediadata);
dataroute.put('/update-social-media-data/:id',authlogin, Super_Admin, upload.single('social_icon'), editSocialMediadata)
dataroute.delete('/delete-social-media-data/:id',authlogin, Super_Admin, deleteSocialMediadata)

// social media routes // no need to delete
dataroute.post('/add-address',authlogin, Super_Admin, addAddress);
dataroute.get('/get-address', getAddress);
dataroute.put('/update-address/:id',authlogin, Super_Admin, editAddress)
dataroute.delete('/delete-address/:id',authlogin, Super_Admin, deleteAddress)
