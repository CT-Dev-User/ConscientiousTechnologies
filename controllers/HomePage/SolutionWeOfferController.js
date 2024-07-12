import SolutionWeOfferModel from "../../Models/HomePage/SolutionWeOffer.js";
import cloudinary from "../../cloudinary.js";
import fs from 'fs'

export const addSolutionData = async (req, res) => {
    try {
        const { title, desc } = req.body;
        const images = [];
        const uploadedFiles = req.files;
        
        for (const file of uploadedFiles) {
            const result = await cloudinary.v2.uploader.upload(file.path);
            images.push(result.secure_url);
            fs.unlinkSync(file.path);
        }

        const newData = new SolutionWeOfferModel({
            title,
            desc,
            SolutionhomePageImage: images[0] || ""
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


export const getSolutionData = async (req, res) => {
    try {
        const getData = await SolutionWeOfferModel.find({}).sort({ createdAt: -1 })
        res.status(200).send({
            message: "All data get Successfully", getData
        })

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const editSolutionWeOffer = async (req, res) => {
    try {
        const { id } = req.params
        const { title, desc } = req.body;
        const images = [];
        const uploadedFiles = req.files;
        for (const file of uploadedFiles) {
            const result = await cloudinary.v2.uploader.upload(file.path)
            images.push(result.secure_url)
            fs.unlinkSync(file.path);
        }

        const solutionDataById = await SolutionWeOfferModel.findById(id);
        if (!solutionDataById) {
            return res.status(404).json({
                error: 'solution not found'
            })
        }
        solutionDataById.title = title || solutionDataById.title
        solutionDataById.desc = desc || solutionDataById.desc
        solutionDataById.SolutionhomePageImage = images[0] || solutionDataById.SolutionhomePageImage
      const saveData = await solutionDataById.save()
        res.status(200).send({
            message: "Data updated Successfully",
            saveData
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const deleteSolutionData = async (req, res) => {
    try {
        const { id } = req.params;
        await SolutionWeOfferModel.findByIdAndDelete({ _id: id })

        res.status(200).send({
            message: "Data deleted successfully"
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}