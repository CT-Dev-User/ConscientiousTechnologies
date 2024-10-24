import CaseStudyModel from '../latestModels/caseStudies/CaseStudies.js';
import cloudinary from '../cloudinary.js';
import fs from 'fs';

// Function to handle file uploads to Cloudinary
const uploadToCloudinary = async (filePath) => {
    try {
        const result = await cloudinary.v2.uploader.upload(filePath);
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error(`Error deleting file: ${filePath}`, err);
            } else {
                console.log(`Successfully deleted file: ${filePath}`);
            }
        });
        return result.secure_url;
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        throw error;
    }
};

// Controller to create a new Case Study entry
export const createCaseStudy = async (req, res) => {
    try {
        const {
            category, Subcategory, cardDatatitle, cardDatasubTitle, cardDatacoreTech, headerTagLine, headerdesc, 
            overviewtitle, overviewindustryType, overviewbusinessType, overviewservicesProvided, overviewdescription,
            goals, insights, challenges, approach, executionHeading1, executionPoint1, executionHeading2, executionPoint2, executionHeading3, executionPoint3,
            executionHeading4, executionPoint4,
            solution, techTools
        } = req.body;

        // File upload handling for multiple images
        const cardImage = req.files?.cardDatacardImage ? await uploadToCloudinary(req.files.cardDatacardImage[0].path) : '';
        const headerImage = req.files?.cardDataheaderImage ? await uploadToCloudinary(req.files.cardDataheaderImage[0].path) : '';
        const overviewImage = req.files?.overviewimage ? await uploadToCloudinary(req.files.overviewimage[0].path) : '';
        const insightsImage = req.files?.insightsImage ? await uploadToCloudinary(req.files.insightsImage[0].path) : '';
        const solutionImage = req.files?.solutionImage ? await uploadToCloudinary(req.files.solutionImage[0].path) : '';
        const resultsImg1 = req.files?.resultsImg1 ? await uploadToCloudinary(req.files.resultsImg1[0].path) : '';
        const resultsImg2 = req.files?.resultsImg2 ? await uploadToCloudinary(req.files.resultsImg2[0].path) : '';
        const resultsImg3 = req.files?.resultsImg3 ? await uploadToCloudinary(req.files.resultsImg3[0].path) : '';

        const newCaseStudy = new CaseStudyModel({
            // card data
            category,
            Subcategory,
            cardDatatitle,
            cardDatasubTitle,
            cardDatacoreTech,
            cardDatacardImage: cardImage,

            // header data
            headerTagLine,
            headerdesc,
            headerImage,
            
            // overview data
            overviewtitle,
            overviewindustryType,
            overviewbusinessType,
            overviewservicesProvided,
            overviewdescription,
            overviewimage: overviewImage,

            goals,
            insights,
            insightsImage,
            challenges,
            approach,

            // execution
            executionHeading1,
            executionPoint1,
            executionHeading2,
            executionPoint2,
            executionHeading3,
            executionPoint3,
            executionHeading4,
            executionPoint4,

            solution,
            solutionImage,
            techTools,

            // result images
            resultsImg1,
            resultsImg2,
            resultsImg3,
        });

        await newCaseStudy.save();
        res.status(201).json({ message: "Case study created successfully", newCaseStudy });
    } catch (error) {
        console.error('Error creating case study:', error);
        res.status(500).json({ message: 'Error creating case study', error: error.message });
    }
};

// Controller to edit a specific Case Study entry
export const editCaseStudy = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            category, Subcategory, cardDatatitle, cardDatasubTitle, cardDatacoreTech, headerTagLine, headerdesc, 
            overviewtitle, overviewindustryType, overviewbusinessType, overviewservicesProvided, overviewdescription,
            goals, insights, challenges, approach, executionHeading1, executionPoint1, executionHeading2, executionPoint2, executionHeading3, executionPoint3,
            executionHeading4, executionPoint4,
            solution, techTools
        } = req.body;

        // File upload handling for multiple images
        const existingCaseStudy = await CaseStudyModel.findById(id);

        const cardImage = req.files?.cardDatacardImage ? await uploadToCloudinary(req.files.cardDatacardImage[0].path) : existingCaseStudy.cardDatacardImage;
        const headerImage = req.files?.cardDataheaderImage ? await uploadToCloudinary(req.files.cardDataheaderImage[0].path) : existingCaseStudy.cardDataheaderImage;
        const overviewImage = req.files?.overviewimage ? await uploadToCloudinary(req.files.overviewimage[0].path) : existingCaseStudy.overviewimage;
        const insightsImage = req.files?.insightsImage ? await uploadToCloudinary(req.files.insightsImage[0].path) : existingCaseStudy.insightsImage;
        const solutionImage = req.files?.solutionImage ? await uploadToCloudinary(req.files.solutionImage[0].path) : existingCaseStudy.solutionImage;
        const resultsImg1 = req.files?.resultsImg1 ? await uploadToCloudinary(req.files.resultsImg1[0].path) : existingCaseStudy.resultsImg1;
        const resultsImg2 = req.files?.resultsImg2 ? await uploadToCloudinary(req.files.resultsImg2[0].path) : existingCaseStudy.resultsImg2;
        const resultsImg3 = req.files?.resultsImg3 ? await uploadToCloudinary(req.files.resultsImg3[0].path) : existingCaseStudy.resultsImg3;

        const updatedCaseStudy = await CaseStudyModel.findByIdAndUpdate(
            id,
            {
                category,
                Subcategory,
                cardDatatitle,
                cardDatasubTitle,
                cardDatacoreTech,
                cardDatacardImage: cardImage,

                headerTagLine,
                headerdesc,
                headerImage,

                overviewtitle,
                overviewindustryType,
                overviewbusinessType,
                overviewservicesProvided,
                overviewdescription,
                overviewimage: overviewImage,

                goals,
                insights,
                insightsImage,
                challenges,
                approach,

                executionHeading1,
                executionPoint1,
                executionHeading2,
                executionPoint2,
                executionHeading3,
                executionPoint3,
                executionHeading4,
                executionPoint4,

                solution,
                solutionImage,
                techTools,

                resultsImg1,
                resultsImg2,
                resultsImg3,
            },
            { new: true }
        );

        res.status(200).json({ message: "Case study updated successfully", updatedCaseStudy });
    } catch (error) {
        console.error('Error updating case study:', error);
        res.status(500).json({ message: 'Error updating case study', error: error.message });
    }
};

// Controller to get all case studies
export const getAllCaseStudies = async (req, res) => {
    try {
        const caseStudies = await CaseStudyModel.find();
        res.status(200).json(caseStudies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to get a case study by its ID
export const getCaseStudyById = async (req, res) => {
    try {
        const { id } = req.params;
        const caseStudy = await CaseStudyModel.findById(id);
        if (!caseStudy) return res.status(404).json({ message: "Case study not found" });
        res.status(200).json(caseStudy);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// Controller to get a case study by its ID
export const getCaseStudyBySubCategory = async (req, res) => {
    try {
        const { category, Subcategory } = req.params;
        const caseStudy = await CaseStudyModel.find({category:category, Subcategory:Subcategory});
        if (!caseStudy) return res.status(404).json({ message: "Case study not found" });
        res.status(200).json(caseStudy);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// Controller to get a case study by its ID
export const getCaseStudyByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const caseStudy = await CaseStudyModel.find({category:category});
        if (!caseStudy) return res.status(404).json({ message: "Case study not found" });
        res.status(200).json(caseStudy);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// Controller to delete a case study by ID
export const deleteCaseStudy = async (req, res) => {
    try {
        const { id } = req.params;
        const caseStudy = await CaseStudyModel.findById(id);
        if (!caseStudy) return res.status(404).json({ error: 'Case study not found' });
        await CaseStudyModel.findByIdAndDelete(id);
        res.status(200).json({ message: 'Case study deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
