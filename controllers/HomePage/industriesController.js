import industriesModel from "../../Models/HomePage/industriesWeServe.js";
import cloudinary from "../../cloudinary.js";
import fs from 'fs'

export const addIndustriesData = async (req, res) => {
    try {
        const { title, desc } = req.body;
        const images = [];
        const uploadedFiles = req.files;
        for (const file of uploadedFiles) {
            const result = await cloudinary.v2.uploader.upload(file.path);
            images.push(result.secure_url);
            fs.unlinkSync(file.path);
        }
        const newData = new industriesModel({
            title, desc, homePageIndustryImage: images[0] || ""
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

export const getIndustriesData = async (req, res) => {
    try {
        const getData = await industriesModel.find({}).sort({ createdAt: -1 })
        res.status(200).send({
            message: "All data get Successfully", getData
        })

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const editIndustriesData = async (req, res) => {
    try {
        const { id } = req.params
        const { title, desc } = req.body;
        console.log(req.body)
        const images = [];
        const uploadedFiles = req.files;
        for (const file of uploadedFiles) {
            const result = await cloudinary.v2.uploader.upload(file.path)
            images.push(result.secure_url)
            fs.unlinkSync(file.path);
        }

        const industryById = await industriesModel.findById(id);
        if (!industryById) {
            return res.status(404).json({
                error: 'industry not fouind'
            })
        }

        industryById.title = title || industryById.title
        industryById.desc = desc || industryById.desc
        industryById.homePageIndustryImage = images[0] || industryById.homePageIndustryImage
        await industryById.save();
        res.status(200).send({
            message: "Data updated Successfully",
            industryById
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const deleteIndustriesData = async (req, res) => {
    try {
        const { id } = req.params;
        await industriesModel.findByIdAndDelete({ _id: id })

        res.status(200).send({
            message: "Data deleted successfully"
        })
    } catch (error) {333333
        res.status(500).send({ message: error.message });
    }
}