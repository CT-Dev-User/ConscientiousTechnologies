import FaqModel from "../../Models/FAQModels.js";
import cloudinary from "../../cloudinary.js";
import fs from 'fs'

export const addFaq = async (req, res) => {
    try {
        const { category, Subcategory, question, answerText } = req.body;
        const images = [];

        if (req.files && Array.isArray(req.files)) {
            for (const file of req.files) {
                const result = await cloudinary.v2.uploader.upload(file.path);
                images.push(result.secure_url);
                fs.unlinkSync(file.path);
            }
        }

        const newData = new FaqModel({
            category,
            Subcategory,
            question,
            answer: {
                answerText,
                answerImg: images.length > 0 ? images[0] : ""
            }
        });

        const saveData = await newData.save();
        res.status(200).send({
            status: "Success",
            saveData
        });
    } catch (error) {
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
        const getDataByCategory = await FaqModel.find({ category });
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
        const getDataBySubCategory = await FaqModel.find({ Subcategory: Subcategory });
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
        const { category, Subcategory, question, answerText } = req.body;
        const images = [];
        if (req.files && Array.isArray(req.files)) {
            const uploadPromises = req.files.map(file =>
                cloudinary.v2.uploader.upload(file.path)
                    .then(result => {
                        images.push(result.secure_url);
                        fs.unlinkSync(file.path);
                    })
                    .catch(error => res.status(500).send({ message: error.message }))
            );
            await Promise.all(uploadPromises);
        }
        const faqById = await FaqModel.findById(id);
        if (!faqById) {
            return res.status(404).json({ error: 'FAQ not found' });
        }
        faqById.category = category || faqById.category;
        faqById.Subcategory = Subcategory || faqById.Subcategory;
        faqById.question = question || faqById.question;
        faqById.answer = {
            answerText: answerText || faqById.answer.answerText,
            answerImg: images[0] || faqById.answer.answerImg || ""
        };
        const updatedData = await faqById.save();

        res.status(200).json({
            message: "Data updated successfully",
            updatedData
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
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