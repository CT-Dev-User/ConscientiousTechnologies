import FaqModel from "../../Models/FAQModels.js";
import cloudinary from "../../cloudinary.js";
import fs from 'fs'

export const addFaq = async (req, res) => {
    try {
        // Destructuring category, question, and answerText from req.body
        console.log(req.body)
        const { category, Subcategory, question, answerText } = req.body;
        console.log(req.body)
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
        const newData = new FaqModel({
            category,
            Subcategory,
            question,
            answer: {
                answerText,
                answerImg: images.length > 0 ? images[0] : ""
            }
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


export const getFaq = async (req, res) => {
    try {
        const getData = await FaqModel.find({});
        res.status(200).send({
            message: "All faq get Successfully", getData
        })

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const getFaqByCategory = async (req, res) => {
    try {
        const { category } = req.params;

        // Construct the query object to find documents by category
        const getDataByCategory = await FaqModel.find({ category });

        // Check if data was found
        if (getDataByCategory) {
            res.status(200).send({
                message: "FAQs retrieved successfully",
                data: getDataByCategory
            });
        } else {
            res.status(200).send({
                message: "No FAQs found for the specified category"
            });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export const getFaqBySubCategory = async (req, res) => {
    try {
        const { Subcategory } = req.params;

        // Construct the query object to find documents by category and Subcategory
        const getDataBySubCategory = await FaqModel.find({ Subcategory: Subcategory });

        // Check if data was found
        if (getDataBySubCategory.length > 0) {
            res.status(200).send({
                message: "FAQs retrieved successfully",
                data: getDataBySubCategory
            });
        } else {
            res.status(200).send({
                message: "No FAQs found for the specified category and subcategory"
            });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
export const getFaqByCategorySubCategory = async (req, res) => {
    try {
        const { category, Subcategory } = req.params;

        // Construct the query object to find documents by category and Subcategory
        const getDataBySubCategory = await FaqModel.find({ category, Subcategory });

        res.status(200).send({
            message: "FAQs retrieved successfully",
            data: getDataBySubCategory
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};


export const updateFaqById = async (req, res) => {
    try {
        const { id } = req.params;
        const { question, answerText } = req.body; // Adjusted to match the structure of addHomeFaq
        const images = [];

        // Upload all images to Cloudinary
        if (req.files && Array.isArray(req.files)) {
            for (const file of req.files) {
                const result = await cloudinary.v2.uploader.upload(file.path);
                images.push(result.secure_url);
                fs.unlinkSync(file.path);
            }
        }

        const faqById = await FaqModel.findById(id);
        if (!faqById) {
            return res.status(404).json({
                error: 'FAQ not found'
            });
        }

        // Update fields with new values or keep existing values if not provided
        faqById.question = question || faqById.question;
        faqById.answer = {
            answerText: answerText || faqById.answer.answerText, // Use new answerText if provided, otherwise keep existing one
            answerImg: images[0] || faqById.answer.answerImg || "" // Use new image if provided, otherwise keep existing one or use empty string
        };

        const updatedData = await faqById.save();

        res.status(200).send({
            message: "Data updated successfully",
            updatedData
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};


export const deleteFaq = async (req, res) => {
    try {
        const { id } = req.params;
        await FaqModel.findByIdAndDelete({ _id: id })

        res.status(200).send({
            message: "Data deleted successfully"
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}