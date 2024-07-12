import ServiceWeOfferModel from '../../Models/HomePage/ServiceWeOfferModel.js';
import cloudinary from '../../cloudinary.js';
import fs from 'fs'

export const addServiceData = async (req, res) => {
    try {
        const { title, points } = req.body;
        const images = [];
        const uploadedFiles = req.files;
        
        for (const file of uploadedFiles) {
            const result = await cloudinary.v2.uploader.upload(file.path);
            images.push(result.secure_url);
            fs.unlinkSync(file.path);
        }

        const newData = new ServiceWeOfferModel({
            title,
            ServiceHomePageimage: images[0] || "",
            points: JSON.parse(points) // Assuming points is a JSON string, parse it before saving
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

export const getServiceData = async (req, res) => {
    try {
        const getData = await ServiceWeOfferModel.find({}).sort({ createdAt: -1 })
        res.status(200).send({
            message: "All data get Successfully", getData
        })

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const editServiceData = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, desc } = req.body
        const images = [];
        const uploadedFiles = req.files;
        for (const file of uploadedFiles) {
            const result = await cloudinary.v2.uploader.upload(file.path);
            images.push(result.secure_url);
            fs.unlinkSync(file.path);
        }
        const serviceDataById = await ServiceWeOfferModel.findById(id);
        if (!serviceDataById) {
            return res.status(404).json({ error: 'services not found' });
        }
        serviceDataById.title = title || serviceDataById.title
        serviceDataById.desc = desc || serviceDataById.desc
        serviceDataById.ServiceHomePageimage = images[0] || serviceDataById.ServiceHomePageimage
       const saveData =  await serviceDataById.save();
        res.status(200).send({
            message: "Data updated Succesfully",
            saveData
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const deleteServiceData = async (req, res) => {
    try {
        const { id } = req.params;
        await ServiceWeOfferModel.findByIdAndDelete({ _id: id })

        res.status(200).send({
            message: "Data deleted successfully"
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}