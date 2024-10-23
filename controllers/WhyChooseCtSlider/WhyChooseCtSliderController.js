import chooseCtLogoModel from '../../Models/WhyChooseCtModel.js';
import cloudinary from '../../cloudinary.js';
import fs from 'fs'
//Add Header Data
export const addChooseCtSliderData = async (req, res) => {
    try {
        const { category, Subcategory, heading, subtitle, logoHeading, points } = req.body;
        const images = [];

        const uploadedFiles = req.files;

        for (const file of uploadedFiles) {
            const result = await cloudinary.v2.uploader.upload(file.path);
            images.push(result.secure_url);
            fs.unlinkSync(file.path);
        }

        let parsedPoints = [];
        if (points) {
            // Check if points data is provided
            parsedPoints = JSON.parse(points);
        }

        const newChooseCtSliderData = new chooseCtLogoModel({
            category,
            Subcategory,
            heading,
            subtitle,
            logoHeading,
            logos: images.map(image => ({ logo: image })), // Map uploaded images to the 'logos' array
            points: parsedPoints // Use parsed points data
        });

        const saveData = await newChooseCtSliderData.save();

        res.status(200).send({
            status: "Success",
            saveData
        });

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};


//get header Data
export const getChooseCtSliderdata = async (req, res) => {
    try {
        const getdata = await chooseCtLogoModel.find({});
        res.status(200).send({
            message: "all  data get successfully", getdata
        });

    } catch (error) {
        res.status(500).send({ message: error.message });

    }

}

//get header data by headersubcategory
export const getChooseCtSliderBySubCategory = async (req, res) => {
    try {
        const { Subcategory } = req.params;

        const getDataBySubCategory = await chooseCtLogoModel.find({ Subcategory: Subcategory });
        
        res.status(200).send({
            message: "subcategory Data retrieved successfully",
            data: getDataBySubCategory
        });

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

//get header data by headercategory
export const getChooseCtSliderByCategory = async (req, res) => {
    try {
        const { category } = req.params;

        // Construct the query object to find documents by category and Subcategory
        const getDataByCategory = await chooseCtLogoModel.find({ category: category });

        // Check if data was found
        res.status(200).send({
            message: "Data retrieved successfully",
            data: getDataByCategory
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};


export const getChooseCtSliderByCategorySubCategory = async (req, res)=>{
    try {
        const { category, subcategory } = req.params;

        // Construct the query object to find documents by category and Subcategory
        const getDataByCategory = await chooseCtLogoModel.find({ category:category, Subcategory:subcategory });
            res.status(200).send({
                message: "Data retrieved successfully",
                data: getDataByCategory
            });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}


// Edit Choose CT Slider Data
export const editChooseCtSliderData = async (req, res) => {
    try {
        const { id } = req.params;
        const { category, Subcategory, heading, subtitle, logoHeading, points } = req.body;
        const updateObject = {};

        if (category) updateObject.category = category;
        if (Subcategory) updateObject.Subcategory = Subcategory;
        if (heading) updateObject.heading = heading;
        if (subtitle) updateObject.subtitle = subtitle;
        if (logoHeading) updateObject.logoHeading = logoHeading;
        if (points) updateObject.points = JSON.parse(points);

        if (req.files && req.files.length > 0) {
            const images = [];
            for (const file of req.files) {
                const result = await cloudinary.v2.uploader.upload(file.path);
                images.push(result.secure_url);
                fs.unlinkSync(file.path);
            }
            updateObject.logos = images.map(image => ({ logo: image }));
        }

        const updatedData = await chooseCtLogoModel.findByIdAndUpdate(id, updateObject, { new: true });

        res.status(200).send({
            message: "Data updated successfully",
            updatedData
        });

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};



//Delete herosection Data
export const deleteChooseCtSliderdata = async (req, res) => {
    try {
        const { id } = req.params;
        await chooseCtLogoModel.findByIdAndDelete({ _id: id })

        res.status(200).send({
            message: "Data deleted successfully"
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}