import partnerUpModel from '../../Models/PartnerUpModel.js';
import cloudinary from '../../cloudinary.js';
import fs from 'fs';

// Add PartnerUp Data
export const addPartnerUpData = async (req, res) => {
    try {
        const { heading1, heading2 } = req.body;
        const partnersLogo1 = [];
        const partnersLogo2 = [];

        // Uploading images for partnersLogo1
        if (req.files.images1) {
            for (const file of req.files.images1) {
                const result = await cloudinary.v2.uploader.upload(file.path);
                partnersLogo1.push({ logo1: result.secure_url });
                fs.unlinkSync(file.path); // Remove file after upload
            }
        }

        // Uploading images for partnersLogo2
        if (req.files.images2) {
            for (const file of req.files.images2) {
                const result = await cloudinary.v2.uploader.upload(file.path);
                partnersLogo2.push({ logo2: result.secure_url });
                fs.unlinkSync(file.path); // Remove file after upload
            }
        }

        // Creating new PartnerUpData document
        const newPartnerUpData = new partnerUpModel({
            heading1,
            heading2,
            partnersLogo1,
            partnersLogo2
        });

        // Saving new document
        const saveData = await newPartnerUpData.save();

        res.status(200).send({
            status: "Success",
            saveData
        });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ message: error.message });
    }
};

// Get PartnerUp Data
export const getPartnerupdata = async (req, res) => {
    try {
        const getdata = await partnerUpModel.find({});
        res.status(200).send({
            message: "All data retrieved successfully",
            getdata
        });

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Edit PartnerUp Data
export const editPartnerUpdata = async (req, res) => {
    try {
        const { id } = req.params;
        const { heading1, heading2 } = req.body;
        const partnersLogo1 = [];
        const partnersLogo2 = [];

        // Uploading images for partnersLogo1
        if (req.files.images1) {
            for (const file of req.files.images1) {
                const result = await cloudinary.v2.uploader.upload(file.path);
                partnersLogo1.push({ logo1: result.secure_url });
                fs.unlinkSync(file.path); // Remove file after upload
            }
        }

        // Uploading images for partnersLogo2
        if (req.files.images2) {
            for (const file of req.files.images2) {
                const result = await cloudinary.v2.uploader.upload(file.path);
                partnersLogo2.push({ logo2: result.secure_url });
                fs.unlinkSync(file.path); // Remove file after upload
            }
        }

        // Prepare update object
        const updateObject = {};
        if (heading1) updateObject.heading1 = heading1;
        if (heading2) updateObject.heading2 = heading2;
        if (partnersLogo1.length > 0) updateObject.partnersLogo1 = partnersLogo1;
        if (partnersLogo2.length > 0) updateObject.partnersLogo2 = partnersLogo2;

        // Update data in the database
        const updatedData = await partnerUpModel.findByIdAndUpdate(
            id,
            updateObject,
            { new: true }
        );

        res.status(200).send({
            message: "Data updated successfully",
            updatedData
        });

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Delete PartnerUp Data
export const deletePartnerUpdata = async (req, res) => {
    try {
        const { id } = req.params;
        await partnerUpModel.findByIdAndDelete(id);

        res.status(200).send({
            message: "Data deleted successfully"
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ message: error.message });
    }
};
