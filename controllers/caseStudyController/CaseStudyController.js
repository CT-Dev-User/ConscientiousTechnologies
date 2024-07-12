import CaseStudyModel from "../../Models/caseStudiesModel/CaseStudiesModel.js";
import cloudinary from "../../cloudinary.js";
import fs from 'fs'

export const addCaseStudy = async (req, res) => {
    try {

        const { category, Subcategory, title, desc, coreTech } = req.body;

        // Array to store uploaded image URLs
        const images = [];

        // Check if req.files exists and is an array
        if (req.files && Array.isArray(req.files)) {
            // Loop through uploaded files and upload to Cloudinary
            for (const file of req.files) {
                const result = await cloudinary.v2.uploader.upload(file.path);
                images.push(result.secure_url);
                fs.unlinkSync(file.path);
            }
        }
        // Create a new instance of FaqModel
        const newData = new CaseStudyModel({
            category,
            Subcategory,
            title,
            caseStudyImage: images.length > 0 ? images[0] : "",
            desc,
            coreTech
        });

        // Save data to the database
        const saveData = await newData.save();

        // Send success response with saved data
        res.status(200).send({
            status: "Success",
            saveData
        });
    } catch (error) {
        // Send error response
        res.status(500).send({ message: error.message });
    }
};


export const getCaseStudies = async (req, res) => {
    try {
        const getData = await CaseStudyModel.find({});
        res.status(200).send({
            message: "All case studies get Successfully", getData
        })

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const getCaseStudiesByCategory = async (req, res) => {
    try {
        const { category } = req.params;

        const getDataByCategory = await CaseStudyModel.find({ category });
        res.status(200).send({
            message: "case studies retrieved successfully",
            data: getDataByCategory
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export const getCaseStudyBySubCategory = async (req, res) => {
    try {
        const { Subcategory } = req.params;

        // Construct the query object to find documents by category and Subcategory
        const getDataBySubCategory = await CaseStudyModel.find({ Subcategory: Subcategory });

        // Check if data was found
        if (getDataBySubCategory.length > 0) {
            res.status(200).send({
                message: "CS retrieved successfully",
                data: getDataBySubCategory
            });
        } else {
            res.status(200).send({
                message: "No CS found for the specified category and subcategory"
            });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
export const getCSByCategorySubCategory = async (req, res) => {
    try {
        const { category, Subcategory } = req.params;

        // Construct the query object to find documents by category and Subcategory
        const getDataBySubCategory = await CaseStudyModel.find({ category, Subcategory });
        res.status(200).send({
            message: "CS retrieved successfully",
            data: getDataBySubCategory
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};



export const updateCaseStudyById = async (req, res) => {
    try {
        const { id } = req.params;
        const { category, Subcategory, title, desc, coreTech } = req.body;

        // Array to store uploaded image URLs
        const images = [];

        // Check if req.files exists and is an array
        if (req.files && Array.isArray(req.files)) {
            // Loop through uploaded files and upload to Cloudinary
            for (const file of req.files) {
                const result = await cloudinary.v2.uploader.upload(file.path);
                images.push(result.secure_url);
                fs.unlinkSync(file.path);
            }
        }

        // Find the case study by id
        const caseStudy = await CaseStudyModel.findById(id);
        if (!caseStudy) {
            return res.status(404).json({
                error: 'Case study not found'
            });
        }

        // Update fields with new values or keep existing values if not provided
        caseStudy.category = category || caseStudy.category;
        caseStudy.Subcategory = Subcategory || caseStudy.Subcategory;
        caseStudy.title = title || caseStudy.title;
        caseStudy.desc = desc || caseStudy.desc;
        caseStudy.coreTech = coreTech || caseStudy.coreTech;

        // Update the image if a new one was uploaded
        if (images.length > 0) {
            caseStudy.caseStudyImage = images[0];
        }

        // Save the updated case study
        const updatedData = await caseStudy.save();

        res.status(200).send({
            message: "Data updated successfully",
            updatedData
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};


export const deleteCaseStudy = async (req, res) => {
    try {
        const { id } = req.params;
        await CaseStudyModel.findByIdAndDelete({ _id: id })

        res.status(200).send({
            message: "Data deleted successfully"
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}