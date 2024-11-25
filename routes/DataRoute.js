import upload from "../multer.js";
import MultiImageupload from "../middleware/multiImageMulter.js";
import express from "express";
export const dataroute = express.Router();

import { addSliderData, deleteheroslliderdata, editherosliderdata, getherosliderdata } from "../controllers/HomePage/heroSectionsController.js";
import { addPartener, deletePartenerData, editPartenerData, getPartenarData } from "../controllers/HomePage/OurPartenerController.js";

import { addClientReviewData, deleteClientReviewData, editClientReviewData, getClientReviewData } from "../controllers/HomePage/meetOurClientController.js";
import { addHomeFaq, deleteHomeFaq, getHomeFaq, updateHomeFaqById } from "../controllers/FAQ's/HomePageFaqController.js";
import { addbookFreeConData, deletebookFreeConData, editbookFreeConData, getbookFreeConData } from "../controllers/HomePage/bookFreeConController.js";
import { addFaq, deleteFaq, getFaq, getFaqByCategory, getFaqByCategorySubCategory, getFaqBySubCategory, updateFaqById } from "../controllers/FAQ's/FaqControllers.js";

import { addChooseCtSliderData, deleteChooseCtSliderdata, editChooseCtSliderData, getChooseCtSliderByCategory, getChooseCtSliderByCategorySubCategory, getChooseCtSliderBySubCategory, getChooseCtSliderdata } from "../controllers/WhyChooseCtSlider/WhyChooseCtSliderController.js";
import { addPartnerUpData, deletePartnerUpdata, editPartnerUpdata, getPartnerupdata } from "../controllers/partnerUpController/PartnerUpController.js";

import { addReliableToolsData, deleteReliableToolsData, editReliableToolsData, getReliableToolsByCategory, getReliableToolsBySubCategory, getReliableToolsData } from "../controllers/ReliableToolsController/ReliableTools.js";
import { addKeyFeatureData, deleteKeyFeatureData, editKeyFeatureData, getKeyFeaturedata } from "../controllers/HomePage/keyFeatureController.js";
import { addContactUsData, deleteContactUsData, editContactUsData, getContactUsData } from "../controllers/contactUsController/ContactUsController.js";
import { addSocialMediaData, deleteSocialMediadata, editSocialMediadata, getSocialMediadata } from "../controllers/About/socialMedia.js";
import { addAddress, deleteAddress, editAddress, getAddress } from "../controllers/About/Address.js";
import { authlogin, Super_Admin, Super_Admin_or_Admin } from "../middleware/userauth.js";

//heroslider routes // no need to be deleted
dataroute.post('/add-heroslider-data', authlogin, Super_Admin_or_Admin, upload.single('herosliderImage'), addSliderData)
dataroute.get('/get-heroslider-data', getherosliderdata)
dataroute.put('/edit-heroslider-data/:id', authlogin, Super_Admin_or_Admin, upload.single('herosliderImage'), editherosliderdata)
dataroute.delete('/delete-heroslider-data/:id',authlogin, Super_Admin_or_Admin, deleteheroslliderdata)

//our partener route // no need to be deleted
dataroute.post('/add-partener-data', authlogin, Super_Admin_or_Admin, upload.single('logo'), addPartener)
dataroute.get('/get-partener-data', getPartenarData)
dataroute.put('/edit-partener-data/:id', authlogin, Super_Admin_or_Admin, upload.single('logo'), editPartenerData)
dataroute.delete('/delete-partener-data/:id', authlogin, Super_Admin_or_Admin, deletePartenerData)

//meet our client data routes // no need to delete
dataroute.post("/add-client-review-data",authlogin, Super_Admin_or_Admin, MultiImageupload.array('profileImage', 1), addClientReviewData)
dataroute.get("/get-client-review-data",getClientReviewData)
dataroute.put("/edit-client-review-data/:id", authlogin, Super_Admin_or_Admin, MultiImageupload.array('profileImage', 1), editClientReviewData)
dataroute.delete("/delete-client-review-data/:id", authlogin, Super_Admin_or_Admin, deleteClientReviewData)

//home faq routes // no need to delete
dataroute.post("/add-home-faq", authlogin, Super_Admin_or_Admin, MultiImageupload.array('images', 1), addHomeFaq)
dataroute.get("/get-home-faq", getHomeFaq)
dataroute.put("/edit-home-faq/:id", authlogin, Super_Admin_or_Admin, MultiImageupload.array('images', 1), updateHomeFaqById)
dataroute.delete("/delete-home-faq/:id", authlogin, Super_Admin_or_Admin, deleteHomeFaq)

//book free consultation routes // no need to delete
dataroute.post("/add-book-free-con-data", addbookFreeConData)
dataroute.get("/get-book-free-con-data", getbookFreeConData)
dataroute.put("/edit-book-free-con-data/:id", authlogin, Super_Admin_or_Admin, editbookFreeConData)
dataroute.delete("/delete-book-free-con-data/:id", authlogin, Super_Admin_or_Admin, deletebookFreeConData)

// Faq Data routes // no need to delete
dataroute.post('/add-faq', authlogin, Super_Admin_or_Admin, MultiImageupload.array('images', 1), addFaq)
dataroute.get('/get-faq', getFaq)
dataroute.delete('/delete-faq/:id', authlogin, Super_Admin_or_Admin, deleteFaq)
dataroute.put('/update-faq/:id', authlogin, Super_Admin_or_Admin, MultiImageupload.array('images', 1), updateFaqById)
dataroute.get('/get-faq-bycategory/:category', getFaqByCategory)
dataroute.get('/get-faq-bysubcategory/:Subcategory', getFaqBySubCategory)
dataroute.get('/get-faq-bycategorysubcategory/:category/:Subcategory', getFaqByCategorySubCategory)

// reliable tools routes // no need to delete
dataroute.post('/add-reliable-tools-data', authlogin, Super_Admin_or_Admin, MultiImageupload.array('techLogos'), addReliableToolsData);
dataroute.get('/get-reliable-tools-data', getReliableToolsData);
dataroute.get('/get-reliable-tools-data/:category', getReliableToolsByCategory)
dataroute.get('/get-reliable-tools-data/:category/:Subcategory', getReliableToolsBySubCategory)
dataroute.put('/update-reliable-tools-data/:id',authlogin, Super_Admin_or_Admin, MultiImageupload.array('techLogos'), editReliableToolsData)
dataroute.delete('/delete-reliable-tools-data/:id', authlogin, Super_Admin_or_Admin, deleteReliableToolsData)

//  key feature routes // no need to delete
dataroute.post('/add-key-feature-data', authlogin, Super_Admin_or_Admin, upload.single('keyFeatureImag'), addKeyFeatureData);
dataroute.get('/get-key-feature-data', getKeyFeaturedata);
dataroute.put('/update-key-feature-data/:id', authlogin, Super_Admin_or_Admin, upload.single('keyFeatureImag'), editKeyFeatureData)
dataroute.delete('/delete-key-feature-data/:id', authlogin, Super_Admin_or_Admin, deleteKeyFeatureData)

// contact us controller // no need to delete
dataroute.post("/add-contact-us-data", upload.single('sourceImage'), addContactUsData)
dataroute.get("/get-contact-us-data", getContactUsData)
dataroute.put("/edit-contact-us-data/:id", authlogin, Super_Admin_or_Admin, upload.single('sourceImage'), editContactUsData)
dataroute.delete("/delete-contact-us-data/:id", authlogin, Super_Admin_or_Admin, deleteContactUsData)

// social media routes // no need to delete
dataroute.post('/add-social-media-data', authlogin, Super_Admin_or_Admin, upload.single('social_icon'), addSocialMediaData);
dataroute.get('/get-social-media-data', getSocialMediadata);
dataroute.put('/update-social-media-data/:id', authlogin, Super_Admin_or_Admin, upload.single('social_icon'), editSocialMediadata)
dataroute.delete('/delete-social-media-data/:id', authlogin, Super_Admin_or_Admin, deleteSocialMediadata)

// social media routes // no need to delete
dataroute.post('/add-address', authlogin, Super_Admin_or_Admin, addAddress);
dataroute.get('/get-address', getAddress);
dataroute.put('/update-address/:id', authlogin, Super_Admin_or_Admin, editAddress)
dataroute.delete('/delete-address/:id', authlogin, Super_Admin, deleteAddress)


// why choose ct routes 
dataroute.post('/add-choose-ct-slider-data', authlogin, Super_Admin_or_Admin, MultiImageupload.array('images'), addChooseCtSliderData)
dataroute.get('/get-choose-ct-slider-data', getChooseCtSliderdata)
dataroute.get('/get-choose-ct-slider-data/:category', getChooseCtSliderByCategory)
dataroute.get('/get-choose-ct-slider-data/:subcategory', getChooseCtSliderBySubCategory)
dataroute.get('/get-choose-ct-slider-data-byCategorySubCategory/:category/:subcategory', getChooseCtSliderByCategorySubCategory)
dataroute.get('/get-choose-ct-slider-data/:category', getChooseCtSliderByCategory)
dataroute.get('/get-choose-ct-slider-by-sub-data/:Subcategory', getChooseCtSliderBySubCategory)
dataroute.put('/edit-choose-ct-slider-data/:id', authlogin, Super_Admin_or_Admin, MultiImageupload.array('images'), editChooseCtSliderData)
dataroute.delete('/delete-choose-ct-slider-data/:id', authlogin, Super_Admin_or_Admin, deleteChooseCtSliderdata)

// partner up data
dataroute.post('/add-partner-up-data', authlogin, Super_Admin_or_Admin, MultiImageupload.fields([{ name: 'images1' }, { name: 'images2' }]), addPartnerUpData);
dataroute.get('/get-partner-up-data', getPartnerupdata);
dataroute.put('/edit-partner-up-data/:id', authlogin, Super_Admin_or_Admin, MultiImageupload.fields([{ name: 'images1' }, { name: 'images2' }]), editPartnerUpdata);
dataroute.delete('/delete-partner-up-data/:id', authlogin, Super_Admin_or_Admin, deletePartnerUpdata);