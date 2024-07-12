import HomeFaqModel from "../../Models/FAQ's/HomefaqModel.js";
import cloudinary from "../../cloudinary.js";
import fs from 'fs'
export const addHomeFaq = async (req, res) => {
    try {
        const { question, answerText } = req.body;
        const images = [];
        for (const file of req.files) {
            const result = await cloudinary.v2.uploader.upload(file.path);
            images.push(result.secure_url);
            fs.unlinkSync(file.path);
        }
        const newData = new HomeFaqModel({
            question,
            answer: {
                answerText,
                answerImg: images[0] || "" 
            }
        });

        // Save data to the database
        const saveData = await newData.save();
        res.status(200).send({
            status: "Success",
            saveData
        });
    } catch (error) {
        // Send error response
        res.status(500).send({ message: error.message });
    }
};

export const getHomeFaq = async (req, res) => {
    try {
        const getData = await HomeFaqModel.find({}).sort({ createdAt: -1 })
        res.status(200).send({
            message: "All home faq get Successfully", getData
        })

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const updateHomeFaqById = async (req, res) => {
    try {
        const { id } = req.params;
        const { question, answerText } = req.body; // Adjusted to match the structure of addHomeFaq
        const images = [];

        // Upload all images to Cloudinary
        for (const file of req.files) {
            const result = await cloudinary.v2.uploader.upload(file.path);
            images.push(result.secure_url);
        }

        const homeFaqById = await HomeFaqModel.findById(id);
        if (!homeFaqById) {
            return res.status(404).json({
                error: 'FAQ not found'
            })
        }
        // Update fields with new values or keep existing values if not provided
        homeFaqById.question = question || homeFaqById.question;
        homeFaqById.answer = {
            answerText: answerText || homeFaqById.answer.answerText, // Use new answerText if provided, otherwise keep existing one
            answerImg: images[0] || homeFaqById.answer.answerImg || "" // Use new image if provided, otherwise keep existing one or use empty string
        };

        const updatedData = await homeFaqById.save();

        res.status(200).send({
            message: "Data updated successfully",
            updatedData
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};


export const deleteHomeFaq = async (req, res) => {
    try {
        const { id } = req.params;
        await HomeFaqModel.findByIdAndDelete({ _id: id })

        res.status(200).send({
            message: "Data deleted successfully"
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}