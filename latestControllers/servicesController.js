import LatestServiceModel from '../latestModels/services/Service.js';
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

// Controller to create a new LatestService entry
export const createService = async (req, res) => {
    try {
        const {
            serviceName,
            headerTagLine,
            headerDescription,
            cardTitle,
            cardPoint1Heading, cardPoint1Desc,
            cardPoint2Heading, cardPoint2Desc,
            cardPoint3Heading, cardPoint3Desc,
            cardPoint4Heading, cardPoint4Desc
        } = req.body;

        let headerImage = "";
        let cardImage = "";

        // File upload handling for header and card images
        if (req.files && req.files.headerImage) {
            headerImage = await uploadToCloudinary(req.files.headerImage[0].path);
        }
        if (req.files && req.files.cardImage) {
            cardImage = await uploadToCloudinary(req.files.cardImage[0].path);
        }

        const newService = new LatestServiceModel({
            serviceName,
            headerTagLine,
            headerDescription,
            headerImage,
            cardTitle,
            cardImage,
            cardPoint1Heading,
            cardPoint1Desc,
            cardPoint2Heading,
            cardPoint2Desc,
            cardPoint3Heading,
            cardPoint3Desc,
            cardPoint4Heading,
            cardPoint4Desc,
        });

        await newService.save();
        res.status(201).json({ message: "Service created successfully", newService });
    } catch (error) {
        console.error('Error creating service:', error);
        res.status(500).json({ message: 'Error creating service', error: error.message });
    }
};

// Controller to edit a specific LatestService entry
export const editService = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            serviceName,
            headerTagLine,
            headerDescription,
            cardTitle,
            cardPoint1Heading, cardPoint1Desc,
            cardPoint2Heading, cardPoint2Desc,
            cardPoint3Heading, cardPoint3Desc,
            cardPoint4Heading, cardPoint4Desc
        } = req.body;

        const existingService = await LatestServiceModel.findById(id);
        if (!existingService) {
            return res.status(404).json({ message: 'Service not found' });
        }

        let headerImage = existingService.headerImage;
        let cardImage = existingService.cardImage;

        // File upload handling for header and card images
        if (req.files && req.files.headerImage) {
            headerImage = await uploadToCloudinary(req.files.headerImage[0].path);
        }
        if (req.files && req.files.cardImage) {
            cardImage = await uploadToCloudinary(req.files.cardImage[0].path);
        }

        const updatedService = await LatestServiceModel.findByIdAndUpdate(
            id,
            {
                serviceName,
                headerTagLine,
                headerDescription,
                headerImage,
                cardTitle,
                cardImage,
                cardPoint1Heading,
                cardPoint1Desc,
                cardPoint2Heading,
                cardPoint2Desc,
                cardPoint3Heading,
                cardPoint3Desc,
                cardPoint4Heading,
                cardPoint4Desc,
            },
            { new: true }
        );

        res.status(200).json({ message: "Service updated successfully", updatedService });
    } catch (error) {
        console.error('Error updating service:', error);
        res.status(500).json({ message: 'Error updating service', error: error.message });
    }
};

// Controller to get all services
export const getAllServices = async (req, res) => {
    try {
        const services = await LatestServiceModel.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to get a service by its ID
export const getServiceById = async (req, res) => {
    try {
        const { id } = req.params;
        const service = await LatestServiceModel.findById(id);
        if (!service) return res.status(404).json({ message: "Service not found" });
        res.status(200).json(service);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getServiceByserviceName = async (req, res) => {
    try {
        console.log(req.params)
        const { serviceName } = req.params;
        const service = await LatestServiceModel.find({ serviceName: serviceName });
        if (!service) return res.status(404).json({ message: "Service not found" });
        res.status(200).json(service);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to delete a service by ID
export const deleteService = async (req, res) => {
    try {
        const { id } = req.params;
        const service = await LatestServiceModel.findById(id);
        if (!service) return res.status(404).json({ error: 'Service not found' });
        await LatestServiceModel.findByIdAndDelete(id);
        res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
