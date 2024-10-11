import LatestSolutionModel from '../latestModels/solutions/Solution.js';
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

// Controller to create a new LatestSolution entry
export const createSolution = async (req, res) => {
    try {
        const { solutionName, cardTitle, cardDescription, headerTagLine, headerDescription } = req.body;

        // File upload handling for card and header images
        const handleFileUpload = async (fileKey) => {
            if (req.files && req.files[fileKey]) {
                const file = req.files[fileKey][0];
                return await uploadToCloudinary(file.path);
            }
            return null;
        };

        const cardImageUrl = await handleFileUpload('cardImage');
        const headerImageUrl = await handleFileUpload('headerImage');

        const newSolution = new LatestSolutionModel({
            solutionName,
            cardTitle,
            cardDescription,
            headerTagLine,
            headerDescription,
            cardImage: cardImageUrl,
            headerImage: headerImageUrl,
        });

        await newSolution.save();
        res.status(201).json({ message: "Solution created successfully", newSolution });
    } catch (error) {
        console.error('Error creating solution:', error);
        res.status(500).json({ message: 'Error creating solution', error: error.message });
    }
};

// Controller to edit a specific LatestSolution entry
export const editSolution = async (req, res) => {
    try {
        const { id } = req.params;
        const { solutionName,cardTitle, cardDescription, headerTagLine, headerDescription } = req.body;

        // File upload handling for images
        const handleFileUpload = async (fileKey) => {
            if (req.files && req.files[fileKey]) {
                const file = req.files[fileKey][0];
                return await uploadToCloudinary(file.path);
            }
            return null;
        };

        const cardImageUrl = await handleFileUpload('cardImage');
        const headerImageUrl = await handleFileUpload('headerImage');

        // Fetch the existing document to preserve non-updated fields
        const existingSolution = await LatestSolutionModel.findById(id);
        if (!existingSolution) {
            return res.status(404).json({ message: "Solution not found" });
        }

        const updatedSolution = await LatestSolutionModel.findByIdAndUpdate(
            id,
            {
                solutionName,
                cardTitle,
                cardDescription,
                headerTagLine,
                headerDescription,
                cardImage: cardImageUrl || existingSolution.cardImage,
                headerImage: headerImageUrl || existingSolution.headerImage,
            },
            { new: true }
        );

        res.status(200).json({ message: "Solution updated successfully", updatedSolution });
    } catch (error) {
        console.error('Error updating solution:', error);
        res.status(500).json({ message: 'Error updating solution', error: error.message });
    }
};

// Controller to get all solutions
export const getAllSolutions = async (req, res) => {
    try {
        const solutions = await LatestSolutionModel.find();
        res.status(200).json(solutions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to get a solution by its ID
export const getSolutionById = async (req, res) => {
    try {
        const { id } = req.params;
        const solution = await LatestSolutionModel.findById(id);
        if (!solution) return res.status(404).json({ message: "Solution not found" });
        res.status(200).json(solution);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const getSolutionBySolutionName = async (req, res) => {
    try {
        const { solutionName } = req.params;
        const solution = await LatestSolutionModel.find({ solutionName: solutionName });
        if (!solution) return res.status(404).json({ solutionName: solutionName });
        res.status(200).json(solution);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to delete a solution by ID
export const deleteSolution = async (req, res) => {
    try {
        const { id } = req.params;
        const solution = await LatestSolutionModel.findById(id);
        if (!solution) return res.status(404).json({ error: 'Solution not found' });

        await LatestSolutionModel.findByIdAndDelete(id);
        res.status(200).json({ message: 'Solution deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
