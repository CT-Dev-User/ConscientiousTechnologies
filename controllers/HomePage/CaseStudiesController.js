import caseStudiesModel from "../../Models/HomePage/CaseStudiesModel.js";
import cloudinary from "../../cloudinary.js";
import fs from 'fs'

export const addCaseStudiesData = async (req, res) => {
    try {
        const { title, desc, coreTech } = req.body;
        const images = [];
        const uploadedFiles = req.files;
        for (const file of uploadedFiles) {
            const result = await cloudinary.v2.uploader.upload(file.path);
            images.push(result.secure_url);
            fs.unlinkSync(file.path);
        }
        const newData = new caseStudiesModel({
            title, desc, homePageCaseStudiesImage: images[0] || "", coreTech
        })
        const saveData = await newData.save();
        res.status(200).send({
            status: "Success",
            saveData
        })

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const getCaseStudiesData = async (req, res) => {
    try {
        const getData = await caseStudiesModel.find({}).sort({ createdAt: -1 })
        res.status(200).send({
            message: "All data get Successfully", getData
        })

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const editCaseStudiesData = async (req, res) => {
    try {
        const { id } = req.params
        const { title, desc, coreTech } = req.body;
        const images = [];
        const uploadedFiles = req.files;
        for (const file of uploadedFiles) {
            const result = await cloudinary.v2.uploader.upload(file.path)
            images.push(result.secure_url)
            fs.unlinkSync(file.path);
        }

        const caseStudyById = await caseStudiesModel.findById(id);
        if (!caseStudyById) {
            return res.status(404).json({
                error: 'case study not found'
            })
        }
        caseStudyById.title = title || caseStudyById.title
        caseStudyById.desc = desc || caseStudyById.desc
        caseStudyById.homePageCaseStudiesImage = images[0] || caseStudyById.homePageCaseStudiesImage
        caseStudyById.coreTech = coreTech || caseStudyById.coreTech
        
       await caseStudyById.save()
        res.status(200).send({
            message: "Data updated Successfully",
            caseStudyById
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const deleteCaseStudiesData = async (req, res) => {
    try {
        const { id } = req.params;
        await caseStudiesModel.findByIdAndDelete({ _id: id })

        res.status(200).send({
            message: "Data deleted successfully"
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}