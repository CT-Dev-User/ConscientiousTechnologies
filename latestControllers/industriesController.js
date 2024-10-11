import LatestIndustryModel from '../latestModels/industries/Industry.js';
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

// Controller to create a new LatestIndustry entry
export const createIndustry = async (req, res) => {
    try {
        const { industryName, cardTitle, cardDescription, headerTagLine, headerDescription } = req.body;

        // File upload handling for card and header images
        let cardImageUrl, headerImageUrl;
        if (req.files && req.files['cardImage']) {
            cardImageUrl = await uploadToCloudinary(req.files['cardImage'][0].path);
        }
        if (req.files && req.files['headerImage']) {
            headerImageUrl = await uploadToCloudinary(req.files['headerImage'][0].path);
        }

        const newIndustry = new LatestIndustryModel({
            industryName,
            cardImage: cardImageUrl || '',
            cardTitle,
            cardDescription,
            headerTagLine,
            headerDescription,
            headerImage: headerImageUrl || '',
        });

        await newIndustry.save();
        res.status(201).json({ message: "Industry created successfully", newIndustry });
    } catch (error) {
        console.error('Error creating industry:', error);
        res.status(500).json({ message: 'Error creating industry', error: error.message });
    }
};

// Controller to edit a specific LatestIndustry entry
export const editIndustry = async (req, res) => {
    try {
        const { id } = req.params;
        const { industryName, cardTitle, cardDescription, headerTagLine, headerDescription } = req.body;

        // File upload handling for images
        let cardImageUrl, headerImageUrl;
        const existingIndustry = await LatestIndustryModel.findById(id);
        if (req.files && req.files['cardImage']) {
            cardImageUrl = await uploadToCloudinary(req.files['cardImage'][0].path);
        } else {
            cardImageUrl = existingIndustry.cardImage;
        }
        if (req.files && req.files['headerImage']) {
            headerImageUrl = await uploadToCloudinary(req.files['headerImage'][0].path);
        } else {
            headerImageUrl = existingIndustry.headerImage;
        }

        const updatedIndustry = await LatestIndustryModel.findByIdAndUpdate(
            id,
            {
                industryName,
                cardImage: cardImageUrl,
                cardTitle,
                cardDescription,
                headerTagLine,
                headerDescription,
                headerImage: headerImageUrl,
            },
            { new: true }
        );

        res.status(200).json({ message: "Industry updated successfully", updatedIndustry });
    } catch (error) {
        console.error('Error updating industry:', error);
        res.status(500).json({ message: 'Error updating industry', error: error.message });
    }
};

// Controller to get all industries
export const getAllIndustries = async (req, res) => {
    try {
        const industries = await LatestIndustryModel.find();
        res.status(200).json(industries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to get an industry by its ID
export const getIndustryById = async (req, res) => {
    try {
        const { id } = req.params;
        const industry = await LatestIndustryModel.findById(id);
        if (!industry) return res.status(404).json({ message: "Industry not found" });
        res.status(200).json(industry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const getIndustryByIndustryName = async (req, res) => {
    try {
        const { industryName } = req.params;
        const industry = await LatestIndustryModel.find({ industryName: industryName });
        if (!industry) return res.status(404).json({ message: "Industry not found" });
        res.status(200).json(industry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to delete an industry by ID
export const deleteIndustry = async (req, res) => {
    try {
        const { id } = req.params;
        const industry = await LatestIndustryModel.findById(id);
        if (!industry) return res.status(404).json({ error: 'Industry not found' });
        await LatestIndustryModel.findByIdAndDelete(id);
        res.status(200).json({ message: 'Industry deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
