import reliableToolsModel from '../../Models/ReliableToolModel/ReliableToolModel.js';
import cloudinary from '../../cloudinary.js';
import fs from 'fs';

export const addReliableToolsData = async (req, res) => {
    console.log("first")
    try {
        const { category, Subcategory, technology, subTech } = req.body;

        // Parse subTech JSON string into an array
        const parsedSubTech = JSON.parse(subTech);

        const techLogos = [];
        for (const file of req.files) {
            const result = await cloudinary.v2.uploader.upload(file.path);
            techLogos.push(result.secure_url);
            fs.unlinkSync(file.path); // Delete the file after uploading
        }

        // Map the subTech items with their corresponding uploaded images
        const subTechWithImages = parsedSubTech.map((subTechItem, index) => ({
            title: subTechItem.title,
            techLogos: techLogos.map(image => ({ logo: image }))
        }));

        // Create a new reliable tool document
        const newReliableTool = new reliableToolsModel({
            category,
            Subcategory,
            technology,
            subTech: subTechWithImages
        });

        // Save the document to the database
        const savedData = await newReliableTool.save();

        res.status(200).json({ success: true, data: savedData });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

// Get all reliable tools data
export const getReliableToolsData = async (req, res) => {
    try {
        const getData = await reliableToolsModel.find({});
        res.status(200).json({
            message: "All data retrieved successfully",
            data: getData
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get reliable tools data by subcategory
export const getReliableToolsBySubCategory = async (req, res) => {
    try {
        const { Subcategory, category } = req.params;
        const getDataBySubCategory = await reliableToolsModel.find({ category, Subcategory });
        res.status(200).json({
            message: "Subcategory data retrieved successfully",
            data: getDataBySubCategory
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get reliable tools data by category
export const getReliableToolsByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const getDataByCategory = await reliableToolsModel.find({ category });
        res.status(200).json({
            message: "Category data retrieved successfully",
            data: getDataByCategory
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Edit reliable tool data
export const editReliableToolsData = async (req, res) => {
    try {
        const { id } = req.params;
        const { category, Subcategory, technology, subTech } = req.body;

        const updateObject = {};

        // Update category, Subcategory, and technology if provided
        if (category) updateObject.category = category;
        if (Subcategory) updateObject.Subcategory = Subcategory;
        if (technology) updateObject.technology = technology;

        // If subTech is provided, parse and handle it
        if (subTech) {
            let parsedSubTech;
            try {
                parsedSubTech = JSON.parse(subTech);
            } catch (err) {
                return res.status(400).json({ message: "Invalid subTech format" });
            }

            // If files are provided, upload them and replace logos
            if (req.files && req.files.length > 0) {
                let fileIndex = 0;

                // Use Promise.all to handle multiple file uploads concurrently
                await Promise.all(
                    parsedSubTech.map(async (subTechItem) => {
                        if (subTechItem.techLogos && subTechItem.techLogos.length > 0) {
                            for (let logoIndex = 0; logoIndex < subTechItem.techLogos.length; logoIndex++) {
                                if (req.files[fileIndex]) {
                                    const result = await cloudinary.v2.uploader.upload(req.files[fileIndex].path);
                                    subTechItem.techLogos[logoIndex].logo = result.secure_url;

                                    // Remove file from local server after upload
                                    await fs.promises.unlink(req.files[fileIndex].path);

                                    fileIndex++;
                                }
                            }
                        }
                    })
                );
            }

            // Assign updated subTech data
            updateObject.subTech = parsedSubTech;
        }

        // Update the database entry
        const updatedData = await reliableToolsModel.findByIdAndUpdate(
            id,
            updateObject,
            { new: true }
        );

        // Send success response
        res.status(200).json({
            message: "Data updated successfully",
            updatedData,
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete reliable tool data
export const deleteReliableToolsData = async (req, res) => {
    try {
        const { id } = req.params;
        await reliableToolsModel.findByIdAndDelete(id);
        res.status(200).json({
            message: "Data deleted successfully"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
