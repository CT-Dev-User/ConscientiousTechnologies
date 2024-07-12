import expertiesModel from '../../Models/AreaOfExperties/AreaOfExpertiesModel.js';
import cloudinary from '../../cloudinary.js';

//Add Header Data
export const addAreaOfExpertiesData = async (req, res) => {
    try {
        const uploadResult = await cloudinary.v2.uploader.upload(req.file.path)
        const { Category, SubCategory, title } = req.body;
        const image = uploadResult.secure_url;

        const newData = new expertiesModel({
            title, image, Category, SubCategory
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

//get header Data
export const getAreaOfExpertiesdata = async (req, res) => {
    try {
        const getdata = await expertiesModel.find({});
        res.status(200).send({
            message: "all  data get successfully", getdata
        });

    } catch (error) {
        res.status(500).send({ message: error.message });

    }

}

//get header data by headersubcategory
export const getAreaOfExpertiesSubCategory = async (req, res) => {
    try {
        const { SubCategory } = req.params;

        // Construct the query object to find documents by category and Subcategory
        const getDataBySubCategory = await expertiesModel.find({ SubCategory: SubCategory });
        res.status(200).send({
            message: "FAQs retrieved successfully",
            data: getDataBySubCategory
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

//get header data by headercategory
export const getAreaOfExpertiesByCategory = async (req, res) => {
    try {
        const { Category } = req.params;

        // Construct the query object to find documents by category and Subcategory
        const getDataByCategory = await expertiesModel.find({ Category: Category });
        res.status(200).send({
            message: "FAQs retrieved successfully",
            data: getDataByCategory
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};


//get data by category and subcategory

export const getAreaOfExpertiesByCategorySubCategory = async (req, res) => {
    try {
        const { Category, SubCategory } = req.params;

        // Check if both parameters are provided
        if (!Category || !SubCategory) {
            return res.status(400).send({
                message: "Both Category and SubCategory are required"
            });
        }

        // Construct the query object to find documents by category and subcategory
        const getDataByCategory = await expertiesModel.find({ Category, SubCategory });

        // Check if data was found
        if (getDataByCategory.length > 0) {
            res.status(200).send({
                message: "Data retrieved successfully",
                data: getDataByCategory
            });
        } else {
            res.status(404).send({
                message: "No Data found for the specified category and subcategory"
            });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};


//Update Headers Data
export const editAreaOfExpertiessdata = async (req, res) => {
    try {
        const { id } = req.params;
        let image = null;
        if (req.file) {
            // If a file is uploaded, update the image
            const uploadResult = await cloudinary.v2.uploader.upload(req.file.path);
            image = uploadResult.secure_url;
        }
        const { Category, SubCategory, title, } = req.body;
        const updateObject = {};
        if (Category) {
            updateObject.Category = Category;
        }
        if (SubCategory) {
            updateObject.SubCategory = SubCategory;
        }
        if (title) {
            updateObject.title = title;
        }
        if (image) {
            updateObject.image = image;
        }
        const updatedata = await expertiesModel.findByIdAndUpdate(
            { _id: id }, updateObject, { new: true }
        );
        res.status(200).send({
            message: "Data updated successfully",
            updatedata
        });

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

//Delete herosection Data
export const deleteAreaOfExpertiesdata = async (req, res) => {
    try {
        const { id } = req.params;
        await expertiesModel.findByIdAndDelete({ _id: id })

        res.status(200).send({
            message: "Data deleted successfully"
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}
