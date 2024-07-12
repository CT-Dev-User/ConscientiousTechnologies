import ContactUsModel from "../../Models/contactUsModel/ContactUs.js";
import cloudinary from "../../cloudinary.js";
import fs from 'fs'
export const addContactUsData = async (req, res) => {
    try {

        const { fullName, companyName, workEmail, phone, message_request, nda } = req.body;
        // Array to store uploaded image URLs
        const uploadResult = await cloudinary.v2.uploader.upload(req.file.path)
        const sourceImage = uploadResult.secure_url;
        const newData = new ContactUsModel({
            fullName, companyName, workEmail, phone, message_request, nda, sourceImage
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


export const getContactUsData = async (req, res) => {
    try {
        const getData = await ContactUsModel.find({}).sort({ createdAt: -1 })
        res.status(200).send({
            message: "All contact us data get Successfully", getData
        })

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}


export const editContactUsData = async (req, res) => {
    try {
        const { id } = req.params
        const { fullName, companyName, workEmail, phone, message_request, nda } = req.body;
        // Array to store uploaded image URLs
        const uploadResult = await cloudinary.v2.uploader.upload(req.file.path)
        const sourceImage = uploadResult.secure_url;
        const contactUsDateById = await ContactUsModel.findById(id);
        if (!consultationDateById) {
            return res.status(404).json({
                error: 'data not found'
            })
        }
        contactUsDateById.fullName = fullName || contactUsDateById.fullName
        contactUsDateById.companyName = companyName || contactUsDateById.companyName
        contactUsDateById.workEmail = workEmail || contactUsDateById.workEmail
        contactUsDateById.phone = phone || contactUsDateById.phone
        contactUsDateById.message_request = message_request || contactUsDateById.message_request
        contactUsDateById.nda = nda || contactUsDateById.nda
        contactUsDateById.sourceImage = sourceImage || contactUsDateById.sourceImage

        const saveData = await contactUsDateById.save()
        res.status(200).send({
            message: "Data updated Successfully",
            saveData
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}


export const deleteContactUsData = async (req, res) => {
    try {
        const { id } = req.params;
        await ContactUsModel.findByIdAndDelete({ _id: id })

        res.status(200).send({
            message: "Data deleted successfully"
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}